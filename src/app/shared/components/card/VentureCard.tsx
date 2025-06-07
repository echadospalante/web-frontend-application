import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Row,
  UncontrolledTooltip,
} from 'reactstrap';
import { Venture } from 'echadospalante-domain';
import { textToRGB } from '../../helpers/colors';
import { formatDate } from '../../helpers/dates';

export type VentureCardProps = {
  venture: Venture;
  ownerButtons?: boolean;
};

const VentureCard = ({ venture, ownerButtons = true }: VentureCardProps) => {
  return (
    <a target="_blank" href={`/principal/emprendimientos/${venture.slug}`}>
      <Card className="border overflow-hidden">
        <CardBody>
          <Row className="d-flex">
            <Col lg={4} md={6} sm={12} className=" mx-auto">
              <img
                src={venture.coverPhoto}
                className="w-100 bg-light text-danger font-size-16 rounded-2"
              />
            </Col>

            <Col lg={4} md={6} sm={12} className="flex-grow-1 overflow-hidden">
              <h5 className="text-truncate font-size-15">
                <p className="text-dark mt-0">{venture.name}</p>
              </h5>
              <p className="text-muted mb-2" id={`description-${venture.id}`}>
                {venture.description.substring(0, 100)}
                {venture.description.length >= 100 ? '...' : ''}
              </p>

              <UncontrolledTooltip
                placement="top"
                target={`description-${venture.id}`}
              >
                <p>{venture.description}</p>
              </UncontrolledTooltip>
            </Col>
            <ul className="list-inline my-3">
              {venture.categories.map((category) => (
                <li key={category.id} className="list-inline-item me-1">
                  <UncontrolledTooltip
                    placement="top"
                    target={`category-${category.id}`}
                  >
                    <p>{category.description}</p>
                  </UncontrolledTooltip>
                  <p
                    id={`category-${category.id}`}
                    className="px-1 py-1"
                    style={{
                      backgroundColor: textToRGB(category.name),
                      color: 'white',
                      fontSize: '12px',
                      borderRadius: '5px',
                      marginBottom: '5px',
                    }}
                  >
                    {category.name}
                  </p>
                </li>
              ))}
            </ul>
          </Row>
        </CardBody>

        <div className="px-4 py-1">
          <ul className="list-inline mb-0">
            <div className="mt-0 d-flex justify-content-between">
              <Badge
                className={`py-1 px-2 bg-${
                  venture.active ? 'success' : 'danger'
                }`}
              >
                {venture.active ? 'Activo' : 'Inactivo'}
              </Badge>
              <Badge
                className={`py-1 px-2 bg-${
                  venture.verified ? 'info' : 'secondary'
                }`}
              >
                <i
                  className={`bx ${
                    venture.verified ? 'bx-badge-check' : 'bx bx-badge'
                  } me-2`}
                ></i>
                {venture.verified ? 'Verificado' : 'No verificado'}
              </Badge>
            </div>
          </ul>
        </div>

        <Row className="border-top">
          <Col lg={ownerButtons ? 6 : 12} md={ownerButtons ? 6 : 12} sm={12}>
            <div className="px-4 py-2">
              <ul
                className={`list-inline mb-0 ${ownerButtons ? 'd-flex justify-content-between' : 'd-flex justify-content-between'}`}
              >
                <li
                  className="list-inline-item me-3 d-flex flex-column align-items-center"
                  id={`creation-date-${venture.id}`}
                >
                  <div className="d-flex align-items-center">
                    <i className="text-primary mdi mdi-calendar-star me-1 fs-4" />
                    <small className="fw-medium font-size-13">
                      {formatDate(venture.createdAt)}
                    </small>
                  </div>
                  <span>Fecha de creación</span>

                  <UncontrolledTooltip
                    placement="top"
                    target={`creation-date-${venture.id}`}
                  >
                    F. de creación
                  </UncontrolledTooltip>
                </li>

                <li
                  className="list-inline-item me-3 d-flex flex-column align-items-center"
                  id={`publications-${venture.id}`}
                >
                  <div className="d-flex align-items-center">
                    <i className="text-primary mdi mdi-bullhorn-outline me-1 fs-4" />
                    <small className="fw-medium font-size-13">
                      {Math.ceil(Math.random() * 100)}
                    </small>
                  </div>
                  <span>Publicaciones</span>

                  <UncontrolledTooltip
                    placement="top"
                    target={`publications-${venture.id}`}
                  >
                    Cantidad de publicaciones
                  </UncontrolledTooltip>
                </li>

                <li
                  className="list-inline-item me-3 d-flex flex-column align-items-center"
                  id={`events-${venture.id}`}
                >
                  <div className="d-flex align-items-center">
                    <i className="text-primary mdi mdi-calendar-multiselect me-1 fs-4"></i>
                    <small className="fw-medium font-size-13">
                      {Math.ceil(Math.random() * 100)}
                    </small>
                  </div>
                  <span>Eventos</span>
                  <UncontrolledTooltip
                    placement="top"
                    target={`events-${venture.id}`}
                  >
                    Número de eventos
                  </UncontrolledTooltip>
                </li>

                <li
                  className="list-inline-item me-3 d-flex flex-column align-items-center"
                  id={`reactions-${venture.id}`}
                >
                  <div className="d-flex align-items-center">
                    <i className="text-primary mdi mdi-thumb-up-outline me-1 fs-4"></i>
                    <small className="fw-medium font-size-13">
                      {Math.ceil(Math.random() * 100)}
                    </small>
                  </div>
                  <span>Reacciones</span>
                  <UncontrolledTooltip
                    placement="top"
                    target={`reactions-${venture.id}`}
                  >
                    Número de reacciones
                  </UncontrolledTooltip>
                </li>

                <li
                  className="list-inline-item me-3 d-flex flex-column align-items-center"
                  id={`comments-${venture.id}`}
                >
                  <div className="d-flex align-items-center">
                    <i className="text-primary mdi mdi-comment-outline me-1 fs-4"></i>
                    <small className="fw-medium font-size-13">10</small>
                  </div>
                  <span>Comentarios</span>
                  <UncontrolledTooltip
                    placement="top"
                    target={`comments-${venture.id}`}
                  >
                    Número de comentarios
                  </UncontrolledTooltip>
                </li>
              </ul>
            </div>
          </Col>

          {ownerButtons && (
            <Col lg={6} md={6} sm={12}>
              <div className="px-4 py-2">
                <div className="mt-0 d-flex justify-content-end">
                  <Link
                    to={`/principal/cuenta/emprendimientos/${venture.id}/publicaciones/nueva`}
                    className="mx-2 btn btn-outline-primary"
                  >
                    <i className="bx bx-plus me-1"></i> Crear publicación
                  </Link>

                  <Link
                    to={`/principal/cuenta/emprendimientos/${venture.id}/eventos/nuevo`}
                    className="mx-2 btn btn-outline-primary"
                  >
                    <i className="bx bx-plus me-1"></i> Crear evento
                  </Link>
                </div>
              </div>
              <div className="px-4 py-2">
                <div className="mt-0 d-flex justify-content-end">
                  <Button className="mx-2 btn btn-info">
                    <i className="bx bx-edit-alt me-1"></i> Editar
                  </Button>
                  <Button className="btn btn-danger">
                    <i className="bx bx-trash me-1"></i> Eliminar
                  </Button>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </Card>
    </a>
  );
};

export default VentureCard;

import type { SVGProps } from 'react';
import { Link } from 'react-router-dom';

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
