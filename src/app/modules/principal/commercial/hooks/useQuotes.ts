import { useEffect, useState } from "react";

import { useAppDispatch } from "../../../../config/redux/store/store.config";
import { Quote } from "../domain/quote";
import {
  deleteQuoteMiddleware,
  fetchQuotesMiddleware,
} from "../api/middleware/quotes.middleware";

type UseQuotesProps = {
  page: number;
  size: number;
};

const useQuotes = (props: UseQuotesProps) => {
  const { page, size } = props;

  const dispatch = useAppDispatch();

  const [quotes, setQuotes] = useState({
    loading: false,
    error: false,
    quotes: {
      items: [] as Quote[],
      total: 0,
    },
  });

  const fetchQuotes = () => {
    setQuotes((quotes) => ({
      ...quotes,
      loading: true,
      error: false,
    }));

    dispatch(fetchQuotesMiddleware(page, size))
      .then((quotes) => {
        setQuotes({
          loading: false,
          error: false,
          quotes,
        });
      })
      .catch(() => {
        setQuotes({
          loading: false,
          error: true,
          quotes: {
            items: [],
            total: 0,
          },
        });
      });
  };

  const handleDeleteQuote = (id: string) => {
    setQuotes((quotes) => ({
      ...quotes,
      loading: true,
      error: false,
    }));

    return dispatch(deleteQuoteMiddleware(id)).then(() => fetchQuotes());
  };

  useEffect(() => {
    setQuotes((quotes) => ({
      ...quotes,
      loading: true,
      error: false,
    }));

    dispatch(fetchQuotesMiddleware(page, size))
      .then((quotes) => {
        setQuotes({
          loading: false,
          error: false,
          quotes,
        });
      })
      .catch(() => {
        setQuotes((quotes) => ({
          ...quotes,
          loading: false,
          error: true,
          quotes: {
            items: [],
            total: 0,
          },
        }));
      });
  }, [dispatch, page, size]);

  return {
    ...quotes,
    fetchQuotes,
    handleDeleteQuote,
  };
};

export default useQuotes;
