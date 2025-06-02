import { useQuery } from '@tanstack/react-query';

import { PublicationCategoriesApi } from '../api/http/venture-publications.api';

const useFetchAllPublicationCategories = () => {
  const publicationCategoriesQuery = useQuery({
    queryKey: ['publications', 'categories'],
    queryFn: () =>
      PublicationCategoriesApi.fetchPublicationCategories(),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return {
    loading: publicationCategoriesQuery.isLoading,
    error: publicationCategoriesQuery.isError,
    data: publicationCategoriesQuery.data?.items || [],
    retryFetch: publicationCategoriesQuery.refetch,
  };
};

export default useFetchAllPublicationCategories;
