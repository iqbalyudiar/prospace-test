import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Row,
  Col,
  Button,
  Alert,
  Spinner
} from "react-bootstrap";
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

  console.log(props.companies.length);

  const [validation, setValidation] = useState(false);
  const [message, setMessage] = useState("");

  const handleInput = e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]:
        name === "latitude" || name === "longitude" ? parseFloat(value) : value
    });
  };

  const createOfficeForm = async e => {
    e.preventDefault();

    let { name, latitude, longitude, officeDate, companyId } = input;

    if (!name) {
      setValidation(true);
      setMessage("Your Office Name Can Not Be Empty");
    } else if (!latitude) {
      setValidation(true);
      setMessage("Your Office Latitude Can Not Be Empty And Must Be Number");
    } else if (!longitude) {
      setValidation(true);
      setMessage("Your Office Longitude Can Not Be Empty And Must Be Number");
    } else if (!officeDate) {
      setValidation(true);
      setMessage("Your Office Start Date Can Not Be Empty");
    } else if (!companyId) {
      setValidation(true);
      setMessage("Your Office Company Can Not Be Empty");
    }

    await props.addOffice(input);
    window.location.reload();
  };

  console.log(input);

  return (
    <div style={{ margin: "1rem" }}>
      <h2 className="border-bottom border-secondary">Create Office</h2>
      {validation && <Alert variant="danger">{message}</Alert>}
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
            {props.companies.length === 0 ? (
              <Spinner animation="border"></Spinner>
            ) : (
              props.companies.map(company => (
                <option value={company._id}>{company.name}</option>
              ))
            )}
          </Form.Control>
        </FormGroup>

        <Button
          onClick={e => createOfficeForm(e, input.company)}
          variant="primary"
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
