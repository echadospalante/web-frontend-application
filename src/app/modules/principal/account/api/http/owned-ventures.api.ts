import axios from "axios";
import { Pagination, Venture, VentureCreate } from "echadospalante-core";
import env from "../../../../../../environment/environment";

class OwnedVenturesApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/ventures`;

  public static createVenture(ventureCreate: VentureCreate) {
    const formData = new FormData();
    const { categoriesIds, coverPhoto, description, name, contact, location } =
      ventureCreate;
    formData.append("name", name);
    formData.append("description", description);
    formData.append("categoriesIds", categoriesIds.join(","));
    formData.append("coverPhoto", coverPhoto);
    contact?.email && formData.append("contactEmail", contact.email);
    contact?.phoneNumber &&
      formData.append("contactPhoneNumber", contact.phoneNumber);
    location?.lat && formData.append("locationLat", location.lat.toString());
    location?.lng && formData.append("locationLng", location.lng.toString());
    formData.append("locationDescription", location?.description || "");

    return axios
      .post<Venture>(`${OwnedVenturesApi.API_BASE_URL}`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(({ data }) => data);
  }

  public static deleteVenture(ventureId: string) {
    return axios
      .delete<Venture>(`${OwnedVenturesApi.API_BASE_URL}/${ventureId}`, {
        withCredentials: true,
      })
      .then(({ data }) => data);
  }

  public static fetchOwnedVentures(pagination: Pagination) {
    return axios
      .get<Venture[]>(`${OwnedVenturesApi.API_BASE_URL}/owned`, {
        withCredentials: true,
        params: {
          pagination,
        },
      })
      .then(({ data }) => data);
  }
}

export default OwnedVenturesApi;
