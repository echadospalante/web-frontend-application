import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from 'reactstrap';

import useAuthentication from '../../../modules/auth/hooks/useAuthentication';
import LanguageDropdown from '../dropdown/LanguageDropdown';
import NotificationDropdown from '../dropdown/NotificationDropdown';
import ProfileMenu from '../menu/ProfileMenu';
import ThemeDropdown from '../dropdown/ThemeDropdown';

// type HeaderProps = {
//   toggleLeftmenu: (arg0: boolean) => void;
//   showRightSidebarAction: (arg0: boolean) => void;
//   leftMenu: boolean;
//   showRightSidebar: boolean;
// };

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const { t } = useTranslation();
  const { activeRole, roles = [], setActiveRole } = useAuthentication();

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <button type="button" className="btn px-3 fs-2 header-item">
              <i className="bx bx-menu" />
            </button>

            {/* <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="bx bx-search-alt" />
              </div>
            </form> */}
          </div>

          <div className="bg-danger">
            {roles.length > 1 && activeRole && (
              <div className="mx-3">
                <Select
                  className=""
                  isDisabled={false}
                  value={{
                    label: activeRole?.label,
                    value: activeRole?.name,
                  }}
                  isMulti={false}
                  isSearchable={false}
                  onChange={(selected) => {
                    if (!selected) return;
                    setActiveRole(selected.value);
                  }}
                  options={roles.map((role) => ({
                    label: role.label,
                    value: role.name,
                  }))}
                ></Select>
              </div>
            )}
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                type="button"
                className="btn header-item noti-icon "
                id="page-header-search-dropdown"
                onClick={() => setSearch(!isSearch)}
              >
                <i className="mdi mdi-magnify" />
              </button>
              <div
                className={
                  isSearch
                    ? 'dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show'
                    : 'dropdown-menu dropdown-menu-lg dropdown-menu-end p-0'
                }
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={t('Search') + '...'}
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <LanguageDropdown /> */}
            <ThemeDropdown />
            {/* <NotificationDropdown /> */}
            <ProfileMenu />
            {/* <div className="dropdown d-inline-block">
              <button
                onClick={() => {
                  props.showRightSidebarAction(!props.showRightSidebar);
                }}
                type="button"
                className="btn header-item noti-icon right-bar-toggle "
              >
                <i className="bx bx-cog bx-spin" />
              </button>
            </div> */}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
