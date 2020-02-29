import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Modal, Button } from "react-bootstrap";

// import { deleteCompany } from "../../actions";
import { fetchCompany } from "../../actions";
import { connect } from "react-redux";

const Company = props => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  console.log(props.companies);

  // const handleDelete = id => {
  //   const { deleteCompany } = props;
  //   fetch(`http://localhost:8080/forms/company/` + id, {
  //     method: "DELETE"
  //   }).then(() => deleteCompany(id));
  // };

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
                      <Link to={`/company/${company.companyId}`}>
                        {company.name}
                      </Link>
                    </h3>
                  </Col>
                  <Col>
                    <Button className="float-right" onClick={handleShow}>
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
              <Button variant="danger">Yes</Button>
            </Modal.Footer>
          </Modal>
        </>
      ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    companies: state.form.companies
  };
};

export default connect(mapStateToProps, { fetchCompany })(Company);
