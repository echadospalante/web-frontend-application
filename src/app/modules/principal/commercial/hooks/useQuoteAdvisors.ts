import { useEffect, useState } from "react";

import { useAppDispatch } from "../../../../config/redux/store/store.config";
import {
  createQuoteAdvisorMiddleware,
  fetchQuoteAdvisorsMiddleware,
} from "../api/middleware/quote-advisors.middleware";
import { QuoteAdvisor } from "../domain/advisor";

type UseCountriesProps = {
  page: number;
  size: number;
  fetch?: boolean;
};

const useQuoteAdvisors = (props: UseCountriesProps) => {
  const { page, size, fetch = true } = props;

  const dispatch = useAppDispatch();

  const [advisors, setAdvisors] = useState({
    loading: true,
    error: false,
    items: [] as QuoteAdvisor[],
    total: 0,
  });

  const editQuoteAdvisor = (advisor: QuoteAdvisor) => {
    setAdvisors((advisors) => ({
      ...advisors,
      loading: true,
      error: false,
    }));
    dispatch(editQuoteAdvisorMiddleware(advisor))
      .then(() => {
        setAdvisors({
          ...advisors,
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setAdvisors({
          loading: false,
          error: true,
          items: [],
          total: 0,
        });
      });
  };

  const fetchQuoteAdvisors = () => {
    setAdvisors((countries) => ({
      ...countries,
      loading: true,
      error: false,
    }));

    dispatch(fetchQuoteAdvisorsMiddleware(page, size))
      .then((advisors) => {
        setAdvisors({
          ...advisors,
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setAdvisors({
          loading: false,
          error: true,
          items: [],
          total: 0,
        });
      });
  };

  const createQuoteAdvisor = (quoteAdvisor: QuoteAdvisor) => {
    setAdvisors((advisors) => ({
      ...advisors,
      loading: true,
      error: false,
    }));

    dispatch(createQuoteAdvisorMiddleware(quoteAdvisor))
      .then(() => {
        setAdvisors({
          ...advisors,
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setAdvisors({
          loading: false,
          error: true,
          items: [],
          total: 0,
        });
      });
  };

  useEffect(() => {
    if (!fetch) return;

    setAdvisors((countries) => ({
      ...countries,
      loading: true,
      error: false,
    }));

    dispatch(fetchQuoteAdvisorsMiddleware(page, size))
      .then((advisors) => {
        console.log({
          advisors,
        });
        setAdvisors({
          ...advisors,
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setAdvisors((advisors) => ({
          ...advisors,
          loading: false,
          error: true,
        }));
      });
  }, [dispatch, fetch, page, size]);

  return {
    ...advisors,
    fetchQuoteAdvisors,
    createQuoteAdvisor,
  };
};

export default useQuoteAdvisors;
