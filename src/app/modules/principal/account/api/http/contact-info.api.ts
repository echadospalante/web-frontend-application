import { UserContact } from "echadospalante-core";
import env from "../../../../../../environment/environment";
import axios from "axios";

export default class UserContactInfoApi {
  private static readonly BASE_URL = `${env.API_URL}/api/v1/users`;

  public static fetchUserContactInfo(): Promise<UserContact> {
    return axios
      .get<UserContact>(`${this.BASE_URL}/contact`, { withCredentials: true })
      .then(({ data }) => data);
  }
}
