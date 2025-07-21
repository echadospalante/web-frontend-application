/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from 'react';

import { ToastContainer } from 'react-toastify';

import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
  UncontrolledAlert,
} from 'reactstrap';

import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';

const PreferencesNotificationsPage = () => {
  document.title = 'Idioma y Localización | Preferencias';

  const notificationsGroup1 = [
    { id: 1, name: 'Nuevo inicio de sesión', category: 52 },
    { id: 2, name: 'Actualización de perfil', category: 10 },
  ];

  const notificationsGroup2 = [
    { id: 1, name: 'Emprendimiento creado', category: 85 },
    { id: 2, name: 'Emprendimiento actualizado', category: 19 },
    { id: 3, name: 'Emprendimiento eliminado', category: 48 },
    { id: 4, name: 'Nueva suscripción', category: 34 },
    { id: 5, name: 'Nuevo patrocinio', category: 33 },
  ];

  const notificationsGroup3 = [
    { id: 1, name: 'Evento creado', category: 17 },
    { id: 2, name: 'Evento actualizado', category: 64 },
    { id: 3, name: 'Evento eliminado', category: 72 },
    { id: 4, name: 'Nueva donación', category: 19 },
  ];

  const notificationsGroup4 = [
    { id: 1, name: 'Publicación creada', category: 85 },
    { id: 2, name: 'Publicación actualizada', category: 19 },
    { id: 3, name: 'Publicación eliminada', category: 48 },
    { id: 4, name: 'Nuevo aplauso', category: 34 },
    { id: 5, name: 'Nuevo comentario', category: 33 },
  ];

  const notificationsGroup5 = [
    { id: 1, name: 'Top Emprendimientos de la semana', category: 85 },
    { id: 2, name: 'Top publicaciones', category: 19 },
    { id: 3, name: 'Top eventos más donados', category: 48 },
    { id: 4, name: 'Top emprendedores más influyentes', category: 34 },
    { id: 8, name: 'Top categorías más populares', category: 94 },
  ];

  const notificationsGroup6 = [
    { id: 1, name: 'Boletin semanal de noticias', category: 85 },
    { id: 2, name: 'Estado del sistema', category: 19 },
    { id: 3, name: 'Informe de actividad', category: 48 },
    { id: 5, name: 'Mantenimientos programados', category: 33 },
    { id: 6, name: 'Cambios en Términos y Condiciones', category: 748 },
    { id: 7, name: 'Estado de la aplicaicón móvil', category: 16 },
  ];

  return (
    <Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumb
            title="Preferencias"
            breadcrumbItem="Gestión de Notificaciones"
          />

          <Container>
            <div data-simplebar className="h-100">
              <Card>
                <CardBody className="border-bottom">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0 card-title flex-grow-1">
                      Gestión de Notificaciones
                    </h5>
                    <div className="flex-shrink-0">
                      <Button
                        type="button"
                        // onClick={fetchQuoteAreas}
                        className="btn btn-light me-1"
                      >
                        <i className="mdi mdi-refresh"></i>
                      </Button>
                    </div>
                  </div>
                </CardBody>

                <CardTitle>
                  <div className="px-3 mt-2 mx-2 pt-3 fw-normal">
                    <UncontrolledAlert color="info" role="alert">
                      <i className="mdi mdi-bullseye-arrow me-2"></i>
                      <b>Tenga en cuenta:</b> Aquí podrá habilitar/deshabilitar
                      múltiples notificaciones relacionadas con su cuenta. Todas
                      las notificaciones se envían desde las 6am hasta las 10pm
                      hora COL.
                    </UncontrolledAlert>
                  </div>
                </CardTitle>

                <CardBody>
                  {/* <Row className="justify-content-center text-center">
                    <Col xl={4}>
                      <div className="mb-4">
                        <h4>Browse Job By Categories</h4>
                        <p className="text-muted">
                          Post a job to tell us about your project. We'll
                          quickly match you with the right freelancers.
                        </p>
                      </div>
                    </Col>
                  </Row> */}

                  <Row>
                    <Col xl={4} md={6}>
                      <div className="card jobs-categories">
                        <div className="card-body">
                          <h5>
                            Usuario
                            <i className="bx bx-info-circle text-primary mx-1 pt-2 fs-5 cursor-pointer"></i>
                          </h5>
                          {(notificationsGroup1 || []).map((item, key) => (
                            <Link
                              key={key}
                              to="#!"
                              className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2"
                            >
                              {item.name}
                              <input
                                type="checkbox"
                                name="not-name"
                                value=""
                                className="float-end mt-1"
                                checked={Math.random() > 0.3}
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Col>
                    <Col xl={4} md={6}>
                      <div className="card jobs-categories">
                        <div className="card-body">
                          <h5>
                            Emprendimientos
                            <i className="bx bx-info-circle text-primary mx-1 pt-2 fs-5 cursor-pointer"></i>
                          </h5>
                          {(notificationsGroup2 || []).map((item, key) => (
                            <Link
                              key={key}
                              to="#!"
                              className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2"
                            >
                              {item.name}
                              <input
                                type="checkbox"
                                name="not-name"
                                value=""
                                className="float-end mt-1"
                                checked={Math.random() > 0.3}
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Col>

                    <Col xl={4} md={6}>
                      <div className="card jobs-categories">
                        <div className="card-body">
                          <h5>
                            Eventos
                            <i className="bx bx-info-circle text-primary mx-1 pt-2 fs-5 cursor-pointer"></i>
                          </h5>
                          {(notificationsGroup3 || []).map((item, key) => (
                            <Link
                              key={key}
                              to="#!"
                              className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2"
                            >
                              {item.name}
                              <input
                                type="checkbox"
                                name="not-name"
                                value=""
                                className="float-end mt-1"
                                checked={Math.random() > 0.3}
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Col>

                    <Col xl={4} md={6}>
                      <div className="card jobs-categories">
                        <div className="card-body">
                          <h5>
                            Publicaciones
                            <i className="bx bx-info-circle text-primary mx-1 pt-2 fs-5 cursor-pointer"></i>
                          </h5>
                          {(notificationsGroup4 || []).map((item, key) => (
                            <Link
                              key={key}
                              to="#!"
                              className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2"
                            >
                              {item.name}
                              <input
                                type="checkbox"
                                name="not-name"
                                value=""
                                className="float-end mt-1"
                                checked={Math.random() > 0.3}
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Col>

                    <Col xl={4} md={6}>
                      <div className="card jobs-categories">
                        <div className="card-body">
                          <h5>
                            Top semanales
                            <i className="bx bx-info-circle text-primary mx-1 pt-2 fs-5 cursor-pointer"></i>
                          </h5>
                          {(notificationsGroup5 || []).map((item, key) => (
                            <Link
                              key={key}
                              to="#!"
                              className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2"
                            >
                              {item.name}
                              <input
                                type="checkbox"
                                name="not-name"
                                value=""
                                className="float-end mt-1"
                                checked={Math.random() > 0.3}
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Col>

                    <Col xl={4} md={6}>
                      <div className="card jobs-categories">
                        <div className="card-body">
                          <h5>
                            Aplicación
                            <i className="bx bx-info-circle text-primary mx-1 pt-2 fs-5 cursor-pointer"></i>
                          </h5>
                          {(notificationsGroup6 || []).map((item, key) => (
                            <Link
                              key={key}
                              to="#!"
                              className="px-3 py-2 rounded bg-light bg-opacity-50 d-block mb-2"
                            >
                              {item.name}
                              <input
                                type="checkbox"
                                name="not-name"
                                value=""
                                className="float-end mt-1"
                                checked={Math.random() > 0.3}
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <div>
                    <Link
                      to="#"
                      className="btn btn-success btn-block mt-3"
                      target="_blank"
                    >
                      <i className="bx bx-save" /> Guardar
                    </Link>

                    <Link
                      to="#"
                      className="btn btn-info btn-block mt-3 mx-2"
                      target="_blank"
                    >
                      <i className="bx bx-reset" /> Restaurar
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Container>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default PreferencesNotificationsPage;
