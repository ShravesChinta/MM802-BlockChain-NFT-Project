import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

// This Modal help Add a new friend
export function AddNewChat(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      className="AddNewChat"
      style={{
        position: "absolute",
        bottom: "0px",
        padding: "10px 45px 0 45px",
        margin: "0 95px 0 0",
        width: "97%",
      }}
    >
      <Button variant="success" className="mb-2" onClick={handleShow}>
        + NewChat
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add New Friend </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <div>Adding Lamose as your friend</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.addHandler(
                "Lamose",
              "0xDD0995F0Ee7CDb3104B813b2419b2AB86c43b8C1"
              );
              handleClose();
            }}
          >
            Add Friend
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}