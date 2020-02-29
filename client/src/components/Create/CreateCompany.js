import React, { useState } from "react";
import { Form, FormGroup, Button, Row, Col } from "react-bootstrap";

import { connect } from "react-redux";
import { addCompany } from "../../actions";
import { Alert } from "react-bootstrap";

const CreateCompany = props => {
  const [input, setInput] = useState({
    name: "",
    address: "",
    revenue: "",
    phoneCode: "",
    phoneNumber: ""
  });

  const [validation, setValidation] = useState(false);
  const [message, setMessage] = useState("");

  const handleInput = e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]:
        name === "revenue" || name === "phoneCode" || name === "phoneNumber"
          ? parseInt(value)
          : value
    });
  };

  const createCompanyForm = async e => {
    e.preventDefault();

    let { name, address, revenue, phoneCode, phoneNumber } = input;

    if (!name) {
      setValidation(true);
      setMessage("Your Form Name Can Not Be Empty");
    } else if (!address) {
      setValidation(true);
      setMessage("Your Form Adress Can Not Be Empty");
    } else if (!revenue) {
      setValidation(true);
      setMessage("Your Form Revenue Can Not Be Empty And Must Be Number");
    } else if (revenue < 0 || !Number.isInteger(revenue)) {
      setValidation(true);
      setMessage("Your Revenue Can Not Be Negative");
    } else if (!phoneCode) {
      setValidation(true);
      setMessage("Your Phone Code Can Not Be Empty And Must Be Number");
    } else if (phoneCode < 0 || !Number.isInteger(phoneCode)) {
      setValidation(true);
      setMessage("Phone Code Must Be Positive");
    } else if (!phoneNumber) {
      setValidation(true);
      setMessage("Your Phone Number Can Not Be Empty And Must Be Number");
    } else if (phoneNumber < 0 || !Number.isInteger(phoneNumber)) {
      setValidation(true);
      setMessage("Phone Number Must Be Positive");
    }

    await props.addCompany(input);

    window.location.reload();
  };

  return (
    <div style={{ margin: "1rem" }}>
      <h2 className="border-bottom border-secondary">Create Company</h2>
      {validation && <Alert variant="danger">{message}</Alert>}
      <Form onSubmit={e => createCompanyForm(e)}>
        <FormGroup controlId="nameCompany">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            onChange={handleInput}
            name="name"
            type="text"
            placeholder="name"
          />
        </FormGroup>
        <FormGroup controlId="address">
          <Form.Label>Address:</Form.Label>
          <Form.Control
            onChange={handleInput}
            name="address"
            type="text"
            placeholder="address"
          />
        </FormGroup>
        <FormGroup controlId="revenue">
          <Form.Label>Revenue:</Form.Label>
          <Form.Control
            onChange={handleInput}
            name="revenue"
            type="text"
            placeholder="revenue"
          />
        </FormGroup>
        <FormGroup controlId="phone">
          <Form.Label>Phone No:</Form.Label>
          <Row>
            <Col>
              <Form.Control
                onChange={handleInput}
                name="phoneCode"
                type="text"
                placeholder="code"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={handleInput}
                name="phoneNumber"
                type="text"
                placeholder="number"
              />
            </Col>
          </Row>
        </FormGroup>

        <Button onClick={e => createCompanyForm(e)} variant="primary" block>
          Create
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    companies: state.companies
  };
};

export default connect(mapStateToProps, { addCompany })(CreateCompany);
