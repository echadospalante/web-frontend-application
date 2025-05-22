
import { useQuery } from "@tanstack/react-query";

import VentureCategoriesApi from "../api/http/venture-categories.api";

const useFetchVentureCategories = () => {
  const ventureCategoriesQuery = useQuery({
    queryKey: ["venture", "categories"],
    queryFn: () => VentureCategoriesApi.getVentureCategories(),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return {
    isLoading: ventureCategoriesQuery.isLoading,
    isError: ventureCategoriesQuery.isError,
    data: ventureCategoriesQuery.data,
  };
};

export default useFetchVentureCategories;
