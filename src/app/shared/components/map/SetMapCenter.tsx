import { useMap } from 'react-leaflet';

const SetMapCenter = ({ position }: { position: [number, number] }) => {
  const map = useMap();
  map.setView(position);
  return null;
};

export default SetMapCenter;