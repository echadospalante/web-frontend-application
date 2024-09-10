import { useEffect, useState } from "react";

import { useAppDispatch } from "../../../../config/redux/store/store.config";
import { QuoteState } from "../domain/state";

const useQuoteStates = () => {
  const [states, setStates] = useState<QuoteState[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchQuoteStatesMiddleware())
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

export default useQuoteStates;
