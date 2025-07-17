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
import EventDetailModal from '../modal/EventDetailModal';

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
          // maxBounds={buildPointBounds(lat, lng, 20)}
          // maxBoundsViscosity={1.0}
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

      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          toggleModal={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default EventsMap;
