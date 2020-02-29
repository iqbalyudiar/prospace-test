import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Button } from "react-bootstrap";
import { Row } from "react-bootstrap";

import { useRouteMatch } from "react-router-dom";

import { connect, useDispatch } from "react-redux";
import { fetchCompany } from "../../actions";

const CompanyDetail = props => {
  let match = useRouteMatch("/forms/company/:compId");
  const { compId } = match.params;
  console.log(match.params.companyId);
  console.log(props);

  const dispatch = useDispatch();

  const company = props.companies;

  useEffect(() => {
    dispatch(fetchCompany(compId));
  }, [dispatch]);

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title style={{ borderBottom: "1px solid grey" }}>
            <h3>{company.name}</h3>
          </Card.Title>
          <Card.Text>
            <h5>Address</h5>
            <p className="text-secondary">{company.address}</p>
          </Card.Text>
          <Card.Text>
            <h5>Revenue</h5>
            <p className="text-secondary">{company.revenue}</p>
          </Card.Text>
          <Card.Text>
            <Row>
              <Col>
                <h5>Phone no</h5>
                <p className="text-secondary">
                  ({company.phoneCode}) {company.phoneNumber}
                </p>
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
    </>
  );
};

const mapStateToProps = state => {
  return {
    companies: state.form.companies
  };
};

export default connect(mapStateToProps, { fetchCompany })(CompanyDetail);
