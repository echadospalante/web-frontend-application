import { Fragment, useRef, useState } from 'react';

import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  Tooltip,
  useMapEvents,
} from 'react-leaflet';
import { Col, Row } from 'reactstrap';

import {
  buildPointBounds,
  getMidpoint,
  haversineDistance,
} from '../../helpers/map-helpers';
import TopMapButtons from './TopMapButtons';

type TinyMapProps = {
  coords: { lat: number; lng: number };
  address: string;
  height: string;
};

const TinyMap = (props: TinyMapProps) => {
  const mapRef = useRef(null);
  const [points, setPoints] = useState<{ lat: number; lng: number }[]>([]);
  const [totalDistance, setTotalDistance] = useState(0);
  const [mouseLocation, setMouseLocation] = useState<{
    lat: number;
    lng: number;
  }>();
  const { coords, address, height } = props;

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
    <Fragment>
      <Row>
        <Col lg={12}>
          <MapContainer
            ref={mapRef}
            center={[coords.lat, coords.lng]}
            maxBounds={buildPointBounds(coords.lat, coords.lng, 20)}
            maxBoundsViscosity={1.0}
            zoom={10}
            minZoom={5}
            zoomSnap={0.5}
            zoomDelta={0.5}
            style={{ height, width: '100%' }}
            maxZoom={18}
          >
            <TileLayer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapClickHandler />

            <TopMapButtons lat={coords.lat} lng={coords.lng} />

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
    </Fragment>
  );
};

export default TinyMap;
