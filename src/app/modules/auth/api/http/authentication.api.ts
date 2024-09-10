import axios from "axios";

import { LoginResponse } from "../../domain/Login";
import env from "../../../../../environment/environment";

class AuthenticationApi {
  private static readonly BASE_URL = `${env.API_URL}/api/v1/auth`;

  public static loginUser(oauth2Token: string): Promise<LoginResponse> {
    return axios
      .get<LoginResponse>(`${this.BASE_URL}/login`, {
        headers: {
          withCredentials: true,
          Authorization: `Bearer ${oauth2Token}`,
        },
      })
      .then(({ data }) => data);
  }

  public static refreshAuth(): Promise<LoginResponse> {
    return axios
      .get<LoginResponse>(`${this.BASE_URL}/refresh`, { withCredentials: true })
      .then(({ data }) => data);
  }
}

export default AuthenticationApi;
