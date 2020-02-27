import React from "react";
import { Form, FormGroup, Button, Row, Col } from "react-bootstrap";

const CreateCompany = () => {
  return (
    <div>
      <h2>Create Company</h2>
      <Form>
        <FormGroup controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="name" />
        </FormGroup>
        <FormGroup controlId="address">
          <Form.Label>Address:</Form.Label>
          <Form.Control type="text" placeholder="address" />
        </FormGroup>
        <FormGroup controlId="revenue">
          <Form.Label>Revenue:</Form.Label>
          <Form.Control type="text" placeholder="revenue" />
        </FormGroup>
        <FormGroup controlId="phone">
          <Form.Label>Phone No:</Form.Label>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="code" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="number" />
            </Col>
          </Row>
        </FormGroup>

        <Button variant="secondary" block>
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateCompany;
