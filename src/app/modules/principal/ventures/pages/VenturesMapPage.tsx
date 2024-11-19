import { useEffect, useState } from "react";

import * as turf from "@turf/turf";
import { Col, Row } from "reactstrap";

import "leaflet/dist/leaflet.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

import { faker } from "@faker-js/faker";
import { FeatureCollection } from "geojson";
import L, { LatLngBoundsExpression } from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { GeoJSON, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import colGeoJSON from "../../../../shared/data/geo/colombia.geojson";

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
    color: "blue",
    weight: 2,
    fillColor: "lightblue",
    fillOpacity: 0.4,
  };

  const colombiaBounds: LatLngBoundsExpression = [
    [12.5, -79.0],
    [-4.2, -66.8],
  ];

  const [randomPoints, setRandomPoints] = useState<FeatureCollection>();

  useEffect(() => {
    const pointsWithinColombia = [];
    while (pointsWithinColombia.length < 100) {
      const point = turf.randomPoint(1, { bbox: [-79.0, -4.2, -66.8, 12.5] });

      if (
        turf.booleanPointInPolygon(
          point.features[0],
          colGeoJSON.features[0] as any
        )
      ) {
        pointsWithinColombia.push(point.features[0]);
      }
    }
    setRandomPoints(turf.featureCollection(pointsWithinColombia));
  }, []);

  return (
    <Row>
      <Col lg={12}>
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
              })}
          </MapContainer>
        </div>
      </Col>
    </Row>
  );
};

export default VenturesMapPage;
