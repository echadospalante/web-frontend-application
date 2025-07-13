import { User } from 'echadospalante-domain';

import { useQuery } from '@tanstack/react-query';
import { PaginatedBody } from 'echadospalante-domain';
import { useSelector } from 'react-redux';

import {
  selectUsersManagement,
  setUserFilters,
} from '../../../../config/redux/reducers/admin/users-management.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import { UsersApi } from '../api/http/users-management.api';

const useFetchUsers = () => {
  const { filters } = useSelector(selectUsersManagement);

  const usersQuery = useQuery<PaginatedBody<User>>({
    queryKey: ['users', filters],
    queryFn: () => UsersApi.fetchUsers(filters),
    staleTime: 1000 * 60 * 60,
  });

  const dispatch = useAppDispatch();

  const toggleLockUserAccount = (user: User) => {
    // const actionMiddleware = user.active
    //   ? lockUserAccountMiddleware
    //   : unlockUserAccountMiddleware;
    // dispatch(actionMiddleware(user.id))
    //   .then(() => {
    //     setUsers((users) => ({
    //       ...users,
    //       loading: false,
    //       error: false,
    //       items: users.items.map((u) => {
    //         if (u.id === user.id) {
    //           return {
    //             ...u,
    //             active: !u.active,
    //           };
    //         }
    //         return u;
    //       }),
    //     }));
    //   })
    //   .catch(() => {
    //     setUsers((users) => ({
    //       ...users,
    //       loading: false,
    //       error: true,
    //       total: 0,
    //     }));
    //   });
  };

  const toggleUserAccountVerification = (user: User) => {
    // setUsers((users) => ({
    //   ...users,
    //   loading: true,
    //   error: false,
    // }));
    // const actionMiddleware = user.active
    //   ? verifyUserAccountMiddleware
    //   : unverifyUserAccountMiddleware;
    // dispatch(actionMiddleware(user.id))
    //   .then(() => {
    //     setUsers((users) => ({
    //       ...users,
    //       loading: false,
    //       error: false,
    //       items: users.items.map((u) => {
    //         if (u.id === user.id) {
    //           return {
    //             ...u,
    //             active: !u.verified,
    //           };
    //         }
    //         return u;
    //       }),
    //     }));
    //   })
    //   .catch(() => {
    //     setUsers((users) => ({
    //       ...users,
    //       loading: false,
    //       error: true,
    //       total: 0,
    //     }));
    //   });
  };

  const setPage = (page: number) => {
    dispatch(setUserFilters({ ...filters, page }));
  };

  return {
    loading: usersQuery.isLoading,
    error: usersQuery.isError,
    users: usersQuery.data,
    ...filters,
    setPage,
    toggleLockUserAccount,
    toggleUserAccountVerification,
  };
};

export default useFetchUsers;
