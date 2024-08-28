const LeftMenu = () => {
  return (
    <aside className="app-sidebar" id="sidebar">
      <div className="main-sidebar-header">
        <a href="index.html" className="header-logo">
          <img
            src="../assets/images/brand-logos/desktop-logo.png"
            alt="logo"
            className="desktop-logo"
          />
          <img
            src="../assets/images/brand-logos/toggle-logo.png"
            alt="logo"
            className="toggle-logo"
          />
          <img
            src="../assets/images/brand-logos/desktop-dark.png"
            alt="logo"
            className="desktop-dark"
          />
          <img
            src="../assets/images/brand-logos/toggle-dark.png"
            alt="logo"
            className="toggle-dark"
          />
          <img
            src="../assets/images/brand-logos/desktop-white.png"
            alt="logo"
            className="desktop-white"
          />
        </a>
      </div>

      <div className="main-sidebar" id="sidebar-scroll">
        <nav className="main-menu-container nav nav-pills flex-column sub-open">
          <div className="slide-left" id="slide-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7b8191"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
            </svg>
          </div>
          <ul className="main-menu">
            <li className="slide__category">
              <span className="category-name">Main</span>
            </li>

            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-menu__icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z"
                    opacity=".3"
                  />
                  <path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z" />
                </svg>
                <span className="side-menu__label">Dashboard</span>
                <i className="fe fe-chevron-right side-menu__angle"></i>
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0);">Dashboard</a>
                </li>
                <li className="slide">
                  <a href="index.html" className="side-menu__item">
                    Sales
                  </a>
                </li>
                <li className="slide">
                  <a href="index1.html" className="side-menu__item">
                    Ecommerce
                  </a>
                </li>
                <li className="slide">
                  <a href="index2.html" className="side-menu__item">
                    Crm
                  </a>
                </li>
                <li className="slide">
                  <a href="index3.html" className="side-menu__item">
                    Crypto
                  </a>
                </li>
                <li className="slide">
                  <a href="index4.html" className="side-menu__item">
                    NFT
                  </a>
                </li>
                <li className="slide">
                  <a href="index5.html" className="side-menu__item">
                    Analytics
                  </a>
                </li>
                <li className="slide">
                  <a href="index6.html" className="side-menu__item">
                    HRM
                  </a>
                </li>
                <li className="slide">
                  <a href="index7.html" className="side-menu__item">
                    Projects
                  </a>
                </li>
                <li className="slide">
                  <a href="index8.html" className="side-menu__item">
                    jobs
                  </a>
                </li>
                <li className="slide">
                  <a href="index9.html" className="side-menu__item">
                    Stocks
                  </a>
                </li>
                <li className="slide">
                  <a href="index10.html" className="side-menu__item">
                    Course
                  </a>
                </li>
                <li className="slide">
                  <a href="index11.html" className="side-menu__item">
                    Personal
                  </a>
                </li>
              </ul>
            </li>

            <a href="index.html" className="side-menu__item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="side-menu__icon"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z"
                  opacity=".3"
                />
                <path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z" />
              </svg>
              <span className="side-menu__label">Index</span>
              <span className="badge bg-success ms-auto text-left menu-badge !text-white">
                1
              </span>
            </a>

            <li className="slide__category">
              <span className="category-name">General</span>
            </li>

            <li className="slide">
              <a href="icons.html" className="side-menu__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-menu__icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8zm3.5 9.5c-2.33 0-4.32-1.45-5.12-3.5h1.67c.7 1.19 1.97 2 3.45 2s2.76-.81 3.45-2h1.67c-.8 2.05-2.79 3.5-5.12 3.5z"
                    opacity=".3"
                  />
                  <circle cx="15.5" cy="9.5" r="1.5" />
                  <circle cx="8.5" cy="9.5" r="1.5" />
                  <path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                </svg>
                <span className="side-menu__label">Icons</span>
              </a>
            </li>

            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-menu__icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M19 5H5v14h14V5zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
                    opacity=".3"
                  />
                  <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm2 0h14v14H5V5zm2 5h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
                </svg>
                <span className="side-menu__label">Charts</span>
                <i className="fe fe-chevron-right side-menu__angle"></i>
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0);">Charts</a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Apex Charts
                    <i className="fe fe-chevron-right side-menu__angle"></i>
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a
                        href="apex-line-charts.html"
                        className="side-menu__item"
                      >
                        Line Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-area-charts.html"
                        className="side-menu__item"
                      >
                        Area Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-column-charts.html"
                        className="side-menu__item"
                      >
                        Column Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-bar-charts.html"
                        className="side-menu__item"
                      >
                        Bar Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-mixed-charts.html"
                        className="side-menu__item"
                      >
                        Mixed Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-rangearea-charts.html"
                        className="side-menu__item"
                      >
                        Range Area Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-timeline-charts.html"
                        className="side-menu__item"
                      >
                        Timeline Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-candlestick-charts.html"
                        className="side-menu__item"
                      >
                        CandleStick Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-boxplot-charts.html"
                        className="side-menu__item"
                      >
                        Boxplot Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-bubble-charts.html"
                        className="side-menu__item"
                      >
                        Bubble Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-scatter-charts.html"
                        className="side-menu__item"
                      >
                        Scatter Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-heatmap-charts.html"
                        className="side-menu__item"
                      >
                        Heatmap Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-treemap-charts.html"
                        className="side-menu__item"
                      >
                        Treemap Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-pie-charts.html"
                        className="side-menu__item"
                      >
                        Pie Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-radialbar-charts.html"
                        className="side-menu__item"
                      >
                        Radialbar Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-radar-charts.html"
                        className="side-menu__item"
                      >
                        Radar Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-polararea-charts.html"
                        className="side-menu__item"
                      >
                        Polararea Charts
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide">
                  <a href="chartjs.html" className="side-menu__item">
                    Chartjs Charts
                  </a>
                </li>
                <li className="slide">
                  <a href="echartjs.html" className="side-menu__item">
                    Echart Charts
                  </a>
                </li>
              </ul>
            </li>

            <li className="slide__category">
              <span className="category-name">Web Apps</span>
            </li>

            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-menu__icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M4 12c0 4.08 3.06 7.44 7 7.93V4.07C7.05 4.56 4 7.92 4 12z"
                    opacity=".3"
                  />
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z" />
                </svg>
                <span className="side-menu__label">Apps</span>
                <i className="fe fe-chevron-right side-menu__angle"></i>
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0);">Apps</a>
                </li>
                <li className="slide">
                  <a href="cards.html" className="side-menu__item">
                    Cards
                  </a>
                </li>
                <li className="slide">
                  <a href="draggable.html" className="side-menu__item">
                    Draggable Cards
                  </a>
                </li>
                <li className="slide">
                  <a href="full-calendar.html" className="side-menu__item">
                    Calendar
                  </a>
                </li>
                <li className="slide">
                  <a href="contacts.html" className="side-menu__item">
                    Contacts
                  </a>
                </li>
                <li className="slide">
                  <a href="notifications.html" className="side-menu__item">
                    Notifications
                  </a>
                </li>
                <li className="slide">
                  <a href="widgets.html" className="side-menu__item">
                    Widgets
                  </a>
                </li>
                <li className="slide">
                  <a href="treeview.html" className="side-menu__item">
                    Treeview
                  </a>
                </li>
                <li className="slide">
                  <a href="file-manager.html" className="side-menu__item">
                    File Manager
                  </a>
                </li>
              </ul>
            </li>

            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-menu__icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M6.26 9L12 13.47 17.74 9 12 4.53z" opacity=".3" />
                  <path d="M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z" />
                </svg>
                <span className="side-menu__label">Elements</span>
                <i className="fe fe-chevron-right side-menu__angle"></i>
              </a>
              <ul className="slide-menu child1 mega-menu">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0);">Elements</a>
                </li>
                <li className="slide">
                  <a href="alerts.html" className="side-menu__item">
                    Alerts
                  </a>
                </li>
                <li className="slide">
                  <a href="avatars.html" className="side-menu__item">
                    Avatar
                  </a>
                </li>
                <li className="slide">
                  <a href="breadcrumb.html" className="side-menu__item">
                    Breadcrumb
                  </a>
                </li>
                <li className="slide">
                  <a href="buttons.html" className="side-menu__item">
                    Buttons
                  </a>
                </li>
                <li className="slide">
                  <a href="buttongroup.html" className="side-menu__item">
                    Button Group
                  </a>
                </li>
                <li className="slide">
                  <a href="badge.html" className="side-menu__item">
                    Badge
                  </a>
                </li>
                <li className="slide">
                  <a href="dropdowns.html" className="side-menu__item">
                    Dropdown
                  </a>
                </li>
                <li className="slide">
                  <a href="list.html" className="side-menu__item">
                    List
                  </a>
                </li>
                <li className="slide">
                  <a href="listgroup.html" className="side-menu__item">
                    List Group
                  </a>
                </li>
                <li className="slide">
                  <a href="blockquotes.html" className="side-menu__item">
                    Blockquotes
                  </a>
                </li>
                <li className="slide">
                  <a href="navbar.html" className="side-menu__item">
                    Navbar
                  </a>
                </li>
                <li className="slide">
                  <a href="images_figures.html" className="side-menu__item">
                    Images & Figures
                  </a>
                </li>
                <li className="slide">
                  <a href="pagination.html" className="side-menu__item">
                    Pagination
                  </a>
                </li>
                <li className="slide">
                  <a href="popovers.html" className="side-menu__item">
                    Popovers
                  </a>
                </li>
                <li className="slide">
                  <a href="progress.html" className="side-menu__item">
                    Progress
                  </a>
                </li>
                <li className="slide">
                  <a href="spinners.html" className="side-menu__item">
                    Spinners
                  </a>
                </li>
                <li className="slide">
                  <a href="typography.html" className="side-menu__item">
                    Typography
                  </a>
                </li>
                <li className="slide">
                  <a href="tooltips.html" className="side-menu__item">
                    Tooltips
                  </a>
                </li>
                <li className="slide">
                  <a href="toasts.html" className="side-menu__item">
                    Toasts
                  </a>
                </li>
                <li className="slide">
                  <a href="navs-tabs.html" className="side-menu__item">
                    Navs & Tabs
                  </a>
                </li>
                <li className="slide">
                  <a href="scrollspy.html" className="side-menu__item">
                    Scrollspy
                  </a>
                </li>
                <li className="slide">
                  <a href="object-fit.html" className="side-menu__item">
                    Object Fit
                  </a>
                </li>
              </ul>
            </li>

            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-menu__icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13zm3-4C8.67 9 8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zm4.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"
                    opacity=".3"
                  />
                  <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.08-.09-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm4 13h-1.77c-1.38 0-2.5 1.12-2.5 2.5 0 .61.22 1.19.63 1.65.06.07.14.19.14.35 0 .28-.22.5-.5.5-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.14 8 7c0 2.21-1.79 4-4 4z" />
                  <circle cx="6.5" cy="11.5" r="1.5" />
                  <circle cx="9.5" cy="7.5" r="1.5" />
                  <circle cx="14.5" cy="7.5" r="1.5" />
                  <circle cx="17.5" cy="11.5" r="1.5" />
                </svg>
                <span className="side-menu__label">Advanced Ui</span>
                <i className="fe fe-chevron-right side-menu__angle"></i>
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0);">Advanced Ui</a>
                </li>
                <li className="slide">
                  <a
                    href="accordions_collpase.html"
                    className="side-menu__item"
                  >
                    Accordions
                  </a>
                </li>
                <li className="slide">
                  <a href="modals_closes.html" className="side-menu__item">
                    Modals
                  </a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Timeline
                    <i className="fe fe-chevron-right side-menu__angle"></i>
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="timeline.html" className="side-menu__item">
                        Timeline-1
                      </a>
                    </li>
                    <li className="slide">
                      <a href="timeline2.html" className="side-menu__item">
                        Timeline-2
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide">
                  <a href="stepper.html" className="side-menu__item">
                    Stepper
                  </a>
                </li>
                <li className="slide">
                  <a href="Indicators.html" className="side-menu__item">
                    Indicators
                  </a>
                </li>
                <li className="slide">
                  <a href="form_range.html" className="side-menu__item">
                    Range Slider
                  </a>
                </li>
                <li className="slide">
                  <a href="sweet-alerts.html" className="side-menu__item">
                    Sweet Alerts
                  </a>
                </li>
                <li className="slide">
                  <a href="ratings.html" className="side-menu__item">
                    Ratings
                  </a>
                </li>
                <li className="slide">
                  <a href="search.html" className="side-menu__item">
                    Search
                  </a>
                </li>
                <li className="slide">
                  <a href="userlist.html" className="side-menu__item">
                    Userlist
                  </a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Blog
                    <i className="fe fe-chevron-right side-menu__angle"></i>
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="blog.html" className="side-menu__item">
                        Blog
                      </a>
                    </li>
                    <li className="slide">
                      <a href="blog-details.html" className="side-menu__item">
                        Blog Details
                      </a>
                    </li>
                    <li className="slide">
                      <a href="blog-create.html" className="side-menu__item">
                        Blog Post
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide">
                  <a href="offcanvas.html" className="side-menu__item">
                    Offcanvas
                  </a>
                </li>
                <li className="slide">
                  <a href="placeholders.html" className="side-menu__item">
                    Skeleton
                  </a>
                </li>
                <li className="slide">
                  <a href="swiperjs.html" className="side-menu__item">
                    Swiper JS
                  </a>
                </li>
              </ul>
            </li>

            <li className="slide__category">
              <span className="category-name">Multi Levels</span>
            </li>

            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-menu__icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M5 9h14V5H5v4zm2-3.5c.83 0 1.5.67 1.5 1.5S7.83 8.5 7 8.5 5.5 7.83 5.5 7 6.17 5.5 7 5.5zM5 19h14v-4H5v4zm2-3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"
                    opacity=".3"
                  />
                  <path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm-1 6H5v-4h14v4zm-12-.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 6H5V5h14v4zM7 8.5c.83 0 1.5-.67 1.5-1.5S7.83 5.5 7 5.5 5.5 6.17 5.5 7 6.17 8.5 7 8.5z" />
                </svg>
                <span className="side-menu__label">Menu Levels</span>
                <i className="fe fe-chevron-right side-menu__angle"></i>
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0);">Menu Levels</a>
                </li>
                <li className="slide">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Level-1
                  </a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Level-2
                    <i className="fe fe-chevron-right side-menu__angle"></i>
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="javascript:void(0);" className="side-menu__item">
                        Level-2-1
                      </a>
                    </li>
                    <li className="slide has-sub">
                      <a href="javascript:void(0);" className="side-menu__item">
                        Level-2-2
                        <i className="fe fe-chevron-right side-menu__angle"></i>
                      </a>
                      <ul className="slide-menu child3">
                        <li className="slide">
                          <a
                            href="javascript:void(0);"
                            className="side-menu__item"
                          >
                            Level-2-2-1
                          </a>
                        </li>
                        <li className="slide">
                          <a
                            href="javascript:void(0);"
                            className="side-menu__item"
                          >
                            Level-2-2-2
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="slide__category">
              <span className="category-name">Pages</span>
            </li>

            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  className="side-menu__icon"
                  viewBox="0 0 24 24"
                >
                  <g></g>
                  <g>
                    <g />
                    <g>
                      <path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M3,18.5V7 c1.1-0.35,2.3-0.5,3.5-0.5c1.34,0,3.13,0.41,4.5,0.99v11.5C9.63,18.41,7.84,18,6.5,18C5.3,18,4.1,18.15,3,18.5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.34,0-3.13,0.41-4.5,0.99V7.49c1.37-0.59,3.16-0.99,4.5-0.99c1.2,0,2.4,0.15,3.5,0.5V18.5z" />
                      <path
                        d="M11,7.49C9.63,6.91,7.84,6.5,6.5,6.5C5.3,6.5,4.1,6.65,3,7v11.5C4.1,18.15,5.3,18,6.5,18 c1.34,0,3.13,0.41,4.5,0.99V7.49z"
                        opacity=".3"
                      />
                    </g>
                    <g>
                      <path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,10.69,16.18,10.5,17.5,10.5z" />
                      <path d="M17.5,13.16c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,13.36,16.18,13.16,17.5,13.16z" />
                      <path d="M17.5,15.83c0.88,0,1.73,0.09,2.5,0.26v-1.52c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,16.02,16.18,15.83,17.5,15.83z" />
                    </g>
                  </g>
                </svg>
                <span className="side-menu__label">Pages</span>
                <i className="fe fe-chevron-right side-menu__angle"></i>
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0);">Pages</a>
                </li>
                <li className="slide">
                  <a href="profile.html" className="side-menu__item">
                    Profile
                  </a>
                </li>
                <li className="slide">
                  <a href="about-us.html" className="side-menu__item">
                    About-Us
                  </a>
                </li>
                <li className="slide">
                  <a href="reviews.html" className="side-menu__item">
                    Review
                  </a>
                </li>
                <li className="slide">
                  <a href="team.html" className="side-menu__item">
                    Team
                  </a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Invoice
                    <i className="fe fe-chevron-right side-menu__angle"></i>
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="create-invoice.html" className="side-menu__item">
                        Create Invoice
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="invoice-details.html"
                        className="side-menu__item"
                      >
                        Invoice Details
                      </a>
                    </li>
                    <li className="slide">
                      <a href="invoice-list.html" className="side-menu__item">
                        Invoice List
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide">
                  <a href="pricing.html" className="side-menu__item">
                    Pricing
                  </a>
                </li>
                <li className="slide">
                  <a href="gallery.html" className="side-menu__item">
                    Gallery
                  </a>
                </li>
                <li className="slide">
                  <a href="todolist.html" className="side-menu__item">
                    TodoList
                  </a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Task
                    <i className="fe fe-chevron-right side-menu__angle"></i>
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a
                        href="task-kanban-board.html"
                        className="side-menu__item"
                      >
                        Kanban Board
                      </a>
                    </li>
                    <li className="slide">
                      <a href="task-list-view.html" className="side-menu__item">
                        List View
                      </a>
                    </li>
                    <li className="slide">
                      <a href="task-details.html" className="side-menu__item">
                        Task Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide">
                  <a href="faqs.html" className="side-menu__item">
                    Faqs
                  </a>
                </li>
                <li className="slide">
                  <a href="empty.html" className="side-menu__item">
                    Empty
                  </a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Mail
                    <i className="fe fe-chevron-right side-menu__angle"></i>
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="mail.html" className="side-menu__item">
                        Mail
                      </a>
                    </li>
                    <li className="slide">
                      <a href="mail-settings.html" className="side-menu__item">
                        Mail Settings
                      </a>
                    </li>
                    <li className="slide">
                      <a href="chat.html" className="side-menu__item">
                        Chat
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Ecommerce
                    <i className="fe fe-chevron-right side-menu__angle"></i>
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="products.html" className="side-menu__item">
                        Products
                      </a>
                    </li>
                    <li className="slide">
                      <a href="products-list.html" className="side-menu__item">
                        Products List
                      </a>
                    </li>
                    <li className="slide">
                      <a href="add-products.html" className="side-menu__item">
                        Add Products
                      </a>
                    </li>
                    <li className="slide">
                      <a href="edit-products.html" className="side-menu__item">
                        Edit Products
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="product-details.html"
                        className="side-menu__item"
                      >
                        Product Details
                      </a>
                    </li>
                    <li className="slide">
                      <a href="orders.html" className="side-menu__item">
                        Orders
                      </a>
                    </li>
                    <li className="slide">
                      <a href="order-details.html" className="side-menu__item">
                        Order Details
                      </a>
                    </li>
                    <li className="slide">
                      <a href="product-cart.html" className="side-menu__item">
                        Cart
                      </a>
                    </li>
                    <li className="slide">
                      <a href="check-out.html" className="side-menu__item">
                        Check-out
                      </a>
                    </li>
                    <li className="slide">
                      <a href="wish-list.html" className="side-menu__item">
                        Wish List
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Custom Pages
                    <i className="fe fe-chevron-right side-menu__angle"></i>
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="comingsoon.html" className="side-menu__item">
                        Coming Soon
                      </a>
                    </li>
                    <li className="slide has-sub">
                      <a href="javascript:void(0);" className="side-menu__item">
                        Create Password
                        <i className="fe fe-chevron-right side-menu__angle"></i>
                      </a>
                      <ul className="slide-menu child3">
                        <li className="slide">
                          <a
                            href="create-password-basic.html"
                            className="side-menu__item"
                          >
                            Basic
                          </a>
                        </li>
                        <li className="slide">
                          <a
                            href="create-password-cover.html"
                            className="side-menu__item"
                          >
                            Cover
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="slide has-sub">
                      <a href="javascript:void(0);" className="side-menu__item">
                        Sign In
                        <i className="fe fe-chevron-right side-menu__angle"></i>
                      </a>
                      <ul className="slide-menu child3">
                        <li className="slide">
                          <a
                            href="sign-in-basic.html"
                            className="side-menu__item"
                          >
                            Basic
                          </a>
                        </li>
                        <li className="slide">
                          <a
                            href="sign-in-cover.html"
                            className="side-menu__item"
                          >
                            Cover
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="slide has-sub">
                      <a href="javascript:void(0);" className="side-menu__item">
                        Sign Up
                        <i className="fe fe-chevron-right side-menu__angle"></i>
                      </a>
                      <ul className="slide-menu child3">
                        <li className="slide">
                          <a
                            href="sign-up-basic.html"
                            className="side-menu__item"
                          >
                            Basic
                          </a>
                        </li>
                        <li className="slide">
                          <a
                            href="sign-up-cover.html"
                            className="side-menu__item"
                          >
                            Cover
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="slide has-sub">
                      <a href="javascript:void(0);" className="side-menu__item">
                        Reset Password
                        <i className="fe fe-chevron-right side-menu__angle"></i>
                      </a>
                      <ul className="slide-menu child3">
                        <li className="slide">
                          <a
                            href="reset-password-basic.html"
                            className="side-menu__item"
                          >
                            Basic
                          </a>
                        </li>
                        <li className="slide">
                          <a
                            href="reset-password-cover.html"
                            className="side-menu__item"
                          >
                            Cover
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="slide has-sub">
                      <a href="javascript:void(0);" className="side-menu__item">
                        Lockscreen
                        <i className="fe fe-chevron-right side-menu__angle"></i>
                      </a>
                      <ul className="slide-menu child3">
                        <li className="slide">
                          <a
                            href="lockscreen-basic.html"
                            className="side-menu__item"
                          >
                            Basic
                          </a>
                        </li>
                        <li className="slide">
                          <a
                            href="lockscreen-cover.html"
                            className="side-menu__item"
                          >
                            Cover
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="slide has-sub">
                      <a href="javascript:void(0);" className="side-menu__item">
                        Two Step Verification
                        <i className="fe fe-chevron-right side-menu__angle"></i>
                      </a>
                      <ul className="slide-menu child3">
                        <li className="slide">
                          <a
                            href="two-step-verfication-basic.html"
                            className="side-menu__item"
                          >
                            Basic
                          </a>
                        </li>
                        <li className="slide">
                          <a
                            href="two-step-verfication-cover.html"
                            className="side-menu__item"
                          >
                            Cover
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="slide">
                      <a href="maintanace.html" className="side-menu__item">
                        Under Maintenance
                      </a>
                    </li>
                    <li className="slide has-sub">
                      <a href="javascript:void(0);" className="side-menu__item">
                        Error
                        <i className="fe fe-chevron-right side-menu__angle"></i>
                      </a>
                      <ul className="slide-menu child3">
                        <li className="slide">
                          <a href="404-error.html" className="side-menu__item">
                            404 Error
                          </a>
                        </li>
                        <li className="slide">
                          <a href="500-error.html" className="side-menu__item">
                            500 Error
                          </a>
                        </li>
                        <li className="slide">
                          <a href="501-error.html" className="side-menu__item">
                            501 Error
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="slide">
                  <a href="terms.html" className="side-menu__item">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </li>

            <li className="slide__category">
              <span className="category-name">Components</span>
            </li>

            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-menu__icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z"
                    opacity=".3"
                  />
                  <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
                </svg>
                <span className="side-menu__label">Forms</span>
                <i className="fe fe-chevron-right side-menu__angle"></i>
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0);">Forms</a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Form Elements
                    <i className="fe fe-chevron-right side-menu__angle"></i>
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="form-inputs.html" className="side-menu__item">
                        Inputs
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="form_check_radios.html"
                        className="side-menu__item"
                      >
                        Checks & Radios
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="form_input_group.html"
                        className="side-menu__item"
                      >
                        Input Group
                      </a>
                    </li>
                    <li className="slide">
                      <a href="form_select.html" className="side-menu__item">
                        Form Select
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="form_file_uploads.html"
                        className="side-menu__item"
                      >
                        File Uploads
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="form_dateTime_pickers.html"
                        className="side-menu__item"
                      >
                        Date,Time Picker
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="form_color_pickers.html"
                        className="side-menu__item"
                      >
                        Color Pickers
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="advanced-select.html"
                        className="side-menu__item"
                      >
                        Advanced Select
                      </a>
                    </li>
                    <li className="slide">
                      <a href="inputnumber.html" className="side-menu__item">
                        Input Number
                      </a>
                    </li>
                    <li className="slide">
                      <a href="passwords.html" className="side-menu__item">
                        Passwords
                      </a>
                    </li>
                    <li className="slide">
                      <a href="counters.html" className="side-menu__item">
                        Counters &amp; Markup
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide">
                  <a href="form_layout.html" className="side-menu__item">
                    Form Layouts
                  </a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Form Editors
                    <i className="fe fe-chevron-right side-menu__angle"></i>
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="quill_editor.html" className="side-menu__item">
                        Quill Editor
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide">
                  <a href="form_validation.html" className="side-menu__item">
                    Validation
                  </a>
                </li>
                <li className="slide">
                  <a href="form_select2.html" className="side-menu__item">
                    Select2
                  </a>
                </li>
              </ul>
            </li>

            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-menu__icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M5 5h15v3H5zm12 5h3v9h-3zm-7 0h5v9h-5zm-5 0h3v9H5z"
                    opacity=".3"
                  />
                  <path d="M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 19H5v-9h3v9zm7 0h-5v-9h5v9zm5 0h-3v-9h3v9zm0-11H5V5h15v3z" />
                </svg>
                <span className="side-menu__label">Tables</span>
                <i className="fe fe-chevron-right side-menu__angle"></i>
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0);">Tables</a>
                </li>
                <li className="slide">
                  <a href="tables.html" className="side-menu__item">
                    Tables
                  </a>
                </li>
                <li className="slide">
                  <a href="grid-tables.html" className="side-menu__item">
                    Grid JS Tables
                  </a>
                </li>
                <li className="slide">
                  <a href="data-tables.html" className="side-menu__item">
                    Data Tables
                  </a>
                </li>
                <li className="slide">
                  <a href="edittable.html" className="side-menu__item">
                    Edit Table
                  </a>
                </li>
              </ul>
            </li>

            <li className="slide">
              <a href="landing.html" className="side-menu__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-menu__icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 4.02C7.6 4.02 4.02 7.6 4.02 12S7.6 19.98 12 19.98s7.98-3.58 7.98-7.98S16.4 4.02 12 4.02zM11.39 19v-5.5H8.25l4.5-8.5v5.5h3L11.39 19z"
                    opacity=".3"
                  />
                  <path d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zm0 17.96c-4.4 0-7.98-3.58-7.98-7.98S7.6 4.02 12 4.02 19.98 7.6 19.98 12 16.4 19.98 12 19.98zM12.75 5l-4.5 8.5h3.14V19l4.36-8.5h-3V5z" />
                </svg>
                <span className="side-menu__label">Landing Page</span>
              </a>
            </li>

            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-menu__icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M12 4C9.24 4 7 6.24 7 9c0 2.85 2.92 7.21 5 9.88 2.11-2.69 5-7 5-9.88 0-2.76-2.24-5-5-5zm0 7.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    opacity=".3"
                  />
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span className="side-menu__label">Maps</span>
                <i className="fe fe-chevron-right side-menu__angle"></i>
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0);">Maps</a>
                </li>
                <li className="slide">
                  <a href="google-maps.html" className="side-menu__item">
                    Google Maps
                  </a>
                </li>
                <li className="slide">
                  <a href="leaflet-maps.html" className="side-menu__item">
                    Leaflet Maps
                  </a>
                </li>
                <li className="slide">
                  <a href="vector-maps.html" className="side-menu__item">
                    Vector Maps
                  </a>
                </li>
              </ul>
            </li>

            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-menu__icon"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M10.9 19.91c.36.05.72.09 1.1.09 2.18 0 4.16-.88 5.61-2.3L14.89 13l-3.99 6.91zm-1.04-.21l2.71-4.7H4.59c.93 2.28 2.87 4.03 5.27 4.7zM8.54 12L5.7 7.09C4.64 8.45 4 10.15 4 12c0 .69.1 1.36.26 2h5.43l-1.15-2zm9.76 4.91C19.36 15.55 20 13.85 20 12c0-.69-.1-1.36-.26-2h-5.43l3.99 6.91zM13.73 9h5.68c-.93-2.28-2.88-4.04-5.28-4.7L11.42 9h2.31zm-3.46 0l2.83-4.92C12.74 4.03 12.37 4 12 4c-2.18 0-4.16.88-5.6 2.3L9.12 11l1.15-2z"
                    opacity=".3"
                  />
                  <path d="M12 22c5.52 0 10-4.48 10-10 0-4.75-3.31-8.72-7.75-9.74l-.08-.04-.01.02C13.46 2.09 12.74 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10zm0-2c-.38 0-.74-.04-1.1-.09L14.89 13l2.72 4.7C16.16 19.12 14.18 20 12 20zm8-8c0 1.85-.64 3.55-1.7 4.91l-4-6.91h5.43c.17.64.27 1.31.27 2zm-.59-3h-7.99l2.71-4.7c2.4.66 4.35 2.42 5.28 4.7zM12 4c.37 0 .74.03 1.1.08L10.27 9l-1.15 2L6.4 6.3C7.84 4.88 9.82 4 12 4zm-8 8c0-1.85.64-3.55 1.7-4.91L8.54 12l1.15 2H4.26C4.1 13.36 4 12.69 4 12zm6.27 3h2.3l-2.71 4.7c-2.4-.67-4.35-2.42-5.28-4.7h5.69z" />
                </svg>
                <span className="side-menu__label">Utilities</span>
                <i className="fe fe-chevron-right side-menu__angle"></i>
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0);">Utilities</a>
                </li>
                <li className="slide">
                  <a href="borders.html" className="side-menu__item">
                    Borders
                  </a>
                </li>
                <li className="slide">
                  <a href="colors.html" className="side-menu__item">
                    Colors
                  </a>
                </li>
                <li className="slide">
                  <a href="columns.html" className="side-menu__item">
                    Columns
                  </a>
                </li>
                <li className="slide">
                  <a href="flex.html" className="side-menu__item">
                    Flex
                  </a>
                </li>
                <li className="slide">
                  <a href="grids.html" className="side-menu__item">
                    Grid
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="slide-right" id="slide-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7b8191"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              {' '}
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>{' '}
            </svg>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default LeftMenu;
