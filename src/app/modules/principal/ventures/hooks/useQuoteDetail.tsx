import { useEffect, useState } from "react";

import { useAppDispatch } from "../../../../config/redux/store/store.config";
import { Quote } from "../domain/quote";
import { fetchQuoteDetailMiddleware } from "../api/middleware/quotes.middleware";

const useQuoteDetail = (id: string) => {
  const dispatch = useAppDispatch();
  const [quoteResponse, setQuoteResponse] = useState({
    loading: false,
    error: false,
    quote: undefined as Quote | undefined,
  });

  useEffect(() => {
    setQuoteResponse((quoteResponse) => ({
      ...quoteResponse,
      loading: true,
      error: false,
    }));

    dispatch(fetchQuoteDetailMiddleware(id))
      .then((quote) => {
        setQuoteResponse({
          loading: false,
          error: false,
          quote,
        });
      })
      .catch(() => {
        setQuoteResponse({
          loading: false,
          error: true,
          quote: undefined,
        });
      });
  }, [dispatch, id]);

  const fetchQuoteDetail = () => {
    setQuoteResponse((quoteResponse) => ({
      ...quoteResponse,
      loading: true,
      error: false,
    }));

    dispatch(fetchQuoteDetailMiddleware(id))
      .then((quote) => {
        setQuoteResponse({
          loading: false,
          error: false,
          quote,
        });
      })
      .catch(() => {
        setQuoteResponse({
          loading: false,
          error: true,
          quote: undefined,
        });
      });
  };

  return {
    ...quoteResponse,
    fetchQuoteDetail,
  };
};

export default useQuoteDetail;
