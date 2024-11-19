import { useEffect, useState } from "react";

import { Venture } from "echadospalante-core";
import { useNavigate, useParams } from "react-router-dom";

import { useAppDispatch } from "../../../../config/redux/store/store.config";
import { fetchVentureDetailMiddleware } from "../api/middleware/ventures.middleware";

const useVentureDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [venturesRequest, setVenturesRequest] = useState({
    loading: false,
    error: false,
    venture: undefined as Venture | undefined,
  });

  const fetchVentureDetail = () => {
    if (!params.slug) return navigate("/principal/emprendimientos");
    setVenturesRequest((venture) => ({
      ...venture,
      loading: true,
      error: false,
    }));
    return dispatch(fetchVentureDetailMiddleware(params.slug))
      .then(() => {
        setVenturesRequest((venture) => ({
          ...venture,
          loading: false,
          error: false,
        }));
      })
      .catch(() => {
        setVenturesRequest((venture) => ({
          ...venture,
          loading: false,
          error: true,
        }));
      });
  };

  useEffect(() => {
    if (!params.slug) return navigate("/principal/emprendimientos");
    setVenturesRequest((venture) => ({
      ...venture,
      loading: true,
      error: false,
    }));
    dispatch(fetchVentureDetailMiddleware(params.slug))
      .then(() => {
        setVenturesRequest((venture) => ({
          ...venture,
          loading: false,
          error: false,
        }));
      })
      .catch(() => {
        setVenturesRequest((venture) => ({
          ...venture,
          loading: false,
          error: true,
        }));
      });
  }, [params.slug]);

  return {
    ...venturesRequest,
    fetchVentureDetail,
  };
};

export default useVentureDetail;
