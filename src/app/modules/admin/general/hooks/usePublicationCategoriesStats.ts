

import { useQuery } from '@tanstack/react-query';

import { PublicationCategoriesApi } from '../../../principal/account/api/http/venture-publications.api';

const usePublicationCategoriesStats = () => {
  const publicationCategoriesStatsQuery = useQuery({
    queryKey: ['publications', 'categories', 'stats'],
    queryFn: () => PublicationCategoriesApi.fetchCategoriesStats(),
  });

  return {
    items: publicationCategoriesStatsQuery.data?.items || [],
    total: publicationCategoriesStatsQuery.data?.total || 0,
    isLoading: publicationCategoriesStatsQuery.isLoading,
    isError: publicationCategoriesStatsQuery.isError,
    refetch: publicationCategoriesStatsQuery.refetch,
  };
};

export default usePublicationCategoriesStats;
