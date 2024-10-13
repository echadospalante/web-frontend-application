import { useEffect, useState } from "react";

import { Role } from "echadospalante-core";

import { useAppDispatch } from "../../../config/redux/store/store.config";
import { fetchRolesMiddleware } from "../../admin/general/api/middleware/users.middleware";

const useRoles = () => {
  const dispatch = useAppDispatch();
  const [rolesRequest, setRolesRequest] = useState({
    loading: false,
    error: false,
    roles: [] as Role[],
  });

  useEffect(() => {
    setRolesRequest((request) => ({
      ...request,
      loading: true,
      error: false,
      roles: [],
    }));
    dispatch(fetchRolesMiddleware())
      .then((roles) => {
        setRolesRequest((request) => ({
          ...request,
          loading: false,
          error: false,
          roles,
        }));
      })
      .catch(() => {
        setRolesRequest((request) => ({
          ...request,
          loading: false,
          error: true,
          roles: [],
        }));
      });
  }, []);

  return { ...rolesRequest };
};

export default useRoles;
