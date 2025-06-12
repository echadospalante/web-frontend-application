import React, { useState } from 'react';

import { Venture } from 'echadospalante-domain';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
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

import useFetchVenturesMap from '../../../modules/principal/ventures/hooks/useFetchVenturesMap';

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const VenturesMap: React.FC = () => {
  const [selectedVenture, setSelectedEvent] = useState<Venture | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const {
    isError,
    isLoading,
    items,
    pagination,
    retryFetch,
    total,
    venturesQuery,
    viewMode,
  } = useFetchVenturesMap();

  const handleMarkerClick = (event: Venture) => {
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

          {items.map((venture) => {
            if (!venture.location?.location) return null;

            return (
              <Marker
                key={venture.id}
                position={[
                  venture.location.location.coordinates[1], // Latitud
                  venture.location.location.coordinates[0], // Longitud
                ]}
                eventHandlers={{
                  click: () => handleMarkerClick(venture),
                }}
              >
                <Popup>
                  <div>
                    <h6>{venture.name}</h6>
                    <p className="mb-1">{venture.location.description}</p>
                    <small>Click para ver más detalles</small>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>

      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>{selectedVenture?.name}</ModalHeader>
        <ModalBody>
          {selectedVenture && (
            <div>
              {/* Imagen de portada */}
              <div className="mb-3">
                <img
                  src={selectedVenture.coverPhoto}
                  alt={selectedVenture.name}
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
                  <p>{selectedVenture.description}</p>
                </CardBody>
              </Card>

              {/* Información de ubicación */}
              <Card className="mb-3">
                <CardBody>
                  <h6>Ubicación</h6>
                  <p>
                    <strong>Lugar:</strong>{' '}
                    {selectedVenture.location?.description}
                  </p>
                  {selectedVenture.location?.location && (
                    <p>
                      <strong>Coordenadas:</strong>{' '}
                      {selectedVenture.location.location.coordinates[1]},{' '}
                      {selectedVenture.location.location.coordinates[0]}
                    </p>
                  )}
                </CardBody>
              </Card>

              {/* Información de contacto */}
              <Card className="mb-3">
                <CardBody>
                  <h6>Contacto</h6>
                  {selectedVenture.contact?.email && (
                    <p>
                      <strong>Email:</strong> {selectedVenture.contact.email}
                    </p>
                  )}
                  {selectedVenture.contact?.phoneNumber && (
                    <p>
                      <strong>Teléfono:</strong>{' '}
                      {selectedVenture.contact.phoneNumber}
                    </p>
                  )}
                </CardBody>
              </Card>

              {/* Categorías */}
              {selectedVenture.categories.length > 0 && (
                <Card className="mb-3">
                  <CardBody>
                    <h6>Categorías</h6>
                    <div>
                      {selectedVenture.categories.map((category) => (
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

              {selectedVenture.owner && (
                <Card className="mb-3">
                  <CardBody>
                    <h6>Creado por</h6>
                    <img
                      className="rounded-circle mb-2"
                      src={selectedVenture.owner.picture}
                    />
                    <p>
                      <strong>
                        {selectedVenture.owner.firstName}{' '}
                        {selectedVenture.owner.lastName}
                      </strong>
                    </p>
                  </CardBody>
                </Card>
              )}

              {/* {selectedVenture.length > 0 && (
                <Card className="mb-3">
                  <CardBody>
                    <h6>Donaciones Recibidas</h6>
                    <p>
                      <strong>Total: </strong>
                      {formatCurrency(
                        selectedVenture.donations.reduce(
                          (sum, donation) => sum + donation.amount,
                          0,
                        ),
                        selectedVenture.donations[0]?.currency || 'COP',
                      )}
                    </p>
                    <p>
                      <strong>Número de donaciones:</strong>{' '}
                      {selectedVenture.donations.length}
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

export default VenturesMap;
