import { useQuery } from "@tanstack/react-query"
import UserProfileInfoApi from "../api/http/user-profile-info.api";

const useUserUsageStatistics = () => {
  const userUsageStatisticsQuery = useQuery({
    queryKey: ['users', 'usage', 'statistics'],
    queryFn: () => UserProfileInfoApi.fetchUserUsageStatistics(),
  });

  return {
    data: userUsageStatisticsQuery.data,
    loading: userUsageStatisticsQuery.isLoading,
    error: userUsageStatisticsQuery.isError,
    refetchStats: userUsageStatisticsQuery.refetch,
  };
}

export default useUserUsageStatistics