import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../config/redux/reducers/auth/auth.reducer';
import {
  setGlobalAlert,
  SeverityLevel,
} from '../../../config/redux/reducers/shared/user-interface.reducer';
import { useAppDispatch } from '../../../config/redux/store/store.config';
import {
  loginWithCredentialsMiddleware,
  refreshAuthOnReloadMiddleware,
} from '../api/middleware/authentication.middleware';

const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginWithCredentials = (oauth2Token: string) => {
    dispatch(loginWithCredentialsMiddleware(oauth2Token)).then((response) => {
      const { active } = response;
      if (!active) {
        dispatch(
          setGlobalAlert({
            position: 'top-right',
            title: 'Error en login',
            message: 'El usuario no se encuentra activo.',
            timeout: 5000,
            severity: SeverityLevel.WARNING,
          }),
        );
        return navigate('/');
      }
      dispatch(loginUser(response));
      return navigate('/principal/emprendimientos');
    });
  };

  const refreshAuth = () => {
    return dispatch(refreshAuthOnReloadMiddleware());
  };

  return { loginWithCredentials, refreshAuth };
};

export default useLogin;
