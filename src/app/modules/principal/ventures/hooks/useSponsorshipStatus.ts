import { useQuery } from "@tanstack/react-query"
import SponsorShipsApi from "../api/sponsorships.api"

const useSponsorshipStatus = (ventureId: string) => {
  const sponsorStatusQuery = useQuery({
    queryKey: ["ventures", ventureId, 'sponsorships', "status"],
    queryFn: () => SponsorShipsApi.getSponsorshipStatus(ventureId),
  })

  return {
    loading: sponsorStatusQuery.isLoading,
    error: sponsorStatusQuery.isError,
    status: sponsorStatusQuery.data?.status || false,
    subscriptionId: sponsorStatusQuery.data?.subscriptionId || "",
  }
}

export default useSponsorshipStatus