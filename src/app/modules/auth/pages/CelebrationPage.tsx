/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useEffect, useRef } from "react";

import confetti from "canvas-confetti";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const CelebrationPage = () => {
  const canvasRef = useRef(null);
  const { preferencesIds, userInfo } = useSelector(selectRegister);

  const fireConfetti = () => {
    confetti.create(canvasRef.current!, {
      resize: true, // Will resize to match the canvas element
      useWorker: true, // Use web worker to improve performance
    })({
      particleCount: 200,
      shapes: ["square", "circle", "star"],
      spread: 100,
      origin: { x: 0.5, y: 0.5 },
    });
  };

  useEffect(() => {
    fireConfetti();
    const randomTime = Math.floor(Math.random() * 1000) + 1500;
    const interval = setInterval(fireConfetti, randomTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }}
      />
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
                          {/* <i className="mdi mdi-hand-clap h1 fs-1 mb-0 text-primary"></i> */}
                          <Clap className="h1" fill="#0000ff" />
                        </div>
                      </div>

                      <div className="p-2 mt-4">
                        <h4 className="text-success">¡Registro Exitoso!</h4>
                        <p className="text-muted mt-4 text-left">
                          ¡Felicidades! Has completado exitosamente el proceso
                          de registro. Ahora puedes comenzar a crear, compartir
                          y conectar con otros emprendedores.
                        </p>

                        <div className="mt-4">
                          <Link
                            to="/principal/comercial"
                            className="btn btn-success"
                          >
                            Comenzar
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
import { useSelector } from "react-redux";
import { selectRegister } from "../../../config/redux/reducers/register.reducer";

export function Clap(props: SVGProps<SVGSVGElement>) {
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
        d="M14.4 6H20v10h-7l-.4-2H7v7H5V4h9zm-.4 8h2v-2h2v-2h-2V8h-2v2l-1-2V6h-2v2H9V6H7v2h2v2H7v2h2v-2h2v2h2v-2l1 2zm-3-4V8h2v2zm3 0h2v2h-2z"
      ></path>
    </svg>
  );
}

export default CelebrationPage;
