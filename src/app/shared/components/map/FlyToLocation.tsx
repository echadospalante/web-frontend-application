import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { Button } from "reactstrap";

type FlayToLocationProps = {
  lat: number;
  lng: number;
};

const FlyToLocation = ({ lat, lng }: FlayToLocationProps) => {
  const map = useMap();

  const handleFlyTo = () => {
    map.flyTo([lat, lng], 15, { animate: true, duration: 2 });
  };

  useEffect(() => {
    if (lat && lng) {
      map.flyTo([lat, lng], 16, { animate: true, duration: 2 });
    }
  }, [lat, lng, map]);

  return (
    <Button
      color="primary"
      onClick={handleFlyTo}
      style={{ position: "absolute", top: "10px", right: "10px", zIndex: 1000 }}
    >
      Ir a la ubicación
    </Button>
  );
};

export default FlyToLocation;
