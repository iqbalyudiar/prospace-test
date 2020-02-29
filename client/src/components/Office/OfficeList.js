import React from "react";

import Office from "./Office";
import { Row } from "react-bootstrap";

const OfficeList = () => {
  return (
    <div className="m-3">
      <h2 className="border-bottom border-light">Offices</h2>
      <Row>
        <Office />
      </Row>
    </div>
  );
};

export default OfficeList;
