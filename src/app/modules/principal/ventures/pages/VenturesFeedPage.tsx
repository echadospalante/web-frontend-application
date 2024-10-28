import { Fragment, useState } from "react";

import { Card, Col, Container, NavItem, NavLink, Row } from "reactstrap";

import { Link } from "react-router-dom";
import VenturesFeedRightSidebar from "../../../../shared/components/rightbar/VenturesFeedRightSidebar";
import VenturePublicationCard from "../../../../shared/components/card/VenturePublicationCard";

const VenturesFeedPage = () => {
  document.title = "Feed de Emprendimientos | Echadospa'lante";
  const [venture, setVenture] = useState<Venture>({
    id: "123",
    name: "Cremas doña mariela",
    slug: "cremas-doña-mariela",
    coverPhoto:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    description: "Soem awesome description",
    active: true,
    verified: true,
    ownerDetail: undefined,
    categories: [
      {
        id: "123",
        name: "Some Awesome",
        description: "Some awesome desc of the category",
        slug: "some-category",
        users: [],
        ventures: [],
      },
      {
        id: "456",
        name: "Some cat 2",
        description: "Some awesome desc of the category 2",
        slug: "some-category-2",
        users: [],
        ventures: [],
      },
    ],
    contact: {
      id: "contact-123",
      email: "contact@example.com",
      phoneNumber: "+1234567890",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    location: {
      id: "location-123",
      description: "La Ceja, Antioquia",
      lat: 6.025275394547856,
      lng: -75.43107974837727,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    createdAt: new Date(),
  });
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
                    <div>
                      <Row className="align-items-center py-3">
                        <Col xs={4}>
                          <div>
                            <h5 className="mb-0">Lista de Publicaciones</h5>
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
                                <Link to="/blog-grid" className="nav-link">
                                  <i className="mdi mdi-view-grid-outline"></i>
                                </Link>
                              </NavItem>
                            </ul>
                          </div>
                        </Col>
                      </Row>

                      {new Array(10).fill(0).map((_item) => (
                        <VenturePublicationCard publication={venture} />
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
              </Card>
            </Col>

            <Col lg={3}>
              <VenturesFeedRightSidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default VenturesFeedPage;
