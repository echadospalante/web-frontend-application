import React from "react";

import { CredentialResponse, useGoogleOneTapLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import useLogin from "../hooks/useLogin";

// import { useIsAuthenticated, useMsal } from "@azure/msal-react";

const LoginPage = () => {
  document.title = "Login - Registro | Comercial";
  const navigate = useNavigate();
  const { loginUser } = useLogin();
  // const { instance } = useMsal();
  // const isAuthenticated = useIsAuthenticated();

  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      handleSuccessfulLogin(credentialResponse);
    },
    onError: () => {
      handleErrorInLogin();
      console.log("Login Failed");
    },
  });

  const handleSuccessfulLogin = (
    credentialResponse: CredentialResponse
  ): void => {
    const { credential } = credentialResponse;
    if (!credential) {
      return;
    }
    loginUser(credential);
  };

  const handleErrorInLogin = (): void => {
    //
  };

  // const handleLogin = (loginType: "popup" | "redirect") => {
  //   if (loginType === "popup") {
  //     instance
  //       .loginPopup({
  //         scopes: ["openid", "profile", "User.Read"],
  //         prompt: "select_account",
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   } else if (loginType === "redirect") {
  //     instance
  //       .loginRedirect({
  //         scopes: ["openid", "profile", "User.Read"],
  //         prompt: "select_account",
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }
  // };

  const handleFakeLogin = (
    to: "/principal" | "/administracion" | "/moderator"
  ) => {
    navigate(to, { replace: true });
  };

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary-subtle">
                  <Row>
                    <Col xs={7}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">
                          Te damos la bienvenida!
                        </h5>
                        <p>
                          Ingresa para continuar con tu cuenta de administrador.
                        </p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img
                        src="/images/profile-img.png"
                        alt=""
                        className="img-fluid"
                      />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div className="auth-logo">
                    <Link to="/" className="auth-logo-light">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src="/favicon.ico"
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                    <Link to="/" className="auth-logo-dark">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src="/favicon.ico"
                            alt=""
                            className="rounded-circle"
                            height="80"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>

                  <Row className="p-2 d-flex flex-column justify-content-center">
                    <Col lg={12} className="mt-3">
                      <Button
                        onClick={() => handleFakeLogin("/principal")}
                        className="position-relative btn btn-soft-primary w-100 fw-medium border-light py-3"
                        color="white"
                      >
                        <img
                          src="/images/brands/google.svg"
                          className="position-absolute"
                          style={{ left: 10, top: 10 }}
                        />
                        <span className="text-center">
                          Iniciar sesión con Google
                        </span>
                      </Button>
                    </Col>
                    <Col lg={12} className="mt-3">
                      <Button
                        onClick={() => handleFakeLogin("/moderator")}
                        className="position-relative btn btn-soft-primary w-100 fw-medium border-light py-3"
                        color="white"
                      >
                        <img
                          src="/images/brands/microsoft.svg"
                          className="position-absolute"
                          style={{ left: 13, top: 15 }}
                        />
                        <span className="text-center">
                          Iniciar sesión con Microsoft
                        </span>
                      </Button>
                    </Col>

                    <Col lg={12} className="mt-3">
                      <Button
                        onClick={() => handleFakeLogin("/administracion")}
                        className="position-relative btn btn-soft-primary w-100 fw-medium border-light py-3"
                        color="white"
                      >
                        <img
                          src="/images/brands/linkedin.svg"
                          className="position-absolute"
                          style={{ left: 13, top: 13 }}
                        />
                        <span className="text-center">
                          Iniciar sesión con LinkedIn
                        </span>
                      </Button>
                    </Col>
                  </Row>
                  <div className="p-2 d-flex justify-content-center"></div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
