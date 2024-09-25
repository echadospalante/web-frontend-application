import axios from "axios";

import env from "../../../../../environment/environment";
import { UserRegisterInfo } from "../../../../config/redux/reducers/register.reducer";
import { LoginResponse } from "../../domain/Login";

class AuthenticationApi {
  private static readonly BASE_URL = `${env.API_URL}/api/v1/auth`;

  public static loginUser(oauth2Token: string): Promise<LoginResponse> {
    return axios
      .post<LoginResponse>(`${this.BASE_URL}/login`, undefined, {
        withCredentials: true,
        headers: {
          authorization: `Bearer ${oauth2Token}`,
        },
      })
      .then(({ data }) => data);
  }

  public static refreshAuth(): Promise<LoginResponse> {
    return axios
      .get<LoginResponse>(`${this.BASE_URL}/refresh`, { withCredentials: true })
      .then(({ data }) => data);
  }

  static createUserRegister(
    userInfo: UserRegisterInfo,
    preferences: string[]
  ): Promise<void> {
    const { gender, birthDate, municipalityId } = userInfo;
    return axios
      .post<void>(
        `${this.BASE_URL}/register`,
        { gender, birthDate, municipalityId, preferences },
        { withCredentials: true }
      )
      .then(({ data }) => data);
  }

  public static logoutUser() {
    return axios.post(`${this.BASE_URL}/logout`, undefined, {
      withCredentials: true,
    });
  }
}

export default AuthenticationApi;
