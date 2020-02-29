import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Modal, Button } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";

import { connect } from "react-redux";
import { fetchOffices, deleteOffice } from "../../actions";

const Office = props => {
  let match = useRouteMatch("/forms/company/:companyID");
  const { companyID } = match.params;
  const [show, setShow] = useState(false);
  const [ids, setIds] = useState({
    company: "",
    office: ""
  });

  const handleShow = id => {
    setShow(true);
    setIds({
      company: companyID,
      office: id
    });

    console.log("id dari handleshow", ids);
  };
  const handleClose = () => setShow(false);

  // const handleClick = id => {
  //   setIds({
  //     company: companyId,
  //     office: id
  //   });
  //   console.log("id dari handleCLick", ids);
  // };

  const handleDelete = async id => {
    const { deleteOffice } = props;
    setIds({
      company: companyID,
      office: id
    });
    await deleteOffice(ids);
    await window.location.reload();
    console.log("id dari handleCLick", ids);
  };

  useEffect(() => {
    props.fetchOffices(companyID);
  }, []);
  return (
    <>
      {props.offices.map(office =>
        office.companyId !== companyID ? (
          <></>
        ) : (
          <>
            <Card>
              <Card.Body>
                <Card.Title style={{ borderBottom: "1px solid grey" }}>
                  <Row>
                    <Col>
                      <h3>{office.name}</h3>
                    </Col>
                    <Col>
                      <Button
                        className="float-right"
                        onClick={() => handleShow(office._id)}
                      >
                        X
                      </Button>
                    </Col>
                  </Row>
                </Card.Title>
                <Card.Text>
                  <p className="font-weight-bold m-0">Location</p>
                  <p className="text-secondary m-0">Lat - {office.latitude}</p>
                  <p className="text-secondary m-0">
                    long - {office.longitude}
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="font-weight-bold m-0">Office Start Date</p>
                  <p className="text-secondary">{office.officeDate}</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body>Are You Sure to Delete this Office?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  No
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(office._id)}
                >
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    offices: state.form.offices
  };
};

export default connect(mapStateToProps, { fetchOffices, deleteOffice })(Office);
