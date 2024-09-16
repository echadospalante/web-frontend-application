/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

const CharacterizationPage = () => {
  const [selectedOption, setSelectedOption] = useState<"COMPANY" | "ADVISOR">();
  const navigate = useNavigate();
  const handleSelectOption = (option: "COMPANY" | "ADVISOR") => {
    setSelectedOption(option);
  };

  const handleNextStep = (): void => {
    navigate("/registro/informacion-base");
  };

  return (
    <Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center mb-5 text-muted">
                <Link to="/" className="d-block auth-logo">
                  <img
                    src="/epl2.jpeg"
                    alt=""
                    height="50"
                    className="auth-logo-dark mx-auto"
                  />
                  <img
                    src="/images/logos/7s-logo-small.png"
                    alt=""
                    height="20"
                    className="auth-logo-light mx-auto"
                  />
                </Link>
                <p className="mt-3">¡Te damos la bienvenida!</p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={8} lg={8} xl={8}>
              <Card>
                <CardBody>
                  <div className="p-2">
                    <div className="">
                      <div className="avatar-md mx-auto text-center">
                        <div className="avatar-title rounded-circle bg-light">
                          <i className="mdi mdi-directions-fork h1 mb-0 text-primary"></i>
                        </div>
                      </div>

                      <div className="p-2 mt-4">
                        <h4>A continuación, selecciona tu tipo de perfil:</h4>

                        <Card className="">
                          <Row className="mb-4 border border-primary mt-3">
                            <Col
                              lg={3}
                              md={12}
                              sm={12}
                              className="d-flex justify-content-center align-items-center"
                            >
                              <img
                                src="/images/logos/7s-logo-small.png"
                                alt="Skote"
                                width="100"
                              />
                            </Col>

                            <Col lg={9} md={12} sm={12}>
                              <CardBody>
                                <CardTitle tag="h4" className="mt-0">
                                  <i className="bx bx-info-circle me-1"></i>
                                  {"{{Nombre_empresa}}"} ha pre-registrado tu
                                  cuenta para prestar sus servicios como asesor.
                                </CardTitle>
                                <CardText>
                                  Para continuar su registro, selecciona el tipo
                                  de perfil 'Asesor' y automáticamente se
                                  registrará como asesor para empezar a
                                  presentar sus servicios.
                                </CardText>
                                <CardText>
                                  <small className="text-muted">
                                    El pre-registro se ha realizado hace 2 horas
                                  </small>
                                </CardText>
                              </CardBody>
                            </Col>
                          </Row>
                        </Card>

                        <Row className="mt-1 text-center">
                          <Col lg={6} md={12} sm={12}>
                            <Card
                              onClick={() => handleSelectOption("COMPANY")}
                              className="border characterization__card p-1"
                            >
                              {selectedOption === "COMPANY" && (
                                <i className="bx bx-check-circle declaration__check-icon"></i>
                              )}
                              <CardTitle className="pt-3">Empresa</CardTitle>
                              <Container>
                                <hr />
                              </Container>
                              <CardBody>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Accusamus consequatur
                                inventore voluptatem nam nesciunt tempore eaque
                                laudantium voluptate. Repellat aperiam nobis
                                natus officiis cumque. Adipisci quod debitis
                                dolorum praesentium, illum eos? Ipsum cum
                                voluptas natus.
                              </CardBody>
                            </Card>
                          </Col>
                          <Col lg={6} md={6} sm={12}>
                            <Card
                              onClick={() => handleSelectOption("ADVISOR")}
                              className="border characterization__card p-1"
                            >
                              {selectedOption === "ADVISOR" && (
                                <i className="bx bx-check-circle declaration__check-icon"></i>
                              )}
                              <CardTitle className="pt-3">Asesor</CardTitle>
                              <Container>
                                <hr />
                              </Container>
                              <CardBody>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Accusamus consequatur
                                inventore voluptatem nam nesciunt tempore eaque
                                laudantium voluptate. Repellat aperiam nobis
                                natus officiis cumque. Adipisci quod debitis
                                dolorum praesentium, illum eos? Ipsum cum
                                voluptas natus.
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>

                        <div className="mt-1 text-center">
                          <Button
                            disabled={!selectedOption}
                            onClick={() => handleNextStep()}
                            to="/dashboard"
                            className="btn btn-success"
                          >
                            Siguiente
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  © {new Date().getFullYear()} Echados Pa'lante. Powered with{" "}
                  <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default CharacterizationPage;
