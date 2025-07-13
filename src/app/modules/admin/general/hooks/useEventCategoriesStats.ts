

import { useQuery } from '@tanstack/react-query';

import { EventCategoriesApi } from '../api/http/event-categories-management.api';

const useEventCategoriesStats = () => {
  const eventCategoriesStatsQuery = useQuery({
    queryKey: ['events', 'categories', 'stats'],
    queryFn: () => EventCategoriesApi.fetchEventCategoriesStats(),
  });

  return {
    items: eventCategoriesStatsQuery.data?.items || [],
    total: eventCategoriesStatsQuery.data?.total || 0,
    isLoading: eventCategoriesStatsQuery.isLoading,
    isError: eventCategoriesStatsQuery.isError,
    refetch: eventCategoriesStatsQuery.refetch,
  };
};

export default useEventCategoriesStats;
