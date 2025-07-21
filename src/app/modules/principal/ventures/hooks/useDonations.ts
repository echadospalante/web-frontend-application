import { useState } from 'react';


import { useQuery } from '@tanstack/react-query';
import { Pagination } from 'echadospalante-domain';

import { ContributionsApi } from '../../account/api/http/contributions.api';

const useFetchDonations = (type: "sent" | "received") => {
  const [pagination, setPagination] = useState<Pagination>({ skip: 0, take: 10 });

  const donationsQuery = useQuery({
    queryKey: [
      'events',
      "donations",
      type,
      pagination.skip,
      pagination.take

    ],
    queryFn: () => ContributionsApi.fetchUserDonations(type, pagination),
    staleTime: 1000 * 60 * 60,
  });

  const retryFetch = () => {
    donationsQuery.refetch();
  };

  const setSkip = (skip: number) => {
    setPagination((prev) => ({
      ...prev,
      skip,
    }));
  };

  return {
    isLoading: donationsQuery.isLoading,
    isError: donationsQuery.isError,
    items: donationsQuery.data?.items || [],
    total: donationsQuery.data?.total || 0,
    retryFetch,
    setSkip,
    ...pagination
  };
};

export default useFetchDonations;
