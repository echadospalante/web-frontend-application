import { useQuery } from '@tanstack/react-query';

import { useParams } from 'react-router-dom';
import PublicationsApi from '../api/http/publications.api';

const useFetchPublicationDetail = () => {
  const { publicationId } = useParams();

  const publicationDetailQuery = useQuery({
    queryKey: ['publications', publicationId],
    queryFn: () => {
      if (!publicationId) throw new Error('Falta el id de la publicación');

      return PublicationsApi.getPublicationDetail(publicationId);
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return {
    isLoading: publicationDetailQuery.isLoading,
    isError: publicationDetailQuery.isError,
    data: publicationDetailQuery.data,
    retryRequest: publicationDetailQuery.refetch
  };
};

export default useFetchPublicationDetail;
