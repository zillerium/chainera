import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player';

const Peacio = () => {
  return (
    <Container >

      <Row>
        <Col>
	  <Container className="my-5">
          <img
            src="/peacioscreen.png"
            alt="Peacio"
            className="img-fluid mx-auto d-block"
          />
	  </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex justify-content-center">
             <p><a href="https://peac.io/" className="text-light" target="_blank" rel="noopener noreferrer">Peacio</a> is an ecommerce website sing the blockchain
	  </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
	  <div className="d-flex justify-content-center">
	  <iframe width="1536" height="545" src="https://www.youtube.com/embed/oXPvC_oWMz8" title="Peacio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Peacio;
