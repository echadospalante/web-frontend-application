import React from 'react';

import { formatDistanceToNow, addMonths, format } from 'date-fns';
import { es } from 'date-fns/locale';
import { VentureSponsorship } from 'echadospalante-domain';
import { Badge, Button, Card, CardBody, Col, Row, Progress } from 'reactstrap';
import useCancelSponsorship from '../../../modules/principal/ventures/hooks/useCancelSponsorship';

interface SponsorshipCardProps {
  sponsorship: VentureSponsorship;
  type: 'sent' | 'received';
}

const SponsorshipCard: React.FC<SponsorshipCardProps> = ({
  sponsorship,
  type,
}) => {
  const { isCancelling, cancelError, handleCancelSponsorship, isSuccess } =
    useCancelSponsorship(sponsorship.venture!.id, sponsorship.venture!.slug);

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

  const getNextPaymentDate = () => {
    const createdDate = new Date(sponsorship.createdAt);
    const now = new Date();
    let nextPayment = addMonths(createdDate, 1);

    while (nextPayment <= now) {
      nextPayment = addMonths(nextPayment, 1);
    }

    return nextPayment;
  };

  const getMonthsActive = () => {
    const createdDate = new Date(sponsorship.createdAt);
    const now = new Date();
    const diffTime = now.getTime() - createdDate.getTime();
    const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44));
    return Math.max(0, diffMonths);
  };

  const getTotalPaid = () => {
    const monthsActive = getMonthsActive();
    return monthsActive * sponsorship.monthlyAmount;
  };

  const getDaysToNextPayment = () => {
    const nextPayment = getNextPaymentDate();
    const now = new Date();
    const diffTime = nextPayment.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getVentureStatus = () => {
    if (!sponsorship.venture?.active) {
      return { status: 'inactivo', text: 'Inactivo', color: 'secondary' };
    }
    if (sponsorship.venture.verified) {
      return { status: 'verificado', text: 'Verificado', color: 'success' };
    }
    return { status: 'activo', text: 'Activo', color: 'info' };
  };

  const nextPaymentDate = getNextPaymentDate();
  const monthsActive = getMonthsActive();
  const totalPaid = getTotalPaid();
  const daysToNext = getDaysToNextPayment();
  // const ventureStatus = getVentureStatus();

  const contributionPercentage =
    sponsorship.venture!.totalSponsorships > 0
      ? (sponsorship.monthlyAmount / sponsorship.venture!.totalSponsorships) *
        100
      : 0;

  if (isSuccess) {
    return <></>;
  }
  return (
    <Card className="border border-success h-100">
      <CardBody className="p-0">
        <Row className="g-0 align-items-stretch">
          <Col xs={4} md={4}>
            <div className="position-relative h-100  p-3">
              <img
                src={sponsorship.venture!.coverPhoto}
                alt={sponsorship.venture!.name}
                className="img-fluid rounded-start"
                style={{
                  width: '100%',
                  height: '180px',
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
                {formatAmount(sponsorship.monthlyAmount)}/mes
              </Badge>

              {/* <Badge
                color={ventureStatus.color}
                className="position-absolute bottom-0 start-0 m-2 px-2 py-1"
                style={{ fontSize: '0.7rem' }}
              >
                {ventureStatus.text}
              </Badge> */}

              {daysToNext <= 7 && (
                <Badge
                  color="warning"
                  className="position-absolute top-0 end-0 m-2 px-2 py-1"
                  style={{ fontSize: '0.7rem' }}
                >
                  {daysToNext === 0 ? 'Hoy' : `${daysToNext}d`}
                </Badge>
              )}
            </div>
          </Col>

          <Col xs={8} md={8}>
            <div className="p-3 h-100 d-flex flex-column">
              <Row className="flex-grow-1">
                <Col md={type === 'received' ? 7 : 12}>
                  <div className="d-flex align-items-start justify-content-between mb-2">
                    <div className="flex-grow-1">
                      <h6 className="card-title mb-1 text-truncate">
                        {sponsorship.venture!.name}
                      </h6>
                      {sponsorship.venture!.verified && (
                        <div className="d-flex align-items-center mb-1">
                          <i
                            className="mdi mdi-check-decagram text-success me-1"
                            style={{ fontSize: '0.8rem' }}
                          ></i>
                          <small className="text-success fw-medium">
                            Venture Verificado
                          </small>
                        </div>
                      )}
                    </div>
                  </div>

                  <p
                    className="card-text text-muted mb-2"
                    style={{ fontSize: '0.85rem', lineHeight: '1.3' }}
                  >
                    {sponsorship.venture!.description.length > 85
                      ? `${sponsorship.venture!.description.substring(0, 85)}...`
                      : sponsorship.venture!.description}
                  </p>

                  <div className="mb-2">
                    <Row>
                      <Col xs={6}>
                        <small className="text-muted d-block">
                          Total patrocinios
                        </small>
                        <span
                          className="fw-bold text-success"
                          style={{ fontSize: '0.9rem' }}
                        >
                          {sponsorship.venture!.sponsorshipsCount}
                        </span>
                      </Col>
                      <Col xs={6}>
                        <small className="text-muted d-block">
                          Total recaudado
                        </small>
                        <span
                          className="fw-bold text-success"
                          style={{ fontSize: '0.9rem' }}
                        >
                          {formatAmount(sponsorship.venture!.totalSponsorships)}
                        </span>
                      </Col>
                    </Row>
                  </div>

                  {type === 'sent' &&
                    sponsorship.venture!.sponsorshipsCount > 1 && (
                      <div className="mb-2">
                        <Progress
                          value={contributionPercentage}
                          color="success"
                          style={{ height: '4px' }}
                          className="mb-1"
                        />
                        <small className="text-muted">
                          Tu contribución: {contributionPercentage.toFixed(1)}%
                          del total mensual
                        </small>
                      </div>
                    )}

                  <div className="mb-2">
                    <div className="d-flex align-items-center mb-1">
                      <i
                        className="mdi mdi-calendar-month text-muted me-1"
                        style={{ fontSize: '0.9rem' }}
                      ></i>
                      <small className="text-muted">
                        {monthsActive === 0
                          ? 'Primer mes'
                          : `${monthsActive + 1} meses activo`}
                      </small>
                    </div>

                    {monthsActive > 0 && (
                      <div className="d-flex align-items-center mb-1">
                        <i
                          className="mdi mdi-cash-multiple text-success me-1"
                          style={{ fontSize: '0.9rem' }}
                        ></i>
                        <small className="text-muted">
                          Total pagado:{' '}
                          <span className="fw-medium text-success">
                            {formatAmount(totalPaid)}
                          </span>
                        </small>
                      </div>
                    )}
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <i
                      className="mdi mdi-map-marker text-muted me-1"
                      style={{ fontSize: '0.9rem' }}
                    ></i>
                    <small className="text-muted">La Ceja, Antioquia</small>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <i
                      className="mdi mdi-calendar-clock text-primary me-1"
                      style={{ fontSize: '0.9rem' }}
                    ></i>
                    <small className="text-muted">
                      <strong>Próximo pago:</strong>{' '}
                      {format(nextPaymentDate, "d 'de' MMMM 'de' yyyy", {
                        locale: es,
                      })}
                      {daysToNext <= 3 && (
                        <span className="text-warning fw-medium">
                          {' '}
                          (
                          {daysToNext === 0
                            ? 'hoy'
                            : `en ${daysToNext} día${daysToNext === 1 ? '' : 's'}`}
                          )
                        </span>
                      )}
                    </small>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <i
                      className="mdi mdi-heart text-danger me-1"
                      style={{ fontSize: '0.9rem' }}
                    ></i>
                    <small className="text-muted">
                      {type === 'sent'
                        ? 'Patrocinando desde'
                        : 'Recibiendo desde'}{' '}
                      {formatDate(sponsorship.createdAt)}
                    </small>
                  </div>

                  {type === 'sent' && (
                    <div className="mt-auto pt-2">
                      <Button
                        onClick={() => handleCancelSponsorship(sponsorship.id)}
                        color="danger"
                        size="sm"
                        outline
                        className="px-3"
                      >
                        <i className="mdi mdi-close me-1"></i>
                        Cancelar patrocinio
                      </Button>
                    </div>
                  )}
                </Col>
              </Row>
            </div>
          </Col>
          <hr className="text-success" />

          {type === 'received' && (
            <Col md={12}>
              <div className="h-100 px-3 d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center mb-2">
                  <div className="flex-shrink-0 me-2">
                    {sponsorship.sponsor!.picture ? (
                      <img
                        src={sponsorship.sponsor!.picture}
                        alt={`${sponsorship.sponsor!.firstName} ${sponsorship.sponsor!.lastName}`}
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
                          sponsorship.sponsor!.firstName,
                          sponsorship.sponsor!.lastName,
                        )}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <span
                        className="fw-medium text-truncate"
                        style={{ fontSize: '0.9rem' }}
                      >
                        {sponsorship.sponsor!.firstName}{' '}
                        {sponsorship.sponsor!.lastName}
                      </span>
                      {sponsorship.sponsor!.verified && (
                        <i
                          className="mdi mdi-check-decagram text-primary ms-1 flex-shrink-0"
                          style={{ fontSize: '0.8rem' }}
                          title="Usuario verificado"
                        ></i>
                      )}
                    </div>

                    <div className="d-flex align-items-center mb-1">
                      <Badge
                        color={
                          sponsorship.sponsor!.active ? 'success' : 'secondary'
                        }
                        pill
                        className="me-2"
                        style={{ fontSize: '0.6rem' }}
                      >
                        {sponsorship.sponsor!.active ? 'Activo' : 'Inactivo'}
                      </Badge>
                      {sponsorship.sponsor!.onboardingCompleted && (
                        <i
                          className="mdi mdi-account-check text-success"
                          style={{ fontSize: '0.75rem' }}
                          title="Onboarding completado"
                        ></i>
                      )}
                    </div>

                    <small className="text-muted d-block">
                      Miembro desde {formatDate(sponsorship.sponsor!.createdAt)}
                    </small>

                    <div className="mt-2 p-2 bg-light rounded">
                      <small className="text-muted d-block">
                        Total aportado
                      </small>
                      <span className="fw-bold text-success">
                        {formatAmount(totalPaid + sponsorship.monthlyAmount)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </CardBody>
    </Card>
  );
};

export default SponsorshipCard;
