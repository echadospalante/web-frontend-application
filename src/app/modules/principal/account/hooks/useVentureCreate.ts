import { Venture, VentureCreate } from "echadospalante-core";
import { useAppDispatch } from "../../../../config/redux/store/store.config";
import { useState } from "react";
import { createVentureMiddleware } from "../api/middleware/account-ventures.middleware";
import { useNavigate } from "react-router-dom";

const useVentureCreate = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [createRequest, setCreateRequest] = useState({
    loading: false,
    error: false,
  });

  const createVenture = (ventureCreate: VentureCreate) => {
    setCreateRequest((create) => ({
      ...create,
      loading: true,
      error: false,
    }));
    return dispatch(createVentureMiddleware(ventureCreate))
      .then((response) => {
        setCreateRequest((createRequest) => ({
          ...createRequest,
          loading: false,
          error: false,
        }));
        return navigate(`/principal/emprendimientos/${response.slug}`);
      })
      .catch(() => {
        setCreateRequest((createRequest) => ({
          ...createRequest,
          loading: false,
          error: true,
        }));
      });
  };

  return {
    ...createRequest,
    createVenture,
  };
};

export default useVentureCreate;
