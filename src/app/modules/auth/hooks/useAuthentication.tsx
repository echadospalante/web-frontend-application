import { useSelector } from "react-redux";

import {
  changeActiveRole,
  selectAuthentication,
} from "../../../config/redux/reducers/auth/auth.reducer";
import { useAppDispatch } from "../../../config/redux/store/store.config";
import { AppRole } from "../domain/Role";

const useAuthentication = () => {
  const { activeRole, roles } = useSelector(selectAuthentication);
  const dispatch = useAppDispatch();

  const setActiveRole = (roleName: AppRole) => {
    if (!roles) return;
    const role = roles.find(({ name }) => name === roleName);
    if (!role) return;
    dispatch(changeActiveRole(role));
  };

  return { activeRole, setActiveRole, roles };
};

export default useAuthentication;
