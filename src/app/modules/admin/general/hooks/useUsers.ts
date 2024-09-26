import { useEffect, useState } from "react";

import { User } from "echadospalante-core";

import { useAppDispatch } from "../../../../config/redux/store/store.config";
import {
  fetchUsersMiddleware,
  lockUserAccountMiddleware,
  unlockUserAccountMiddleware,
  unverifyUserAccountMiddleware,
  verifyUserAccountMiddleware,
} from "../api/middleware/users.middleware";

type UseCountriesProps = {
  page: number;
  size: number;
  fetch?: boolean;
};

const useUsers = (props: UseCountriesProps) => {
  const { page, size, fetch = true } = props;

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

    dispatch(fetchUsersMiddleware(page, size))
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

  useEffect(() => {
    if (!fetch) return;

    setUsers((users) => ({
      ...users,
      loading: true,
      error: false,
    }));

    dispatch(fetchUsersMiddleware(page, size))
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
  }, [dispatch, fetch, page, size]);

  return {
    ...users,
    fetchUsers,
    toggleLockUserAccount,
    toggleUserAccountVerification,
  };
};

export default useUsers;
