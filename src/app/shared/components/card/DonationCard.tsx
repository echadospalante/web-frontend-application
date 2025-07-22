import React from 'react';

import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { EventDonation } from 'echadospalante-domain';
import { Badge, Card, CardBody, Col, Row, Progress } from 'reactstrap';

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

  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-CO', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const getEventStatus = () => {
    if (
      !donation.event.datesAndHours ||
      donation.event.datesAndHours.length === 0
    ) {
      return {
        status: 'sin-fecha',
        text: 'Sin fecha definida',
        color: 'secondary',
      };
    }

    const eventDates = donation.event.datesAndHours.map(
      (d) => new Date(d.date),
    );
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const upcomingDates = eventDates.filter((date) => date >= today);
    const pastDates = eventDates.filter((date) => date < today);

    if (upcomingDates.length > 0) {
      const nextDate = upcomingDates[0];
      const diffTime = nextDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 0) {
        return { status: 'hoy', text: 'Hoy', color: 'warning' };
      } else if (diffDays === 1) {
        return { status: 'manana', text: 'Mañana', color: 'info' };
      } else if (diffDays <= 7) {
        return {
          status: 'esta-semana',
          text: `En ${diffDays} días`,
          color: 'info',
        };
      } else {
        return {
          status: 'proximo',
          text: formatEventDate(nextDate.toISOString()),
          color: 'primary',
        };
      }
    } else if (pastDates.length > 0) {
      return { status: 'finalizado', text: 'Finalizado', color: 'success' };
    }

    return { status: 'sin-fecha', text: 'Sin fecha', color: 'secondary' };
  };

  const eventStatus = getEventStatus();

  // Calcular porcentaje de contribución del donante
  const contributionPercentage =
    donation.event.totalDonations > 0
      ? (donation.amount / donation.event.totalDonations) * 100
      : 0;

  return (
    <Card className="border border-success h-100">
      <CardBody className="p-0">
        <Row className="g-0 align-items-stretch">
          <Col xs={4} md={3}>
            <div className="position-relative h-100 p-3">
              <img
                src={donation.event.coverPhoto}
                alt={donation.event.title}
                className="img-fluid rounded-start rounded-2"
                style={{
                  width: '100%',
                  height: '160px',
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
                {formatAmount(donation.amount)}
              </Badge>

              <Badge
                color={eventStatus.color}
                className="position-absolute bottom-0 start-0 m-2 px-2 py-1"
                style={{ fontSize: '0.7rem' }}
              >
                {eventStatus.text}
              </Badge>
            </div>
          </Col>

          <Col xs={8} md={9}>
            <div className="p-3 h-100 d-flex flex-column">
              <Row className="flex-grow-1">
                <Col md={type === 'received' ? 6 : 12}>
                  <div className="d-flex align-items-start justify-content-between mb-2">
                    <div className="flex-grow-1">
                      <h6 className="card-title mb-1 text-truncate">
                        {donation.event.title}
                      </h6>
                      <div className="d-flex align-items-center mb-1">
                        <small className="text-muted fw-medium">
                          {donation.event.venture?.name}
                        </small>
                        {donation.event.venture?.verified && (
                          <i
                            className="mdi mdi-check-decagram text-success ms-1"
                            style={{ fontSize: '0.75rem' }}
                            title="Venture verificado"
                          ></i>
                        )}
                      </div>
                    </div>
                  </div>

                  <p
                    className="card-text text-muted mb-2"
                    style={{ fontSize: '0.85rem', lineHeight: '1.3' }}
                  >
                    {donation.event.description.length > 80
                      ? `${donation.event.description.substring(0, 80)}...`
                      : donation.event.description}
                  </p>

                  <div className="mb-2">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <small className="text-muted">
                        {donation.event.donationsCount} donaciones
                      </small>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <small className="text-muted fw-medium">
                        {formatAmount(donation.event.totalDonations)}
                      </small>
                    </div>

                    {type === 'sent' && (
                      <div className="mb-2">
                        <Progress
                          value={contributionPercentage}
                          color="success"
                          style={{ height: '4px' }}
                          className="mb-1"
                        />
                        <small className="text-muted">
                          Tu contribución: {contributionPercentage.toFixed(1)}%
                        </small>
                      </div>
                    )}
                  </div>

                  {donation.event.datesAndHours &&
                    donation.event.datesAndHours.length > 0 && (
                      <div className="d-flex align-items-center mb-2">
                        <i
                          className="mdi mdi-calendar text-muted me-1"
                          style={{ fontSize: '0.9rem' }}
                        ></i>
                        <small className="text-muted">
                          {donation.event.datesAndHours.length === 1
                            ? formatEventDate(
                                donation.event.datesAndHours[0].date,
                              )
                            : `${formatEventDate(donation.event.datesAndHours[0].date)} - ${formatEventDate(donation.event.datesAndHours[donation.event.datesAndHours.length - 1].date)}`}
                        </small>
                      </div>
                    )}

                  {donation.event.datesAndHours &&
                    donation.event.datesAndHours.length > 0 && (
                      <div className="d-flex align-items-center mb-2">
                        <i
                          className="mdi mdi-clock-outline text-muted me-1"
                          style={{ fontSize: '0.9rem' }}
                        ></i>
                        <small className="text-muted">
                          {donation.event.datesAndHours[0].workingRanges?.[0]
                            ? `${donation.event.datesAndHours[0].workingRanges[0].start} - ${donation.event.datesAndHours[0].workingRanges[0].end}`
                            : 'Horario por definir'}
                        </small>
                      </div>
                    )}

                  <div className="d-flex align-items-center">
                    <i
                      className="mdi mdi-heart text-danger me-1"
                      style={{ fontSize: '0.9rem' }}
                    ></i>
                    <small className="text-muted">
                      {type === 'sent' ? 'Donado' : 'Recibido'}{' '}
                      {formatDate(donation.createdAt)}
                    </small>
                  </div>
                </Col>

                {type === 'received' && (
                  <Col md={6}>
                    <div className="h-100 d-flex flex-column justify-content-center overflow-hidden">
                      <div className="d-flex align-items-center mb-2">
                        <div className="flex-shrink-0 me-2">
                          {donation.donor.picture ? (
                            <img
                              src={donation.donor.picture}
                              alt={`${donation.donor.firstName} ${donation.donor.lastName}`}
                              className="rounded-circle"
                              style={{
                                width: '45px',
                                height: '45px',
                                objectFit: 'cover',
                              }}
                            />
                          ) : (
                            <div
                              className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                              style={{
                                width: '45px',
                                height: '45px',
                                fontSize: '0.85rem',
                                fontWeight: 'bold',
                              }}
                            >
                              {getInitials(
                                donation.donor.firstName,
                                donation.donor.lastName,
                              )}
                            </div>
                          )}
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center mb-1">
                            <span
                              className="fw-medium text-truncate"
                              style={{ fontSize: '0.9rem' }}
                            >
                              {donation.donor.firstName}{' '}
                              {donation.donor.lastName}
                            </span>
                            {donation.donor.verified && (
                              <i
                                className="mdi mdi-check-decagram text-primary ms-1 flex-shrink-0"
                                style={{ fontSize: '0.8rem' }}
                                title="Usuario verificado"
                              ></i>
                            )}
                          </div>

                          {/* Estado del donante */}
                          <div className="d-flex align-items-center">
                            <Badge
                              color={
                                donation.donor.active ? 'success' : 'secondary'
                              }
                              pill
                              className="me-2"
                              style={{ fontSize: '0.6rem' }}
                            >
                              {donation.donor.active ? 'Activo' : 'Inactivo'}
                            </Badge>
                            {donation.donor.onboardingCompleted && (
                              <i
                                className="mdi mdi-account-check text-success"
                                style={{ fontSize: '0.75rem' }}
                                title="Onboarding completado"
                              ></i>
                            )}
                          </div>

                          {/* Información adicional del donante */}
                          <small className="text-muted d-block mt-1">
                            Miembro desde {formatDate(donation.donor.createdAt)}
                          </small>
                        </div>
                      </div>
                    </div>
                  </Col>
                )}
              </Row>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default DonationCard;
