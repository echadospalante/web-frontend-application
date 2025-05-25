import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import {
  selectVenturePublicationsManagement,
  setVenturePublicationsFilters,
} from '../../../../config/redux/reducers/admin/venture-publications-management.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import { fetchVenturePublicationsMiddleware } from '../api/middleware/venture-publications.middleware';

const useVenturePublications = () => {
  const { filters, publications } = useSelector(
    selectVenturePublicationsManagement,
  );

  const dispatch = useAppDispatch();

  const [publicationsRequest, setPublicationsRequest] = useState({
    loading: true,
    error: false,
  });

  const fetchVenturePublications = () => {
    setPublicationsRequest({
      loading: true,
      error: false,
    });

    dispatch(fetchVenturePublicationsMiddleware(filters))
      .then(() => {
        setPublicationsRequest({
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setPublicationsRequest(() => ({
          loading: false,
          error: true,
        }));
      });
  };

  const setPage = (page: number) => {
    dispatch(setVenturePublicationsFilters({ ...filters, page }));
  };

  useEffect(() => {
    setPublicationsRequest({
      loading: true,
      error: false,
    });

    dispatch(fetchVenturePublicationsMiddleware(filters))
      .then(() => {
        setPublicationsRequest({
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setPublicationsRequest({
          loading: false,
          error: true,
        });
      });
  }, [dispatch, filters]);

  return {
    ...publicationsRequest,
    ...filters,
    ...publications,
    fetchVenturePublications,
    setPage,
  };
};

export default useVenturePublications;
