
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import {
  selectVentures
} from '../../../../config/redux/reducers/principal/ventures.reducer';
import VenturesApi from '../api/ventures.api';

const useFetchVenturesMap = () => {
  const { filters } = useSelector(selectVentures);
  const { pagination, search, categoriesIds, municipalitiesIds, viewMode } =
    filters;

  const venturesMapQuery = useQuery({
    queryKey: ['ventures', 'map', search, categoriesIds, municipalitiesIds],
    queryFn: () => VenturesApi.fetchVenturesForMap(filters),
    staleTime: 1000 * 60 * 60,
  });

  const retryFetch = () => {
    venturesMapQuery.refetch();
  };

  return {
    municipalitiesIds,
    isLoading: venturesMapQuery.isLoading,
    isError: venturesMapQuery.isError,
    pagination,
    viewMode,
    items: venturesMapQuery.data?.items || [],
    total: venturesMapQuery.data?.total || 0,
    retryFetch,
    venturesQuery: venturesMapQuery,
  };
};

export default useFetchVenturesMap;
