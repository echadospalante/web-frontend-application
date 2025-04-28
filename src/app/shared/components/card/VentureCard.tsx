import { Venture } from "echadospalante-core";
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import { textToRGB } from "../../helpers/colors";
import { formatDate } from "../../helpers/dates";

export type VentureCardProps = {
  venture: Venture;
};

const VentureCard = ({ venture }: VentureCardProps) => {
  const [showMapModal, setShowMapModal] = useState(false);

  const handleToggleMapModal = (): void => {
    setShowMapModal(!showMapModal);
  };

  return (
    <Card className="border">
      <CardBody>
        <Row className="d-flex p-1">
          <Col lg={5} md={6} sm={12} className="mx-auto">
            <img
              src={venture.coverPhoto}
              className="w-100 bg-light text-danger font-size-16 rounded-2"
            />
          </Col>

          <Col lg={7} md={6} sm={12} className="flex-grow-1 overflow-hidden">
            <h5 className="text-wrap font-size-15">
              <p className="text-dark mt-0">{venture.name}</p>
            </h5>
            <p className="text-muted mb-2" id={`description-${venture.id}`}>
              {venture.description.substring(0, 200)}
              {venture.description.length >= 200 ? "..." : ""}
            </p>

            <UncontrolledTooltip
              placement="top"
              target={`description-${venture.id}`}
            >
              <p>{venture.description}</p>
            </UncontrolledTooltip>

            <ul className="list-inline mb-0">
              {venture.categories.map((category) => (
                <li key={category.id} className="list-inline-item me-1">
                  <UncontrolledTooltip
                    placement="top"
                    target={`category-${category.id}`}
                  >
                    <p>{category.description}</p>
                  </UncontrolledTooltip>
                  <Link to={`/principal/categorias/${category.slug}`}>
                    <small
                      id={`category-${category.id}`}
                      className="px-2 py-1"
                      style={{
                        backgroundColor: textToRGB(category.name),
                        color: "white",
                        borderRadius: "5px",
                      }}
                    >
                      {category.name}
                    </small>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="px-0 pt-3">
              <ul className="list-inline mb-0">
                <div className="mt-0 p-1 d-flex justify-content-between">
                  {venture.location &&
                  venture.location.lat &&
                  venture.location.lng ? (
                    <Fragment>
                      {showMapModal && (
                        <VentureMapModal
                          modal={showMapModal}
                          toggle={handleToggleMapModal}
                          coords={{
                            lat: venture.location?.lat,
                            lng: venture.location?.lng,
                          }}
                          address={venture.location.description || ""}
                        />
                      )}
                      <Button
                        className="py-0"
                        color="primary"
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
                    </Fragment>
                  ) : (
                    <span className="py-1">
                      {venture.location?.description}
                    </span>
                  )}

                  <Badge
                    className={`py-2 d-flex flex-row align-items-center px-2 bg-${
                      venture.verified ? "info" : "warning"
                    }`}
                  >
                    <i
                      className={`bx ${
                        venture.verified ? "bx-badge-check" : "bx bx-badge"
                      } me-2`}
                    ></i>
                    {venture.verified ? "Verificado" : "No verificado"}
                  </Badge>
                </div>
              </ul>
            </div>
          </Col>
        </Row>
      </CardBody>

      <hr />

      <Row className="px-3">
        <Col lg={12} md={6} sm={12}>
          <div className="px-2 py-0">
            <ul className="list-inline d-flex flex-row justify-content-between mb-0">
              <li
                className="list-inline-item me-3 d-flex align-items-center fs-5"
                id={`creation-date-${venture.id}`}
              >
                <i className="bx bx-calendar me-1" />
                <small>{formatDate(venture.createdAt)}</small>
                <UncontrolledTooltip
                  placement="top"
                  target={`creation-date-${venture.id}`}
                >
                  Fecha de creación
                </UncontrolledTooltip>
              </li>

              <li
                className="list-inline-item me-3 d-flex align-items-center fs-5"
                id={`comments-${venture.id}`}
              >
                <i className="bx bx-comment-dots me-1"></i>
                <small>0</small>
                <UncontrolledTooltip
                  placement="top"
                  target={`comments-${venture.id}`}
                >
                  Número de comentarios
                </UncontrolledTooltip>
              </li>

              <li
                className="list-inline-item me-3 d-flex align-items-center fs-5"
                id={`reactions-${venture.id}`}
              >
                <i className="bx bx-like me-1"></i>
                <small>0</small>
                <UncontrolledTooltip
                  placement="top"
                  target={`reactions-${venture.id}`}
                >
                  Número de reacciones
                </UncontrolledTooltip>
              </li>

              <li
                className="list-inline-item me-3 d-flex align-items-center fs-5"
                id={`comments-${venture.id}`}
              >
                <UilMegaphone />
                <i className="uil uil-megaphone me-1"></i>
                <small>0</small>
                <UncontrolledTooltip
                  placement="top"
                  target={`comments-${venture.id}`}
                >
                  Número de publicaciones
                </UncontrolledTooltip>
              </li>

              <li
                className="list-inline-item me-3 d-flex align-items-center fs-5"
                id={`events-${venture.id}`}
              >
                <i className="bx bx-calendar-event me-1"></i>
                <small>0</small>
                <UncontrolledTooltip
                  placement="top"
                  target={`events-${venture.id}`}
                >
                  Número de eventos
                </UncontrolledTooltip>
              </li>
            </ul>
          </div>
        </Col>

        <Col lg={12}>
          <div className="px-2 py-3">
            <div className="mt-0 d-flex justify-content-end">
              {/* <Link
                to={`/principal/emprendimientos/${venture.id}`}
                className="btn btn-success mx-1"
              >
                <i className="bx bx-link-external me-1"></i> Ver detalle
              </Link> */}
              <Link to={"#"} className="btn btn-primary mx-1">
                <i className="bx bxs-like me-1"></i>
              </Link>
              <Link to={"#"} className="btn btn-info mx-1">
                <i className="bx bxs-comment me-1"></i>
              </Link>
              <Link to={"#"} className="btn btn-danger mx-1">
                <i className="bx bxs-heart me-1"></i>
              </Link>
              <Link
                to={`/principal/emprendimientos/${venture.slug}`}
                className="btn btn-success mx-1"
              >
                <i className="bx bx-link-external me-1"></i> Ver detalle
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default VentureCard;

import { faker } from "@faker-js/faker";
import { Fragment, useState, type SVGProps } from "react";
import VentureMapModal from "../modal/VentureMapModal";
import { Link } from "react-router-dom";

export function UilMegaphone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.991 2.002a1 1 0 0 0-1 1v.637a9.04 9.04 0 0 1-7 3.363h-6a3.003 3.003 0 0 0-3 3v2a3.003 3.003 0 0 0 3 3h.484l-2.403 5.606a1 1 0 0 0 .92 1.394h4a1 1 0 0 0 .918-.606l2.724-6.356a9.03 9.03 0 0 1 6.357 3.325v.637a1 1 0 0 0 2 0v-16a1 1 0 0 0-1-1m-14 11a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v4Zm2.341 7H6.508l2.142-5h1.825Zm10.66-4.478a11.05 11.05 0 0 0-7-2.522h-3v-4h3a11.05 11.05 0 0 0 7-2.522Z"
      ></path>
    </svg>
  );
}
