import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import Select from "react-select";
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from "reactstrap";

import useAuthentication from "../../../modules/auth/hooks/useAuthentication";
import LanguageDropdown from "../dropdown/LanguageDropdown";
import NotificationDropdown from "../dropdown/NotificationDropdown";
import ProfileMenu from "../menu/ProfileMenu";

// type HeaderProps = {
//   toggleLeftmenu: (arg0: boolean) => void;
//   showRightSidebarAction: (arg0: boolean) => void;
//   leftMenu: boolean;
//   showRightSidebar: boolean;
// };

const HorizontalHeader = () => {
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

            <Dropdown
              className="dropdown-mega d-none d-lg-block ms-2"
              isOpen={menu}
              toggle={() => setMenu(!menu)}
            >
              <DropdownToggle className="btn header-item " caret tag="button">
                Enlaces Directos <i className="mdi mdi-chevron-down" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-megamenu">
                <Row>
                  <Col sm={8}>
                    <Row>
                      <Col md={4}>
                        <h5 className="font-size-14 mt-0">Prueba</h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                        </ul>
                      </Col>

                      <Col md={4}>
                        <h5 className="font-size-14 mt-0">Prueba</h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                        </ul>
                      </Col>

                      <Col md={4}>
                        <h5 className="font-size-14 mt-0">Prueba</h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#"> Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={4}>
                    <Row>
                      <Col sm={6}>
                        <h5 className="font-size-14 mt-0">Prueba</h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                          <li>
                            <Link to="#">Prueba</Link>
                          </li>
                        </ul>
                      </Col>

                      <Col sm={5}>
                        <div>
                          <img
                            src="/epl.png"
                            alt=""
                            className="img-fluid mx-auto d-block"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DropdownMenu>
            </Dropdown>
          </div>

          <div className="d-flex align-items-center">
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

            <LanguageDropdown />

            <NotificationDropdown />

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

export default HorizontalHeader;
