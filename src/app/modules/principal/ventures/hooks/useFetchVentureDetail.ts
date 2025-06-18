import { useQuery } from '@tanstack/react-query';

import VenturesApi from '../api/ventures.api';

const useFetchVentureDetail = (ventureId: string) => {
  
  const ventureDetailQuery = useQuery({
    queryKey: ['ventures', ventureId],
    queryFn: () => VenturesApi.fetchVentureDetail(ventureId),
    staleTime: 1000 * 60 * 60,
  });

  const retryFetch = () => {
    ventureDetailQuery.refetch();
  };

  return {
    isLoading: ventureDetailQuery.isLoading,
    isError: ventureDetailQuery.isError,
    retryFetch,
    data: ventureDetailQuery.data,
  };
};

export default useFetchVentureDetail;
