import { useEffect, useState } from "react";

import { useAppDispatch } from "../../../../config/redux/store/store.config";
import {
  createQuoteAreaMiddleware,
  fetchAreaSummariesMiddleware,
  fetchQuoteAreasMiddleware,
  getQuoteAlreadyExistsMiddleware,
} from "../api/middleware/quote-areas.middleware";
import { QuoteArea, QuoteAreaCreate } from "../domain/area";

type UseCountriesProps = {
  page: number;
  size: number;
  fetch?: boolean;
};

const useQuoteAreas = (props: UseCountriesProps) => {
  const { page, size, fetch = true } = props;

  const dispatch = useAppDispatch();

  const [areas, setAreas] = useState({
    loading: true,
    error: false,
    items: [] as QuoteArea[],
    total: 0,
  });

  const fetchQuoteAreas = () => {
    setAreas((countries) => ({
      ...countries,
      loading: true,
      error: false,
    }));

    dispatch(fetchQuoteAreasMiddleware(page, size))
      .then((areas) => {
        setAreas({
          ...areas,
          loading: false,
          error: false,
        });
        areas.items.forEach((area) => {
          dispatch(fetchAreaSummariesMiddleware(area.id))
            .then((response) => {
              const areaToUpdate = areas.items.find(
                (a) => a.id === area.id
              ) as QuoteArea;
              setAreas((areas) => ({
                ...areas,
                items: areas.items.map((a) =>
                  a.id === areaToUpdate.id ? { ...a, summaries: response } : a
                ),
              }));
            })
            .catch(() => {
              setAreas((areas) => ({
                ...areas,
                loading: false,
                error: true,
              }));
            });
        });
      })
      .catch(() => {
        setAreas({
          loading: false,
          error: true,
          items: [],
          total: 0,
        });
      });
  };

  const existsByName = (name: string): Promise<boolean> => {
    return dispatch(getQuoteAlreadyExistsMiddleware(name)).then(
      (response) => response
    );
  };

  const createQuoteArea = (quoteArea: QuoteAreaCreate) => {
    setAreas((areas) => ({
      ...areas,
      loading: true,
      error: false,
    }));

    dispatch(createQuoteAreaMiddleware(quoteArea))
      .then(() => {
        setAreas({
          ...areas,
          loading: false,
          error: false,
        });
        areas.items.forEach((area) => {
          dispatch(fetchAreaSummariesMiddleware(area.id))
            .then((response) => {
              const areaToUpdate = areas.items.find(
                (a) => a.id === area.id
              ) as QuoteArea;
              setAreas((areas) => ({
                ...areas,
                items: areas.items.map((a) =>
                  a.id === areaToUpdate.id ? { ...a, summaries: response } : a
                ),
              }));
            })
            .catch(() => {
              setAreas((areas) => ({
                ...areas,
                loading: false,
                error: true,
              }));
            });
        });
      })
      .catch(() => {
        setAreas({
          loading: false,
          error: true,
          items: [],
          total: 0,
        });
      });
  };

  useEffect(() => {
    if (!fetch) return;

    setAreas((countries) => ({
      ...countries,
      loading: true,
      error: false,
    }));

    dispatch(fetchQuoteAreasMiddleware(page, size))
      .then((areas) => {
        setAreas({
          ...areas,
          loading: false,
          error: false,
        });

        areas.items.forEach((area) => {
          dispatch(fetchAreaSummariesMiddleware(area.id))
            .then((response) => {
              const areaToUpdate = areas.items.find(
                (a) => a.id === area.id
              ) as QuoteArea;
              setAreas((areas) => ({
                ...areas,
                items: areas.items.map((a) =>
                  a.id === areaToUpdate.id ? { ...a, summaries: response } : a
                ),
              }));
            })
            .catch(() => {
              setAreas((areas) => ({
                ...areas,
                loading: false,
                error: true,
              }));
            });
        });
      })
      .catch(() => {
        setAreas((areas) => ({
          ...areas,
          loading: false,
          error: true,
        }));
      });
  }, [dispatch, fetch, page, size]);

  return {
    ...areas,
    fetchQuoteAreas,
    createQuoteArea,
    existsByName,
  };
};

export default useQuoteAreas;
