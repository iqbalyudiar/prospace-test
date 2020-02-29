import React, { useEffect } from "react";
import CreateCompany from "../Create/CreateCompany";
import CreateOffice from "../Create/CreateOffice";
import CompanyList from "../Company/CompanyList";
import { Row, Col, Card } from "react-bootstrap";

import { connect, useDispatch } from "react-redux";
import { fetchCompanies } from "../../actions";

const OverviewPage = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

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

export default connect(null, { fetchCompanies })(OverviewPage);
