import { Fragment, useState } from "react";

import { faker } from "@faker-js/faker";
import { Venture } from "echadospalante-core";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import plugins
import Counter from "yet-another-react-lightbox/plugins/counter";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import Breadcrumb from "../../../../shared/components/breadcrumb/Breadcrumb";
import VentureEventsCalendar from "../../../../shared/components/calendar/VentureEventsCalendar";
import SponsorCard from "../../../../shared/components/card/SponsorCard";
import VenturePublicationCard from "../../../../shared/components/card/VenturePublicationCard";
import VentureDetailTabs from "../../../../shared/components/tabs/VentureDetailTabs";
import { textToRGB } from "../../../../shared/helpers/colors";

const VentureDetailPage = () => {
  const [activeTab, setActiveTab] = useState("1");

  const [open, setOpen] = useState(false);

  const toggleActiveTab = (tab: string) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
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
    <div className="page-content">
      <Container fluid>
        {/* Render Breadcrumbs */}
        <Breadcrumb title="Emprendimientos" breadcrumbItem={venture.name} />

        <Row>
          <Col xl={3}>
            <Card>
              <CardBody>
                <h5 className="fw-semibold">Descripción</h5>

                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="col">Categorías</th>
                        <td scope="col">
                          {venture.categories.map(({ name }) => name).join(",")}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Creado:</th>
                        <td>{venture.createdAt.toISOString().split("T")[0]}</td>
                      </tr>
                      <tr>
                        <th scope="row">Verificado</th>
                        <td>{venture.verified ? "Si" : "No"}</td>
                      </tr>
                      <tr>
                        <th scope="row">Ubicación</th>
                        <td>
                          <span className="badge badge-soft-success">
                            {venture.location?.description}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Status</th>
                        <td>
                          <span className="badge badge-soft-info">
                            {venture.active ? "Activo" : "Inactivo"}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <div className="hstack gap-2">
                  <button className="btn btn-soft-primary w-100">
                    Apply Now
                  </button>
                  <button className="btn btn-soft-danger w-100">
                    Contact Us
                  </button>
                </div> */}
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <div className="text-center">
                  <img
                    src={"/epl.png"}
                    alt=""
                    height="50"
                    className="mx-auto d-block"
                  />
                  <h5 className="mt-3 mb-1">Mariela Calderón</h5>
                  <p className="text-muted mb-0">Desde Agosto, 2024</p>
                </div>

                <ul className="list-unstyled mt-4">
                  <li>
                    <div className="d-flex">
                      <i className="bx bx-phone text-primary fs-4"></i>
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Teléfono</h6>
                        <p className="text-muted fs-14 mb-0">+589 560 56555</p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-3">
                    <div className="d-flex">
                      <i className="bx bx-mail-send text-primary fs-4"></i>
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Email</h6>
                        <p className="text-muted fs-14 mb-0">
                          echadospalante@gmail.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-3">
                    <div className="d-flex">
                      <i className="bx bx-globe text-primary fs-4"></i>
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Website</h6>
                        <p className="text-muted fs-14 text-break mb-0">
                          www.echadospalante.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-3">
                    <div className="d-flex">
                      <i className="bx bx-map text-primary fs-4"></i>
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Ubicación</h6>
                        <p className="text-muted fs-14 mb-0">
                          La Ceja, Antioquia
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link
                    to="#"
                    className="btn btn-soft-primary btn-hover w-100 rounded"
                  >
                    <i className="mdi mdi-eye"></i> View Profile
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl={9}>
            <Card>
              <CardBody className="border-bottom">
                <div className="d-flex">
                  <img src={venture.coverPhoto} alt="" height="250" />
                  <div className="flex-grow-1 ms-3">
                    <h5 className="fw-semibold">{venture.name}</h5>
                    <ul className="list-unstyled hstack gap-2 mb-0">
                      <li>
                        <i className="bx bx-map"></i>{" "}
                        <span className="text-muted">
                          {venture.location?.description}
                        </span>
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex flex-wrap hstack gap-2 mb-0 mt-1">
                      {venture.categories.map((category) => (
                        <li
                          className="px-2 rounded-1"
                          style={{
                            backgroundColor: textToRGB(category.name),
                          }}
                        >
                          <span className=" text-white">{category.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardBody>
              <CardBody>
                <h5 className="fw-semibold mb-3">Descripción</h5>
                <p className="text-muted">{venture.description}</p>
                <section>
                  <Card>
                    <CardBody>
                      <div className="popup-gallery d-flex flex-wrap">
                        <div className="img-fluid float-left">
                          <img
                            src={faker.image.url({ height: 300, width: 450 })}
                            onClick={() => {
                              setOpen(true);
                            }}
                            alt=""
                            width="120"
                          />
                        </div>
                        <div className="img-fluid float-left">
                          <img
                            src={faker.image.url({ height: 300, width: 450 })}
                            onClick={() => {
                              setOpen(true);
                            }}
                            alt=""
                            width="120"
                          />
                        </div>
                        <div className="img-fluid float-left">
                          <img
                            src={faker.image.url({ height: 300, width: 450 })}
                            onClick={() => {
                              setOpen(true);
                            }}
                            alt=""
                            width="120"
                          />
                        </div>
                        <div className="img-fluid float-left">
                          <img
                            src={faker.image.url({ height: 300, width: 450 })}
                            onClick={() => {
                              setOpen(true);
                            }}
                            alt=""
                            width="120"
                          />
                        </div>
                        <div className="img-fluid float-left">
                          <img
                            src={faker.image.url({ height: 300, width: 450 })}
                            onClick={() => {
                              setOpen(true);
                            }}
                            alt=""
                            width="120"
                          />
                        </div>
                        <div className="img-fluid float-left">
                          <img
                            src={faker.image.url({ height: 300, width: 450 })}
                            onClick={() => {
                              setOpen(true);
                            }}
                            alt=""
                            width="120"
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </section>
              </CardBody>

              <CardBody>
                <VentureDetailTabs
                  activeTab={activeTab}
                  toggleCustom={toggleActiveTab}
                />

                <TabContent activeTab={activeTab} className="p-3 text-muted">
                  <TabPane tabId="1">
                    {activeTab === "1" && (
                      <Fragment>
                        {new Array(10).fill(0).map((_item) => (
                          <VenturePublicationCard />
                        ))}
                      </Fragment>
                    )}
                  </TabPane>

                  <TabPane tabId="2">
                    <VentureEventsCalendar ventureId={venture.id} />
                  </TabPane>

                  <TabPane tabId="3">
                    <div className="mt-5">
                      <h5 className="font-size-15">
                        <i className="bx bx-message-dots text-muted align-middle me-1"></i>{" "}
                        Comments :
                      </h5>

                      <div>
                        <div className="d-flex py-3">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar-xs">
                              <div className="avatar-title rounded-circle bg-light text-primary">
                                <i className="bx bxs-user"></i>
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-14 mb-1">
                              Delores Williams{" "}
                              <small className="text-muted float-end">
                                1 hr Ago
                              </small>
                            </h5>
                            <p className="text-muted">
                              If several languages coalesce, the grammar of the
                              resulting language is more simple and regular than
                              that of the individual
                            </p>
                            <div>
                              <Link to="#" className="text-success">
                                <i className="mdi mdi-reply"></i> Reply
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex py-3 border-top">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar-xs">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
                                alt=""
                                className="img-fluid d-block rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-14 mb-1">
                              Clarence Smith{" "}
                              <small className="text-muted float-end">
                                2 hrs Ago
                              </small>
                            </h5>
                            <p className="text-muted">
                              Neque porro quisquam est, qui dolorem ipsum quia
                              dolor sit amet
                            </p>
                            <div>
                              <Link to="#" className="text-success">
                                <i className="mdi mdi-reply"></i> Reply
                              </Link>
                            </div>

                            <div className="d-flex pt-3">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar-xs">
                                  <div className="avatar-title rounded-circle bg-light text-primary">
                                    <i className="bx bxs-user"></i>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h5 className="font-size-14 mb-1">
                                  Silvia Martinez{" "}
                                  <small className="text-muted float-end">
                                    2 hrs Ago
                                  </small>
                                </h5>
                                <p className="text-muted">
                                  To take a trivial example, which of us ever
                                  undertakes laborious physical exercise
                                </p>
                                <div>
                                  <Link to="#" className="text-success">
                                    <i className="mdi mdi-reply"></i> Reply
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex py-3 border-top">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar-xs">
                              <div className="avatar-title rounded-circle bg-light text-primary">
                                <i className="bx bxs-user"></i>
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-14 mb-1">
                              Keith McCoy{" "}
                              <small className="text-muted float-end">
                                12 Aug
                              </small>
                            </h5>
                            <p className="text-muted">
                              Donec posuere vulputate arcu. phasellus accumsan
                              cursus velit
                            </p>
                            <div>
                              <Link to="#" className="text-success">
                                <i className="mdi mdi-reply"></i> Reply
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>

                  <TabPane tabId="4">
                    {activeTab === "4" && (
                      <Row>
                        {new Array(10).fill(0).map((item) => (
                          <SponsorCard sponsorship={item} />
                        ))}
                      </Row>
                    )}
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <Lightbox
        open={open}
        index={0}
        close={() => setOpen(false)}
        slides={[
          { src: faker.image.url({ width: 1820, height: 1080 }) },
          { src: faker.image.url({ width: 1820, height: 1080 }) },
          { src: faker.image.url({ width: 1820, height: 1080 }) },
        ]}
        plugins={[Zoom, Fullscreen, Thumbnails, Download, Counter]}
      />
    </div>
  );
};

export default VentureDetailPage;
