import { useQuery } from '@tanstack/react-query';

import { VentureCategoriesApi } from '../../../admin/general/api/http/venture-categories-management.api';

const useFetchAllVentureCategories = () => {
  const ventureCategoriesQuery = useQuery({
    queryKey: ['ventures', 'categories'],
    queryFn: () =>
      VentureCategoriesApi.fetchVentureCategories(),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return {
    loading: ventureCategoriesQuery.isLoading,
    error: ventureCategoriesQuery.isError,
    data: ventureCategoriesQuery.data?.items || [],
    retryFetch: ventureCategoriesQuery.refetch,
  };
};

export default useFetchAllVentureCategories;
