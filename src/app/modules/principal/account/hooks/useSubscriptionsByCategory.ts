import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { Pagination } from 'echadospalante-domain';
import { useSearchParams } from 'react-router-dom';

import SubscriptionsApi from '../../ventures/api/subscriptions.api';

const useSubscriptionsByCategory = (categoryId: string | null) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [pagination, setPagination] = useState<Pagination>({
    skip: 0,
    take: 12,
  });

  const subscriptionsByCategoryQuery = useQuery({
    queryKey: ['subscriptions', 'category', categoryId],
    queryFn: () =>
      categoryId
        ? SubscriptionsApi.fetchSubscriptionsByCategory(categoryId, pagination)
        : Promise.resolve({ items: [], total: 0 }),
    enabled: !!categoryId,
  });

  const setSkip = (skip: number) => {
    setPagination((prev) => ({ ...prev, skip }));
  };

  useEffect(() => {
    setSearchParams({
      skip: pagination.skip.toString(),
      take: pagination.take.toString(),
    });
  }, [pagination, setSearchParams]);

  useEffect(() => {
    setPagination({ skip: 0, take: pagination.take });
  }, [categoryId]);

  return {
    isLoading: subscriptionsByCategoryQuery.isLoading,
    isError: subscriptionsByCategoryQuery.isError,
    items: subscriptionsByCategoryQuery.data?.items || [],
    total: subscriptionsByCategoryQuery.data?.total || 0,
    retryFetch: subscriptionsByCategoryQuery.refetch,
    setSkip,
    ...pagination,
  };
};

export default useSubscriptionsByCategory;
