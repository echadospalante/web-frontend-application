import React, { useEffect, useState } from 'react';

import classname from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Col, Collapse, Row } from 'reactstrap';

type HorizontalLayoutNavbarProps = {
  leftMenuOpen?: boolean;
  menuOpen?: boolean;
};

const Navbar = ({ leftMenuOpen, menuOpen }: HorizontalLayoutNavbarProps) => {
  const { t } = useTranslation();

  const [dashboard, setdashboard] = useState(false);
  const [ui, setui] = useState(false);
  const [app, setapp] = useState(false);
  const [email, setemail] = useState(false);
  const [ecommerce, setecommerce] = useState(false);
  const [crypto, setcrypto] = useState(false);
  const [project, setproject] = useState(false);
  const [task, settask] = useState(false);
  const [contact, setcontact] = useState(false);
  const [blog, setBlog] = useState(false);
  const [job, setJob] = useState(false);
  const [candidate, setCandidate] = useState(false);
  const [component, setcomponent] = useState(false);
  const [form, setform] = useState(false);
  const [table, settable] = useState(false);
  const [chart, setchart] = useState(false);
  const [icon, seticon] = useState(false);
  const [map, setmap] = useState(false);
  const [extra, setextra] = useState(false);
  const [invoice, setinvoice] = useState(false);
  const [auth, setauth] = useState(false);
  const [utility, setutility] = useState(false);

  useEffect(() => {
    let matchingMenuItem = null;
    const ul = document.getElementById('navigation');
    const items = ul!.getElementsByTagName('a');
    removeActivation(items);
    for (let i = 0; i < items.length; ++i) {
      if (window.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, []);

  const removeActivation = (items: HTMLCollectionOf<HTMLAnchorElement>) => {
    for (let i = 0; i < items.length; ++i) {
      const item = items[i];
      const parent = items[i].parentElement;
      if (item && item.classList.contains('active')) {
        item.classList.remove('active');
      }
      if (parent) {
        if (parent.classList.contains('active')) {
          parent.classList.remove('active');
        }
      }
    }
  };

  function activateParentDropdown(item: HTMLAnchorElement) {
    item.classList.add('active');
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add('active'); // li
      const parent2 = parent.parentElement;
      parent2!.classList.add('active'); // li
      const parent3 = parent2!.parentElement;
      if (parent3) {
        parent3.classList.add('active'); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add('active'); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add('active'); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add('active'); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={leftMenuOpen}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link  arrow-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setdashboard(!dashboard);
                    }}
                    to="/dashboard"
                  >
                    <i className="bx bx-home-circle me-2"></i>
                    {t('Dashboard')} {menuOpen}
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname('dropdown-menu', { show: dashboard })}
                  >
                    <Link to="/principal" className="dropdown-item">
                      {t('Default')}
                    </Link>
                    <Link to="#" className="dropdown-item">
                      {t('Saas')}
                    </Link>
                    <Link to="#" className="dropdown-item">
                      {t('Crypto')}
                    </Link>
                    <Link to="#" className="dropdown-item">
                      {t('Blog')}
                    </Link>
                    <Link to="#" className="dropdown-item">
                      {t('Jobs')}
                    </Link>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={(e) => {
                      e.preventDefault();
                      setui(!ui);
                    }}
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <i className="bx bx-tone me-2"></i>
                    {t('UI Elements')} <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname(
                      'dropdown-menu mega-dropdown-menu dropdown-menu-left dropdown-mega-menu-xl',
                      { show: ui },
                    )}
                  >
                    <Row>
                      <Col lg={4}>
                        <div>
                          <Link to="#" className="dropdown-item">
                            {t('Alerts')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Buttons')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Cards')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Carousel')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Dropdowns')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Grid')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Images')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Lightbox')}
                          </Link>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div>
                          <Link to="#" className="dropdown-item">
                            {t('Modals')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Offcanvas')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Range Slider')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Session Timeout')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Progress Bars')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Placeholders')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Tabs & Accordions')}
                          </Link>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div>
                          <Link to="#" className="dropdown-item">
                            {t('Typography')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Toasts')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Video')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('General')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Colors')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Rating')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Notifications')}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {t('Utilities')}
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={(e) => {
                      e.preventDefault();
                      setapp(!app);
                    }}
                    className="nav-link z arrow-none"
                  >
                    <i className="bx bx-customize me-2"></i>
                    {t('Apps')} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname('dropdown-menu', { show: app })}>
                    <Link to="#" className="dropdown-item">
                      {t('Calendar')}
                    </Link>
                    <Link to="#" className="dropdown-item">
                      {t('Chat')}
                    </Link>
                    <Link to="#" className="dropdown-item">
                      {t('File Manager')}
                    </Link>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setemail(!email);
                        }}
                      >
                        {t('Email')} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname('dropdown-menu', { show: email })}
                      >
                        <Link to="#" className="dropdown-item">
                          {t('Inbox')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Read Email')}
                        </Link>
                        <div className="dropdown">
                          <Link
                            className="dropdown-item  arrow-none"
                            to="/#"
                            onClick={(e) => {
                              e.preventDefault();
                              setemail(!email);
                            }}
                          >
                            <span key="#">Templates</span>{' '}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname('dropdown-menu', {
                              show: email,
                            })}
                          >
                            <Link to="#" className="dropdown-item">
                              {t('Basic Action')}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {t('Alert Email')}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {t('Billing Email')}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setecommerce(!ecommerce);
                        }}
                      >
                        {t(' Ecommerce')} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname('dropdown-menu', {
                          show: ecommerce,
                        })}
                      >
                        <Link to="#" className="dropdown-item">
                          {t('Products')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Product Detail')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Orders')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Customers')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Cart')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Checkout')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Shops')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Add Product')}
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setcrypto(!crypto);
                        }}
                      >
                        {t('Crypto')} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname('dropdown-menu', { show: crypto })}
                      >
                        <Link to="#" className="dropdown-item">
                          {t('Wallet')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Buy/Sell')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Exchange')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Lending')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Orders')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('KYC Application')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('ICO Landing')}
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setproject(!project);
                        }}
                      >
                        {t('Projects')} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname('dropdown-menu', {
                          show: project,
                        })}
                      >
                        <Link to="#" className="dropdown-item">
                          {t('Projects Grid')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Projects List')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Project Overview')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Create New')}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          settask(!task);
                        }}
                      >
                        {t('Tasks')} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname('dropdown-menu', { show: task })}
                      >
                        <Link to="#" className="dropdown-item">
                          {t('Task List')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Tasks Kanban')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Create Task')}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setcontact(!contact);
                        }}
                      >
                        {t('Contacts')} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname('dropdown-menu', {
                          show: contact,
                        })}
                      >
                        <Link to="#" className="dropdown-item">
                          {t('User Grid')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('User List')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Profile')}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setBlog(!blog);
                        }}
                      >
                        {t('Blog')} <div className="arrow-down" />
                      </Link>
                      <div
                        className={classname('dropdown-menu', {
                          show: blog,
                        })}
                      >
                        <Link to="#" className="dropdown-item">
                          {t('Blog List')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Blog Grid')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Blog Details')}
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setJob(!job);
                        }}
                      >
                        {t('Jobs')} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname('dropdown-menu', { show: job })}
                      >
                        <Link to="#" className="dropdown-item">
                          {t('Job List')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Job Grid')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Job Apply')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Job Details')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Job Catogories')}
                        </Link>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={(e) => {
                              e.preventDefault();
                              setCandidate(!candidate);
                            }}
                          >
                            <span key="t-candidate">Candidate</span>{' '}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname('dropdown-menu', {
                              show: candidate,
                            })}
                          >
                            <Link to="#" className="dropdown-item">
                              {t('List')}
                            </Link>
                            <Link to="#" className="dropdown-item">
                              {t('Overview')}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link  arrow-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setcomponent(!component);
                    }}
                  >
                    <i className="bx bx-collection me-2"></i>
                    {t('Components')} <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname('dropdown-menu', { show: component })}
                  >
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setform(!form);
                        }}
                      >
                        {t('Forms')} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname('dropdown-menu', { show: form })}
                      >
                        <Link to="#" className="dropdown-item">
                          {t('Form Elements')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Form Layouts')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Form Validation')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Form Advanced')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Form Editors')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Form File Upload')}{' '}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Form Repeater')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Form Wizard')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Form Mask')}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          settable(!table);
                        }}
                      >
                        {t('Tables')} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname('dropdown-menu', { show: table })}
                      >
                        <Link to="#" className="dropdown-item">
                          {t('Basic Tables')}
                        </Link>
                        {/* <Link to="#" className="dropdown-item">
                          {t("Data Tables")}
                        </Link> */}
                        <Link to="#" className="dropdown-item">
                          {t('Responsive Table')}
                        </Link>
                        {/* <Link to="#" className="dropdown-item">
                          {t("Drag & Drop Table")}
                        </Link> */}
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setchart(!chart);
                        }}
                      >
                        {t('Charts')} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname('dropdown-menu', { show: chart })}
                      >
                        <Link to="#" className="dropdown-item">
                          {' '}
                          {t('Apex charts')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {' '}
                          {t('Chartjs Chart')}
                        </Link>

                        <Link to="#" className="dropdown-item">
                          {t('Knob Chart')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Re Chart')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {' '}
                          {t('Sparkline Chart')}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          seticon(!icon);
                        }}
                      >
                        {t('Icons')} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname('dropdown-menu', { show: icon })}
                      >
                        <Link to="#" className="dropdown-item">
                          {t('Boxicons')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Material Design')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Dripicons')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Font awesome')}{' '}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setmap(!map);
                        }}
                      >
                        {t('Maps')} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname('dropdown-menu', { show: map })}
                      >
                        <Link to="#" className="dropdown-item">
                          {t('Google Maps')}{' '}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link  arrow-none"
                    to="/#"
                    onClick={(e) => {
                      e.preventDefault();
                      setextra(!extra);
                    }}
                  >
                    <i className="bx bx-file me-2"></i>
                    {t('Extra pages')} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname('dropdown-menu', { show: extra })}>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setinvoice(!invoice);
                        }}
                      >
                        {t('Invoices')} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname('dropdown-menu', {
                          show: invoice,
                        })}
                      >
                        <Link to="#" className="dropdown-item">
                          {t('Invoice List')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Invoice Detail')}
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setauth(!auth);
                        }}
                      >
                        {t('Authentication')} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname('dropdown-menu', { show: auth })}
                      >
                        <Link to="#" className="dropdown-item">
                          {t('Login')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Login')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Register')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Register 2')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Recover Password')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Recover Password 2')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Lock Screen')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Lock Screen 2')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Confirm Mail')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Confirm Mail 2')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Email Verification')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Email Verification 2')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Two Step Verification')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Two Step Verification 2')}
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        className="dropdown-item  arrow-none"
                        to="/#"
                        onClick={(e) => {
                          e.preventDefault();
                          setutility(!utility);
                        }}
                      >
                        {t('Utility')} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname('dropdown-menu', {
                          show: utility,
                        })}
                      >
                        <Link to="#" className="dropdown-item">
                          {t('Starter Page')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Maintenance')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Coming Soon')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Timeline')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('FAQs')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Pricing')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Error 404')}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {t('Error 500')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
