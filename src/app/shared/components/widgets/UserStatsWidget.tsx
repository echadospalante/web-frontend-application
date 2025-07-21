import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap';

import useUserUsageStatistics from '../../../modules/principal/account/hooks/useUserUsageStatistics';
import AlertWithReload from '../alert/AlertWithReload';
import AppSpinner from '../loader/Spinner';

const statsData = [
  {
    slug: 'venturesCount',
    title: 'Emprendimientos',
    icon: 'mdi-lightbulb',
    color: 'primary',
    bgColor: 'bg-primary-subtle',
    cols: { lg: 12, md: 12, sm: 12 },
  },
  {
    slug: 'publicationsCount',
    title: 'Publicaciones',
    icon: 'mdi-post',
    color: 'success',
    bgColor: 'bg-success-subtle',
    cols: { lg: 12, md: 12, sm: 12 },
  },
  {
    slug: 'eventsCount',
    title: 'Eventos',
    icon: 'mdi-calendar-multiple',
    color: 'info',
    bgColor: 'bg-info-subtle',
    cols: { lg: 12, md: 12, sm: 12 },
  },
  {
    slug: 'subscriptionsCount',
    title: 'Suscripciones',
    icon: 'mdi-account-plus',
    color: 'warning',
    bgColor: 'bg-warning-subtle',
    cols: { lg: 6, md: 6, sm: 6 },
  },
  {
    slug: 'generalSubscribersCount',
    title: 'Suscriptores en General',
    icon: 'mdi-account-group',
    color: 'secondary',
    bgColor: 'bg-secondary-subtle',
    cols: { lg: 6, md: 6, sm: 6 },
  },
  {
    slug: 'donationsGivenCount',
    title: 'Donaciones Realizadas',
    icon: 'mdi-heart-outline',
    color: 'danger',
    bgColor: 'bg-danger-subtle',
    cols: { lg: 6, md: 6, sm: 6 },
  },
  {
    slug: 'donationsReceivedCount',
    title: 'Donaciones Recibidas',
    icon: 'mdi-gift',
    color: 'success',
    bgColor: 'bg-success-subtle',
    cols: { lg: 6, md: 6, sm: 6 },
  },
  {
    slug: 'sponsorshipsGivenCount',
    title: 'Patrocinios Brindados',
    icon: 'mdi-handshake',
    color: 'info',
    bgColor: 'bg-info-subtle',
    cols: { lg: 6, md: 6, sm: 6 },
  },
  {
    slug: 'sponsorshipsReceivedCount',
    title: 'Patrocinios Recibidos',
    icon: 'mdi-star',
    color: 'warning',
    bgColor: 'bg-warning-subtle',
    cols: { lg: 6, md: 6, sm: 6 },
  },
  {
    slug: 'commentsCount',
    title: 'Comentarios',
    icon: 'mdi-comment',
    color: 'primary',
    bgColor: 'bg-primary-subtle',
    cols: { lg: 6, md: 6, sm: 6 },
  },
  {
    slug: 'clapsCount',
    title: 'Aplausos',
    icon: 'mdi-thumb-up',
    color: 'secondary',
    bgColor: 'bg-secondary-subtle',
    cols: { lg: 6, md: 6, sm: 6 },
  },
];

const UserStatsWidget = () => {
  const { loading, error, data, refetchStats } = useUserUsageStatistics();

  if (loading) {
    return (
      <Card style={{ height: '150px' }}>
        <CardBody className="d-flex justify-content-center align-items-baseline">
          <div>
            <AppSpinner />
          </div>
          <p className="text-center">Cargando estadísticas de uso...</p>
        </CardBody>
      </Card>
    );
  }

  if (error || !data) {
    return (
      <Card style={{ height: '150px' }}>
        <CardBody className="px-5 d-flex justify-content-center align-items-center">
          <AlertWithReload
            message="Error al consultar las estadísticas de uso, por favor intente nuevamente"
            onReload={refetchStats}
          />
        </CardBody>
      </Card>
    );
  }

  return (
    <Card>
      <CardTitle className="px-4 pt-4">
        <h5 className="card-title mb-0">
          Échale un vistazo a tus estadísticas
        </h5>
      </CardTitle>
      <CardBody>
        <Col>
          <div className="pt-0">
            <Row className="g-1">
              {Object.entries(data).map(([key, value]) => {
                const item = statsData.find((stat) => stat.slug === key);
                if (!item) return null;

                return (
                  <Col
                    sm={item.cols.sm}
                    md={item.cols.md}
                    lg={item.cols.lg}
                    key={key}
                    className="mb-0"
                  >
                    <div
                      className={`${item.bgColor} rounded-3 p-3 shadow-sm border-0`}
                    >
                      <div className="d-flex align-items-center">
                        <div
                          className={`avatar-sm rounded-circle bg-${item.color} d-flex align-items-center justify-content-center me-3`}
                          style={{
                            width: '50px',
                            height: '50px',
                          }}
                        >
                          <i
                            className={`mdi ${item.icon} text-white`}
                            style={{
                              fontSize: '1.5rem',
                            }}
                          ></i>
                        </div>
                        <div className="flex-1">
                          <h6
                            className={`text-${item.color} mb-1 font-weight-bold`}
                            style={{ fontSize: '0.85rem' }}
                          >
                            {item.title}
                          </h6>
                          <h4
                            className={`text-${item.color} mb-0 font-weight-bold`}
                          >
                            {value}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>

            <div className="mt-4">
              <Link to="" className="btn btn-primary btn-md w-100">
                <i className="mdi mdi-account-edit me-2"></i>
                Editar perfil
              </Link>
            </div>
          </div>
        </Col>
      </CardBody>
    </Card>
  );
};

export default UserStatsWidget;
