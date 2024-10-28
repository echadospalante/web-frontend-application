import { useEffect, useState } from "react";

import * as turf from "@turf/turf";
import { Col, Container, Row } from "reactstrap";

import "yet-another-react-lightbox/styles.css";

// Import plugins
import "yet-another-react-lightbox/plugins/thumbnails.css";

import VenturesFeedRightSidebar from "../../../../shared/components/rightbar/VenturesFeedRightSidebar";

import { FeatureCollection } from "geojson";
import L, { LatLngBoundsExpression } from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import {
  GeoJSON,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import colGeoJSON from "../../../../shared/data/geo/colombia.geojson";
import { faker } from "@faker-js/faker";

const SetMapCenter = ({ position }: { position: [number, number] }) => {
  const map = useMap();
  map.setView(position);
  return null;
};

const VenturesMapPage = () => {
  const [activeTab, setActiveTab] = useState("1");

  const [open, setOpen] = useState(false);

  const toggleActiveTab = (tab: string) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

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

  const geoJSONStyle = {
    color: "blue", // Color de borde
    weight: 2, // Grosor de la línea
    fillColor: "lightblue", // Color de relleno
    fillOpacity: 0.4, // Opacidad del relleno
  };

  const colombiaBounds: LatLngBoundsExpression = [
    [12.5, -79.0], // Norte-Oeste
    [-4.2, -66.8], // Sur-Este
  ];

  const [randomPoints, setRandomPoints] = useState<FeatureCollection>();

  useEffect(() => {
    const pointsWithinColombia = [];
    // Generar 200 puntos aleatorios en el bounding box
    // Generar puntos hasta alcanzar 100 puntos dentro del área de Colombia
    while (pointsWithinColombia.length < 100) {
      const point = turf.randomPoint(1, { bbox: [-79.0, -4.2, -66.8, 12.5] });

      // Verificar si el punto está dentro del polígono de Colombia
      if (
        turf.booleanPointInPolygon(
          point.features[0],
          colGeoJSON.features[0] as any
        )
      ) {
        pointsWithinColombia.push(point.features[0]);
      }
    }
    // Convertir los puntos en una FeatureCollection para mostrar en el mapa
    setRandomPoints(turf.featureCollection(pointsWithinColombia));
  }, []);

  return (
    <div className="page-content">
      <Container fluid>
        <Row>
          <Col lg={9}>
            <div className="mt-0">
              <MapContainer
                maxBounds={colombiaBounds}
                maxBoundsViscosity={1.0}
                center={[4.0754887, -74.1594937]}
                zoom={6}
                minZoom={6}
                style={{ height: "90vh", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // OpenStreetMap tiles
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* <Marker
                  position={[event.location.lat, event.location.lng]}
                  icon={markerIconInstance}
                >
                  <Popup offset={[0, -5]}>{event.location.description}</Popup>
                </Marker> */}

                {/* <SetMapCenter position={} /> */}
                <GeoJSON data={colGeoJSON} style={geoJSONStyle} />

                {randomPoints &&
                  randomPoints.features.map((point, index) => {
                    return (
                      <Marker
                        position={[
                          point.geometry.coordinates[1],
                          point.geometry.coordinates[0],
                        ]}
                        icon={markerIconInstance}
                      >
                        <Popup offset={[0, -5]}>
                          {faker.commerce.productName()}
                        </Popup>
                      </Marker>
                    );
                    // <CircleMarker
                    //   key={index}
                    //   center={[
                    //     // {"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-75.79920632274803,5.852370240358206]}}
                    //     point.geometry.coordinates[0],
                    //     point.geometry.coordinates[1],
                    //   ]}
                    //   radius={5}
                    //   color="red"
                    // />
                  })}
              </MapContainer>
            </div>
          </Col>

          <Col lg={3}>
            <VenturesFeedRightSidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VenturesMapPage;
