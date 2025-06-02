import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'reactstrap';

const LandingHero = () => {
  return (
    <React.Fragment>
      <section className="section hero-section bg-ico-hero" id="home">
        <div className="bg-overlay bg-success" />
        <Container>
          <Row className="align-items-center">
            <Col lg="5">
              <div className="text-white-50">
                <h1 className="text-white fw-semibold mb-3 hero-title">
                  Echados pa'lante
                </h1>
                <p className="font-size-14">
                  El lugar en donde emprendedores y empresas se encuentran para
                  hacer grandes negocios.
                </p>

                <div className="d-flex flex-wrap gap-2 mt-4">
                  <Link to="#" className="btn btn-success">
                    Empezar
                  </Link>
                  <Link to="#" className="btn btn-info">
                    <i className="mdi mdi-play me-1" />
                    Ver la demo
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg="5" md="8" sm="10" className="ms-lg-auto">
              <Card className="overflow-hidden mb-0 mt-5 mt-lg-0">
                <img src="/epl2.jpeg" alt="" />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default LandingHero;
