import React, { useRef, useState } from 'react';

import { VentureEvent } from 'echadospalante-domain';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
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

import municipalities from '../../data/geo/municipalities';
import {
  buildPointBounds,
  getMidpoint,
  haversineDistance,
} from '../../helpers/map-helpers';
import AppLoading from '../loader/AppLoading';
import TopMapButtons from './TopMapButtons';
import useFetchEvents from '../../../modules/principal/ventures/hooks/useFetchEvents';
import useEventsFilters from '../../../modules/principal/ventures/hooks/useEventsFilters';

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const EventsMap: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<VentureEvent | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const mapRef = useRef(null);

  const { total, isLoading, isError, items } = useFetchEvents();
  const { municipalitiesIds } = useEventsFilters();

  const [points, setPoints] = useState<{ lat: number; lng: number }[]>([]);
  const [totalDistance, setTotalDistance] = useState(0);
  const [mouseLocation, setMouseLocation] = useState<{
    lat: number;
    lng: number;
  }>();

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

  const { lat, lng } = municipalities.find(
    (m) => m.id === municipalitiesIds[0],
  )!;

  const MapClickHandler = () => {
    useMapEvents({
      mousemove: (e) => {
        const newPoint = { lat: e.latlng.lat, lng: e.latlng.lng };
        if (points.length === 1) {
          setMouseLocation(newPoint);
          const distance = haversineDistance(points[0], newPoint);
          setTotalDistance(distance);
        }
      },
      click: (e) => {
        const newPoint = { lat: e.latlng.lat, lng: e.latlng.lng };
        if (points.length === 2) {
          handleResetPoints();
          return;
        }
        setPoints((prev) => {
          const newPoints = [...prev, newPoint];

          // Calculate total distance when we have more than one point
          if (newPoints.length === 2) {
            const distance = haversineDistance(newPoints[0], newPoints[1]);
            setTotalDistance(distance);
            setMouseLocation(undefined);
          }

          return newPoints;
        });
      },
    });
    return null;
  };

  const handleResetPoints = () => {
    setPoints([]);
    setTotalDistance(0);
  };

  return (
    <div className="w-100">
      <div style={{ height: '75vh', width: '100%' }}>
        <MapContainer
          ref={mapRef}
          maxBounds={buildPointBounds(lat, lng, 20)}
          maxBoundsViscosity={1.0}
          // dragging={!isLoading}
          // touchZoom={!isLoading}
          // doubleClickZoom={!isLoading}
          // scrollWheelZoom={!isLoading}
          // boxZoom={!isLoading}
          // keyboard={!isLoading}
          // zoomControl={!isLoading}
          // attributionControl={!isLoading}
          center={[lat, lng]}
          zoom={15}
          zoomSnap={0.5} // Permitir zoom en fracciones de 0.5
          zoomDelta={0.5} // Controla la sensibilidad del zoom
          style={{ height: '100%', width: '100%' }}
          maxZoom={18}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapClickHandler />
          <TopMapButtons lat={lat} lng={lng} />

          {isLoading && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                zIndex: 1000,
              }}
            >
              <AppLoading iconPath={''} message="Buscando eventos..." />
            </div>
          )}

          {items.map((ventureEvent) => {
            if (!ventureEvent.location?.location) return null;

            return (
              <Marker
                key={ventureEvent.id}
                position={[
                  ventureEvent.location.location.coordinates[1], // Latitud
                  ventureEvent.location.location.coordinates[0], // Longitud
                ]}
                eventHandlers={{
                  click: () => handleMarkerClick(ventureEvent),
                }}
              >
                <Popup>
                  <div>
                    <h6>{ventureEvent.title}</h6>
                    <p className="mb-1">{ventureEvent.location.description}</p>
                    <small>Click para ver más detalles</small>
                  </div>
                </Popup>
              </Marker>
            );
          })}

          {points.map((point, index) => (
            <Marker key={index} position={point} />
          ))}
          {points.length === 2 && (
            <>
              <Polyline positions={points} color="blue" weight={3} />
              <Popup
                closeButton={false}
                position={getMidpoint(points[0], points[1])}
                className="distance-popup fs-4"
              >
                {totalDistance.toFixed(2)}m
              </Popup>
            </>
          )}
          {points.length === 1 && mouseLocation && (
            <>
              <Polyline
                positions={[...points, mouseLocation]}
                color="blue"
                weight={3}
              />
              <Popup
                closeButton={false}
                position={getMidpoint(points[0], mouseLocation)}
                className="distance-popup fs-4"
              >
                {totalDistance.toFixed(2)}m
              </Popup>
            </>
          )}
        </MapContainer>
      </div>

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
                    <strong>Lugar:</strong>{' '}
                    {selectedEvent.location?.description}
                  </p>
                  {selectedEvent.location?.location && (
                    <p>
                      <strong>Coordenadas:</strong>{' '}
                      {selectedEvent.location.location.coordinates[1]},{' '}
                      {selectedEvent.location.location.coordinates[0]}
                    </p>
                  )}
                </CardBody>
              </Card>

              {/* Información de contacto */}
              <Card className="mb-3">
                <CardBody>
                  <h6>Contacto</h6>
                  {selectedEvent.contact?.email && (
                    <p>
                      <strong>Email:</strong> {selectedEvent.contact.email}
                    </p>
                  )}
                  {selectedEvent.contact?.phoneNumber && (
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

              {/* {selectedEvent.owner && (
                <Card className="mb-3">
                  <CardBody>
                    <h6>Creado por</h6>
                    <img
                      className="rounded-circle mb-2"
                      src={selectedEvent.owner.picture}
                    />
                    <p>
                      <strong>
                        {selectedEvent.owner.firstName}{' '}
                        {selectedEvent.owner.lastName}
                      </strong>
                    </p>
                  </CardBody>
                </Card>
              )} */}

              {/* {selectedEvent.length > 0 && (
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
              )} */}
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

export default EventsMap;
