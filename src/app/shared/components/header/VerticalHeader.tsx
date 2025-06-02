import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from 'reactstrap';

import { toggleRightSidebar } from '../../../config/redux/reducers/shared/layout.reducer';
import { useAppDispatch } from '../../../config/redux/store/store.config';
import LanguageDropdown from '../dropdown/LanguageDropdown';
import NotificationDropdown from '../dropdown/NotificationDropdown';
import ProfileMenu from '../menu/ProfileMenu';

const Header = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [search, setsearch] = useState(false);
  const [megaMenu, setmegaMenu] = useState(false);
  const [socialDrp, setsocialDrp] = useState(false);

  function tToggle() {
    const body = document.body;
    if (window.screen.width <= 998) {
      body.classList.toggle('sidebar-enable');
    } else {
      body.classList.toggle('vertical-collpsed');
      body.classList.toggle('sidebar-enable');
    }
  }

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box d-lg-none d-md-block">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src="/images/logos/logo-amt.png" alt="" height="22" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src="/images/logos/logo-amt.png" alt="" height="22" />
                </span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => {
                tToggle();
              }}
              className="btn btn-sm px-3 font-size-16 header-item "
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>

            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t('Search') + '...'}
                />
                <span className="bx bx-search-alt" />
              </div>
            </form>

            <Dropdown
              className="dropdown-mega d-none d-lg-block ms-2"
              isOpen={megaMenu}
              toggle={() => {
                setmegaMenu(!megaMenu);
              }}
            >
              <DropdownToggle className="btn header-item " caret tag="button">
                {' '}
                {t('Mega Menu')} <i className="mdi mdi-chevron-down" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-megamenu">
                <Row>
                  <Col sm={8}>
                    <Row>
                      <Col md={4}>
                        <h5 className="font-size-14 mt-0">
                          {t('UI Components')}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#">{t('Lightbox')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Range Slider')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Sweet Alert')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Rating')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Forms')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Tables')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Charts')}</Link>
                          </li>
                        </ul>
                      </Col>

                      <Col md={4}>
                        <h5 className="font-size-14 mt-0">
                          {t('Applications')}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#">{t('Ecommerce')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Calendar')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Email')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Projects')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Tasks')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Contacts')}</Link>
                          </li>
                        </ul>
                      </Col>

                      <Col md={4}>
                        <h5 className="font-size-14 mt-0">
                          {t('Extra Pages')}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#">{t('Light Sidebar')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Compact Sidebar')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Horizontal layout')}</Link>
                          </li>
                          <li>
                            <Link to="#"> {t('Maintenance')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Coming Soon')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Timeline')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('FAQs')}</Link>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={4}>
                    <Row>
                      <Col sm={6}>
                        <h5 className="font-size-14 mt-0">
                          {t('UI Components')}
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <Link to="#">{t('Lightbox')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Range Slider')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Sweet Alert')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Rating')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Forms')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Tables')}</Link>
                          </li>
                          <li>
                            <Link to="#">{t('Charts')}</Link>
                          </li>
                        </ul>
                      </Col>

                      <Col sm={5}>
                        <div>
                          <img
                            src="/images/megamenu-img.png"
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
          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                onClick={() => {
                  setsearch(!search);
                }}
                type="button"
                className="btn header-item noti-icon "
                id="page-header-search-dropdown"
              >
                <i className="mdi mdi-magnify" />
              </button>
              <div
                className={
                  search
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
                        placeholder="Search ..."
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
                tag="button"
              >
                <i className="bx bx-customize" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-lg dropdown-menu-end">
                <div className="px-lg-2">
                  <Row className="no-gutters">
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src="/images/brands/github.png" alt="Github" />
                        <span>GitHub</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img
                          src="/images/brands/bitbucket.png"
                          alt="bitbucket"
                        />
                        <span>Bitbucket</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src="/images/brands/dribbble.png" alt="dribbble" />
                        <span>Dribbble</span>
                      </Link>
                    </Col>
                  </Row>

                  <Row className="no-gutters">
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src="/images/brands/dropbox.png" alt="dropbox" />
                        <span>Dropbox</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img
                          src="/images/brands/mail_chimp.png"
                          alt="mail_chimp"
                        />
                        <span>Mail Chimp</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src="/images/brands/slack.png" alt="slack" />
                        <span>Slack</span>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </DropdownMenu>
            </Dropdown>

            <div className="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                onClick={() => console.log('Fullscreen')}
                className="btn header-item noti-icon "
                data-toggle="fullscreen"
              >
                <i className="bx bx-fullscreen" />
              </button>
            </div>

            <NotificationDropdown />
            <ProfileMenu />

            <div
              onClick={() => {
                dispatch(toggleRightSidebar());
              }}
              className="dropdown d-inline-block"
            >
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle "
              >
                <i className="bx bx-cog bx-spin" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
