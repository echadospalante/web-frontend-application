import { RealStateType } from "../modules/principal/maps/domain/real-state";

export const interpolateColor = (
  color1: string,
  color2: string,
  factor: number
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

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
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

export const getColorForRealStateType = (type: RealStateType): string => {
  let hash = 0;
  for (let i = 0; i < type.length; i++) {
    hash = type.charCodeAt(i) + ((hash << 5) - hash);
  }

  const color = (hash & 0x00ffffff).toString(16).toUpperCase();
  return "#" + "0".repeat(6 - color.length) + color;
};
