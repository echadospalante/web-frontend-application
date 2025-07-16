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
} from 'reactstrap';
import { formatDate } from '../../helpers/dates';

type EventDetailModalProps = {
  event: VentureEvent;
  toggleModal: () => void;
};

const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

const EventDetailModal = ({ event, toggleModal }: EventDetailModalProps) => {
  return (
    <Modal isOpen={true} toggle={toggleModal} size="lg">
      <ModalHeader toggle={toggleModal}>{event.title}</ModalHeader>
      <ModalBody>
        {event && (
          <div>
            <div className="mb-3">
              <img
                src={event.coverPhoto}
                alt={event.title}
                className="img-fluid rounded"
                style={{
                  width: '100%',
                  maxHeight: '200px',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://via.placeholder.com/400x200?text=Imagen+no+disponible';
                }}
              />
            </div>

            <Card className="mb-3">
              <CardBody>
                <h6>Descripción</h6>
                <p>{event.description}</p>
              </CardBody>
            </Card>

            <Card className="mb-3">
              <CardBody>
                <h6>Ubicación</h6>
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
              <Card className="mb-3">
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

            <Card className="mb-3">
              <CardBody>
                <h6>Fechas y Horarios</h6>
                {event.datesAndHours.map((dateInfo, index) => (
                  <div key={index} className="mb-2">
                    <p className="mb-1">
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
              <Card className="mb-3">
                <CardBody>
                  <h6>Organizado por</h6>
                  <p>
                    <strong>{event.venture.name}</strong>
                  </p>
                  <p>{event.venture.description}</p>
                </CardBody>
              </Card>
            )}

            {/* {event.donations.length > 0 && (
              <Card className="mb-3">
                <CardBody>
                  <h6>Donaciones Recibidas</h6>
                  <p>
                    <strong>Total: </strong>
                    {formatCurrency(
                      event.donations.reduce(
                        (sum, donation) => sum + donation.amount,
                        0,
                      ),
                      event.donations[0]?.currency || 'COP',
                    )}
                  </p>
                  <p>
                    <strong>Número de donaciones:</strong>{' '}
                    {event.donations.length}
                  </p>
                </CardBody>
              </Card>
            )} */}

            <Button color="primary" className="d-flex align-items-center">
              <span className="mx-1">Donar</span>
              <i className="mdi mdi-heart-outline me-2 fs-4"></i>
            </Button>
          </div>
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggleModal}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EventDetailModal;
