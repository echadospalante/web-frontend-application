/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";

import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import RegisterUserForm from "../../../shared/components/forms/RegisterUserForm";

const BaseUserInfoPage = () => {
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
                    height="150"
                    className="auth-logo-dark mx-auto rounded-1"
                  />
                </Link>
                {/* <p className="mt-3">¡Te damos la bienvenida!</p> */}
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={8} lg={12} xl={12}>
              <Card>
                <CardBody>
                  <div className="p-2">
                    <div>
                      <div className="avatar-md mx-auto text-center">
                        <div className="avatar-title rounded-circle bg-light">
                          {/* <i className="bx bx-id-card  h1 mb-0 text-primary"></i> */}
                          <IdCard />
                        </div>
                      </div>

                      <div className="p-2 mt-4">
                        <h4 className="text-center">
                          A continuación, completa tu información de registro:
                        </h4>

                        <Row className="mt-4">
                          <RegisterUserForm />
                        </Row>

                        <div className="mt-4 text-center">
                          <Link
                            to="/registro/bienvenida"
                            className="btn btn-success mx-1"
                          >
                            Anterior
                          </Link>
                          <Link
                            to="/registro/preferencias"
                            className="btn btn-success mx-1"
                          >
                            Siguiente
                          </Link>
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

import type { SVGProps } from "react";

export function IdCard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="green"
        d="M14 13h5v-2h-5zm0-3h5V8h-5zm-9 6h8v-.55q0-1.125-1.1-1.787T9 13t-2.9.663T5 15.45zm4-4q.825 0 1.413-.587T11 10t-.587-1.412T9 8t-1.412.588T7 10t.588 1.413T9 12m-5 8q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6z"
      ></path>
    </svg>
  );
}

export default BaseUserInfoPage;
