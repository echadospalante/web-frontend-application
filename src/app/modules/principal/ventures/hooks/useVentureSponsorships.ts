import { useState } from 'react';


import { useQuery } from '@tanstack/react-query';
import { Pagination } from 'echadospalante-domain';

import { ContributionsApi } from '../../account/api/http/contributions.api';

const useFetchSponsorships = (type: "sent" | "received") => {
  const [pagination, setPagination] = useState<Pagination>({ skip: 0, take: 10 });

  const sponsorshipsQuery = useQuery({
    queryKey: [
      'ventures',
      "sponsorships",
      type,
      pagination.skip,
      pagination.take

    ],
    queryFn: () => ContributionsApi.fetchUserSponsorships(type, pagination),
    staleTime: 1000 * 60 * 60,
  });

  const retryFetch = () => {
    sponsorshipsQuery.refetch();
  };

  const setSkip = (skip: number) => {
    setPagination((prev) => ({
      ...prev,
      skip,
    }));
  };

  return {
    isLoading: sponsorshipsQuery.isLoading,
    isError: sponsorshipsQuery.isError,
    items: sponsorshipsQuery.data?.items || [],
    total: sponsorshipsQuery.data?.total || 0,
    retryFetch,
    setSkip,
    ...pagination
  };
};

export default useFetchSponsorships;
