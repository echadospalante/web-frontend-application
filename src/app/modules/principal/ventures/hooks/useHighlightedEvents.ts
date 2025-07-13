
import { useSelector } from 'react-redux';

import { selectEvents } from '../../../../config/redux/reducers/principal/events.reducer';
import { useQuery } from '@tanstack/react-query';
import EventsApi from '../api/events.api';

const useHighlightedEvents = () => {
  const { filters } = useSelector(selectEvents)

  const highlightedEventsQuery = useQuery({
    queryKey: ['events', 'highlighted', filters],
    queryFn: async () => EventsApi.fetchHighlightedEvents(filters),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const refetchHighlightedEvents = () => {
    highlightedEventsQuery.refetch();
  }

  return {
    highlightedEvents: highlightedEventsQuery.data,
    isLoading: highlightedEventsQuery.isLoading,
    isError: highlightedEventsQuery.isError,
    error: highlightedEventsQuery.error,
    refetchHighlightedEvents,
  }


}

export default useHighlightedEvents;