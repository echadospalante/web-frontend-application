import { useEffect } from 'react';

import { useMap } from 'react-leaflet';
import { Button } from 'reactstrap';

type FlayToLocationProps = {
  lat: number;
  lng: number;
};

const TopMapButtons = ({ lat, lng }: FlayToLocationProps) => {
  const map = useMap();

  useEffect(() => {
    if (lat && lng) {
      map.flyTo([lat, lng], 16, { animate: true, duration: 2 });
    }
  }, [lat, lng, map]);

  function handleFlyTo(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    event.preventDefault();
    event.stopPropagation();
    map.flyTo([lat, lng], 15, { animate: true, duration: 2 });
  }

  function handleOpenGoogleMaps(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    event.stopPropagation();
    const url = `https://www.google.com/maps/@${lat},${lng},18z`;
    window.open(url, '_blank');
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        zIndex: 1000,
      }}
    >
      <Button
        className="mx-2"
        color="info"
        size="sm"
        onClick={handleOpenGoogleMaps}
      >
        {/* <i className='mdi mdi-google me-1' /> */}
        <div className="d-flex align-items-center">

        <img src="/images/maps/google-maps.png" width={20} height={20} style={{marginRight: "3px"}} />
        Ver en Google Maps
        </div>
      </Button>
      <Button color="success" size="sm" onClick={handleFlyTo}>
        <i className='mdi mdi-target me-1 font-size-13' />
        Ir a la ubicación
      </Button>
    </div>
  );
};

export default TopMapButtons;
