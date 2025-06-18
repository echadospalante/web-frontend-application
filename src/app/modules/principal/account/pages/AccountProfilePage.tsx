import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
  Table,
} from 'reactstrap';
import { selectAuthentication } from '../../../../config/redux/reducers/auth/auth.reducer';
import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';
import VentureCategoryWidget from '../../../../shared/components/widgets/VentureCategoryWidget';
import useUserContactInfo from '../hooks/useUserContactInfo';
import AppSpinner from '../../../../shared/components/loader/Spinner';
import UserContactCard from '../../../../shared/components/card/UserContactCard';

const AccountProfilePage = () => {
  document.title = "Perfil de usuario | EchadosPa'lante";
  const { firstName, lastName, email, picture, roles } =
    useSelector(selectAuthentication);

  // utils/greeting.ts
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
                    <Col sm="7">
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

                      <p className="text-muted mb-0 text-truncate">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum, magnam.
                      </p>

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

                    <Col sm={8}>
                      <div className="pt-4">
                        <Row>
                          <Col xs="6">
                            <h5 className="font-size-15">Test</h5>
                            <p className="text-muted mb-0">Projects</p>
                          </Col>
                          <Col xs="6">
                            <h5 className="font-size-15">$Test</h5>
                            <p className="text-muted mb-0">Test </p>
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

              <Card>
                <CardBody>
                  <CardTitle className="mb-5">Registro de Actividad</CardTitle>
                  <div>
                    <ul className="verti-timeline list-unstyled">
                      {[
                        { id: 1, iconClass: 'bx bx-user', link: '#' },
                        { id: 2, iconClass: 'bx bxs-news', link: '#' },
                        {
                          id: 3,
                          iconClass: 'bx bxs-comment-add',
                          link: '#',
                        },
                      ]?.map((experience, i) => (
                        <li
                          className={
                            experience.id === 1
                              ? 'event-list active'
                              : 'event-list'
                          }
                          key={'_exp_' + i}
                        >
                          <div className="event-timeline-dot">
                            <i
                              className={
                                experience.id === 1
                                  ? 'bx bx-right-arrow-circle bx-fade-right'
                                  : 'bx bx-right-arrow-circle'
                              }
                            />
                          </div>
                          <div className="d-flex">
                            <div className="me-3">
                              <i
                                className={
                                  'bx ' +
                                  experience.iconClass +
                                  ' h4 text-primary'
                                }
                              />
                            </div>
                            <div className="flex-grow-1">
                              <div>
                                <h5 className="font-size-15">
                                  <Link
                                    to={experience.link}
                                    className="text-dark"
                                  >
                                    Test
                                  </Link>
                                </h5>
                                <span className="text-primary">Test</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl="8">
              <UserContactCard />
            </Col>
            <Col xl="8">
              <Row>
                {[1, 2, 3]?.map((_card) => (
                  <VentureCategoryWidget
                    name={''}
                    count={0}
                    percentageGrowth={0}
                    icon={''}
                    backgroundColor={''}
                    checked={false}
                  />
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AccountProfilePage;
