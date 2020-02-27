import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const Office = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title style={{ borderBottom: "1px solid grey" }}>
          <Row>
            <Col>
              <h3>
                <Link to="/list/office">U.S Office</Link>
              </h3>
            </Col>
            <Col>
              <p className="float-right">X</p>
            </Col>
          </Row>
        </Card.Title>
        <Card.Text>
          <p className="font-weight-bold m-0">Location</p>
          <p className="text-secondary m-0">Lat - 103.12</p>
          <p className="text-secondary m-0">long - 20.4</p>
        </Card.Text>
        <Card.Text>
          <p className="font-weight-bold m-0">Office Start Date</p>
          <p className="text-secondary">999999</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Office;
