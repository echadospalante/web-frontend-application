import { useEffect, useState } from "react";

import { useAppDispatch } from "../../../../config/redux/store/store.config";
import { VentureState } from "../domain/state";

const useVentureStates = () => {
  const [states, setStates] = useState<VentureState[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchVentureStatesMiddleware())
      .then((states) => {
        setStates(states);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  return {
    states,
    loading,
  };
};

export default useVentureStates;
