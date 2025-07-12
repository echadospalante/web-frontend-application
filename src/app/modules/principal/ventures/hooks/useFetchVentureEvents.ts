import { useQuery } from '@tanstack/react-query';

import { VentureEventsApi } from '../../account/api/http/ventures-management.api';

const useFetchVentureEvents = (ventureId: string) => {
  
  const ventureEventsQuery = useQuery({
    queryKey: ['ventures', ventureId],
    queryFn: () => VentureEventsApi.getVentureEvents(ventureId),
    staleTime: 1000 * 60 * 60,
  });

  const retryFetch = () => {
    ventureEventsQuery.refetch();
  };

  return {
    isLoading: ventureEventsQuery.isLoading,
    isError: ventureEventsQuery.isError,
    data: ventureEventsQuery.data,
    retryFetch,
  };
};

export default useFetchVentureEvents;
