import React, { useEffect } from "react";
import CreateCompany from "../Create/CreateCompany";
import CreateOffice from "../Create/CreateOffice";
import CompanyList from "../Company/CompanyList";
import { Row, Col, Card, Container } from "react-bootstrap";

import { connect, useDispatch } from "react-redux";
import { fetchCompanies } from "../../actions";

const OverviewPage = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  return (
    <Container>
      <Card>
        <div
          style={{
            borderBottom: "1px grey solid",
            marginBottom: "2rem",
            paddingBottom: "2rem"
          }}
        >
          <Row>
            <Col>
              <Card
                className="shadow-lg bg-light"
                style={{ width: "30rem", margin: "2rem" }}
              >
                <CreateCompany />
              </Card>
            </Col>
            <Col>
              <Card
                className="shadow-lg bg-light"
                style={{
                  width: "30rem",
                  marginLeft: "2rem",
                  marginTop: "2rem",
                  marginRight: "1 rem"
                }}
              >
                <CreateOffice />
              </Card>
            </Col>
          </Row>
        </div>

        <CompanyList />
      </Card>
    </Container>
  );
};

export default connect(null, { fetchCompanies })(OverviewPage);
