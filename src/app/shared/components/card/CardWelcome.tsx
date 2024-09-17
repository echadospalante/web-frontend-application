import React, { useState } from "react";
import { Row, Col, Card } from "reactstrap";

//Import Images
// import profileImg from "../../assets/images/profile-img.png";

const CardWelcome = () => {
  const [currentDate] = useState(new Date().toLocaleString());
  return (
    <React.Fragment>
      <Col xl="4">
        <Card className="bg-primary bg-primary-subtle">
          <div>
            <Row>
              <Col xs="7">
                <div className="text-primary p-3">
                  <h5 className="text-primary">Bienvenido!</h5>
                  <p>Panel de Control de Echadospa'lante</p>

                  <ul className="ps-3 mb-0">
                    <li className="py-1">Último login el {currentDate}</li>
                    <li className="py-1">
                      Duración de la última sesión: 2h 16m
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="5" className="align-self-end">
                <img
                  src="/images/logos/7s-icon-small.png"
                  alt=""
                  className="img-fluid"
                />
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default CardWelcome;
