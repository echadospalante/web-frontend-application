import { Venture } from 'echadospalante-domain';
import { Link } from 'react-router-dom';
import { Button, Col, Row, UncontrolledTooltip } from 'reactstrap';

import useFetchVentureStats from '../../../modules/principal/ventures/hooks/useFetchVentureStats';
import AlertWithReload from '../alert/AlertWithReload';
import AppLoading from '../loader/AppLoading';

export interface VentureCardFooterProps {
  venture: Venture;
  ownerButtons: boolean;
}

const VentureCardFooter: React.FC<VentureCardFooterProps> = ({
  venture,
  ownerButtons,
}) => {
  const { data, isError, isLoading, refetch } = useFetchVentureStats(
    venture.id,
  );

  if (isLoading) {
    return (
      <div className="px-4 py-3 mb-0">
        <AppLoading
          iconPath={''}
          message="Cargando información del emprendimiento"
        />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="px-4 py-3 mb-0">
        <AlertWithReload
          message="Error cargando información del emprendimiento, intente nuevamente"
          onReload={refetch}
        />
      </div>
    );
  }

  return (
    <Row className="g-0">
      <Col lg={ownerButtons ? 7 : 12} md={ownerButtons ? 7 : 12} sm={12}>
        <div className="px-4 py-3">
          <div className="d-flex justify-content-around text-center">
            {data.publicationsCount ? (
              <Link
                className="flex-fill"
                id={`publications-${venture.id}`}
                to={`/principal/emprendimientos/${venture.id}/publicaciones`}
              >
                <i className="text-success mdi mdi-bullhorn-outline fs-4 d-block mb-1" />
                <div className="fw-semibold text-dark">
                  {data.publicationsCount}
                </div>
                <small className="text-muted">Publicaciones</small>
                <UncontrolledTooltip
                  placement="top"
                  target={`publications-${venture.id}`}
                >
                  Click para ver las publicaciones
                </UncontrolledTooltip>
              </Link>
            ) : (
              <div className="flex-fill">
                <i className="text-danger mdi mdi-bullhorn-outline fs-4 d-block mb-1"></i>
                <div className="fw-semibold text-dark">Opps...</div>
                <small className="text-muted">Sin publicaciones aún</small>
              </div>
            )}

            {data.eventsCount > 0 ? (
              <Link
                className="flex-fill border-start border-end"
                id={`comments-${venture.id}`}
                to={`/principal/emprendimientos/${venture.id}/eventos`}
              >
                <i className="text-success mdi mdi-calendar-multiselect fs-4 d-block mb-1"></i>
                <div className="fw-semibold text-dark">{data.eventsCount}</div>
                <small className="text-muted">Eventos</small>
                <UncontrolledTooltip
                  placement="top"
                  target={`comments-${venture.id}`}
                >
                  Click para ver los eventos
                </UncontrolledTooltip>
              </Link>
            ) : (
              <div className="flex-fill border-start border-end">
                <i className="text-danger mdi mdi-calendar-multiselect fs-4 d-block mb-1"></i>
                <div className="fw-semibold text-dark">Opps...</div>
                <small className="text-muted">Sin eventos aún</small>
              </div>
            )}

            <div
              className="flex-fill border-start border-end"
              id={`events-${venture.id}`}
            >
              <i className="text-success mdi mdi-account-group-outline fs-4 d-block mb-1"></i>
              <div className="fw-semibold text-dark">
                {venture.subscriptionsCount}
              </div>
              <small className="text-muted">
                {venture.subscriptionsCount === 1
                  ? 'Suscriptor'
                  : 'Suscriptores'}
              </small>
            </div>

            {/*<div
              className="flex-fill border-start border-end"
              id={`events-${venture.id}`}
            >
              <i className="text-success mdi mdi-hand-heart-outline fs-4 d-block mb-1"></i>
              <div className="fw-semibold text-dark">{data.clapsCount}</div>
              <small className="text-muted">
                {data.clapsCount === 1 ? 'Patrocinio' : 'Patrocinios'}
              </small>
            </div>*/}

            <div className="flex-fill" id={`sponsors-${venture.id}`}>
              <i className="text-success mdi mdi-hand-heart-outline fs-4 d-block mb-1"></i>
              <div className="fw-semibold text-dark">{data.commentsCount}</div>
              <small className="text-muted">
                {data.clapsCount === 1 ? 'Patrocinio' : 'Patrocinios'}
              </small>
            </div>

            {/*<div
              className="flex-fill border-start border-end"
              id={`events-${venture.id}`}
            >
              <i className="text-success mdi mdi-thumb-up-outline fs-4 d-block mb-1"></i>
              <div className="fw-semibold text-dark">{data.clapsCount}</div>
              <small className="text-muted">
                {data.clapsCount === 1 ? 'Aplauso' : 'Aplausos'}
              </small>
            </div>

            <div className="flex-fill" id={`comments-${venture.id}`}>
              <i className="text-success mdi mdi-comment-outline fs-4 d-block mb-1"></i>
              <div className="fw-semibold text-dark">{data.commentsCount}</div>
              <small className="text-muted">Comentarios</small>
            </div>*/}
          </div>
        </div>
      </Col>

      {ownerButtons && (
        <Col lg={5} md={5} sm={12}>
          <div className="px-4 py-3 border-start">
            <div className="d-flex flex-column gap-2">
              <div className="d-flex gap-2">
                <Link
                  to={`/principal/cuenta/emprendimientos/${venture.id}/publicaciones/nueva`}
                  className="btn btn-outline-primary btn-sm flex-fill"
                >
                  <i className="bx bx-plus me-1"></i>
                  Publicación
                </Link>
                <Link
                  to={`/principal/cuenta/emprendimientos/${venture.id}/eventos/nuevo`}
                  className="btn btn-outline-primary btn-sm flex-fill"
                >
                  <i className="bx bx-plus me-1"></i>
                  Evento
                </Link>
              </div>
              <div className="d-flex gap-2">
                <Button color="info" size="sm" className="flex-fill">
                  <i className="bx bx-edit-alt me-1"></i>
                  Editar
                </Button>
                <Button color="danger" size="sm" className="flex-fill">
                  <i className="bx bx-trash me-1"></i>
                  Eliminar
                </Button>
              </div>
            </div>
          </div>
        </Col>
      )}
    </Row>
  );
};

export default VentureCardFooter;
