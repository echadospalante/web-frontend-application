import React from 'react';

import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { VentureSponsorship } from 'echadospalante-domain';
import { Badge, Button, Card, CardBody, Col, Row } from 'reactstrap';

interface SponsorshipCardProps {
  sponsorship: VentureSponsorship;
  type: 'sent' | 'received';
}

const SponsorshipCard: React.FC<SponsorshipCardProps> = ({
  sponsorship,
  type,
}) => {
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (date: Date) => {
    return formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: es,
    });
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  return (
    <Card className={`shadow-sm border-0 h-100`}>
      <CardBody className="p-0">
        <Row className="g-0 align-items-start">
          <Col xs={4} md={4}>
            <div className="position-relative">
              <img
                src={sponsorship.venture!.coverPhoto}
                alt={sponsorship.venture!.name}
                className="img-fluid rounded-start"
                style={{
                  width: '100%',
                  height: '120px',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder-event.jpg';
                }}
              />

              <Badge
                color="success"
                className="position-absolute top-0 start-0 m-2 px-2 py-1"
                style={{ fontSize: '0.75rem', fontWeight: 'bold' }}
              >
                {formatAmount(sponsorship.monthlyAmount)}
              </Badge>
            </div>
          </Col>

          <Col xs={8} md={8}>
            <div className="p-3">
              <Row>
                <Col md={7}>
                  <h6 className="card-title mb-1 text-truncate">
                    {sponsorship.venture!.name}
                  </h6>

                  <p
                    className="card-text text-muted mb-2"
                    style={{ fontSize: '0.85rem' }}
                  >
                    {sponsorship.venture!.description.length > 100
                      ? `${sponsorship.venture!.description.substring(0, 100)}...`
                      : sponsorship.venture!.description}
                  </p>

                  <div className="d-flex align-items-center mb-2">
                    <i
                      className="mdi mdi-map-marker text-muted me-1"
                      style={{ fontSize: '0.9rem' }}
                    ></i>
                    <small className="text-muted">
                      {/* {sponsorship.venture!.location!.description} */}
                      La Ceja, Antioquia
                    </small>
                  </div>

                  <div className="d-flex align-items-center">
                    <i
                      className="mdi mdi-clock-outline text-muted me-1"
                      style={{ fontSize: '0.9rem' }}
                    ></i>
                    <small className="text-muted">
                      {type === 'sent' ? 'Patrocinado' : 'Recibido'}{' '}
                      {formatDate(sponsorship.createdAt)}
                    </small>
                  </div>
                    <div>
                      <small>
                        Próximo ciclo de patrocinio: 17 de Agosto de 2025.
                      </small>
                    </div>
                </Col>

                {type === 'received' && (
                  <Col md={5}>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-2">
                        {sponsorship.sponsor!.picture ? (
                          <img
                            src={sponsorship.sponsor!.picture}
                            alt={`${sponsorship.sponsor!.firstName} ${sponsorship.sponsor!.lastName}`}
                            className="rounded-circle"
                            style={{
                              width: '40px',
                              height: '40px',
                              objectFit: 'cover',
                            }}
                          />
                        ) : (
                          <div
                            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                            style={{
                              width: '40px',
                              height: '40px',
                              fontSize: '0.8rem',
                            }}
                          >
                            {getInitials(
                              sponsorship.sponsor!.firstName,
                              sponsorship.sponsor!.lastName,
                            )}
                          </div>
                        )}
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center">
                          <span
                            className="fw-medium"
                            style={{ fontSize: '0.9rem' }}
                          >
                            {sponsorship.sponsor!.firstName}{' '}
                            {sponsorship.sponsor!.lastName}
                          </span>
                          {sponsorship.sponsor!.verified && (
                            <i
                              className="mdi mdi-check-decagram text-primary ms-1"
                              style={{ fontSize: '0.8rem' }}
                              title="Usuario verificado"
                            ></i>
                          )}
                        </div>
                        {sponsorship.sponsor!.municipality && (
                          <small className="text-muted">
                            {sponsorship.sponsor!.municipality.name}
                          </small>
                        )}
                      </div>
                    </div>
                  </Col>
                )}
              </Row>
              {type === 'sent' && (
                <Button color="danger" className="mt-1">
                  Cancelar patrocinio
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default SponsorshipCard;
