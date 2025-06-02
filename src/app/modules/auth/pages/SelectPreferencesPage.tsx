import type { SVGProps } from 'react';
import { Fragment } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap';
import { useRegister, useRegisterPreferences } from '../hooks/useRegister';

import UserPreferencesForm from '../../../shared/components/forms/UserPreferencesForm';

const SelectPreferencesPage = () => {
  const { preferencesIds } = useRegisterPreferences();
  const { submitRegister } = useRegister();
  const navigate = useNavigate();

  const handleSendRegister = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    event.preventDefault();
    submitRegister().then(() => navigate('/registro/exito'));
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
                    height="150"
                    className="auth-logo-dark mx-auto rounded-1"
                  />
                </Link>
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
                          <Preferences />
                        </div>
                      </div>

                      <div className="p-2 mt-4">
                        <h4 className="text-center">
                          A continuación, selecciona entre 3 y 10 categorías de
                          emprendimientos que son de tu interés:
                        </h4>

                        <UserPreferencesForm />

                        <div className="mt-4 text-center">
                          <Link
                            to="/registro/informacion-base"
                            className="btn btn-success mx-1"
                          >
                            Anterior
                          </Link>

                          <Button
                            disabled={
                              preferencesIds.length < 3 ||
                              preferencesIds.length > 10
                            }
                            onClick={handleSendRegister}
                            className="btn btn-success mx-1"
                          >
                            <i className="bx bx-rocket me-1"></i>
                            Finalizar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  © {new Date().getFullYear()} Echados Pa'lante. Powered with{' '}
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

export function Preferences(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="green"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 4H3m8 15H3m18 0h-4m4-7.5H11M21 4h-2M5 11.5H3M14.5 2c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C15.199 6 14.966 6 14.5 6s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 5.199 13 4.966 13 4.5v-1c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 2 14.034 2 14.5 2m-2 15c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C11 20.199 11 19.966 11 19.5v-1c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077m-3-7.5c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 12.699 8 12.466 8 12v-1c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077"
        color="green"
      ></path>
    </svg>
  );
}

export default SelectPreferencesPage;
