import { useState } from 'react';

import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import PublicationsApi from '../api/publications.api';
import { PublicationFilter } from '../../../../config/redux/reducers/principal/publications.reducer';


const useFetchVenturePublications = (ventureId: string) => {
  const [filters, setFilters] = useState<PublicationFilter>({search: ventureId, pagination: {skip: 0, take: 20}, categoriesIds: []});
  const {pagination,search,categoriesIds} = filters;

  const publicationsInfiniteQuery = useInfiniteQuery({
      queryKey: [
        'ventures',
        ventureId,
        'infinite',
      ],
      queryFn: ({ pageParam = 0 }) =>
        PublicationsApi.getGeneralPublications({
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

  const retryFetch = () => {
    publicationsInfiniteQuery.refetch();
  };

  return {
    isLoading: publicationsInfiniteQuery.isLoading,
    isError: publicationsInfiniteQuery.isError,
    data: publicationsInfiniteQuery.data,
    retryFetch,
  };
};

export default useFetchVenturePublications;
