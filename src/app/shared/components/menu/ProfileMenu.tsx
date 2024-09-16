import React, { useState } from "react";

import { googleLogout } from "@react-oauth/google";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";

import {
  logoutUser,
  selectAuthentication,
} from "../../../config/redux/reducers/auth.reducer";
import { useAppDispatch } from "../../../config/redux/store/store.config";

export const ProfileMenu = () => {
  const { t } = useTranslation();
  const [menu, setMenu] = useState(false);
  const dispatch = useAppDispatch();
  const auth = useSelector(selectAuthentication);
  const navigate = useNavigate();

  const handleLogout = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    dispatch(logoutUser());
    navigate("/");
    googleLogout();
  };

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item "
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src={auth.picture}
            alt="Profile picture"
          />
          <span className="d-none d-xl-inline-block ms-2 me-1">
            {/* {email?.split("@")[0]} */}
            echadospalante
          </span>
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <Button
            type="button"
            onClick={handleLogout}
            className="dropdown-item"
          >
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>{t("Logout")}</span>
          </Button>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default ProfileMenu;
