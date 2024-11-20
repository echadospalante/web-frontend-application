import { Venture, VentureCreate } from "echadospalante-core";
import { useAppDispatch } from "../../../../config/redux/store/store.config";
import { useState } from "react";
import { createVentureMiddleware } from "../api/middleware/account-ventures.middleware";
import { useNavigate } from "react-router-dom";
import {
  setGlobalAlert,
  SeverityLevel,
} from "../../../../config/redux/reducers/shared/user-interface.reducer";

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
        dispatch(
          setGlobalAlert({
            message: "Emprendimiento creado correctamente",
            title: "Éxito",
            timeout: 5000,
            severity: SeverityLevel.SUCCESS,
          })
        );
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
