import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import Select from "react-select";
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from "reactstrap";

import useAuthentication from "../../../modules/auth/hooks/useAuthentication";
import LanguageDropdown from "../dropdown/LanguageDropdown";
import NotificationDropdown from "../dropdown/NotificationDropdown";
import ProfileMenu from "../menu/ProfileMenu";

type HeaderProps = {
  toggleLeftmenu: (arg0: boolean) => void;
  showRightSidebarAction: (arg0: boolean) => void;
  leftMenu: boolean;
  showRightSidebar: boolean;
};

const Header = (props: HeaderProps) => {
  const [menu, setMenu] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [socialDrp, setsocialDrp] = useState(false);
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

            <Dropdown
              className="dropdown-mega d-none d-lg-block ms-2"
              isOpen={menu}
              toggle={() => setMenu(!menu)}
            >
              <DropdownToggle className="btn header-item " caret tag="button">
                {t("Mega Menu")} <i className="mdi mdi-chevron-down" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-megamenu">
                <Row>
                  <Col sm={8}>
                    <Row>
                      <Col md={4}>
                        <h5 className="font-size-14 mt-0">
                          {t("UI Components")}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#">{t("Lightbox")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Range Slider")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Sweet Alert")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Rating")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Forms")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Tables")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Charts")}</Link>
                          </li>
                        </ul>
                      </Col>

                      <Col md={4}>
                        <h5 className="font-size-14 mt-0">
                          {t("Applications")}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#">{t("Ecommerce")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Calendar")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Email")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Projects")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Tasks")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Contacts")}</Link>
                          </li>
                        </ul>
                      </Col>

                      <Col md={4}>
                        <h5 className="font-size-14 mt-0">
                          {t("Extra Pages")}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#">{t("Light Sidebar")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Compact Sidebar")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Horizontal layout")}</Link>
                          </li>
                          <li>
                            <Link to="#"> {t("Maintenance")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Coming Soon")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Timeline")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("FAQs")}</Link>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={4}>
                    <Row>
                      <Col sm={6}>
                        <h5 className="font-size-14 mt-0">
                          {t("UI Components")}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#">{t("Lightbox")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Range Slider")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Sweet Alert")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Rating")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Forms")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Tables")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("Charts")}</Link>
                          </li>
                        </ul>
                      </Col>

                      <Col sm={5}>
                        <div>
                          <img
                            src="/images/logos/7s-logo-small.png"
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
                    value: activeRole?.value,
                  }}
                  isMulti={false}
                  isSearchable={false}
                  onChange={(selected) => {
                    if (!selected) return;
                    setActiveRole();
                  }}
                  options={[
                    { label: "Administrador", value: Role.ROLE_ADMIN },
                    { label: "Usuario", value: Role.ROLE_USER },
                    { label: "Moderador", value: Role.ROLE_MODERATOR },
                  ]}
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
                    ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
                    : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                }
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={t("Search") + "..."}
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

            <LanguageDropdown />

            <Dropdown
              className="d-none d-lg-inline-block ms-1"
              isOpen={socialDrp}
              toggle={() => {
                setsocialDrp(!socialDrp);
              }}
            >
              <DropdownToggle
                className="btn header-item noti-icon "
                caret
                tag="button"
              >
                <i className="bx bx-customize" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-lg dropdown-menu-end">
                <div className="px-lg-2">
                  <Row className="no-gutters">
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img
                          src="/images/logos/7s-logo-small.png"
                          alt="Github"
                        />
                        <span>GitHub</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img
                          src="/images/logos/7s-logo-small.png"
                          alt="bitbucket"
                        />
                        <span>Bitbucket</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img
                          src="/images/logos/7s-logo-small.png"
                          alt="dribbble"
                        />
                        <span>Dribbble</span>
                      </Link>
                    </Col>
                  </Row>
                  <Row className="no-gutters">
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img
                          src="/images/logos/7s-logo-small.png"
                          alt="dropbox"
                        />
                        <span>Dropbox</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img
                          src="/images/logos/7s-logo-small.png"
                          alt="mail_chimp"
                        />
                        <span>Mail Chimp</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img
                          src="/images/logos/7s-logo-small.png"
                          alt="slack"
                        />
                        <span>Slack</span>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </DropdownMenu>
            </Dropdown>

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

export default Header;
