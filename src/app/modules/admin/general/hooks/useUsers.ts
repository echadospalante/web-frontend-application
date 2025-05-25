import { useEffect, useState } from "react";

import { User } from "echadospalante-domain";

import { useAppDispatch } from "../../../../config/redux/store/store.config";
import {
  fetchUsersMiddleware,
  lockUserAccountMiddleware,
  unlockUserAccountMiddleware,
  unverifyUserAccountMiddleware,
  verifyUserAccountMiddleware,
} from "../api/middleware/users.middleware";
import { useSelector } from "react-redux";
import {
  selectUsersManagement,
  setUserFilters,
} from "../../../../config/redux/reducers/admin/users-management.reducer";

const useUsers = () => {
  const { filters } = useSelector(selectUsersManagement);

  const dispatch = useAppDispatch();

  const [users, setUsers] = useState({
    loading: true,
    error: false,
    items: [] as User[],
    total: 0,
  });

  const toggleLockUserAccount = (user: User) => {
    setUsers((users) => ({
      ...users,
      loading: true,
      error: false,
    }));
    const actionMiddleware = user.active
      ? lockUserAccountMiddleware
      : unlockUserAccountMiddleware;

    dispatch(actionMiddleware(user.id))
      .then(() => {
        setUsers((users) => ({
          ...users,
          loading: false,
          error: false,
          items: users.items.map((u) => {
            if (u.id === user.id) {
              return {
                ...u,
                active: !u.active,
              };
            }
            return u;
          }),
        }));
      })
      .catch(() => {
        setUsers((users) => ({
          ...users,
          loading: false,
          error: true,
          total: 0,
        }));
      });
  };

  const toggleUserAccountVerification = (user: User) => {
    setUsers((users) => ({
      ...users,
      loading: true,
      error: false,
    }));
    const actionMiddleware = user.active
      ? verifyUserAccountMiddleware
      : unverifyUserAccountMiddleware;

    dispatch(actionMiddleware(user.id))
      .then(() => {
        setUsers((users) => ({
          ...users,
          loading: false,
          error: false,
          items: users.items.map((u) => {
            if (u.id === user.id) {
              return {
                ...u,
                active: !u.verified,
              };
            }
            return u;
          }),
        }));
      })
      .catch(() => {
        setUsers((users) => ({
          ...users,
          loading: false,
          error: true,
          total: 0,
        }));
      });
  };

  const fetchUsers = () => {
    setUsers((countries) => ({
      ...countries,
      loading: true,
      error: false,
    }));

    dispatch(fetchUsersMiddleware(filters))
      .then((users) => {
        console.log({ users });
        setUsers({
          ...users,
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setUsers((users) => ({
          ...users,
          loading: false,
          error: true,
          items: [],
          total: 0,
        }));
      });
  };

  const setPage = (page: number) => {
    dispatch(setUserFilters({ ...filters, page }));
  };

  useEffect(() => {
    setUsers((users) => ({
      ...users,
      loading: true,
      error: false,
    }));

    dispatch(fetchUsersMiddleware(filters))
      .then((users) => {
        console.log({ users });
        setUsers({
          ...users,
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setUsers((users) => ({
          ...users,
          loading: false,
          error: true,
        }));
      });
  }, [dispatch, filters]);

  return {
    ...users,
    ...filters,
    fetchUsers,
    setPage,
    toggleLockUserAccount,
    toggleUserAccountVerification,
  };
};

export default useUsers;
