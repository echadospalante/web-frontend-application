import { useQuery } from '@tanstack/react-query';

import { useNavigate, useParams } from 'react-router-dom';
import VenturesApi from '../api/ventures.api';

const useFetchVentureBySlug = () => {
  const { ventureSlug } = useParams();
  const navigate = useNavigate()
  
  const ventureDetailQuery = useQuery({
    queryKey: ['ventures', 'slug', ventureSlug],
    queryFn: () => {
      if(!ventureSlug) {
        navigate('/principal/emprendimientos');
        return;
      }
      return VenturesApi.fetchVentureDetailBySlug(ventureSlug);
    },
    staleTime: 1000 * 60 * 60,
  });


  const retryFetch = () => {
    ventureDetailQuery.refetch();
  };

  return {
    isLoading: ventureDetailQuery.isLoading,
    isError: ventureDetailQuery.isError,
    retryFetch,
    data: ventureDetailQuery.data,
  };
};

export default useFetchVentureBySlug;
