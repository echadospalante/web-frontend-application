

import { useQuery } from '@tanstack/react-query';

import { VentureCategoriesApi } from '../api/http/venture-categories-management.api';

const useVentureCategoriesStats = () => {
  const ventureCategoriesStatsQuery = useQuery({
    queryKey: ['ventureCategories'],
    queryFn: () => VentureCategoriesApi.fetchVentureCategoriesStats(),
  })

  return {
    ventureCategoriesStats: ventureCategoriesStatsQuery.data || [],
    isLoading: ventureCategoriesStatsQuery.isLoading,
    isError: ventureCategoriesStatsQuery.isError,
    refetch: ventureCategoriesStatsQuery.refetch,
  }
};

export default useVentureCategoriesStats;
