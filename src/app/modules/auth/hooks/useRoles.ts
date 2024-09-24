import { useEffect, useState } from "react";

import { Role } from "x-ventures-domain";

import { useAppDispatch } from "../../../config/redux/store/store.config";
import { fetchRolesMiddleware } from "../../admin/general/api/middleware/users.middleware";

const useRoles = () => {
  const [rolesRequest, setRolesRequest] = useState({
    loading: false,
    error: false,
    roles: [] as Role[],
  });

  const dispatch = useAppDispatch();

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
  }, [dispatch]);

  return { ...rolesRequest };
};

export default useRoles;
