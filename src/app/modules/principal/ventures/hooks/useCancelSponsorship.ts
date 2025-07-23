import { useMutation, useQueryClient } from "@tanstack/react-query"

import SponsorShipsApi from "../api/sponsorships.api"

const useCancelSponsorship = (ventureId: string, ventureSlug: string) => {
  const queryClient = useQueryClient()

  const cancelSponsorshipMutation = useMutation({
    mutationKey: ["ventures", ventureId, 'sponsorships', "cancel"],
    mutationFn: (sponsorshipId: string) => SponsorShipsApi.cancelSponsorship(ventureId, sponsorshipId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["ventures", ventureId, 'sponsorships', "status"],
      })
      queryClient.invalidateQueries({
        queryKey: ['ventures', ventureId, 'sponsorships'],
      });
      queryClient.invalidateQueries({
        queryKey: ['ventures', 'slug', ventureSlug],
      });
      queryClient.refetchQueries({
        queryKey: ['ventures', ventureId, 'sponsorships'],
      });
      queryClient.refetchQueries({
        queryKey: ['ventures', 'slug', ventureSlug],
      });
      queryClient.invalidateQueries({
        queryKey: ['ventures', 'sponsorships', 'sent'],
        exact: false,
      });
      
    }
  })

  const handleCancelSponsorship = (sponsorshipId: string) => {
    cancelSponsorshipMutation.mutate(sponsorshipId)
  }

  return {
    isCancelling: cancelSponsorshipMutation.isPending,
    cancelError: cancelSponsorshipMutation.isError,
    isSuccess: cancelSponsorshipMutation.isSuccess,
    handleCancelSponsorship,
  };
}

export default useCancelSponsorship