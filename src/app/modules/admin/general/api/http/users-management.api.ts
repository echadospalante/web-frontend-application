import axios from "axios";

import { Role, User } from "echadospalante-domain";

import env from "../../../../../../environment/environment";
import { PaginatedBody } from "../../../../principal/ventures/domain/api";
import { AppRole } from "../../../../auth/domain/Role";
import { UsersFilter } from "../../../../../config/redux/reducers/admin/users-management.reducer";
import filterFalsyValues from "../../../../../shared/helpers/object-utils";

export class UsersApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/users`;

  public static fetchUsers(
    usersFilter: UsersFilter
  ): Promise<PaginatedBody<User>> {
    const { page, size, ...rest } = usersFilter;
    const otherPrams = filterFalsyValues(rest);
    const params = new URLSearchParams(otherPrams as Record<string, string>);
    const skip = page * size;
    const take = size;
    params.set("skip", skip.toString());
    params.set("take", take.toString());
    return axios
      .get<PaginatedBody<User>>(`${UsersApi.API_BASE_URL}`, {
        withCredentials: true,
        params,
      })
      .then(({ data }) => data);
  }

  public static lockUserAccount(email: string): Promise<void> {
    return axios
      .patch<void>(`${UsersApi.API_BASE_URL}/lock/${email}`, undefined, {
        withCredentials: true,
      })
      .then(({ data }) => data);
  }

  public static unlockUserAccount(email: string): Promise<void> {
    return axios
      .patch<void>(`${UsersApi.API_BASE_URL}/unlock/${email}`, undefined, {
        withCredentials: true,
      })
      .then(({ data }) => data);
  }

  public static changeUserRoles(
    email: string,
    roles: AppRole[]
  ): Promise<void> {
    return axios
      .patch<void>(
        `${UsersApi.API_BASE_URL}/roles`,
        { email, roles },
        { withCredentials: true }
      )
      .then(({ data }) => data);
  }

  static verifyUserAccount(email: string) {
    return axios
      .patch<void>(`${UsersApi.API_BASE_URL}/verify/${email}`, undefined, {
        withCredentials: true,
      })
      .then(({ data }) => data);
  }

  public static unverifyUserAccount(email: string) {
    return axios
      .patch<void>(`${UsersApi.API_BASE_URL}/unverify/${email}`, undefined, {
        withCredentials: true,
      })
      .then(({ data }) => data);
  }

  public static fetchAllRoles(): Promise<Role[]> {
    return axios
      .get<Role[]>(`${this.API_BASE_URL}/roles`, { withCredentials: true })
      .then(({ data }) => data);
  }
}
