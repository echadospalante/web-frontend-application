/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment } from "react";

import { Link } from "react-router-dom";

import PrincipalSidebarContent from "./PrincipalSidebarContent";
import useAuthentication from "../../modules/auth/hooks/useAuthentication";
import AdminSidebarContent from "./AdminSidebarContent";
import { Role } from "../../modules/auth/domain/Role";

// type SidebarProps = {
//   theme: LeftSideBarThemeType;
//   type: LeftSidebarType;
//   isMobile: boolean;
// };

const Sidebar = () => {
  const { activeRole } = useAuthentication();
  return (
    <Fragment>
      <div className="vertical-menu">
        <div className="navbar-brand-box">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src="/images/logos/logo-dark.svg" alt="" height="45" />
            </span>
            <span className="logo-lg">
              <img src="/images/logos/logo-dark.svg" alt="" height="45" />
            </span>
          </Link>

          <Link to="/" className="logo logo-light">
            <span className="logo-sm">
              <img src="/images/logos/logo-amt.png" alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src="/images/logos/logo-amt.png" alt="" height="19" />
            </span>
          </Link>
        </div>
        <div data-simplebar className="h-100">
          {activeRole?.value === Role.ROLE_USER && <PrincipalSidebarContent />}

          {activeRole?.value === Role.ROLE_ADMIN && <AdminSidebarContent />}

          {/* {activeRole === "ROLE_MODERATOR" && <ModeratorSidebarContent />} */}
        </div>

        <div className="sidebar-background"></div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
