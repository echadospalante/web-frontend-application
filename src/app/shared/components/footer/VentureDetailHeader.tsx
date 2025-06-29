import { Venture } from 'echadospalante-domain';
import { Card, Row, Col, CardImg, CardBody, Badge, Button } from 'reactstrap';

const VentureDetailHeader = ({ venture, subscriptionsCount, sponsorshipsCount }: {
  venture: Venture;
  subscriptionsCount: number;
  sponsorshipsCount: number;
}) => {
  const formatDate = (dateString: Date) => {
    return new Date(dateString).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency
    }).format(amount);
  };

  return (
    <Card className="shadow-lg border-0 mb-4">
      <Row className="g-0">
        <Col md={4}>
          <CardImg
            src={venture.coverPhoto}
            alt={venture.name}
            className="h-100 object-fit-cover rounded-start"
            style={{ minHeight: '300px' }}
          />
        </Col>
        <Col md={8}>
          <CardBody className="p-4">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h2 className="h3 mb-2 fw-bold text-primary">{venture.name}</h2>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <Badge color={venture.verified ? 'success' : 'warning'} pill>
                    {venture.verified ? 'Verificado' : 'No Verificado'}
                  </Badge>
                  <Badge color={venture.active ? 'success' : 'secondary'} pill>
                    {venture.active ? 'Activo' : 'Inactivo'}
                  </Badge>
                </div>
              </div>
              <div className="d-flex gap-2">
                <Button color="outline-primary" size="sm">
                  <i className="me-1 mdi mdi-share-outline" />
                  Compartir
                </Button>
                <Button color="primary" size="sm">
                  <i className="me-1 mdi mdi-arrow-right" />
                  Seguir
                </Button>
              </div>
            </div>

            <p className="text-muted mb-3">{venture.description}</p>

            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <div className="d-flex align-items-center text-muted">
                  <i className="mdi mdi-map-marker me-2 text-primary" />
                  <small>{venture.location?.description}</small>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center text-muted">
                  <i className="mdi mdi-calendar" />
                  <small>Creado el {formatDate(venture.createdAt)}</small>
                </div>
              </div>
            </div>

            <div className="row g-3 mb-3">
              <div className="col-md-4">
                <div className="text-center p-2 bg-light rounded">
                  {/*<Users size={20} className="text-primary mb-1" />*/}
                  <i className="mdi mdi-account-multiple-outline me-1 fs-1" />
                  <div className="fw-bold">{subscriptionsCount}</div>
                  <small className="text-muted">Suscriptores</small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center p-2 bg-light rounded">
                  <i className="mdi mdi-currency-usd me-1 fs-1" />
                  <div className="fw-bold">
                    {formatCurrency(
                      1000,
                      "USD",
                    )}
                  </div>
                  <small className="text-muted">Patrocinio Mensual</small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src={venture.owner!.picture}
                    alt={`${venture.owner!.firstName} ${venture.owner!.lastName}`}
                    className="rounded-circle me-2"
                    width="32"
                    height="32"
                  />
                  <div>
                    <div
                      className="fw-semibold"
                      style={{ fontSize: '0.875rem' }}
                    >
                      {venture.owner!.firstName} {venture.owner!.lastName}
                    </div>
                    <small className="text-muted">Propietario</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-2">
              {venture.categories.map((category) => (
                <Badge key={category.id} color="light" className="text-dark">
                  {category.name}
                </Badge>
              ))}
            </div>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default VentureDetailHeader;