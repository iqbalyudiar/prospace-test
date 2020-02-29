import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";

import { connect } from "react-redux";
import { fetchOffices } from "../../actions";

const Office = props => {
  let match = useRouteMatch("/forms/company/:companyId");
  const { companyId } = match.params;

  useEffect(() => {
    props.fetchOffices(companyId);
  }, []);
  return (
    <>
      {props.offices.map(office => (
        <Card>
          <Card.Body>
            <Card.Title style={{ borderBottom: "1px solid grey" }}>
              <Row>
                <Col>
                  <h3>{office.name}</h3>
                </Col>
                <Col>
                  <p className="float-right">X</p>
                </Col>
              </Row>
            </Card.Title>
            <Card.Text>
              <p className="font-weight-bold m-0">Location</p>
              <p className="text-secondary m-0">Lat - {office.latitude}</p>
              <p className="text-secondary m-0">long - {office.longitude}</p>
            </Card.Text>
            <Card.Text>
              <p className="font-weight-bold m-0">Office Start Date</p>
              <p className="text-secondary">{office.officeDate}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    offices: state.form.offices
  };
};

export default connect(mapStateToProps, { fetchOffices })(Office);
