import React, { useState } from "react";

import { googleLogout } from "@react-oauth/google";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";

import { selectAuthentication } from "../../../config/redux/reducers/auth/auth.reducer";
import { useAppDispatch } from "../../../config/redux/store/store.config";
import { logoutUserMiddleware } from "../../../modules/auth/api/middleware/authentication.middleware";
import { getIconName, stringToColor } from "../../helpers/colors";

export const ProfileMenu = () => {
  const { t } = useTranslation();
  const [displayPicture, setDisplayPicture] = useState<boolean>(true);
  const [menu, setMenu] = useState(false);
  const dispatch = useAppDispatch();
  const { picture, email, firstName, lastName } =
    useSelector(selectAuthentication);
  const navigate = useNavigate();

  const handleLogout = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    dispatch(logoutUserMiddleware()).then(() => {
      navigate("/", { replace: true });

      googleLogout();
    });
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
          {displayPicture ? (
            <img
              className="rounded-circle header-profile-user"
              src={picture}
              alt="Profile picture"
              onError={() => setDisplayPicture(false)}
            />
          ) : (
            <div
              title={`${firstName} ${lastName}`}
              className="rounded-circle d-inline-flex btn-soft-primary"
              style={{
                width: "40px",
                backgroundColor: stringToColor(`${firstName} ${lastName}`),
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {getIconName(`${firstName} ${lastName}`)}
            </div>
          )}
          <span className="d-none d-xl-inline-block ms-2 me-1">
            {email?.split("@")[0]}
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
