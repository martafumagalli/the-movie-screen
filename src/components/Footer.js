import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Footer() {
  return (
    <Container className="footercontainer">
      <Row>
        <Col>
          <i className="fab fa-facebook fa-2x blush mr-3" />
          <i className="fab fa-instagram fa-2x blush mr-3" />
          <i className="fab fa-twitter fa-2x blush mr-3" />
        </Col>
      </Row>
      <Row>
        <Col className="blush footerquote">&quot;Mama always said life was like React. You never know what you&apos;re gonna get&quot;</Col>
      </Row>
      <Row>
        <Col className="blush footercredit">
          From Toulouse With
          <span role="img" aria-label="">&#128156;</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
