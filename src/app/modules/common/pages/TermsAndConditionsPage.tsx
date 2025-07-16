import { Fragment, useState } from 'react';

import classnames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
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

import Breadcrumb from '../../../shared/components/breadcrumb/Breadcrumb';
import LandingFooter from '../../../shared/components/footer/LandingFooter';

const TermsAndConditionsPage = () => {
  document.title = "Terminos & Condiciones | EchadosPa'lante";
  const [activeTab, setactiveTab] = useState('1');
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="p-4">
        <div className="container-fluid">
          <Breadcrumb
            title="Información General"
            breadcrumbItem="Términos & Condiciones"
          />
          <div className="d-flex justify-content-end my-2">
            <Button
              type="button"
              color="success"
              onClick={() =>
                navigate('/principal/emprendimientos', { replace: true })
              }
            >
              <i className="bx bx-arrow-back ms-1"></i>
              Volver a la app
            </Button>
          </div>
          <Row>
            <Col xl={3}>
              <section className="section" id="faqs">
                <Container>
                  <Row>
                    <Col lg="12">
                      <div className="text-center mb-4">
                        <div className="small-title">Categorías</div>
                        <h5>Aviso de privacidad y términos de uso</h5>
                        <hr
                          style={{
                            backgroundColor: 'lightgray',
                            height: '1px',
                            border: 'none',
                          }}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="12">
                      <div className="vertical-nav">
                        <Row>
                          <Col lg="12">
                            <Nav pills className="flex-column">
                              <NavLink
                                className={classnames({
                                  active: activeTab === '1',
                                })}
                                onClick={() => {
                                  setactiveTab('1');
                                }}
                              >
                                <i className="bx bx-help-circle nav-icon d-block mb-2" />
                                <p className="font-weight-bold mb-0">
                                  Política de Privacidad
                                </p>
                              </NavLink>

                              <NavLink
                                className={classnames({
                                  active: activeTab === '2',
                                })}
                                onClick={() => {
                                  setactiveTab('2');
                                }}
                              >
                                <i className="bx bx-receipt nav-icon d-block mb-2" />
                                <p className="font-weight-bold mb-0">
                                  Derechos del Usuario y Seguridad
                                </p>
                              </NavLink>
                            </Nav>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            </Col>

            <Col xl={9}>
              <Card>
                <CardBody className="border-bottom">
                  <div className="d-flex">
                    <img src="/epl.png" alt="" height="50" />
                    <div className="flex-grow-1 ms-3">
                      <h5 className="fw-semibold">
                        Proyecto Integrador II | Facultad de Ingeniería |
                        Universidad de Antioquia
                      </h5>
                      <ul className="list-unstyled hstack gap-2 mb-0">
                        <li>
                          <i className="bx bx-building-house"></i>{' '}
                          <span className="text-muted">EchadosPa'Lante</span>
                        </li>
                        <li>
                          <i className="bx bx-map"></i>{' '}
                          <span className="text-muted">Colombia</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardBody>

                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <CardBody>
                      <h5 className="fw-semibold mb-3">
                        Política de Privacidad de Echados Pa' Lante
                      </h5>
                      <p className="text-muted">
                        En "Echados Pa' Lante", nos comprometemos a proteger su
                        privacidad y sus datos personales. Esta política
                        describe cómo recopilamos, usamos, almacenamos y
                        protegemos su información al utilizar nuestra
                        plataforma. Al acceder o utilizar nuestra aplicación,
                        usted acepta los términos de esta política de privacidad
                        y tratamiento de datos, en cumplimiento con la Ley 1581
                        de 2012 y sus decretos reglamentarios en Colombia.
                      </p>

                      <h5 className="fw-semibold mb-3">
                        1. Identificación del Responsable del Tratamiento:
                      </h5>
                      <ul className="vstack gap-3 job-vstack">
                        <li>
                          <strong>Nombre del Responsable:</strong> Echados Pa'
                          Lante
                        </li>
                        <li>
                          <strong>Contacto:</strong> Se proporcionará un canal
                          de comunicación específico para consultas de
                          privacidad dentro de la plataforma.
                        </li>
                      </ul>

                      <h5 className="fw-semibold mb-3">
                        2. Datos Recopilados:
                      </h5>
                      <p className="text-muted">
                        Recopilamos información para proporcionar y mejorar
                        nuestros servicios:
                      </p>
                      <ul className="vstack gap-3 job-vstack">
                        <li>
                          <strong>Datos Personales de Registro:</strong> Nombre,
                          correo electrónico, información de perfil
                          (descripción, foto), datos de cuenta Google (si se usa
                          para inicio de sesión).
                        </li>
                        <li>
                          <strong>Datos de Emprendimiento:</strong> Nombre del
                          emprendimiento, descripción, categoría, ubicación,
                          imágenes, videos y detalles de contacto.
                        </li>
                        <li>
                          <strong>Datos de Interacción:</strong> Publicaciones
                          creadas, comentarios, reacciones (likes),
                          valoraciones, interacciones con otros perfiles.
                        </li>
                        <li>
                          <strong>Datos de Eventos:</strong> Información sobre
                          eventos creados o a los que se suscribe.
                        </li>
                        <li>
                          <strong>Datos de Soporte Económico:</strong>{' '}
                          Información sobre donaciones realizadas o recibidas, y
                          patrocinios (nota: la información de donaciones y
                          patrocinios es confidencial y visible solo para el
                          creador del emprendimiento receptor).
                        </li>
                        <li>
                          <strong>Datos de Preferencias:</strong> Preferencias
                          de búsqueda, categorías seguidas, historial de
                          interacción para personalizar el feed.
                        </li>
                        <li>
                          <strong>Datos de Ubicación:</strong> Utilizados para
                          búsquedas geolocalizadas de emprendimientos.
                        </li>
                        <li>
                          <strong>Datos Técnicos:</strong> Métricas del sistema
                          y datos de uso de la aplicación para optimización.
                        </li>
                      </ul>

                      <h5 className="fw-semibold mb-3">
                        3. Finalidad del Tratamiento de Datos:
                      </h5>
                      <p className="text-muted">
                        Los datos recopilados se utilizan para los siguientes
                        propósitos:
                      </p>
                      <ul className="vstack gap-3 job-vstack">
                        <li>
                          <strong>Gestión de Usuarios y Perfiles:</strong> Crear
                          y administrar cuentas, personalizar la experiencia del
                          usuario.
                        </li>
                        <li>
                          <strong>Visibilidad y Promoción:</strong> Mostrar
                          emprendimientos, productos y servicios a potenciales
                          clientes.
                        </li>
                        <li>
                          <strong>Conexión e Interacción:</strong> Facilitar la
                          comunicación entre emprendedores y clientes, permitir
                          comentarios, reacciones y calificaciones.
                        </li>
                        <li>
                          <strong>Soporte Económico:</strong> Gestionar
                          donaciones y patrocinios para el beneficio de los
                          emprendedores.
                        </li>
                        <li>
                          <strong>Personalización del Contenido:</strong>{' '}
                          Ofrecer un feed dinámico y recomendaciones basadas en
                          intereses y ubicación.
                        </li>
                        <li>
                          <strong>Gestión de Eventos:</strong> Promocionar y
                          administrar eventos relacionados con el ecosistema
                          emprendedor.
                        </li>
                        <li>
                          <strong>Notificaciones y Comunicaciones:</strong>{' '}
                          Enviar alertas sobre eventos, nuevos contenidos,
                          cambios de estado y comunicaciones relevantes.
                        </li>
                        <li>
                          <strong>Mejora del Servicio:</strong> Analizar el uso
                          de la aplicación para optimizar funcionalidades y la
                          experiencia del usuario.
                        </li>
                      </ul>

                      <h5 className="fw-semibold mb-3">
                        4. Compartición y Visibilidad de la Información:
                      </h5>
                      <ul className="vstack gap-3 job-vstack">
                        <li>
                          <strong>Información Pública:</strong> Nombres de
                          emprendimientos, descripciones, categorías, imágenes,
                          publicaciones, comentarios y eventos son visibles para
                          todos los usuarios de la plataforma.
                        </li>
                        <li>
                          <strong>Información Semi-Pública:</strong> Los
                          perfiles de usuario (nombre, foto) son visibles al
                          interactuar (comentar, reaccionar).
                        </li>
                        <li>
                          <strong>Información Confidencial:</strong> Detalles de
                          donaciones y patrocinios son estrictamente
                          confidenciales y solo son visibles para el emprendedor
                          que recibe el apoyo.
                        </li>
                        <li>
                          <strong>Compartir en Redes Sociales:</strong> La
                          aplicación facilita la opción de compartir contenido
                          de emprendimientos en plataformas de redes sociales.
                          Al hacerlo, la compartición de datos se rige por las
                          políticas de privacidad de esas plataformas externas.
                        </li>
                        <li>
                          <strong>Terceros:</strong> No compartimos su
                          información personal con terceros para fines de
                          marketing sin su consentimiento explícito. Podríamos
                          compartir datos anonimizados o agregados para análisis
                          o mejoras del servicio.
                        </li>
                      </ul>
                    </CardBody>
                  </TabPane>

                  <TabPane tabId="2">
                    <CardBody>
                      <h5 className="fw-semibold mb-3">
                        5. Medidas de Seguridad:
                      </h5>
                      <p className="text-muted">
                        Hemos implementado medidas de seguridad técnicas,
                        humanas y administrativas para proteger sus datos
                        personales contra el acceso no autorizado, la
                        alteración, divulgación o destrucción.
                      </p>
                      <ul className="vstack gap-3 job-vstack">
                        <li>
                          <strong>Arquitectura de Microservicios:</strong>{' '}
                          Divide el sistema en componentes pequeños y aislados,
                          lo que mejora la resiliencia y la seguridad al limitar
                          el impacto de posibles fallas.
                        </li>
                        <li>
                          <strong>Control de Acceso:</strong> Acceso restringido
                          a la información personal solo para el personal
                          autorizado que necesita conocerla para operar,
                          desarrollar o mejorar nuestros servicios.
                        </li>
                        <li>
                          <strong>Cifrado de Comunicaciones:</strong>{' '}
                          Utilización de protocolos seguros como HTTPS para
                          cifrar la comunicación entre su dispositivo y nuestros
                          servidores.
                        </li>
                        <li>
                          <strong>Gestión de Contenido y Moderación:</strong>{' '}
                          Implementación de procesos para moderar contenido,
                          ayudando a mantener un entorno seguro y adecuado.
                        </li>
                        <li>
                          <strong>Bases de Datos Seguras:</strong> El uso de
                          PostgreSQL implica características de seguridad
                          robustas a nivel de base de datos.
                        </li>
                        <li>
                          <strong>Entornos Contenerizados:</strong> Docker y
                          Docker Compose proporcionan aislamiento para los
                          servicios, reduciendo la superficie de ataque.
                        </li>
                        <li>
                          <strong>Prácticas de Desarrollo Seguro:</strong>{' '}
                          Integración de seguridad en el ciclo de vida del
                          desarrollo.
                        </li>
                      </ul>

                      <h5 className="fw-semibold mb-3">
                        6. Derechos del Titular de los Datos (Ley 1581 de 2012):
                      </h5>
                      <p className="text-muted">
                        Como titular de sus datos personales, usted tiene los
                        siguientes derechos:
                      </p>
                      <ul className="vstack gap-3 job-vstack">
                        <li>
                          <strong>Acceso:</strong> Conocer la información
                          personal que tenemos sobre usted.
                        </li>
                        <li>
                          <strong>Actualización:</strong> Rectificar y
                          actualizar sus datos inexactos o incompletos a través
                          de su perfil de usuario.
                        </li>
                        <li>
                          <strong>Rectificación:</strong> Solicitar la
                          corrección de errores en su información.
                        </li>
                        <li>
                          <strong>Supresión (Eliminación):</strong> Solicitar la
                          eliminación de sus datos personales cuando lo permita
                          la ley (ej. cuando la finalidad del tratamiento haya
                          cesado).
                        </li>
                        <li>
                          <strong>Revocación de la Autorización:</strong>{' '}
                          Revocar el consentimiento para el tratamiento de sus
                          datos en cualquier momento, sujeto a limitaciones
                          legales.
                        </li>
                        <li>
                          <strong>Oposición:</strong> Oponerse al tratamiento de
                          sus datos por motivos legítimos y fundados.
                        </li>
                        <li>
                          <strong>Consulta y Reclamo:</strong> Presentar
                          consultas o reclamos ante el Responsable del
                          Tratamiento o ante la Superintendencia de Industria y
                          Comercio (SIC).
                        </li>
                      </ul>

                      <h5 className="fw-semibold mb-3">
                        7. Vigencia y Modificaciones de la Política:
                      </h5>
                      <p className="text-muted">
                        La presente política de privacidad entra en vigor desde
                        su publicación y permanecerá vigente mientras "Echados
                        Pa' Lante" opere. Nos reservamos el derecho de modificar
                        esta política en cualquier momento para adaptarnos a
                        nuevas legislaciones, mejores prácticas o cambios en
                        nuestros servicios. Cualquier modificación será
                        publicada en esta misma sección de la aplicación y
                        notificada a los usuarios de manera oportuna.
                      </p>

                      <h5 className="fw-semibold mb-3">8. Contacto:</h5>
                      <p className="text-muted">
                        Para ejercer sus derechos como titular de datos o si
                        tiene alguna pregunta o inquietud sobre nuestra política
                        de privacidad, puede contactarnos a través de los
                        canales de soporte indicados en la aplicación o mediante
                        el correo electrónico que se proporcione para tal fin.
                        Responderemos a sus solicitudes de acuerdo con la
                        legislación vigente.
                      </p>
                    </CardBody>
                  </TabPane>
                </TabContent>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <LandingFooter />
    </Fragment>
  );
};

export default TermsAndConditionsPage;
