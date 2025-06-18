import { useQuery } from "@tanstack/react-query";

import VenturesApi from "../api/ventures.api";

const useFetchVentureStats = (ventureId: string) => {
  const ventureStatsQuery = useQuery({
    queryKey: ['ventures', "stats", ventureId],
    queryFn: () => VenturesApi.fetchVentureStats(ventureId),
    staleTime: 1000 * 60 * 60,
  });
    

  return {
    data: ventureStatsQuery.data,
    isLoading: ventureStatsQuery.isLoading,
    isError: ventureStatsQuery.isError,
    refetch: ventureStatsQuery.refetch,
  }
}

export default useFetchVentureStats;