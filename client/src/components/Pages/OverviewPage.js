import React, { useState, useEffect } from "react";
import CreateCompany from "../Create/CreateCompany";
import CreateOffice from "../Create/CreateOffice";
import CompanyList from "../Company/CompanyList";
import { Row, Col, Card } from "react-bootstrap";

import { connect } from "react-redux";
import { fetchCompany } from "../../actions";

const OverviewPage = props => {
  useEffect(() => {
    props.fetchCompany();
  }, []);
  return (
    <Card>
      <Row>
        <Col>
          <CreateCompany />
        </Col>
        <Col>
          <CreateOffice />
        </Col>
      </Row>
      <CompanyList />
    </Card>
  );
};

export default connect(null, { fetchCompany })(OverviewPage);
