import { Fragment, useState } from "react";

import { Card, Col, Container, NavItem, NavLink, Row } from "reactstrap";

import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
import PublicationsFeedRightSidebar from "../../../../shared/components/rightbar/PublicationsFeedRightSidebar";

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
                <Row className="justify-content-center">
                  <Col xl={8}>
                    <Row className="align-items-center py-3">
                      <Col xs={4}>
                        <div>
                          <h5>Lista de Publicaciones</h5>
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
                              <Link className="nav-link active" to="/blog-list">
                                <i className="mdi mdi-format-list-bulleted"></i>
                              </Link>
                            </NavItem>
                            <NavItem>
                              <Link to="/blog-grid" className="nav-link">
                                <i className="mdi mdi-view-grid-outline"></i>
                              </Link>
                            </NavItem>
                          </ul>
                        </div>
                      </Col>
                    </Row>

                    {new Array(10).fill(0).map((_item) => (
                      <a
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                        }}
                        href={`/principal/feed/${"123"}`}
                      >
                        <Fragment>
                          <hr className="mb-4" />

                          <div>
                            <h5>Beautiful Day with Friends</h5>
                            <p className="text-muted">10 Ago, 2024</p>

                            <div className="position-relative mb-3">
                              <img
                                src={faker.image.url({
                                  width: 1080,
                                  height: 750,
                                })}
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
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Autem vero sint recusandae ullam molestiae
                              eveniet perferendis alias, omnis laboriosam
                              dolorem dignissimos iure quas soluta mollitia
                              error quaerat repudiandae at aliquam!
                            </p>

                            <div>
                              <Link to="#" className="text-primary">
                                Ver detalle{" "}
                                <i className="mdi mdi-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </Fragment>
                      </a>
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
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col lg={3}>
              <PublicationsFeedRightSidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default PublicationsFeedPage;
