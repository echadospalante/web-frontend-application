import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  selectEvents,
  setEvents,
} from '../../../../config/redux/reducers/principal/events.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import { VentureEventsApi } from '../../account/api/http/ventures-management.api';

const useFetchVentureEvents = (ventureId: string) => {
  const { filters, items, total } = useSelector(selectEvents);

  const dispatch = useAppDispatch();
  const ventureEventsQuery = useQuery({
    queryKey: ['ventures', ventureId, 'events'],
    queryFn: () => VentureEventsApi.getVentureEvents(ventureId),
    staleTime: 1000 * 60 * 60,
  });

  const retryFetch = () => {
    ventureEventsQuery.refetch();
  };

  useEffect(() => {
    if (ventureEventsQuery.isSuccess) {
      dispatch(setEvents(ventureEventsQuery.data));
    }
  }, [ventureEventsQuery.data, ventureEventsQuery.isSuccess]);

  return {
    isLoading: ventureEventsQuery.isLoading,
    isError: ventureEventsQuery.isError,
    data: items,
    total,
    retryFetch,
    viewMode: filters.viewMode,
  };
};

export default useFetchVentureEvents;
