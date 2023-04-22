import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Welcome = () => {
  return (
    <div className="container">
	    <Row className="mb-4">
        <Col>
          <h1 className="text-center">Chainera</h1>
          <p className="text-center lead">Blockchain solutions and consultancy.</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={6} lg={6} className="d-flex justify-content-center mb-4">
          <Link to="/doramo">
            <img
              src="doramoscreen.png"
              alt="Doramo"
              className="img-fluid w-100"
            />
          </Link>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="d-flex justify-content-center mb-4">
          <Link to="/flowswap">
            <img
              src="fsscreen2.png"
              alt="Image 2"
              className="img-fluid w-100"
            />
          </Link>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="d-flex justify-content-center mb-4">
          <Link to="/catalox">
            <img
              src="catalox2.png"
              alt="Image 3"
              className="img-fluid w-100"
            />
          </Link>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="d-flex justify-content-center mb-4">
          <Link to="/peacio">
            <img
              src="peacioscreen.png"
              alt="Image 4"
              className="img-fluid w-100"
            />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Welcome;

