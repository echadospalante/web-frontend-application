import { Fragment } from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

import { selectAuthentication } from '../../../../config/redux/reducers/auth/auth.reducer';
import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';
import UserContactCard from '../../../../shared/components/card/UserContactCard';

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

  const statsData = [
    {
      title: 'Emprendimientos',
      value: '1',
      icon: 'mdi-lightbulb',
      color: 'primary',
      bgColor: 'bg-primary-subtle',
    },
    {
      title: 'Publicaciones',
      value: '3',
      icon: 'mdi-post',
      color: 'success',
      bgColor: 'bg-success-subtle',
    },
    {
      title: 'Eventos',
      value: '10',
      icon: 'mdi-calendar-multiple',
      color: 'info',
      bgColor: 'bg-info-subtle',
    },
    {
      title: 'Suscripciones',
      value: '1200',
      icon: 'mdi-account-plus',
      color: 'warning',
      bgColor: 'bg-warning-subtle',
    },
    {
      title: 'Suscriptores en General',
      value: '1200',
      icon: 'mdi-account-group',
      color: 'secondary',
      bgColor: 'bg-secondary-subtle',
    },
    {
      title: 'Donaciones Realizadas',
      value: '4',
      icon: 'mdi-heart-outline',
      color: 'danger',
      bgColor: 'bg-danger-subtle',
    },
    {
      title: 'Donaciones Recibidas',
      value: '4',
      icon: 'mdi-gift',
      color: 'success',
      bgColor: 'bg-success-subtle',
    },
    {
      title: 'Patrocinios Brindados',
      value: '4',
      icon: 'mdi-handshake',
      color: 'info',
      bgColor: 'bg-info-subtle',
    },
    {
      title: 'Patrocinios Recibidos',
      value: '4',
      icon: 'mdi-star',
      color: 'warning',
      bgColor: 'bg-warning-subtle',
    },
    {
      title: 'Comentarios y Reacciones',
      value: '4500, 120',
      icon: 'mdi-comment',
      color: 'primary',
      bgColor: 'bg-primary-subtle',
    },
  ];

  return (
    <Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Cuenta" breadcrumbItem="Perfil" />

          <Row>
            <Col lg={5} md={12} sm={12}>
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
                  </Row>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <Col>
                    <div className="pt-0">
                      <Row className="g-1">
                        {statsData.map((stat, index) => (
                          <Col
                            sm={4}
                            md={6}
                            lg={6}
                            key={index}
                            className="mb-0"
                          >
                            <div
                              className={`${stat.bgColor} rounded-3 p-3 shadow-sm border-0`}
                            >
                              <div className="d-flex align-items-center">
                                <div
                                  className={`avatar-sm rounded-circle bg-${stat.color} d-flex align-items-center justify-content-center me-3`}
                                  style={{
                                    width: '50px',
                                    height: '50px',
                                  }}
                                >
                                  <i
                                    className={`mdi ${stat.icon} text-white`}
                                    style={{
                                      fontSize: '1.5rem',
                                    }}
                                  ></i>
                                </div>
                                <div className="flex-1">
                                  <h6
                                    className={`text-${stat.color} mb-1 font-weight-bold`}
                                    style={{ fontSize: '0.85rem' }}
                                  >
                                    {stat.title}
                                  </h6>
                                  <h4
                                    className={`text-${stat.color} mb-0 font-weight-bold`}
                                  >
                                    {stat.value}
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>

                      <div className="mt-4">
                        <Link to="" className="btn btn-primary btn-sm w-100">
                          <i className="mdi mdi-account-edit me-2"></i>
                          Editar perfil
                        </Link>
                      </div>
                    </div>
                  </Col>
                </CardBody>
              </Card>
            </Col>

            <Col xl={7} md={12} sm={12}>
              <UserContactCard />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default AccountProfilePage;
