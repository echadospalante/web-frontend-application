import { Fragment, useState } from "react";

import { faker } from "@faker-js/faker";
import { Venture } from "echadospalante-core";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  Button,
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
import { stringToColor, textToRGB } from "../../../../shared/helpers/colors";
import VentureSponsorsTable from "./VentureSponsorsTable";
import useVentureDetail from "../hooks/useVentureDetail";
import AppLoading from "../../../../shared/components/loader/AppLoading";
import AlertWithReload from "../../../../shared/components/alert/AlertWithReload";
import VentureMapModal from "../../../../shared/components/modal/VentureMapModal";

const VentureDetailPage = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [open, setOpen] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);

  const handleToggleMapModal = (): void => {
    setShowMapModal(!showMapModal);
  };

  const toggleActiveTab = (tab: string) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const { venture, loading, error, fetchVentureDetail } = useVentureDetail();

  if (loading)
    return (
      <AppLoading
        iconPath={""}
        message="Cargando la información del emprendimiento..."
      />
    );

  console.log({ venture });

  if (error || !venture) {
    return (
      <div className="page-content px-5">
        <div className="d-flex justify-content-center mb-4">
          <img
            src="/images/error-img.png"
            alt="Error"
            className="img-fluid w-25"
          />
        </div>

        <AlertWithReload
          message="Ha ocurrido un error al consultar el emprendimiento, intente nuevamente."
          onReload={fetchVentureDetail}
        />

        <div className="d-flex flex-row justify-content-center my-5">
          <div>
            <p>Si lo anterior no funciona, también podrías:</p>
            <Link to={"/principal/emprendimientos"} className="btn btn-success">
              <i className="mdi mdi-arrow-left-circle me-1"></i>
              Volver a todos los emprendimientos
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
                        <td>
                          {
                            new Date(venture.createdAt)
                              .toISOString()
                              .split("T")[0]
                          }
                        </td>
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
                        <th scope="row">Estado</th>
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
                <h5 className="fw-semibold mb-3">Contacto</h5>

                {/* <div className="text-center">
                  <img
                    src={"/epl.png"}
                    alt=""
                    height="50"
                    className="mx-auto d-block"
                  />
                  <h5 className="mt-3 mb-1">Mariela Calderón</h5>
                  <p className="text-muted mb-0">Desde Agosto, 2024</p>
                </div> */}

                <ul className="list-unstyled mt-4">
                  <li>
                    <div className="d-flex">
                      <i className="bx bx-phone text-primary fs-4"></i>
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Teléfono</h6>
                        <p className="text-muted fs-14 mb-0">
                          {venture.contact?.phoneNumber}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-3">
                    <div className="d-flex">
                      <i className="bx bx-mail-send text-primary fs-4"></i>
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Email</h6>
                        <p className="text-muted fs-14 mb-0">
                          {venture.contact?.email}
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* <li className="mt-3">
                    <div className="d-flex">
                      <i className="bx bx-globe text-primary fs-4"></i>
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Website</h6>
                        <p className="text-muted fs-14 text-break mb-0">
                         No dis
                        </p>
                      </div>
                    </div>
                  </li> */}
                  <li className="mt-3">
                    <div className="d-flex">
                      <i className="bx bx-map text-primary fs-4"></i>
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Ubicación</h6>
                        <p className="text-muted fs-14 mb-0">
                          {venture.location?.description}
                        </p>

                        <Button
                          color="primary"
                          className="mt-2"
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleToggleMapModal();
                          }}
                        >
                          <i className="bx bxs-map me-1"></i>
                          <span>Ver en el mapa</span>
                        </Button>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* <div className="mt-4">
                  <Link
                    to="#"
                    className="btn btn-soft-primary btn-hover w-100 rounded"
                  >
                    <i className="mdi mdi-eye"></i> View Profile
                  </Link>
                </div> */}
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
                          className="px-2 py-1 rounded-2"
                          style={{
                            backgroundColor: stringToColor(category.name),
                          }}
                        >
                          <span className="text-white">{category.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardBody>
              <CardBody>
                <h5 className="fw-semibold mb-3">Descripción</h5>
                <p className="text-muted">{venture.description}</p>
                {/* <section>
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
                </section> */}
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
                        {new Array(10).fill(0).map((publication, i) => (
                          <VenturePublicationCard
                            key={i}
                            publication={publication}
                          />
                        ))}
                      </Fragment>
                    )}
                  </TabPane>

                  <TabPane tabId="2">
                    <VentureEventsCalendar ventureId={venture.id} />
                  </TabPane>

                  <TabPane tabId="3">
                    <VentureSponsorsTable ventureId="123" />
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

      {showMapModal && venture.location?.lat && venture.location.lng ? (
        <VentureMapModal
          modal={showMapModal}
          toggle={handleToggleMapModal}
          coords={{
            lat: venture.location?.lat,
            lng: venture.location?.lng,
          }}
          address={venture.location.description || ""}
        />
      ) : null}

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
