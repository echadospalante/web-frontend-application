import { useState } from 'react';

import { VentureEvent } from 'echadospalante-domain';
import 'leaflet/dist/leaflet.css';
import {
  Badge,
  Button,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  TabContent,
  TabPane,
} from 'reactstrap';

import useAuthentication from '../../../modules/auth/hooks/useAuthentication';
import { formatDate } from '../../helpers/dates';
import EventOwnerTabs, { EventTabs } from '../tabs/EventOwnerTabs';
import DonationCreateModal from './DonationCreateModal';
import EventDonationsChart from '../charts/EventDonationsChart';

type EventDetailModalProps = {
  event: VentureEvent;
  toggleModal: () => void;
};

const EventDetailModal = ({ event, toggleModal }: EventDetailModalProps) => {
  const [activeTab, setActiveTab] = useState<EventTabs>('details');

  const { email: authenticatedEmail } = useAuthentication();
  const [showDonationModal, setShowDonationModal] = useState(false);

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const handleDonate = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    event.preventDefault();
    setShowDonationModal(true);
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

      <Modal isOpen={true} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal} className="w-100">
          <div className="d-flex justify-content-between align-items-center w-100">
            {event.venture?.owner?.email !== authenticatedEmail && (
              <Button
                onClick={handleDonate}
                color="success"
                type="button"
                size="md"
                className="d-flex align-items-center py-1 px-2"
              >
                <span className="mx-1">Donar</span>
                <i className="mdi mdi-heart-outline me-2 fs-4"></i>
              </Button>
            )}
            <span className="mx-3">{event.title}</span>
          </div>
        </ModalHeader>
        <ModalBody>
          {event.venture?.owner?.email === authenticatedEmail && (
            <EventOwnerTabs activeTab={activeTab} toggle={setActiveTab} />
          )}

          <TabContent activeTab={activeTab} className="p-4">
            <TabPane tabId="details">
              <Card>
                <div className="mb-3 w-50 mx-auto">
                  <img
                    src={event.coverPhoto}
                    alt={event.title}
                    className="img-fluid rounded"
                    style={{
                      objectFit: 'cover',
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://via.placeholder.com/400x200?text=Imagen+no+disponible';
                    }}
                  />
                </div>

                <Card className="my-0 py-0">
                  <CardBody>
                    <h5>Descripción</h5>
                    <p>{event.description}</p>
                  </CardBody>
                </Card>

                <Card className="my-0 py-0">
                  <CardBody>
                    <h5>Ubicación</h5>
                    <p>
                      <strong>Lugar:</strong> {event.location.description}
                    </p>
                    {event.location.location && (
                      <p>
                        <strong>Coordenadas:</strong>{' '}
                        {event.location.location.coordinates[1].toFixed(4)},{' '}
                        {event.location.location.coordinates[0].toFixed(4)}
                      </p>
                    )}
                  </CardBody>
                </Card>

                {/* <Card className="mb-3">
              <CardBody>
                <h6>Contacto</h6>
                {event.contact.email && (
                  <p>
                    <strong>Email:</strong> {event.contact.email}
                  </p>
                )}
                {event.contact.phoneNumber && (
                  <p>
                    <strong>Teléfono:</strong> {event.contact.phoneNumber}
                  </p>
                )}
              </CardBody>
            </Card> */}

                {event.categories.length > 0 && (
                  <Card className="my-0 py-0">
                    <CardBody>
                      <h6>Categorías</h6>
                      <div>
                        {event.categories.map((category) => (
                          <Badge
                            key={category.id}
                            color="primary"
                            className="me-2 mb-1"
                          >
                            {category.name}
                          </Badge>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                )}

                <Card className="my-0 py-0">
                  <CardBody>
                    <h5>Fechas y Horarios</h5>
                    {event.datesAndHours.map((dateInfo, index) => (
                      <div key={index} className="mb-2">
                        <p className="my-0 py-0">
                          <strong>{formatDate(new Date(dateInfo.date))}</strong>
                        </p>
                        {dateInfo.workingRanges.map((range, rangeIndex) => (
                          <Badge key={rangeIndex} color="info" className="me-2">
                            {range.start} - {range.end}
                          </Badge>
                        ))}
                      </div>
                    ))}
                  </CardBody>
                </Card>

                {event.venture && (
                  <Card className="my-0 py-0">
                    <CardBody>
                      <h5>Organizado por</h5>
                      <p>
                        <strong>{event.venture.name}</strong>
                      </p>
                      <p>{event.venture.description}</p>
                    </CardBody>
                  </Card>
                )}

                <Card className="my-0 py-0">
                  <CardBody>
                    <h5>Donaciones Recibidas</h5>
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

                <Button color="primary" className="d-flex align-items-center">
                  <span className="mx-1">Donar</span>
                  <i className="mdi mdi-heart-outline me-2 fs-4"></i>
                </Button>
              </Card>
            </TabPane>

            {event.venture?.owner?.email === authenticatedEmail && (
              <TabPane tabId="donations">
                <EventDonationsChart eventId={event.id} />
              </TabPane>
            )}
          </TabContent>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EventDetailModal;
