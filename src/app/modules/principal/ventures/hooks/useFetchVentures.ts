import { useEffect } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import {
  selectVentures,
  setVentures,
} from '../../../../config/redux/reducers/principal/ventures.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import VenturesApi from '../api/ventures.api';

const useFetchVentures = () => {
  const dispatch = useAppDispatch();
  const { filters, items, total } = useSelector(selectVentures);
  const { pagination, search, categoriesIds, municipalitiesIds, viewMode } =
    filters;

  const venturesInfiniteQuery = useInfiniteQuery({
    queryKey: [
      'ventures',
      'infinite',
      search,
      categoriesIds,
      // pagination,
      municipalitiesIds,
    ],
    queryFn: ({ pageParam = 0 }) =>
      VenturesApi.fetchVentures({
        ...filters,
        pagination: { ...pagination, skip: pageParam + pagination.take },
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      console.log(
        JSON.stringify({ lastPageTotal: lastPage.total, pagination }, null, 2),
      );
      if (
        pagination.skip + pagination.take <
        lastPage.total + pagination.take
      ) {
        return pagination.skip + pagination.take;
      }
      return undefined;
    },
    staleTime: 1000 * 60 * 60,
  });

  useEffect(() => {
    const items =
      venturesInfiniteQuery.data?.pages.flatMap((page) => page.items) || [];
    const total = venturesInfiniteQuery.data?.pages[0].total || 0;
    dispatch(
      setVentures({
        items,
        total,
      }),
    );
  }, [venturesInfiniteQuery.data, dispatch]);

  const retryFetch = () => {
    venturesInfiniteQuery.refetch();
  };

  return {
    isLoading: venturesInfiniteQuery.isLoading,
    isError: venturesInfiniteQuery.isError,
    fetchNextPage: venturesInfiniteQuery.fetchNextPage,
    hasNextPage: venturesInfiniteQuery.hasNextPage,
    isFetchingNextPage: venturesInfiniteQuery.isFetchingNextPage,
    pagination,
    viewMode,
    items,
    total,
    retryFetch,
    venturesQuery: venturesInfiniteQuery,
  };
};

export default useFetchVentures;
