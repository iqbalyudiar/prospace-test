import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Modal, Button } from "react-bootstrap";

// import { deleteCompany } from "../../actions";
import { fetchCompanies } from "../../actions";
import { deleteCompany } from "../../actions";
import { connect } from "react-redux";

const Company = props => {
  const [companyId, setCompanyId] = useState("");
  const [show, setShow] = useState(false);

  const handleShow = id => {
    setShow(true);
    setCompanyId(id);
  };
  const handleClose = () => setShow(false);

  const handleDelete = async id => {
    const { deleteCompany } = props;
    await deleteCompany(id);
    await window.location.reload();
  };

  return (
    <>
      {props.companies.map(company => (
        <>
          <Card>
            <Card.Body>
              <Card.Title style={{ borderBottom: "1px solid grey" }}>
                <Row>
                  <Col>
                    <h3>
                      <Link to={`forms/company/${company._id}`}>
                        {company.name}
                      </Link>
                    </h3>
                  </Col>
                  <Col>
                    <Button
                      className="float-right"
                      onClick={() => handleShow(company._id)}
                    >
                      X
                    </Button>
                  </Col>
                </Row>
              </Card.Title>
              <Card.Text>
                <h5>Address</h5>
                <p className="text-secondary">{company.address}</p>
              </Card.Text>
              <Card.Text>
                <h5>Revenue</h5>
                <p className="text-secondary">{company.revenue}</p>
              </Card.Text>
              <Card.Text>
                <h5>Phone no</h5>
                <p className="text-secondary">
                  ({company.phoneCode}) {company.phoneNumber}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>Are You Sure to Delete this Company?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                No
              </Button>
              <Button variant="danger" onClick={() => handleDelete(companyId)}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ))}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    companies: state.form.companies
  };
};

export default connect(mapStateToProps, { fetchCompanies, deleteCompany })(
  Company
);
