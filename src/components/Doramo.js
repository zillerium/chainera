import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player';

const Doramo = () => {
  return (
    <Container >

      <Row>
        <Col>
	  <Container className="my-5">
          <img
            src="/doramoscreen.png"
            alt="Doramo"
            className="img-fluid mx-auto d-block"
          />
	  </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex justify-content-center">
             <p><a href="https://doramo.net/" className="text-light" target="_blank" rel="noopener noreferrer">Doramo</a> registers assets assigning an NFT value and a basic metadata structure so that the value of the asset is stored.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
	  <div className="d-flex justify-content-center">
	  <iframe width="1536" height="545" src="https://www.youtube.com/embed/X30RLvIDbfU" title="Use the Doramo site" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Doramo;
