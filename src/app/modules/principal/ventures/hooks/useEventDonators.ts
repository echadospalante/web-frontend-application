import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import DonationsApi from '../api/donations.api';

const useEventDonators = (eventId: string) => {
  const [pagination, setPagination] = useState({
    skip: 0,
    take: 100,
  });

  const eventDonatorsQuery = useQuery({
    queryKey: ['events', eventId, "donators"],
    queryFn: () => DonationsApi.getEventDonations(eventId, pagination),
  });

  const setSkip = (skip: number) => {
    setPagination((prev) => ({ ...prev, skip }));
  };

  const refetch = () => {
    eventDonatorsQuery.refetch();
  };

  return {
    loading: eventDonatorsQuery.isLoading,
    refetch,
    error: eventDonatorsQuery.isError,
    data: eventDonatorsQuery.data || { items: [], total: 0 },
    setSkip,
  };
};

export default useEventDonators;
