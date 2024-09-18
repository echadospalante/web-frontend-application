import axios from "axios";

import { User } from "x-ventures-domain";

import env from "../../../../../../environment/environment";
import { PaginatedBody } from "../../domain/api";

export class UsersApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/users`;

  public static fetchUsers(
    page: number,
    size: number
  ): Promise<PaginatedBody<User>> {
    return axios
      .get<PaginatedBody<User>>(
        `${UsersApi.API_BASE_URL}?page=${page}&size=${size}`,
        { withCredentials: true }
      )
      .then(({ data }) => data);
  }

  public static lockUserAccount(userId: string): Promise<void> {
    return axios
      .patch<void>(`${UsersApi.API_BASE_URL}/lock/${userId}`, undefined, {
        withCredentials: true,
      })
      .then(({ data }) => data);
  }

  public static unlockUserAccount(userId: string): Promise<void> {
    return axios
      .patch<void>(`${UsersApi.API_BASE_URL}/unlock/${userId}`, undefined, {
        withCredentials: true,
      })
      .then(({ data }) => data);
  }
}
