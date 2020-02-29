import React, { useState } from "react";
import { Form, FormGroup, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addOffice } from "../../actions";

const CreateOffice = props => {
  const [input, setInput] = useState({
    name: "",
    latitude: "",
    longitude: "",
    officeDate: "",
    companyId: ""
  });

  // const [companyId, setCompanyId] = useState("");

  const handleInput = e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const createOfficeForm = e => {
    e.preventDefault();
    props.addOffice(input);
  };

  console.log(input);

  return (
    <div>
      <h2>Create Office</h2>
      <Form>
        <FormGroup controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            onChange={handleInput}
            name="name"
            type="text"
            placeholder="name"
          />
        </FormGroup>
        <FormGroup controlId="location">
          <Form.Label>Location:</Form.Label>
          <Row>
            <Col>
              <Form.Control
                onChange={handleInput}
                name="latitude"
                type="text"
                placeholder="latitude"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={handleInput}
                name="longitude"
                type="text"
                placeholder="longitude"
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup controlId="date">
          <Form.Label>Office Start Date:</Form.Label>
          <Form.Control
            onChange={handleInput}
            name="officeDate"
            type="date"
            placeholder="date"
          />
        </FormGroup>
        <FormGroup controlId="company">
          <Form.Label>Company:</Form.Label>
          <Form.Control name="companyId" onChange={handleInput} as="select">
            <option>Select Company</option>
            {props.companies.map(company => (
              <option value={company._id}>{company.name}</option>
            ))}
          </Form.Control>
        </FormGroup>

        <Button
          onClick={e => createOfficeForm(e, input.company)}
          variant="secondary"
          block
        >
          Create
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    companies: state.form.companies
  };
};

export default connect(mapStateToProps, { addOffice })(CreateOffice);
