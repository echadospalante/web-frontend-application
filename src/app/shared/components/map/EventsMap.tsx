import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  CardBody,
  Badge,
} from 'reactstrap';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface Point {
  lat: number;
  lng: number;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface Venture {
  id: string;
  name: string;
  description: string;
}

interface VentureEvent {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverPhoto: string;
  venture?: Venture;
  location: EventLocation;
  contact: EventContact;
  categories: EventCategory[];
  donations: EventDonation[];
  datesAndHours: {
    date: string;
    workingRanges: {
      start: string;
      end: string;
    }[];
  }[];
  createdAt: Date;
  updatedAt: Date;
}

interface EventLocation {
  id: string;
  location?: Point;
  description?: string;
  event?: VentureEvent;
}

interface EventContact {
  id: string;
  email?: string;
  phoneNumber?: string;
  event?: VentureEvent;
}

interface EventCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  events: VentureEvent[];
  createdAt: Date;
  updatedAt: Date;
}

interface EventDonation {
  id: string;
  amount: number;
  currency: string;
  createdAt: Date;
  donor: User;
  event: VentureEvent;
}

// Fix para los iconos de Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Datos de ejemplo para Colombia
const sampleEvents: VentureEvent[] = [
  {
    id: '1',
    title: 'Festival de Flores Medellín',
    slug: 'festival-flores-medellin',
    description:
      'El Festival de las Flores es una celebración tradicional que se realiza anualmente en Medellín, Colombia, durante los primeros días de agosto.',
    coverPhoto: 'https://example.com/festival-flores.jpg',
    venture: {
      id: 'v1',
      name: 'Alcaldía de Medellín',
      description: 'Gobierno municipal de Medellín',
    },
    location: {
      id: 'loc1',
      location: { lat: 6.2442, lng: -75.5812 },
      description: 'Centro de Medellín, Antioquia',
    },
    contact: {
      id: 'contact1',
      email: 'info@festivaldflores.com',
      phoneNumber: '+57 4 123-4567',
    },
    categories: [
      {
        id: 'cat1',
        name: 'Cultural',
        slug: 'cultural',
        description: 'Eventos culturales y artísticos',
        events: [],
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
      },
    ],
    donations: [
      {
        id: 'don1',
        amount: 500000,
        currency: 'COP',
        createdAt: new Date('2024-07-01'),
        donor: { id: 'user1', name: 'Juan Pérez', email: 'juan@example.com' },
        event: {} as VentureEvent,
      },
    ],
    datesAndHours: [
      {
        date: '2024-08-05',
        workingRanges: [{ start: '09:00', end: '18:00' }],
      },
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-01'),
  },
  {
    id: '2',
    title: 'Carnaval de Barranquilla',
    slug: 'carnaval-barranquilla',
    description:
      'Una de las festividades folclóricas y culturales más importantes de Colombia.',
    coverPhoto: 'https://example.com/carnaval.jpg',
    location: {
      id: 'loc2',
      location: { lat: 10.9639, lng: -74.7964 },
      description: 'Barranquilla, Atlántico',
    },
    contact: {
      id: 'contact2',
      email: 'info@carnavaldebarranquilla.org',
      phoneNumber: '+57 5 987-6543',
    },
    categories: [
      {
        id: 'cat2',
        name: 'Folclórico',
        slug: 'folclorico',
        description: 'Eventos folclóricos tradicionales',
        events: [],
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
      },
    ],
    donations: [],
    datesAndHours: [
      {
        date: '2025-03-01',
        workingRanges: [{ start: '14:00', end: '22:00' }],
      },
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-01'),
  },
  {
    id: '3',
    title: 'Rock al Parque Bogotá',
    slug: 'rock-al-parque-bogota',
    description: 'Festival gratuito de rock más importante de Latinoamérica.',
    coverPhoto: 'https://example.com/rock-parque.jpg',
    location: {
      id: 'loc3',
      location: { lat: 4.711, lng: -74.0721 },
      description: 'Parque Simón Bolívar, Bogotá',
    },
    contact: {
      id: 'contact3',
      email: 'info@rockalparque.gov.co',
      phoneNumber: '+57 1 456-7890',
    },
    categories: [
      {
        id: 'cat3',
        name: 'Musical',
        slug: 'musical',
        description: 'Eventos musicales y conciertos',
        events: [],
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
      },
    ],
    donations: [],
    datesAndHours: [
      {
        date: '2024-11-15',
        workingRanges: [{ start: '15:00', end: '23:00' }],
      },
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-01'),
  },
];

const VentureEventsMap: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<VentureEvent | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleMarkerClick = (event: VentureEvent) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    if (!modalOpen) {
      setSelectedEvent(null);
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="w-100">
      <div style={{ height: '600px', width: '100%' }}>
        <MapContainer
          center={[4.711, -74.0721]} // Centro en Bogotá
          zoom={6}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {sampleEvents.map((event) => {
            if (!event.location.location) return null;

            return (
              <Marker
                key={event.id}
                position={[
                  event.location.location.lat,
                  event.location.location.lng,
                ]}
                eventHandlers={{
                  click: () => handleMarkerClick(event),
                }}
              >
                <Popup>
                  <div>
                    <h6>{event.title}</h6>
                    <p className="mb-1">{event.location.description}</p>
                    <small>Click para ver más detalles</small>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>

      {/* Modal para mostrar detalles del evento */}
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>{selectedEvent?.title}</ModalHeader>
        <ModalBody>
          {selectedEvent && (
            <div>
              {/* Imagen de portada */}
              <div className="mb-3">
                <img
                  src={selectedEvent.coverPhoto}
                  alt={selectedEvent.title}
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

              {/* Descripción */}
              <Card className="mb-3">
                <CardBody>
                  <h6>Descripción</h6>
                  <p>{selectedEvent.description}</p>
                </CardBody>
              </Card>

              {/* Información de ubicación */}
              <Card className="mb-3">
                <CardBody>
                  <h6>Ubicación</h6>
                  <p>
                    <strong>Lugar:</strong> {selectedEvent.location.description}
                  </p>
                  {selectedEvent.location.location && (
                    <p>
                      <strong>Coordenadas:</strong>{' '}
                      {selectedEvent.location.location.lat.toFixed(4)},{' '}
                      {selectedEvent.location.location.lng.toFixed(4)}
                    </p>
                  )}
                </CardBody>
              </Card>

              {/* Información de contacto */}
              <Card className="mb-3">
                <CardBody>
                  <h6>Contacto</h6>
                  {selectedEvent.contact.email && (
                    <p>
                      <strong>Email:</strong> {selectedEvent.contact.email}
                    </p>
                  )}
                  {selectedEvent.contact.phoneNumber && (
                    <p>
                      <strong>Teléfono:</strong>{' '}
                      {selectedEvent.contact.phoneNumber}
                    </p>
                  )}
                </CardBody>
              </Card>

              {/* Categorías */}
              {selectedEvent.categories.length > 0 && (
                <Card className="mb-3">
                  <CardBody>
                    <h6>Categorías</h6>
                    <div>
                      {selectedEvent.categories.map((category) => (
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

              {/* Fechas y horarios */}
              <Card className="mb-3">
                <CardBody>
                  <h6>Fechas y Horarios</h6>
                  {selectedEvent.datesAndHours.map((dateInfo, index) => (
                    <div key={index} className="mb-2">
                      <p className="mb-1">
                        <strong>{formatDate(dateInfo.date)}</strong>
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

              {/* Venture información */}
              {selectedEvent.venture && (
                <Card className="mb-3">
                  <CardBody>
                    <h6>Organizado por</h6>
                    <p>
                      <strong>{selectedEvent.venture.name}</strong>
                    </p>
                    <p>{selectedEvent.venture.description}</p>
                  </CardBody>
                </Card>
              )}

              {/* Donaciones */}
              {selectedEvent.donations.length > 0 && (
                <Card className="mb-3">
                  <CardBody>
                    <h6>Donaciones Recibidas</h6>
                    <p>
                      <strong>Total: </strong>
                      {formatCurrency(
                        selectedEvent.donations.reduce(
                          (sum, donation) => sum + donation.amount,
                          0,
                        ),
                        selectedEvent.donations[0]?.currency || 'COP',
                      )}
                    </p>
                    <p>
                      <strong>Número de donaciones:</strong>{' '}
                      {selectedEvent.donations.length}
                    </p>
                  </CardBody>
                </Card>
              )}
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default VentureEventsMap;
