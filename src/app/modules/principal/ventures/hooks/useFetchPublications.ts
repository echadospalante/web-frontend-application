import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import {
  selectPublications,
  setPublications,
} from '../../../../config/redux/reducers/principal/publications.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import PublicationsApi from '../api/publications.api';

const useFetchPublications = (ventureSlug?: string) => {
  const dispatch = useAppDispatch();
  const { filters, items, total } = useSelector(selectPublications);
  const { categoriesIds, pagination, search, dateRange } = filters;

  const publicationsQuery = useQuery({
    queryKey: [
      'ventures',
      ventureSlug || '_',
      'publications',
      search,
      categoriesIds,
      pagination,
      dateRange,
    ],
    queryFn: () => PublicationsApi.getGeneralPublications(filters, ventureSlug),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  useEffect(() => {
    if (publicationsQuery.isSuccess) {
      dispatch(setPublications(publicationsQuery.data));
    }
  }, [publicationsQuery.data, publicationsQuery.isSuccess, dispatch]);

  return {
    isLoading: publicationsQuery.isLoading,
    isError: publicationsQuery.isError,
    items,
    total,
    refetch: publicationsQuery.refetch,
  };
};

export default useFetchPublications;
