import axios from "axios";
import { Venture, VentureCreate } from "echadospalante-core";
import env from "../../../../../../environment/environment";

class OwnedVenturesApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/publicaciones`;

  public static getOwnedVentures() {}

  public static createVenture(ventureCreate: VentureCreate) {
    return axios
      .post<Venture>(`${OwnedVenturesApi.API_BASE_URL}`, ventureCreate, {
        withCredentials: true,
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
}

export default OwnedVenturesApi;
