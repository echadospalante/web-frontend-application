import { Fragment, useState } from 'react';

import { useSelector } from 'react-redux';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

import { selectAuthentication } from '../../../../config/redux/reducers/auth/auth.reducer';
import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';
import UserContactCard from '../../../../shared/components/card/UserContactCard';
import UserStatsWidget from '../../../../shared/components/widgets/UserStatsWidget';
import { getIconName, stringToColor } from '../../../../shared/helpers/colors';

const AccountProfilePage = () => {
  document.title = "Perfil de usuario | EchadosPa'lante";
  const { firstName, lastName, email, picture, roles } =
    useSelector(selectAuthentication);
  const [displayPicture, setDisplayPicture] = useState<boolean>(true);

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
      'Lo mejor está por llegar.',
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
                    <Col lg={7} md={12} sm={12}>
                      <div className="text-primary p-3">
                        <h5 className="text-primary">
                          {getGreeting()}, {firstName}!
                        </h5>
                        <p>{getMotivationalMessage()}</p>
                      </div>
                    </Col>
                    <Col lg={5} md={12} sm={12} className="align-self-end">
                      <img src="/epl.png" alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <Row>
                    <Col>
                      <div className="avatar-md profile-user-wid mb-4">
                        {/* <img
                          src={picture}
                          alt=""
                          className="img-thumbnail rounded-circle"
                        /> */}

                        {!displayPicture ? (
                          <img
                            className="rounded-circle avatar-md header-profile-user"
                            src={picture}
                            alt="Profile picture"
                            onError={() => setDisplayPicture(false)}
                          />
                        ) : (
                          <div
                            title={`${firstName} ${lastName}`}
                            className="img-thumbnail rounded-circle"
                            style={{
                              backgroundColor: stringToColor(
                                `${firstName} ${lastName}`,
                              ),
                              width: '60px',
                              height: '60px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            {getIconName(`${firstName} ${lastName}`)}
                          </div>
                        )}
                      </div>
                      <h5 className="font-size-15 text-truncate">
                        {firstName} {lastName}
                      </h5>
                      <h6>{email}</h6>

                      <section className="d-flex mt-3">
                        {(roles || []).map((role) => (
                          <span
                            key={role.id}
                            className={`badge bg-success rounded-3 p-2 m-1`}
                          >
                            {role.label}
                          </span>
                        ))}
                      </section>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <UserStatsWidget />
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
