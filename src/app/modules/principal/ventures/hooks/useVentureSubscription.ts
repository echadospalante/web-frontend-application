import { useEffect, useState } from "react";

import { useMutation, useQuery } from "@tanstack/react-query";

import { setGlobalAlert, SeverityLevel } from "../../../../config/redux/reducers/shared/user-interface.reducer";
import { useAppDispatch } from "../../../../config/redux/store/store.config";
import useAuthentication from "../../../auth/hooks/useAuthentication";
import SubscriptionsApi from "../api/subscriptions.api";

const useVentureSubscription = (ventureId: string) => {
  const { email } = useAuthentication();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const dispatch = useAppDispatch();

  const subscribeMutation = useMutation({
    mutationFn: () => SubscriptionsApi.createSubscription(ventureId),
    onSuccess: () => {
      setIsSubscribed(true);
      dispatch(
        setGlobalAlert({
          message: 'Te has suscrito al emprendimiento correctamente.',
          timeout: 5000,
          severity: SeverityLevel.SUCCESS,
          title: 'Suscripción exitosa',
          position: 'top-right',
        }
      ));
    },
    onError: (error) => {
      console.error('Error subscribing to venture:', error);
      dispatch(
        setGlobalAlert({
          message: 'No se pudo suscribir al emprendimiento. Por favor, inténtalo de nuevo más tarde.',
          timeout: 5000,
          severity: SeverityLevel.ERROR,
          title: 'Error',
          position: 'top-right',
        }),
      );
    }
  })

  const unsubscribeMutation = useMutation({
    mutationFn: () => SubscriptionsApi.deleteSubscription(ventureId),
    onSuccess: () => {
      setIsSubscribed(false);
      dispatch(
        setGlobalAlert({
          message: 'Te has desuscrito del emprendimiento correctamente.',
          timeout: 5000,
          severity: SeverityLevel.SUCCESS,
          title: 'Desuscripción exitosa',
          position: 'top-right',
        }),
      );
    },
    onError: (error) => {
      console.error('Error unsubscribing from venture:', error);
      dispatch(
        setGlobalAlert({
          message: 'No se pudo desuscribir del emprendimiento. Por favor, inténtalo de nuevo más tarde.',
          timeout: 5000,
          severity: SeverityLevel.ERROR,
          title: 'Error', 
          position: 'top-right',
        }),
      );
    }
  });

  const subscriptionStatusQuery = useQuery({
    queryKey: ['ventures',ventureId, "subscription-status", email],
    queryFn: () => SubscriptionsApi.getSubscriptionStatus(ventureId),
  })

  const handleSubscribe = async () => {
    subscribeMutation.mutate();
  };

  const handleUnsubscribe = async () => {
    unsubscribeMutation.mutate();
  };

  useEffect(() => {
    if (subscriptionStatusQuery.data !== undefined) {
      setIsSubscribed(subscriptionStatusQuery.data);
    }
  }, [subscriptionStatusQuery.data]);

  return {
    isSubscribed,
    handleSubscribe,
    handleUnsubscribe,
    
    statusLoading: subscriptionStatusQuery.isLoading,
    statusError: subscriptionStatusQuery.isError,
    subscriptionStatus: subscriptionStatusQuery.data, 


    subscribeLoading: subscribeMutation.isPending,
    subscribeError: subscribeMutation.isError,
    subscribeCompleted: subscribeMutation.isSuccess,

    unsubscribeLoading: unsubscribeMutation.isPending,
    unsubscribeError: unsubscribeMutation.isError,
    unsubscribeCompleted: unsubscribeMutation.isSuccess,
    

  };
}

export default useVentureSubscription;