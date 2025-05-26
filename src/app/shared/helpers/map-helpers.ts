import L from 'leaflet';

export const interpolateColor = (
  color1: string,
  color2: string,
  factor: number,
): string => {
  if (factor === 0) return color1;
  if (factor === 1) return color2;

  const hexToR = (hex: string) => parseInt(hex.slice(1, 3), 16);
  const hexToG = (hex: string) => parseInt(hex.slice(3, 5), 16);
  const hexToB = (hex: string) => parseInt(hex.slice(5, 7), 16);

  const r1 = hexToR(color1);
  const g1 = hexToG(color1);
  const b1 = hexToB(color1);
  const r2 = hexToR(color2);
  const g2 = hexToG(color2);
  const b2 = hexToB(color2);

  const r = Math.round(r1 + (r2 - r1) * factor);
  const g = Math.round(g1 + (g2 - g1) * factor);
  const b = Math.round(b1 + (b2 - b1) * factor);

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
};

// export const getColorForPrice = (price: number, items: MapMarker[]): string => {
//   const minColor = "#00FF00"; // Verde
//   const maxColor = "#FF0000"; // Rojo

//   const prices = items.map(({ price: precio }) => precio);
//   const maxPrice = Math.max(...prices);
//   const minPrice = Math.min(...prices);

//   const factor = (price - minPrice) / (maxPrice - minPrice);

//   return interpolateColor(minColor, maxColor, factor);
// };

// export const getColorForRealStateType = (type: RealStateType): string => {
//   let hash = 0;
//   for (let i = 0; i < type.length; i++) {
//     hash = type.charCodeAt(i) + ((hash << 5) - hash);
//   }

//   const color = (hash & 0x00ffffff).toString(16).toUpperCase();
//   return "#" + "0".repeat(6 - color.length) + color;
// };

export const getMapMarkerIcon = (color: string) => {
  return `
     <svg fill="${color}" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"
     enable-background="new 0 0 100 100" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M50,10.417c-15.581,0-28.201,12.627-28.201,28.201c0,6.327,2.083,12.168,5.602,16.873L45.49,86.823 c0.105,0.202,0.21,0.403,0.339,0.588l0.04,0.069l0.011-0.006c0.924,1.278,2.411,2.111,4.135,2.111c1.556,0,2.912-0.708,3.845-1.799 l0.047,0.027l0.179-0.31c0.264-0.356,0.498-0.736,0.667-1.155L72.475,55.65c3.592-4.733,5.726-10.632,5.726-17.032 C78.201,23.044,65.581,10.417,50,10.417z M49.721,52.915c-7.677,0-13.895-6.221-13.895-13.895c0-7.673,6.218-13.895,13.895-13.895 s13.895,6.222,13.895,13.895C63.616,46.693,57.398,52.915,49.721,52.915z"></path> </g> </g></svg>
     `;
};

export const buildPointBounds = (
  latitude: number,
  longitude: number,
  sideLengthKm = 10,
): L.LatLngBoundsExpression => {
  const createSquareBounds = (
    center: { lat: number; lng: number },
    sideLengthKm: number,
  ): L.LatLngBoundsExpression => {
    const lat = center.lat;
    const lng = center.lng;

    const latDelta = sideLengthKm / 110.574;
    const lngDelta = sideLengthKm / (111.32 * Math.cos((lat * Math.PI) / 180));

    const southwest: any = L.latLng(lat - latDelta, lng - lngDelta);
    const northeast: any = L.latLng(lat + latDelta, lng + lngDelta);

    return [southwest, northeast];
  };
  console.log({
    R: createSquareBounds({ lat: latitude, lng: longitude }, sideLengthKm),
  });
  return createSquareBounds({ lat: latitude, lng: longitude }, sideLengthKm);
};

export const haversineDistance = (
  center: { lat: number; lng: number },
  point: { lat: number; lng: number },
): number => {
  const lat1 = center.lat;
  const lon1 = center.lng;
  const lat2 = point.lat;
  const lon2 = point.lng;
  const toRadians = (degrees: number) => degrees * (Math.PI / 180);

  const R = 6371000; // Radio de la Tierra en m
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

export const getMidpoint = (
  point1: { lat: number; lng: number },
  point2: { lat: number; lng: number },
) => {
  // return [(point1[0] + point2[0]) / 2, (point1[1] + point2[1]) / 2];
  return {
    lat: (point1.lat + point2.lat) / 2,
    lng: (point1.lng + point2.lng) / 2,
  };
};
