// export const getColorForPrice = (price: number, items: MapMarker[]): string => {
//   const minColor = "#00FF00"; // Verde
//   const maxColor = "#FF0000"; // Rojo

//   const prices = items.map(({ price: precio }) => precio);
//   const maxPrice = Math.max(...prices);
//   const minPrice = Math.min(...prices);

//   const factor = (price - minPrice) / (maxPrice - minPrice);

//   return interpolateColor(minColor, maxColor, factor);
// };
