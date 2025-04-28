import { useState } from "react";

import { Col, Row } from "reactstrap";

import "leaflet/dist/leaflet.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

import { faker } from "@faker-js/faker";
import L, { LatLngBoundsExpression } from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import {
  GeoJSON,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
} from "react-leaflet";

import colGeoJSON from "../../../../shared/data/geo/colombia.geojson";
import { Venture } from "echadospalante-core";

export interface VenturesMapProps {
  ventures: Venture[];
}

const VenturesMap = ({ ventures }: VenturesMapProps) => {
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

            {ventures.map((venture) => (
              <Marker
                position={[venture.location!.lat!, venture.location!.lng!]}
                icon={markerIconInstance}
              >
                <Tooltip permanent offset={[0, -5]}>
                  {venture.name}
                </Tooltip>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </Col>
    </Row>
  );
};

export default VenturesMap;
