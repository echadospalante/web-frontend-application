import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { Pagination } from "echadospalante-domain";

import SubscriptionsApi from "../../ventures/api/subscriptions.api";

const useSubscriptionsByCategory = (categoryId: string | null) => {
  const [pagination, setPagination] = useState<Pagination>({
    skip: 0,
    take: 10,
  });

  const subscriptionsByCategoryQuery = useQuery({
    queryKey: ['subscriptions', 'category', categoryId],
    queryFn: () =>
      categoryId
        ? SubscriptionsApi.fetchSubscriptionsByCategory(categoryId, pagination)
        : Promise.resolve({ items: [], total: 0 }),
    enabled: !!categoryId,
  });

  const setCurrentPage = (page: number) => {
    setPagination((prev) => ({
      ...prev,
      skip: (page - 1) * prev.take,
    }));
  };

  return {
    isLoading: subscriptionsByCategoryQuery.isLoading,
    isError: subscriptionsByCategoryQuery.isError,
    items: subscriptionsByCategoryQuery.data?.items || [],
    total: subscriptionsByCategoryQuery.data?.total || 0,
    retryFetch: subscriptionsByCategoryQuery.refetch,
    setCurrentPage,
    ...pagination,
  };
};

export default useSubscriptionsByCategory;