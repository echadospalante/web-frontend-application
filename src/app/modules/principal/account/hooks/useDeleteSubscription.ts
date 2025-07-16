import { useMutation, useQueryClient } from "@tanstack/react-query"

import SubscriptionsApi from "../../ventures/api/subscriptions.api";
import { useAppDispatch } from "../../../../config/redux/store/store.config";
import { setGlobalAlert, SeverityLevel } from "../../../../config/redux/reducers/shared/user-interface.reducer";

const useDeleteSubscription = (ventureId: string) => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  
  const deleteSubscriptionMutation = useMutation({
    mutationKey: ['subscriptions', 'delete', ventureId],
    mutationFn: async () =>
      SubscriptionsApi.deleteSubscription(ventureId),
    onSuccess: () => {
      dispatch(setGlobalAlert({
        message: 'Suscripción cancelada correctamente.',
        timeout: 5000,
        severity: SeverityLevel.SUCCESS,
        title: 'Operación exitosa',
        position: 'top-right',
      }))
      queryClient.invalidateQueries({ queryKey: ['subscriptions', 'stats'] });
      queryClient.refetchQueries({
        queryKey: ['subscriptions', 'category'],
        exact: false,

      });
      queryClient.refetchQueries({
        queryKey: ['subscriptions', 'stats'],
      });
    },
  });

  const handleDeleteSubscription = () => {
    deleteSubscriptionMutation.mutate();
  }

  return {
    isPending: deleteSubscriptionMutation.isPending,
    isError: deleteSubscriptionMutation.isError,
    isCompleted: deleteSubscriptionMutation.isSuccess,
    handleDeleteSubscription
  }

}

export default useDeleteSubscription