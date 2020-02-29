import React from "react";

import Company from "./Company";
import { Row, Container } from "react-bootstrap";

const CompanyList = () => {
  return (
    <Container>
      <h2>Companies</h2>
      <Row>
        <Company />
      </Row>
    </Container>
  );
};

export default CompanyList;
