import { useEffect, useState } from "react";

import { useAppDispatch } from "../../../../config/redux/store/store.config";
import { fetchPublicationDetailMiddleware } from "../api/middleware/publications.middleware";
import { VenturePublication } from "echadospalante-core";

const usePublicationDetail = (id: string) => {
  const dispatch = useAppDispatch();
  const [publicationResponse, setPublicationResponse] = useState({
    loading: false,
    error: false,
    publication: undefined as VenturePublication | undefined,
  });

  useEffect(() => {
    setPublicationResponse((publicationResponse) => ({
      ...publicationResponse,
      loading: true,
      error: false,
    }));

    dispatch(fetchPublicationDetailMiddleware(id))
      .then((publication) => {
        setPublicationResponse({
          loading: false,
          error: false,
          publication,
        });
      })
      .catch(() => {
        setPublicationResponse({
          loading: false,
          error: true,
          publication: undefined,
        });
      });
  }, [dispatch, id]);

  const fetchPublicationDetail = () => {
    setPublicationResponse((publicationResponse) => ({
      ...publicationResponse,
      loading: true,
      error: false,
    }));

    dispatch(fetchPublicationDetailMiddleware(id))
      .then((publication) => {
        setPublicationResponse({
          loading: false,
          error: false,
          publication,
        });
      })
      .catch(() => {
        setPublicationResponse({
          loading: false,
          error: true,
          publication: undefined,
        });
      });
  };

  return {
    ...publicationResponse,
    fetchPublicationDetail,
  };
};

export default usePublicationDetail;
