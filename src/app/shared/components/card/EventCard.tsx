import React, { useState } from 'react';

import { VentureEvent } from 'echadospalante-domain';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import useAuthentication from '../../../modules/auth/hooks/useAuthentication';
import DonationCreateModal from '../modal/DonationCreateModal';
import EventOwnerTabs from '../tabs/EventOwnerTabs';
import EventDonationsChart from '../charts/EventDonationsChart';

export interface EventCardProps {
  event: VentureEvent;
}

export type EventTabs = 'details' | 'donations';

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [activeTab, setActiveTab] = useState<EventTabs>('details');
  const { email: authenticatedEmail } = useAuthentication();
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-CO', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleDonate = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    event.preventDefault();
    setShowDonationModal(true);
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  return (
    <>
      {showDonationModal && (
        <DonationCreateModal
          modal={showDonationModal}
          toggle={() => setShowDonationModal(false)}
          event={event}
        />
      )}

      <Card key={event.id} className="mb-4 p-3 rounded-2 shadow-sm">
        {event.venture?.owner?.email === authenticatedEmail && (
          <EventOwnerTabs activeTab={activeTab} toggle={setActiveTab} />
        )}

        <TabContent activeTab={activeTab} className="p-4">
          <TabPane tabId="details">
            <Row className="g-0">
              <Col md={4}>
                <CardImg
                  src={event.coverPhoto}
                  alt={event.title}
                  className="h-100 object-fit-cover"
                  style={{ minHeight: '200px' }}
                />
              </Col>
              <Col md={8}>
                <CardBody>
                  <h5 className="card-title fw-bold">{event.title}</h5>
                  <p className="card-text text-muted mb-3">
                    {event.description}
                  </p>

                  <div className="mb-3">
                    <div className="d-flex align-items-center text-muted mb-2">
                      {/*<MapPin size={16} className="me-2" />*/}
                      <i className="mdi mdi-map-marker me-2 text-primary" />
                      <span>
                        {event.location.location?.coordinates[1]},{' '}
                        {event.location.location?.coordinates[0]}
                      </span>
                    </div>
                    <div className="d-flex align-items-center text-muted">
                      {/*<Calendar size={16} className="me-2" />*/}
                      <i className="mdi mdi-calendar-multiselect me-2 text-primary" />
                      <span>Fechas disponibles:</span>
                    </div>
                    <div className="ms-4 mt-2">
                      {event.datesAndHours.map((dateHour, index) => (
                        <div key={index} className="mb-1">
                          <strong>{formatDate(dateHour.date)}</strong>
                          <div className="ms-3">
                            {dateHour.workingRanges.map((range, rangeIndex) => (
                              <Badge
                                key={rangeIndex}
                                color="info"
                                className="me-2 px-2 py-1"
                              >
                                {range.start} - {range.end}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Card className="mb-3">
                      <CardBody>
                        <h6>Donaciones Recibidas</h6>
                        <p>
                          <strong>Total: </strong>
                          COP {formatCurrency(event.totalDonations, 'COP')}
                        </p>
                        <p>
                          <strong>Número de donaciones:</strong>{' '}
                          {event.donationsCount}
                        </p>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    {event.venture?.owner?.email !== authenticatedEmail && (
                      <Button
                        onClick={handleDonate}
                        color="success"
                        size="md"
                        className="d-flex align-items-center py-1 px-2"
                      >
                        <span className="mx-1">Donar</span>
                        <i className="mdi mdi-heart-outline me-2 fs-4"></i>
                      </Button>
                    )}

                    {event.categories.length > 0 && (
                      <div className="d-flex flex-wrap gap-1">
                        {event.categories.map((category) => (
                          <Badge
                            key={category.id}
                            color="outline-secondary"
                            pill
                          >
                            {category.name}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardBody>
              </Col>
            </Row>
          </TabPane>

          {event.venture?.owner?.email === authenticatedEmail && (
            <TabPane tabId="donations">
              <EventDonationsChart eventId={event.id} />
            </TabPane>
          )}
        </TabContent>
      </Card>
    </>
  );
};

export default EventCard;
