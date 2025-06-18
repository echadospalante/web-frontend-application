import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PublicationsApi from '../api/publications.api';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import {
  selectPublications,
  setPublicationDetail,
} from '../../../../config/redux/reducers/principal/publications.reducer';

const useFetchPublicationDetail = () => {
  const { publicationId } = useParams();
  const dispatch = useAppDispatch();
  const { detail } = useSelector(selectPublications);

  const publicationDetailQuery = useQuery({
    queryKey: ['publications', publicationId],
    queryFn: () => PublicationsApi.getPublicationDetail(publicationId!),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  useEffect(() => {
    if (publicationDetailQuery.isSuccess && publicationDetailQuery.data) {
      dispatch(setPublicationDetail(publicationDetailQuery.data));
    }
  }, [publicationDetailQuery.isSuccess, publicationDetailQuery.data]);

  return {
    isLoading: publicationDetailQuery.isLoading,
    isError: publicationDetailQuery.isError,
    retryRequest: publicationDetailQuery.refetch,
    detail: detail || publicationDetailQuery.data,
  };
};

export default useFetchPublicationDetail;
