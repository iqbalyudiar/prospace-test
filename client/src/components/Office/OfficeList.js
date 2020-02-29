import React from "react";

import Office from "./Office";
import { Row, Col } from "react-bootstrap";

const OfficeList = () => {
  return (
    <div>
      <h2>Offices</h2>
      <Row>
        <Col>
          <Office />
        </Col>
      </Row>
    </div>
  );
};

export default OfficeList;
