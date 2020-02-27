import React from "react";
import CreateCompany from "../Create/CreateCompany";
import CreateOffice from "../Create/CreateOffice";
import CompanyList from "../Company/CompanyList";
import { Row, Col, Card } from "react-bootstrap";

const OverviewPage = () => {
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

export default OverviewPage;
