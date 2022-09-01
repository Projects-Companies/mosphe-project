import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../pages/login & register/Login";
import Register from "../pages/login & register/Register";
import Modal from "react-bootstrap/Modal";

function Navbar() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            🏠
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/category">Add Category</Link>
              </li>
              <li class="nav-item">
                <Link to="/view_category">View Category</Link>
              </li>
              <li class="nav-item">
                <Link to="/sub_category">Add Sub_Category</Link>
              </li>
              <li class="nav-item">
                <Link to="/view_sub_category">View Sub_Category</Link>
              </li>
              <li class="nav-item">
                <button
                  className="btn btn-primary btn-sm  mx-5"
                  onClick={handleShow}
                >
                  Login
                </button>
              </li>
              <li class="nav-item">
                <button
                  className="btn btn-primary btn-sm  mx-5"
                  onClick={handleShow2}
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>

      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Navbar;
