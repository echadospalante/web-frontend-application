import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={6}>
              {new Date().getFullYear()} © echadospalante Admin.
            </Col>
            <Col md={6}>
              <div className="text-sm-end d-none d-sm-block">
                Design & Develop by echadospalante.net
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
