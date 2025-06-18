import axios from 'axios';
import { PublicationClap } from 'echadospalante-domain';


export default class ClapsApi {
  private static readonly BASE_URL = `${
    import.meta.env.VITE_API_URL
  }/api/v1/publications`;

  public static async createClap(
    publicationId: string,
  ): Promise<PublicationClap> {
    return axios
      .post<PublicationClap>(`${this.BASE_URL}/${publicationId}/claps`, null, {
        withCredentials: true,
      })
      .then(({ data }) => data);
  }

  public static deleteClap(
    publicationId: string,
    clapId: string,
  ): Promise<void> {
    return axios
      .delete(`${this.BASE_URL}/${publicationId}/claps/${clapId}`, {
        withCredentials: true,
      })
      .then(() => {});
  }
}