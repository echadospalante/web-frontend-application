import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';

import { selectAuthentication } from '../../../../config/redux/reducers/auth/auth.reducer';
import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';
import UserContactCard from '../../../../shared/components/card/UserContactCard';
import VentureCategoryWidget from '../../../../shared/components/widgets/VentureCategoryWidget';

const AccountProfilePage = () => {
  document.title = "Perfil de usuario | EchadosPa'lante";
  const { firstName, lastName, email, picture, roles } =
    useSelector(selectAuthentication);

  function getGreeting(): string {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      return 'Buenos días';
    } else if (hour >= 12 && hour < 19) {
      return 'Buenas tardes';
    } else {
      return 'Buenas noches';
    }
  }

  function getMotivationalMessage(): string {
    const messages: string[] = [
      '¡Sigue construyendo tu sueño!',
      'Conecta. Comparte. Crea.',
      'Haz que hoy cuente.',
      'Cada paso suma.',
      'Tu idea vale oro.',
      'Confía en tu proceso.',
      'La acción vence al miedo.',
      'Hoy es un buen día para crecer.',
      'Lo mejor está por lanzar.',
      'Emprender es crear futuro.',
      '¡Tu red es tu poder!',
      'Sigue mostrando tu visión.',
      'Todo gran logro empezó con una idea.',
      'Rodéate de mentes brillantes.',
      'Cree, lanza, aprende, mejora.',
      'Haz networking con propósito.',
      'Atrévete a innovar.',
      'La constancia abre puertas.',
      'Inspira con lo que haces.',
      'Construyamos juntos.',
      'Los retos traen oportunidades.',
      'Tu tiempo es ahora.',
      'Da valor, siempre.',
      'Haz lo que te mueve.',
      'Esperamos que estés teniendo un día súper productivo',
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }

  // const miniCards = [
  //   {
  //     title: "Completed Projects",
  //     iconClass: "bx-check-circle",
  //     text: "125",
  //   },
  //   { title: "Pending Projects", iconClass: "bx-hourglass", text: "12" },
  //   { title: "Total Revenue", iconClass: "bx-package", text: "$36,524" },
  // ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumb title="Cuenta" breadcrumbItem="Perfil" />

          <Row>
            <Col xl="4">
              <Card className="overflow-hidden">
                <div className="bg-primary-subtle">
                  <Row>
                    <Col xs="7">
                      <div className="text-primary p-3">
                        <h5 className="text-primary">
                          {getGreeting()}, {firstName}!
                        </h5>
                        <p>{getMotivationalMessage()}</p>
                      </div>
                    </Col>
                    <Col xs="5" className="align-self-end">
                      <img src="/epl.png" alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <Row>
                    <Col>
                      <div className="avatar-md profile-user-wid mb-4">
                        <img
                          src={picture}
                          alt=""
                          className="img-thumbnail rounded-circle"
                        />
                      </div>
                      <h5 className="font-size-15 text-truncate">
                        {firstName} {lastName}
                      </h5>
                      <h6>{email}</h6>

                      <section className="d-flex mt-3">
                        {(roles || []).map((role) => (
                          <span
                            key={role.id}
                            className={`badge bg-secondary rounded-3 p-1 px-2 m-1`}
                          >
                            {role.label}
                          </span>
                        ))}
                      </section>
                    </Col>

                    <Col>
                      <div className="pt-4">
                        <Row>
                          <Col xs="6" className="mb-2">
                            <h6 className="font-size-15">Emprendimientos</h6>
                            <p className="text-muted mb-0">1</p>
                          </Col>

                          <Col xs="6" className="mb-2">
                            <h6 className="font-size-15">Publicaciones</h6>
                            <p className="text-muted mb-0">3</p>
                          </Col>

                          <Col xs="6" className="mb-2">
                            <h6 className="font-size-15">Eventos</h6>
                            <p className="text-muted mb-0">10</p>
                          </Col>

                          <Col xs="6" className="mb-2">
                            <h6 className="font-size-15">Suscripciones</h6>
                            <p className="text-muted mb-0">1200</p>
                          </Col>

                          <Col xs="6" className="mb-2">
                            <h6 className="font-size-15">Suscriptores</h6>
                            <p className="text-muted mb-0">1200</p>
                          </Col>

                          <Col xs="6" className="mb-2">
                            <h6 className="font-size-15">
                              Donaciones Realizadas
                            </h6>
                            <p className="text-muted mb-0">4</p>
                          </Col>

                          <Col xs="6" className="mb-2">
                            <h6 className="font-size-15">
                              Donaciones Recibidas
                            </h6>
                            <p className="text-muted mb-0">4</p>
                          </Col>

                          <Col xs="6" className="mb-2">
                            <h6 className="font-size-15">
                              Patrocinios Brindados (Activos)
                            </h6>
                            <p className="text-muted mb-0">4</p>
                          </Col>

                          <Col xs="6" className="mb-2">
                            <h6 className="font-size-15">
                              Patrocinios Recibidos (Activos)
                            </h6>
                            <p className="text-muted mb-0">4</p>
                          </Col>
                        </Row>
                        <div className="mt-4">
                          <Link to="" className="btn btn-primary  btn-sm">
                            Editar perfil{' '}
                            <i className="mdi mdi-arrow-right ms-1" />
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col xl="8">
              <UserContactCard />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AccountProfilePage;
