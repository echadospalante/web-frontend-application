/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";

import { ToastContainer } from "react-toastify";

import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
  UncontrolledAlert,
} from "reactstrap";

import Breadcrumb from "../../../../shared/components/breadcrumb/Breadcrumb";

const PreferencesNotificationsPage = () => {
  document.title = "Idioma y Localización | Preferencias";

  const jobCategories1 = [
    { id: 1, name: "Test Nombre Notificación", category: 52 },
    { id: 2, name: "Test Nombre Notificación", category: 10 },
    { id: 3, name: "Test Nombre Notificación", category: 64 },
    { id: 4, name: "Test Nombre Notificación", category: 105 },
    { id: 5, name: "Test Nombre Notificación", category: 142 },
    { id: 6, name: "Test Nombre Notificación", category: 11 },
    { id: 7, name: "Test Nombre Notificación", category: 254 },
    { id: 8, name: "Test Nombre Notificación", category: 79 },
  ];

  const jobCategories2 = [
    { id: 1, name: "Test Nombre Notificación", category: 85 },
    { id: 2, name: "Test Nombre Notificación", category: 19 },
    { id: 3, name: "Test Nombre Notificación", category: 48 },
    { id: 4, name: "Test Nombre Notificación", category: 34 },
    { id: 5, name: "Test Nombre Notificación", category: 33 },
    { id: 6, name: "Test Nombre Notificación", category: 748 },
    { id: 7, name: "Test Nombre Notificación", category: 16 },
    { id: 8, name: "Test Nombre Notificación", category: 94 },
  ];

  const jobCategories3 = [
    { id: 1, name: "Test Nombre Notificación", category: 17 },
    { id: 2, name: "Test Nombre Notificación", category: 64 },
    { id: 3, name: "Test Nombre Notificación", category: 72 },
    { id: 4, name: "Test Nombre Notificación", category: 19 },
    { id: 5, name: "Test Nombre Notificación", category: 305 },
    { id: 6, name: "Test Nombre Notificación", category: 64 },
    { id: 7, name: "Test Nombre Notificación", category: 112 },
    { id: 8, name: "Test Nombre Notificación", category: 31 },
  ];

  const jobCategories4 = [
    { id: 1, name: "Test Nombre Notificación", category: 85 },
    { id: 2, name: "Test Nombre Notificación", category: 19 },
    { id: 3, name: "Test Nombre Notificación", category: 48 },
    { id: 4, name: "Test Nombre Notificación", category: 34 },
    { id: 5, name: "Test Nombre Notificación", category: 33 },
    { id: 6, name: "Test Nombre Notificación", category: 748 },
    { id: 7, name: "Test Nombre Notificación", category: 16 },
    { id: 8, name: "Test Nombre Notificación", category: 94 },
  ];

  const jobCategories5 = [
    { id: 1, name: "Test Nombre Notificación", category: 85 },
    { id: 2, name: "Test Nombre Notificación", category: 19 },
    { id: 3, name: "Test Nombre Notificación", category: 48 },
    { id: 4, name: "Test Nombre Notificación", category: 34 },
    { id: 5, name: "Test Nombre Notificación", category: 33 },
    { id: 6, name: "Test Nombre Notificación", category: 748 },
    { id: 7, name: "Test Nombre Notificación", category: 16 },
    { id: 8, name: "Test Nombre Notificación", category: 94 },
  ];

  const jobCategories6 = [
    { id: 1, name: "Test Nombre Notificación", category: 85 },
    { id: 2, name: "Test Nombre Notificación", category: 19 },
    { id: 3, name: "Test Nombre Notificación", category: 48 },
    { id: 4, name: "Test Nombre Notificación", category: 34 },
    { id: 5, name: "Test Nombre Notificación", category: 33 },
    { id: 6, name: "Test Nombre Notificación", category: 748 },
    { id: 7, name: "Test Nombre Notificación", category: 16 },
    { id: 8, name: "Test Nombre Notificación", category: 94 },
  ];

  return (
    <Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumb
            title="Preferencias"
            breadcrumbItem="Tema y Personalización"
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
                      <b>Tenga en cuenta:</b> Estas preferencias serán guardadas
                      y se sincronizarán automáticamente en todos los
                      dispositivos que use para acceder.
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
                            Test
                            <i className="bx bx-info-circle text-primary mx-1 pt-2 fs-5 cursor-pointer"></i>
                          </h5>
                          {(jobCategories1 || []).map((item, key) => (
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
                            Test
                            <i className="bx bx-info-circle text-primary mx-1 pt-2 fs-5 cursor-pointer"></i>
                          </h5>
                          {(jobCategories2 || []).map((item, key) => (
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
                            Test
                            <i className="bx bx-info-circle text-primary mx-1 pt-2 fs-5 cursor-pointer"></i>
                          </h5>
                          {(jobCategories3 || []).map((item, key) => (
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
                            Test
                            <i className="bx bx-info-circle text-primary mx-1 pt-2 fs-5 cursor-pointer"></i>
                          </h5>
                          {(jobCategories4 || []).map((item, key) => (
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
                            Test
                            <i className="bx bx-info-circle text-primary mx-1 pt-2 fs-5 cursor-pointer"></i>
                          </h5>
                          {(jobCategories5 || []).map((item, key) => (
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
                            Test
                            <i className="bx bx-info-circle text-primary mx-1 pt-2 fs-5 cursor-pointer"></i>
                          </h5>
                          {(jobCategories6 || []).map((item, key) => (
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
