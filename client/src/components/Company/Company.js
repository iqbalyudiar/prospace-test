import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const Company = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title style={{ borderBottom: "1px solid grey" }}>
          <Row>
            <Col>
              <h3>
                <Link to="/list/office">Google</Link>
              </h3>
            </Col>
            <Col>
              <p className="float-right">X</p>
            </Col>
          </Row>
        </Card.Title>
        <Card.Text>
          <h5>Address</h5>
          <p className="text-secondary">Jl...</p>
        </Card.Text>
        <Card.Text>
          <h5>Revenue</h5>
          <p className="text-secondary">999999</p>
        </Card.Text>
        <Card.Text>
          <h5>Phone no</h5>
          <p className="text-secondary">190 123456</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Company;
