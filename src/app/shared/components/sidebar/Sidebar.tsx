/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment } from 'react';

import { Link } from 'react-router-dom';

import { AppRole } from '../../../modules/auth/domain/Role';
import useAuthentication from '../../../modules/auth/hooks/useAuthentication';
import AdminSidebarContent from './AdminSidebarContent';
import ModeratorSidebarContent from './ModeratorSidebarContent';
import NewsWriterSidebarContent from './NewsWriterSidebarContent';
import UserSidebarContent from './PrincipalSidebarContent';

type SidebarContentProps = {
  role?: AppRole;
};

const SidebarContent = ({ role }: SidebarContentProps) => {
  switch (role) {
    case AppRole.USER:
      return <UserSidebarContent />;
    case AppRole.ADMIN:
      return <AdminSidebarContent />;
    case AppRole.MODERATOR:
      return <ModeratorSidebarContent />;
    case AppRole.NEWS_WRITER:
      return <NewsWriterSidebarContent />;
    default:
      return <></>;
  }
};

const Sidebar = () => {
  const { activeRole } = useAuthentication();

  return (
    <Fragment>
      <div className="vertical-menu">
        <div className="navbar-brand-box">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src="/epl2.jpeg" alt="" height="45" />
            </span>
            <span className="logo-lg">
              <img src="/epl2.jpeg" alt="" height="45" />
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
          <SidebarContent role={activeRole?.name} />
        </div>

        <div className="sidebar-background"></div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
