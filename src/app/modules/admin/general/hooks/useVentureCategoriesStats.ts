

import { useQuery } from '@tanstack/react-query';

import { VentureCategoriesApi } from '../api/http/venture-categories-management.api';

const useVentureCategoriesStats = () => {
  const ventureCategoriesStatsQuery = useQuery({
    queryKey: ['ventures', 'categories', 'stats'],
    queryFn: () => VentureCategoriesApi.fetchVentureCategoriesStats(),
  });

  return {
    items: ventureCategoriesStatsQuery.data?.items || [],
    total: ventureCategoriesStatsQuery.data?.total || 0,
    isLoading: ventureCategoriesStatsQuery.isLoading,
    isError: ventureCategoriesStatsQuery.isError,
    refetch: ventureCategoriesStatsQuery.refetch,
  };
};

export default useVentureCategoriesStats;
