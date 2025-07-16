
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { selectEvents } from '../../../../config/redux/reducers/principal/events.reducer';
import EventsApi from '../api/events.api';

const useFetchEvents = () => {
  const { ventureId = '_' } = useParams();
  const { filters } = useSelector(selectEvents);
  const { pagination, search, categoriesIds, municipalitiesIds, dateRange } =
    filters;

  const eventsQuery = useQuery({
    queryKey: [
      'ventures',
      ventureId,
      'events',
      search,
      categoriesIds,
      municipalitiesIds,
      dateRange,
      pagination,
    ],
    queryFn: () => EventsApi.searchEvents(ventureId, filters),
    staleTime: 1000 * 60 * 60,
  });

  const retryFetch = () => {
    eventsQuery.refetch();
  };

  return {
    isLoading: eventsQuery.isLoading,
    isError: eventsQuery.isError,
    items: eventsQuery.data?.items || [],
    total: eventsQuery.data?.total || 0,
    retryFetch,
  };
};

export default useFetchEvents;
