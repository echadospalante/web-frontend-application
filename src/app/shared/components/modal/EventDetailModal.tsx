import {
  Card,
  CardBody,
  Col,
  Modal,
  ModalBody,
  Row,
  UncontrolledTooltip,
} from 'reactstrap';

import { CalendarEvent } from '../../../modules/admin/general/hooks/useVentureEvents';
import { textToRGB } from '../../helpers/colors';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import useVentureSponsorships from '../../../modules/admin/general/hooks/useVentureSponsorships';
import SponsorCard from '../card/SponsorCard';

type EventDetailModalProps = {
  event: CalendarEvent;
  onCloseClick: () => void;
};

const SetMapCenter = ({ position }: { position: [number, number] }) => {
  const map = useMap();
  map.setView(position);
  return null;
};

const EventDetailModal = ({ event, onCloseClick }: EventDetailModalProps) => {
  const markerIconInstance = new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });

  const {
    // loading,
    // error,
    // page,
    // size,
    // setPage,
    items,
    // total,
    // fetchVentureSponsors,
  } = useVentureSponsorships();

  return (
    <Modal size="lg" isOpen={true} toggle={onCloseClick} centered={true}>
      <div className="modal-content">
        <ModalBody className="px-4 py-5 text-center">
          <button
            type="button"
            onClick={onCloseClick}
            className="btn-close position-absolute end-0 top-0 m-3"
          ></button>

          <div className="d-flex align-items-center">
            <h5 className="mb-0 card-title flex-grow-1">Detalle del evento</h5>
          </div>
          <h2 className="mt-4">
            <b>{event.title}</b>
          </h2>

          <Card className="mt-0 pt-0 text-start">
            <CardBody>
              <p>{event.description}</p>

              <ul className="list-inline mb-0">
                {event.categories.map((category) => (
                  <li key={category.id} className="list-inline-item me-1">
                    <UncontrolledTooltip
                      placement="top"
                      target={`category-${category.id}`}
                    >
                      <p>{category.description}</p>
                    </UncontrolledTooltip>
                    <small
                      id={`category-${category.id}`}
                      className="px-2 py-1 fs-6"
                      style={{
                        backgroundColor: textToRGB(category.name),
                        color: 'white',
                        borderRadius: '5px',
                      }}
                    >
                      {category.name}
                    </small>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <p className="text-muted">
                  Nota: Puedes hacer click en el marcador para ver el detalle de
                  la ubicación.
                </p>
                {event.location.location?.coordinates[0] &&
                  event.location.location.coordinates[1] && (
                    <MapContainer
                      center={[
                        event.location.location?.coordinates[0],
                        event.location.location.coordinates[1],
                      ]}
                      zoom={13}
                      style={{ height: '400px', width: '100%' }}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // OpenStreetMap tiles
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      />
                      <Marker
                        position={[
                          event.location.location?.coordinates[0],
                          event.location.location.coordinates[1],
                        ]}
                        icon={markerIconInstance}
                      >
                        <Popup offset={[0, -5]}>
                          {event.location.description}
                        </Popup>
                      </Marker>

                      <SetMapCenter
                        position={[
                          event.location.location?.coordinates[0],
                          event.location.location.coordinates[1],
                        ]}
                      />
                    </MapContainer>
                  )}
              </div>

              <Row className="mt-4">
                {items.map((sponsorship) => (
                  <Col lg={3} md={6} sm={12}>
                    <SponsorCard
                      key={sponsorship.id}
                      sponsorship={sponsorship}
                    />
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>

          <div className="d-flex justify-content-end mb-0">
            <button
              type="button"
              className="btn btn-info"
              onClick={onCloseClick}
            >
              Cerrar
            </button>
          </div>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default EventDetailModal;
