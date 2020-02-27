import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Button } from "react-bootstrap";
import { Row } from "react-bootstrap";

const CompanyDetail = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title style={{ borderBottom: "1px solid grey" }}>
          <h3>
            <Link to="/list/office">Google</Link>
          </h3>
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
          <Row>
            <Col>
              <h5>Phone no</h5>
              <p className="text-secondary">190 123456</p>
            </Col>
            <Col>
              <Button
                style={{ float: "right", marginTop: "1em" }}
                variant="secondary"
              >
                <Link to="/">Back to Overview</Link>
              </Button>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CompanyDetail;
