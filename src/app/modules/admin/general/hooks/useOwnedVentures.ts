import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { Venture } from 'echadospalante-domain';
import { useSelector } from 'react-redux';

import {
  selectOwnedVentures,
  setOwnedVentures,
  setOwnedVenturesFilters,
} from '../../../../config/redux/reducers/principal/owned-ventures.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import { OwnedVenturesApi } from '../../../principal/account/api/http/owned-ventures-management.api';
import { updateOwnedVentureMiddleware } from '../api/middleware/owned-ventures.middleware';

const useOwnedVentures = () => {
  const { filters, ventures } = useSelector(selectOwnedVentures);
  const ownedVenturesQuery = useQuery({
    queryKey: ['ventures', 'owned', filters],
    queryFn: () => OwnedVenturesApi.fetchOwnedVentures(filters),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const { isSuccess, data } = ownedVenturesQuery;

  const dispatch = useAppDispatch();

  const setPage = (page: number) => {
    dispatch(setOwnedVenturesFilters({ ...filters, page }));
  };

  const handleEditOwnedVenture = (venture: Venture) => {
    dispatch(updateOwnedVentureMiddleware(venture.id, venture));
  };

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setOwnedVentures(data));
    }
  }, [isSuccess, data]);

  return {
    ...ventures,
    ...filters,
    loading: ownedVenturesQuery.isLoading,
    error: ownedVenturesQuery.isError,
    data: ownedVenturesQuery.data?.items || [],
    handleEditOwnedVenture,
    setPage,
    retryFetch: ownedVenturesQuery.refetch,
  };
};

export default useOwnedVentures;
