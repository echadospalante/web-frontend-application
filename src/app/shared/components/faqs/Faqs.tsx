import { Fragment, useState } from 'react';

import classnames from 'classnames';
import {
  Card,
  CardBody,
  Col,
  Container,
  Nav,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import Accordion from '../accordion/Accordion';

const FAQs = () => {
  const [activeTab, setactiveTab] = useState('1');

  return (
    <Fragment>
      <section className="section" id="faqs">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <div className="small-title">FAQs</div>
                <h4>Preguntas Frecuentes</h4>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <div className="vertical-nav">
                <Row>
                  <Col lg="2" sm="4">
                    <Nav pills className="flex-column">
                      <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => {
                          setactiveTab('1');
                        }}
                      >
                        <i className="bx bx-help-circle nav-icon d-block mb-2" />
                        <p className="font-weight-bold mb-0">
                          Preguntas Generales
                        </p>
                      </NavLink>

                      <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => {
                          setactiveTab('2');
                        }}
                      >
                        <i className="bx bx-heart nav-icon d-block mb-2" />
                        <p className="font-weight-bold mb-0">Contribuciones</p>
                      </NavLink>

                      <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => {
                          setactiveTab('3');
                        }}
                      >
                        <i className="bx bx-timer d-block nav-icon mb-2" />
                        <p className="font-weight-bold mb-0">Beneficios</p>
                      </NavLink>
                    </Nav>
                  </Col>
                  <Col lg="10" sm="8">
                    <Card>
                      <CardBody>
                        <TabContent activeTab={activeTab}>
                          <TabPane tabId="1" id="buy">
                            <h4 className="card-title mb-4">
                              Preguntas Generales
                            </h4>

                            <Accordion
                              question1="¿De qué se trata esta plataforma?"
                              answer1="Es un espacio digital donde cualquier persona puede crear y dar visibilidad a sus emprendimientos, conectar con una comunidad solidaria y recibir apoyo en forma de donaciones o patrocinios."
                              question2="¿Quién puede crear un emprendimiento?"
                              answer2="¡Todos! Si tienes una idea, proyecto o negocio en marcha, puedes registrarte y crear tu perfil de emprendimiento en pocos pasos."
                              question3="¿Puedo publicar contenido sobre mi emprendimiento?"
                              answer3="Sí. Puedes crear publicaciones para contar tu historia, mostrar avances, lanzar nuevos eventos y agradecer a quienes te apoyan."
                              question4="¿Puedo ver emprendimientos cercanos a mí?"
                              answer4="Sí, puedes explorar emprendimientos por ubicación geográfica. La plataforma te permite descubrir proyectos locales y apoyar a emprendedores de tu comunidad."
                            />
                          </TabPane>

                          <TabPane tabId="2">
                            <h4 className="card-title mb-4">Contribuciones</h4>

                            <Accordion
                              question1="¿Cómo puedo apoyar un emprendimiento?"
                              answer1="Puedes hacerlo a través de donaciones voluntarias, patrocinios o participando en sus eventos. También puedes compartir sus publicaciones para ayudarles a ganar visibilidad."
                              question2="¿Hay algún costo por usar la plataforma?"
                              answer2="No, el registro y uso básico de la plataforma es completamente gratuito. Solo se aplican tarifas mínimas en caso de donaciones y patrocinios."
                              question3="¿Cuál es la diferencia entre donación y patrocinio?"
                              answer3="Una donación es un aporte voluntario sin esperar nada a cambio, mientras que un patrocinio implica una colaboración más formal, donde el patrocinador puede recibir beneficios como visibilidad de marca o reconocimiento público."
                              question4="¿Puedo patrocinar varios emprendimientos?"
                              answer4="Sí, puedes patrocinar tantos emprendimientos como desees. La plataforma te permite gestionar tus patrocinios y ver el impacto de tu apoyo en cada proyecto."
                            />
                          </TabPane>

                          <TabPane tabId="3">
                            <h4 className="card-title mb-4">Beneficios</h4>

                            <Accordion
                              question1="¿Qué beneficios pueden obtener mis emprendimientos?"
                              answer1="Los emprendimientos pueden recibir apoyo financiero, visibilidad en la plataforma, acceso a una comunidad solidaria y oportunidades de colaboración con otros emprendedores."
                              question2="¿Cómo puedo medir el impacto de mi emprendimiento?"
                              answer2="La plataforma ofrece herramientas para rastrear donaciones, patrocinios y el crecimiento de tu comunidad. También puedes recibir retroalimentación directa de tus seguidores."
                              question3="¿Puedo colaborar con otros emprendedores?"
                              answer3="Sí, puedes conectar con otros emprendedores para colaborar en proyectos conjuntos, compartir recursos o co-organizar eventos. La plataforma fomenta la colaboración entre emprendedores."
                              question4="¿Qué pasa si tengo más preguntas?"
                              answer4="Si tienes más preguntas, puedes contactarnos a través de nuestro formulario de contacto o enviarnos un correo electrónico. Estamos aquí para ayudarte a aprovechar al máximo la plataforma."
                            />
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default FAQs;
