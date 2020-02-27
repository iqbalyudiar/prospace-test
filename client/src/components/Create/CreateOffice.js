import React from "react";
import { Form, FormGroup, Row, Col, Button } from "react-bootstrap";

const CreateOffice = () => {
  return (
    <div>
      <h2>Create Office</h2>
      <Form>
        <FormGroup controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="name" />
        </FormGroup>
        <FormGroup controlId="location">
          <Form.Label>Location:</Form.Label>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="latitude" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="longitude" />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup controlId="date">
          <Form.Label>Office Start Date:</Form.Label>
          <Form.Control type="date" placeholder="date" />
        </FormGroup>
        <FormGroup controlId="company">
          <Form.Label>Company:</Form.Label>
          <Form.Control as="select">
            <option>Select Company</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </FormGroup>
        <Button variant="secondary" block>
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateOffice;
