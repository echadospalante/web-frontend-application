import { useRef, useState } from "react";

import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  Tooltip,
  useMapEvents,
} from "react-leaflet";
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
// Import plugins

import {
  buildPointBounds,
  getMidpoint,
  haversineDistance,
} from "../../helpers/map-helpers";
import FlyToLocation from "../map/FlyToLocation";

type VentureMapModalProps = {
  modal: boolean;
  toggle: () => void;
  coords: { lat: number; lng: number };
  address: string;
};

const VentureMapModal = (props: VentureMapModalProps) => {
  const mapRef = useRef(null);
  const [points, setPoints] = useState<{ lat: number; lng: number }[]>([]);
  const [totalDistance, setTotalDistance] = useState(0);
  const [mouseLocation, setMouseLocation] = useState<{
    lat: number;
    lng: number;
  }>();
  const { modal, toggle, coords, address } = props;

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
    <Modal size="lg" isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle} tag="h4">
        Detalle de ubicación de la propiedad
      </ModalHeader>
      <ModalBody className="pt-0">
        <Row>
          <Col lg={12}>
            <MapContainer
              ref={mapRef}
              center={[coords.lat, coords.lng]}
              maxBounds={buildPointBounds(coords.lat, coords.lng, 20)}
              maxBoundsViscosity={1.0}
              zoom={10}
              minZoom={5}
              zoomSnap={0.5} // Permitir zoom en fracciones de 0.5
              zoomDelta={0.5} // Controla la sensibilidad del zoom
              style={{ height: "50vh", width: "100%" }}
              maxZoom={18}
            >
              <TileLayer
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <MapClickHandler />
              <FlyToLocation lat={coords.lat} lng={coords.lng} />

              <Marker position={{ lat: coords.lat, lng: coords.lng }}>
                <Tooltip permanent direction="top" offset={[-15, -15]}>
                  {address}
                </Tooltip>
              </Marker>

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
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <div className="text-end">
              <Button onClick={toggle} color="danger" className="save-user">
                <i className="bx bx-x me-1"></i>
                Cerrar
              </Button>
            </div>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default VentureMapModal;
