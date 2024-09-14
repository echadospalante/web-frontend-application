import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";

const LandingHero = () => {
  return (
    <React.Fragment>
      <section className="section hero-section bg-ico-hero" id="home">
        <div className="bg-overlay bg-primary" />
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
                    Get Whitepaper
                  </Link>
                  <Link to="#" className="btn btn-light">
                    How it work
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg="5" md="8" sm="10" className="ms-lg-auto">
              <Card className="overflow-hidden mb-0 mt-5 mt-lg-0">
                <CardHeader className="text-center">
                  <h5 className="mb-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cumque, at.
                  </h5>
                </CardHeader>
                <CardBody>
                  <div className="text-center">
                    <h5>Time left to Ico :</h5>
                    <div className="mt-4">
                      <div className="counter-number ico-countdown">
                        {/* <Countdown date="2022/10/31" renderer={renderer} /> */}
                      </div>
                    </div>

                    <div className="mt-4">
                      <Button type="button" color="success" className="w-md">
                        Get Token
                      </Button>
                    </div>

                    <div className="mt-5">
                      <h4 className="font-weight-semibold">
                        Lorem ipsum dolor sit amet
                      </h4>
                      <div className="clearfix mt-4">
                        <h5 className="float-end font-size-14">
                          Lorem, ipsum.
                        </h5>
                      </div>
                      <div className="progress p-1 progress-xl softcap-progress">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "15%" }}
                        >
                          <div className="progress-label">15 %</div>
                        </div>
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style={{ width: "30%" }}
                        >
                          <div className="progress-label">30 %</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default LandingHero;
