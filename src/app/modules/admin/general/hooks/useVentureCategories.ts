import { useEffect, useState } from "react";

import { VentureCategory } from "echadospalante-core";
import { useSelector } from "react-redux";

import {
  selectVentureCategoriesManagement,
  setVentureCategoriesFilters,
} from "../../../../config/redux/reducers/admin/venture-categories-management.reducer";
import { useAppDispatch } from "../../../../config/redux/store/store.config";
import {
  fetchVentureCategoriesMiddleware,
  updateVentureCategoryMiddleware,
} from "../api/middleware/venture-categories.middleware";

const useVentureCategories = () => {
  const { filters, categories } = useSelector(
    selectVentureCategoriesManagement
  );

  const dispatch = useAppDispatch();

  const [categoriesRequest, setCategoriesRequest] = useState({
    loading: true,
    error: false,
  });

  const fetchVentureCategories = () => {
    setCategoriesRequest({
      loading: true,
      error: false,
    });

    dispatch(fetchVentureCategoriesMiddleware(filters))
      .then(() => {
        setCategoriesRequest({
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setCategoriesRequest(() => ({
          loading: false,
          error: true,
        }));
      });
  };

  const setPage = (page: number) => {
    dispatch(setVentureCategoriesFilters({ ...filters, page }));
  };

  const handleEditCategory = (category: VentureCategory) => {
    dispatch(updateVentureCategoryMiddleware(category.id, category));
  };

  useEffect(() => {
    setCategoriesRequest({
      loading: true,
      error: false,
    });

    dispatch(fetchVentureCategoriesMiddleware(filters))
      .then(() => {
        setCategoriesRequest({
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setCategoriesRequest({
          loading: false,
          error: true,
        });
      });
  }, [dispatch, filters]);

  return {
    ...categoriesRequest,
    ...filters,
    ...categories,
    fetchVentureCategories,
    handleEditCategory,
    setPage,
  };
};

export default useVentureCategories;
