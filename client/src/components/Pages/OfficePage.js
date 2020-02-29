import React from "react";
import CompanyDetail from "../Company/CompanyDetail";
import OfficeList from "../Office/OfficeList";
import { Card, Container } from "react-bootstrap";

const OfficePage = () => {
  return (
    <Container>
      <Card>
        <Card>
          <CompanyDetail />
        </Card>
        <OfficeList />
      </Card>
    </Container>
  );
};

export default OfficePage;
