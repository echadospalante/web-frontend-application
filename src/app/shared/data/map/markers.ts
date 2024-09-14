import { MarkerType } from "./map-data";

export const getSvgForMarker = (type: string) => {
  switch (type) {
    case MarkerType.casa:
      return `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="{{fill_value}}" d="M22 9L12 1L2 9v2h2v10h5v-4a3 3 0 1 1 6 0v4h5V11h2z"/></svg>`;
    case MarkerType.apartamento:
      return `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="{{fill_value}}" d="M3 21V7h4V3h10v8h4v10h-8v-4h-2v4zm2-2h2v-2H5zm0-4h2v-2H5zm0-4h2V9H5zm4 4h2v-2H9zm0-4h2V9H9zm0-4h2V5H9zm4 8h2v-2h-2zm0-4h2V9h-2zm0-4h2V5h-2zm4 12h2v-2h-2zm0-4h2v-2h-2z"/></svg>`;
    case MarkerType.localComercial:
      return `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="{{fill_value}}" d="M4 6V4h16v2zm0 14v-6H3v-2l1-5h16l1 5v2h-1v6h-2v-6h-4v6zm2-2h6v-4H6z"/></svg>`;
    case MarkerType.oficina:
      return `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="{{fill_value}}" d="M11 3V0H2v14H0v1h7v-5h2V8h5V3zm-5 7H4V8h2zm0-3H4V5h2zm0-3H4V2h2zm3 3H7V5h2zm0-3H7V2h2zm4 3h-2V5h2zm1 4h2v5H8v-5h2V9h4z"/></svg>`;
    case MarkerType.finca:
      return `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="{{fill_value}}" d="M12 3L3 8.2V21h6l2.9-3l3.1 3h6V8.2zM7.9 20v-6l3 3zm1-7h6l-3 3zm7 7l-3-3l3-3zm-.9-9H8.8V9H15z"/></svg>`;
    case MarkerType.hotel:
      return `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><defs><mask id="ipSHotel0"><g fill="none" stroke-width="4"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M4 4h40"/><rect width="32" height="40" x="8" y="4" fill="#fff" stroke="#fff" stroke-linejoin="round" rx="2"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M20 32h8v12h-8z"/><path stroke="#000" stroke-linecap="round" d="M15 12h2m-2 6h2m6-6h2m-2 6h2m6-6h2m-2 6h2"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M4 44h40"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 32h2c.552 0 1.01-.452.904-.994C30.352 28.166 27.471 26 24 26c-3.47 0-6.352 2.165-6.904 5.006c-.106.542.352.994.904.994h2"/></g></mask></defs><path fill="{{fill_value}}" d="M0 0h48v48H0z" mask="url(#ipSHotel0)"/></svg>`;
    default:
      return "";
  }
};
