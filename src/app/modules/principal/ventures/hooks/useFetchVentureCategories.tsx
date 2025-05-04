import { useState, useEffect } from "react";

import { VentureCategory } from "echadospalante-core";

import VentureCategoriesApi from "../api/http/venture-categories.api";
import { useQuery } from "@tanstack/react-query";

const useFetchVentureCategories = () => {
  const [ventureCategories, setVentureCategories] = useState<{
    items: VentureCategory[];
    total: number;
  }>({
    items: [],
    total: 0,
  });

  const [request, setRequest] = useState({
    loading: false,
    error: false,
  });

  //   const ventureCategoriesQuery = useQuery({
  //       queryKey: ["venture", "categories",],
  //       queryFn: () => VentureCategoriesApi.getVentureCategories(),
  //       onSuccess: (data) => {
  //          setVentureCategories(data);
  //       },
  //   })

  useEffect(() => {
    setRequest({ loading: true, error: false });
    VentureCategoriesApi.getVentureCategories()
      .then((data) => {
        setRequest({ loading: false, error: false });
        setVentureCategories(data);
      })
      .catch((error) => {
        setRequest({ loading: false, error: true });
        console.error("Error fetching venture categories:", error);
      });
  }, []);

  return {
    ventureCategories,
    ...request,
  };
};

export default useFetchVentureCategories;
