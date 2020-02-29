import React from "react";

import Company from "./Company";
import { Row, Col } from "react-bootstrap";

const CompanyList = ({ lists }) => {
  return (
    <div>
      <h2>Companies</h2>
      <Row>
        <Col>
          <Company lists={lists} />
        </Col>
      </Row>
    </div>
  );
};

export default CompanyList;
