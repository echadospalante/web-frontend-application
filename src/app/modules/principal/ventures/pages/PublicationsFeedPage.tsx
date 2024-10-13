import { Fragment, useState } from "react";

import {
  Card,
  Col,
  Container,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

import classnames from "classnames";
import { Link } from "react-router-dom";
import FeedRightSidebar from "../../../../shared/components/rightbar/FeedRightSidebar";

const PublicationsFeedPage = () => {
  document.title = "Feed de Publicaciones | Echadospa'lante";
  const [activeTab, toggleTab] = useState("1");

  return (
    <Fragment>
      <div className="page-content">
        <Container fluid>
          {/* <Breadcrumb title="Emprendimientos" breadcrumbItem="Publicaciones" /> */}

          <Row>
            <Col lg={9}>
              <Card>
                <ul
                  className="nav nav-tabs nav-tabs-custom justify-content-center pt-2"
                  role="tablist"
                >
                  <NavItem>
                    <NavLink
                      to="#"
                      className={classnames({
                        active: activeTab === "1",
                      })}
                      onClick={() => {
                        toggleTab("1");
                      }}
                    >
                      Publicaciones
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      className={classnames({
                        active: activeTab === "2",
                      })}
                      onClick={() => {
                        toggleTab("2");
                      }}
                    >
                      Historial
                    </NavLink>
                  </NavItem>
                </ul>

                <TabContent className="p-4" activeTab={activeTab}>
                  <TabPane tabId="1">
                    <div>
                      <Row className="justify-content-center">
                        <Col xl={8}>
                          <div>
                            <Row className="align-items-center">
                              <Col xs={4}>
                                <div>
                                  <h5 className="mb-0">
                                    Lista de Publicaciones
                                  </h5>
                                </div>
                              </Col>

                              <Col xs={8}>
                                <div className="float-end">
                                  <ul className="nav nav-pills">
                                    <NavItem>
                                      <NavLink
                                        className="disabled"
                                        to="#"
                                        tabIndex={-1}
                                      >
                                        Vista:
                                      </NavLink>
                                    </NavItem>
                                    <NavItem>
                                      <Link
                                        className="nav-link active"
                                        to="/blog-list"
                                      >
                                        <i className="mdi mdi-format-list-bulleted"></i>
                                      </Link>
                                    </NavItem>
                                    <NavItem>
                                      <Link
                                        to="/blog-grid"
                                        className="nav-link"
                                      >
                                        <i className="mdi mdi-view-grid-outline"></i>
                                      </Link>
                                    </NavItem>
                                  </ul>
                                </div>
                              </Col>
                            </Row>

                            {new Array(10).fill(0).map((_item) => (
                              <Fragment>
                                <hr className="mb-4" />

                                <div>
                                  <h5>
                                    <Link to="#" className="text-dark">
                                      Beautiful Day with Friends
                                    </Link>
                                  </h5>
                                  <p className="text-muted">10 Ago, 2024</p>

                                  <div className="position-relative mb-3">
                                    <img
                                      src="/epl.png"
                                      alt=""
                                      className="img-thumbnail"
                                    />
                                  </div>

                                  <ul className="list-inline">
                                    <li className="list-inline-item mr-3">
                                      <Link to="#" className="text-muted">
                                        <i className="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>{" "}
                                        Nombre Categoría
                                      </Link>
                                    </li>
                                    <li className="list-inline-item mr-3">
                                      <Link to="#" className="text-muted">
                                        <i className="bx bx-comment-dots align-middle text-muted me-1"></i>{" "}
                                        12 Comentarios
                                      </Link>
                                    </li>
                                  </ul>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Autem vero sint recusandae
                                    ullam molestiae eveniet perferendis alias,
                                    omnis laboriosam dolorem dignissimos iure
                                    quas soluta mollitia error quaerat
                                    repudiandae at aliquam!
                                  </p>

                                  <div>
                                    <Link to="#" className="text-primary">
                                      Ver detalle{" "}
                                      <i className="mdi mdi-arrow-right"></i>
                                    </Link>
                                  </div>
                                </div>
                              </Fragment>
                            ))}

                            {/* <hr className="my-5" /> */}

                            {/* <div className="text-center">
                              <ul className="pagination justify-content-center pagination-rounded">
                                <li className="page-item disabled">
                                  <Link to="#" className="page-link">
                                    <i className="mdi mdi-chevron-left"></i>
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link to="#" className="page-link">
                                    1
                                  </Link>
                                </li>
                                <li className="page-item active">
                                  <Link to="#" className="page-link">
                                    2
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link to="#" className="page-link">
                                    3
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link to="#" className="page-link">
                                    ...
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link to="#" className="page-link">
                                    10
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link to="#" className="page-link">
                                    <i className="mdi mdi-chevron-right"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div> */}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </TabPane>

                  <TabPane tabId="2">
                    <div>
                      <Row className="justify-content-center">
                        <Col xl={8}>
                          <h5>Historial de Emprendimientos</h5>

                          <div className="mt-5">
                            <div className="d-flex flex-wrap">
                              <div className="me-2">
                                <h4>2020</h4>
                              </div>
                              <div className="ms-auto">
                                <span className="badge badge-soft-success rounded-pill float-end ms-1 font-size-12">
                                  03
                                </span>
                              </div>
                            </div>
                            <hr className="mt-2" />

                            <div className="list-group list-group-flush">
                              <Link
                                to="#"
                                className="list-group-item text-muted"
                              >
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Nombre emprendimiento
                              </Link>

                              <Link
                                to="#"
                                className="list-group-item text-muted"
                              >
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Nombre emprendimiento
                              </Link>

                              <Link
                                to="#"
                                className="list-group-item text-muted"
                              >
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Nombre emprendimiento
                              </Link>
                            </div>
                          </div>

                          <div className="mt-5">
                            <div className="d-flex flex-wrap">
                              <div className="me-2">
                                <h4>2019</h4>
                              </div>
                              <div className="ms-auto">
                                <span className="badge badge-soft-success badge-pill float-right ms-1 font-size-12">
                                  06
                                </span>
                              </div>
                            </div>
                            <hr className="mt-2" />

                            <div className="list-group list-group-flush">
                              <Link
                                to="#"
                                className="list-group-item text-muted"
                              >
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Nombre emprendimiento
                              </Link>

                              <Link
                                to="#"
                                className="list-group-item text-muted"
                              >
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Nombre emprendimiento
                              </Link>

                              <Link
                                to="#"
                                className="list-group-item text-muted"
                              >
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Nombre emprendimiento
                              </Link>

                              <Link
                                to="#"
                                className="list-group-item text-muted"
                              >
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Cras mi eu turpis
                              </Link>

                              <Link
                                to="#"
                                className="list-group-item text-muted"
                              >
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Nombre emprendimiento
                              </Link>

                              <Link
                                to="#"
                                className="list-group-item text-muted"
                              >
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Nombre emprendimiento
                              </Link>
                            </div>
                          </div>

                          <div className="mt-5">
                            <div className="d-flex flex-wrap">
                              <div className="me-2">
                                <h4>2018</h4>
                              </div>
                              <div className="ms-auto">
                                <span className="badge badge-soft-success rounded-pill float-end ms-1 font-size-12">
                                  03
                                </span>
                              </div>
                            </div>
                            <hr className="mt-2" />

                            <div className="list-group list-group-flush">
                              <Link
                                to="#"
                                className="list-group-item text-muted"
                              >
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Nombre emprendimiento
                              </Link>

                              <Link
                                to="#"
                                className="list-group-item text-muted"
                              >
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Nombre emprendimiento
                              </Link>

                              <Link
                                to="#"
                                className="list-group-item text-muted"
                              >
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Nombre emprendimiento
                              </Link>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </TabPane>
                </TabContent>
              </Card>
            </Col>

            <Col lg={3}>
              <FeedRightSidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default PublicationsFeedPage;
