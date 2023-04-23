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
          <Link to="/ui">
            <img
              src="reactimage.png"
              alt="React"
              className="img-fluid w-100"
            />
          </Link>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="d-flex justify-content-center mb-4">
          <Link to="/smartcontract">
            <img
              src="solidityimage.png"
              alt="Solidity"
              className="img-fluid w-100"
            />
          </Link>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="d-flex justify-content-center mb-4">
          <Link to="/ipfs">
            <img
              src="ipfsimage.png"
              alt="IPFS"
              className="img-fluid w-100"
            />
          </Link>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="d-flex justify-content-center mb-4">
          <Link to="/web3">
            <img
              src="web3image.png"
              alt="Web3"
              className="img-fluid w-100"
            />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Welcome;

