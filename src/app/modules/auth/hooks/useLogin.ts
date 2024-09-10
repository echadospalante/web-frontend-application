import { useAppDispatch } from "../../../config/redux/store/store.config";
import {
  loginWithCredentialsMiddleware,
  refreshAuthOnPageReloadMiddleware,
} from "../api/middleware/authentication.middleware";

const useLogin = () => {
  const dispatch = useAppDispatch();

  const loginUser = (oauth2Token: string) => {
    dispatch(loginWithCredentialsMiddleware(oauth2Token));
  };

  const refreshAuth = () => {
    return dispatch(refreshAuthOnPageReloadMiddleware());
  };

  return { loginUser, refreshAuth };
};

export default useLogin;
