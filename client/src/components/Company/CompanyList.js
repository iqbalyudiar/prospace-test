import React from "react";

import Company from "./Company";
import { Row, Col } from "react-bootstrap";

const CompanyList = () => {
  return (
    <div>
      <h2>Companies</h2>
      <Row>
        <Col>
          <Company />
        </Col>
        <Col>
          <Company />
        </Col>
      </Row>
    </div>
  );
};

export default CompanyList;
