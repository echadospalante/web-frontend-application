import { useSelector } from "react-redux";
import {
  loginUser,
  selectAuthentication,
} from "../../../config/redux/reducers/auth.reducer";
import { useAppDispatch } from "../../../config/redux/store/store.config";
import {
  loginWithCredentialsMiddleware,
  refreshAuthOnReloadMiddleware,
} from "../api/middleware/authentication.middleware";
import { useNavigate } from "react-router-dom";
import {
  setGlobalAlert,
  SeverityLevel,
} from "../../../config/redux/reducers/user-interface.reducer";

const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginWithCredentials = (oauth2Token: string) => {
    dispatch(loginWithCredentialsMiddleware(oauth2Token)).then((response) => {
      const { active } = response;
      if (!active) {
        dispatch(
          setGlobalAlert({
            title: "Error en login",
            message: "El usuario no se encuentra activo.",
            timeout: 5000,
            severity: SeverityLevel.WARNING,
          })
        );
        return navigate("/");
      }
      dispatch(loginUser(response));
      return navigate("/principal");
    });
  };

  const refreshAuth = () => {
    return dispatch(refreshAuthOnReloadMiddleware());
  };

  return { loginWithCredentials, refreshAuth };
};

export default useLogin;
