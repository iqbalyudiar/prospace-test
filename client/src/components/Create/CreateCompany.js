import React, { useState } from "react";
import { Form, FormGroup, Button, Row, Col } from "react-bootstrap";

// import axios from "axios";
// import forms from "../../apis/forms";

import { connect } from "react-redux";
import { addCompany } from "../../actions";

const CreateCompany = props => {
  const [input, setInput] = useState({
    name: "",
    address: "",
    revenue: "",
    phoneCode: "",
    phoneNumber: ""
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const createCompanyForm = e => {
    e.preventDefault();

    props.addCompany(input);

    console.log(input);
  };
  console.log(props.companies);

  // console.log(input);

  return (
    <div>
      <h2>Create Company</h2>
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

        <Button onClick={e => createCompanyForm(e)} variant="secondary" block>
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
