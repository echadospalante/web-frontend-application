import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { PaginatedBody, Venture } from 'echadospalante-domain';
import { useSelector } from 'react-redux';

import { selectVentures, setVentures } from '../../../../config/redux/reducers/principal/ventures.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import VenturesApi from '../api/ventures.api';

const useFetchVentures = () => {
  const dispatch = useAppDispatch();
  const { filters, items, total } = useSelector(selectVentures);
  const { pagination, search, categoriesIds, municipalitiesIds } = filters;
  const venturesQuery = useQuery<PaginatedBody<Venture>>({
    queryKey: [
      'ventures',
      search,
      categoriesIds,
      pagination,
      municipalitiesIds,
    ],
    queryFn: () => VenturesApi.fetchVentures(filters),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  useEffect(() => {
    if (venturesQuery.isSuccess) {
      dispatch(setVentures(venturesQuery.data));
    }
  }, [venturesQuery.data, venturesQuery.isSuccess, dispatch]);

  const retryFetch = () => {
    venturesQuery.refetch();
  }

  return {
    isLoading: venturesQuery.isLoading,
    isError: venturesQuery.isError,
    items,
    total,
    retryFetch,
  };
};

export default useFetchVentures;
