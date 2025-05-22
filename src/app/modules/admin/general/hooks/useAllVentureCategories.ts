import { useEffect, useState } from "react";

import { VentureCategory } from "echadospalante-domain";

import { useAppDispatch } from "../../../../config/redux/store/store.config";
import {
  fetchAllVentureCategoriesMiddleware,
} from "../api/middleware/venture-categories.middleware";

const useAllVentureCategories = () => {
  const dispatch = useAppDispatch();
  const [categoriesRequest, setCategoriesRequest] = useState({
    categories: [] as VentureCategory[],
    loading: true,
    error: false,
  });

  const fetchAllVentureCategories = () => {
    setCategoriesRequest({
      categories:[],
      loading: true,
      error: false,
    });

    dispatch(fetchAllVentureCategoriesMiddleware())
      .then((categories) => {
        setCategoriesRequest({
          categories,
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setCategoriesRequest(() => ({
          categories: [],
          loading: false,
          error: true,
        }));
      });
  };

  useEffect(() => {
    setCategoriesRequest({
      categories: [],
      loading: true,
      error: false,
    });

    dispatch(fetchAllVentureCategoriesMiddleware())
      .then((categories) => {
        setCategoriesRequest({
          categories,
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setCategoriesRequest({
          categories: [],
          loading: false,
          error: true,
        });
      });
  }, [dispatch]);

  return {
    ...categoriesRequest,
    fetchAllVentureCategories,
  };
};

export default useAllVentureCategories;
