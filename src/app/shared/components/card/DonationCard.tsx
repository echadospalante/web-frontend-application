import React from 'react';

import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { EventDonation } from 'echadospalante-domain';
import { Badge, Card, CardBody, Col, Row } from 'reactstrap';


interface DonationCardProps {
  donation: EventDonation;
  type: 'sent' | 'received';
}

const DonationCard: React.FC<DonationCardProps> = ({ donation, type }) => {
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
        <Row className="g-0 align-items-center">
          <Col xs={4} md={4}>
            <div className="position-relative">
              <img
                src={donation.event.coverPhoto}
                alt={donation.event.title}
                className="img-fluid rounded-start"
                style={{
                  width: '100%',
                  height: '120px',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder-event.jpg'; // Imagen por defecto
                }}
              />
              {/* Badge de monto */}
              <Badge
                color="success"
                className="position-absolute top-0 start-0 m-2 px-2 py-1"
                style={{ fontSize: '0.75rem', fontWeight: 'bold' }}
              >
                {formatAmount(donation.amount)}
              </Badge>
            </div>
          </Col>

          <Col xs={8} md={8}>
            <div className="p-3">
              <Row>
                <Col md={7}>
                  {/* Título del evento */}
                  <h6 className="card-title mb-1 text-truncate">
                    {donation.event.title}
                  </h6>
                  
                  {/* Descripción del evento */}
                  <p className="card-text text-muted mb-2" style={{ fontSize: '0.85rem' }}>
                    {donation.event.description.length > 100
                      ? `${donation.event.description.substring(0, 100)}...`
                      : donation.event.description}
                  </p>

                  {/* Ubicación */}
                  <div className="d-flex align-items-center mb-2">
                    <i className="mdi mdi-map-marker text-muted me-1" style={{ fontSize: '0.9rem' }}></i>
                    <small className="text-muted">
                      {donation.event.location.description}
                    </small>
                  </div>

                  {/* Fecha de donación */}
                  <div className="d-flex align-items-center">
                    <i className="mdi mdi-clock-outline text-muted me-1" style={{ fontSize: '0.9rem' }}></i>
                    <small className="text-muted">
                      {
                        type === "sent" ? "Donado" : "Recibido"
                      } {formatDate(donation.createdAt)}
                    </small>
                  </div>
                </Col>

               {type === "received" && <Col md={5}>
                  {/* Información del donante */}
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-2">
                      {donation.donor.picture ? (
                        <img
                          src={donation.donor.picture}
                          alt={`${donation.donor.firstName} ${donation.donor.lastName}`}
                          className="rounded-circle"
                          style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                        />
                      ) : (
                        <div
                          className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                          style={{ width: '40px', height: '40px', fontSize: '0.8rem' }}
                        >
                          {getInitials(donation.donor.firstName, donation.donor.lastName)}
                        </div>
                      )}
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex align-items-center">
                        <span className="fw-medium" style={{ fontSize: '0.9rem' }}>
                          {donation.donor.firstName} {donation.donor.lastName}
                        </span>
                        {donation.donor.verified && (
                          <i
                            className="mdi mdi-check-decagram text-primary ms-1"
                            style={{ fontSize: '0.8rem' }}
                            title="Usuario verificado"
                          ></i>
                        )}
                      </div>
                      {donation.donor.municipality && (
                        <small className="text-muted">
                          {donation.donor.municipality.name}
                        </small>
                      )}
                    </div>
                  </div>
                </Col>}
              </Row>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default DonationCard;
