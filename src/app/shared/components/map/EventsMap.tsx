import React, { useState } from 'react';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import EventDetailModal from '../modal/EventDetailModal';
import { VentureEvent } from 'echadospalante-domain';

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

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
      slug: '',
      coverPhoto: '',
      active: false,
      verified: false,
      subscriptionsCount: 0,
      categories: [],
      events: [],
      sponsorships: [],
      subscriptions: [],
      publications: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    location: {
      id: 'loc1',
      location: {
        type: 'Point',
        coordinates: [-75.567, 6.251],
      },
      municipality: {
        id: 0,
        name: '',
        department: {
          id: 0,
          name: '',
          municipalities: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        lat: 0,
        lng: 0,
        ventureLocations: [],
        eventLocations: [],
        users: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
    contact: {
      id: '',
    },
    categories: [],
    donations: [],
    datesAndHours: [],
    createdAt: new Date(),
    updatedAt: new Date(),
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

  return (
    <div>
      <div style={{ height: '85vh', width: '100%' }}>
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
                  event.location.location.coordinates[1],
                  event.location.location.coordinates[0],
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

      {selectedEvent && (
        <EventDetailModal event={selectedEvent} toggleModal={toggleModal} />
      )}
    </div>
  );
};

export default VentureEventsMap;
