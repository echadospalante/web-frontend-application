/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from 'react';

import { Link, Navigate } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

const WelcomePage = () => {
  const { onboardingCompleted } = useSelector(selectAuthentication);

  if (onboardingCompleted) {
    return <Navigate to={'/principal'} replace={true} />;
  }

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
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card>
                <CardBody>
                  <div className="p-2">
                    <div className="text-center">
                      <div className="avatar-md mx-auto">
                        <div className="avatar-title rounded-circle bg-light">
                          {/* <i className="HandGreeting h1 mb-0 text-primary"></i> */}
                          <HandGreeting />
                        </div>
                      </div>
                      <div className="p-2 mt-4">
                        <h4>¡Te damos la bienvenida!</h4>
                        <p className="text-muted mt-4">
                          Nos alegra que formes parte de nuestra comunidad. Aquí
                          podrás impulsar tus ideas, conectarte con otros
                          emprendedores y recibir el apoyo que necesitas para
                          hacer crecer tu proyecto.
                        </p>
                        <h6>¡Empecemos a crear juntos!</h6>
                        <div className="mt-4">
                          <Link
                            to="/registro/informacion-base"
                            className="btn btn-success"
                          >
                            Continuar
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  © {new Date().getFullYear()} Echadospa'lante. Crafted with{' '}
                  <i className="mdi mdi-heart text-danger"></i> by
                  EchadosPa'Lante
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

import type { SVGProps } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthentication } from '../../../config/redux/reducers/auth/auth.reducer';

export function HandGreeting(props: SVGProps<SVGSVGElement>) {
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
        d="M7.03 4.95L3.49 8.49c-3.32 3.32-3.32 8.7 0 12.02s8.7 3.32 12.02 0l6.01-6.01a2.517 2.517 0 0 0-.39-3.86l.39-.39c.97-.97.97-2.56 0-3.54c-.16-.16-.35-.3-.54-.41a2.497 2.497 0 0 0-3.72-3.05a2.517 2.517 0 0 0-3.88-.42l-2.51 2.51a2.493 2.493 0 0 0-3.84-.39m1.41 1.42c.2-.2.51-.2.71 0s.2.51 0 .71l-3.18 3.18a3 3 0 0 1 0 4.24l1.41 1.41a5 5 0 0 0 1.12-5.36l6.3-6.3c.2-.2.51-.2.71 0s.2.51 0 .71l-4.6 4.6l1.41 1.41l6.01-6.01c.2-.2.51-.2.71 0s.2.51 0 .71l-6.01 6.01l1.41 1.41l4.95-4.95c.2-.2.51-.2.71 0s.2.51 0 .71l-5.66 5.66l1.41 1.41l3.54-3.54c.2-.2.51-.2.71 0s.2.51 0 .71l-6 6.01c-2.54 2.54-6.65 2.54-9.19 0s-2.54-6.65 0-9.19zM23 17c0 3.31-2.69 6-6 6v-1.5c2.48 0 4.5-2.02 4.5-4.5zM1 7c0-3.31 2.69-6 6-6v1.5C4.52 2.5 2.5 4.52 2.5 7z"
      ></path>
    </svg>
  );
}

export default WelcomePage;
