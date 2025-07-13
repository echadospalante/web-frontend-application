
import { useSelector } from 'react-redux';

import { selectPublications } from '../../../../config/redux/reducers/principal/publications.reducer';
import { useQuery } from '@tanstack/react-query';
import PublicationsApi from '../api/publications.api';

const useHighlightedPublications = () => {
  const { filters } = useSelector(selectPublications)

  const highlightedPublicationsQuery = useQuery({
    queryKey: ['publications', 'highlighted', filters],
    queryFn: async () => PublicationsApi.fetchHighlightedPublications(filters),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const refetchHighlightedPublications = () => {
    highlightedPublicationsQuery.refetch();
  }

  return {
    highlightedPublications: highlightedPublicationsQuery.data,
    isLoading: highlightedPublicationsQuery.isLoading,
    isError: highlightedPublicationsQuery.isError,
    error: highlightedPublicationsQuery.error,
    refetchHighlightedPublications,
  }


}

export default useHighlightedPublications;