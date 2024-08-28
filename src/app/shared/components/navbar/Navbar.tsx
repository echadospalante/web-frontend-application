const Navbar = () => {
  return (
    <div>
      <header className="app-header">
        <nav className="main-header" aria-label="Global">
          <div className="main-header-container !px-[0.85rem]">
            <div className="header-content-left">
              <div className="header-element">
                <div className="horizontal-logo">
                  <a href="index.html" className="header-logo">
                    <img
                      src="/logo-full.jpeg"
                      alt="logo"
                      className="desktop-logo"
                    />
                    <img
                      src="/logo-full.jpeg"
                      alt="logo"
                      className="toggle-logo"
                    />
                    <img
                      src="/logo-full.jpeg"
                      alt="logo"
                      className="desktop-dark"
                    />
                    <img
                      src="/logo-full.jpeg"
                      alt="logo"
                      className="toggle-dark"
                    />
                    <img
                      src="/logo-full.jpeg"
                      alt="logo"
                      className="desktop-white"
                    />
                  </a>
                </div>
              </div>
              <div className="header-element !items-center">
                <a
                  aria-label="Hide Sidebar"
                  className="sidemenu-toggle animated-arrow header-link  hor-toggle horizontal-navtoggle inline-flex items-center"
                  href="javascript:void(0);"
                >
                  <i className="header-icon fe fe-align-left"></i>
                </a>
                <div className="main-header-center hidden lg:block">
                  <input
                    className="form-control placeholder:!text-headerprimecolor placeholder:opacity-70 placeholder:font-thin placeholder:text-sm"
                    placeholder="Search for anything..."
                    type="search"
                  />
                  <button className="btn">
                    <i className="fa fa-search hidden md:block opacity-[0.5]"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="header-content-right">
              <div className="header-element hs-dropdown search-dropdown ti-dropdown  lg:!hidden [--auto-close:inside]">
                <a
                  href="javascript:void(0);"
                  className="header-link dropdown-toggle"
                  id="hs-dropdown-auto-close-inside"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="header-link-icon"
                  >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path>
                  </svg>{' '}
                </a>

                <div
                  className="hs-dropdown-menu ti-dropdown-menu hidden"
                  aria-labelledby="hs-dropdown-auto-close-inside"
                >
                  <div>
                    <div className="input-group w-full p-2">
                      {' '}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search...."
                      />
                      <div className="ti-btn ti-btn-primary-full !mb-0">
                        {' '}
                        <i className="fa fa-search" aria-hidden="true"></i>{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="header-element  header-country hs-dropdown ti-dropdown"
                data-hs-dropdown-placement="bottom-right"
              >
                <a
                  href="javascript:void(0);"
                  className="header-link dropdown-toggle"
                  data-bs-auto-close="outside"
                  data-bs-toggle="dropdown"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="flag-icon1"
                  >
                    <circle cx="256" cy="256" r="256" fill="#f0f0f0"></circle>
                    <g fill="#0052b4">
                      <path d="M52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178L52.92 100.142zM503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076h133.176zM8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075H8.819zM411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177l89.076-89.075zM100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102V370.005l-89.076 89.074zM189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075V8.819zM322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075v133.176zM370.005 322.784l89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076H370.005z"></path>
                    </g>
                    <g fill="#d80027">
                      <path d="M509.833 222.609H289.392V2.167A258.556 258.556 0 00256 0c-11.319 0-22.461.744-33.391 2.167v220.441H2.167A258.556 258.556 0 000 256c0 11.319.744 22.461 2.167 33.391h220.441v220.442a258.35 258.35 0 0066.783 0V289.392h220.442A258.533 258.533 0 00512 256c0-11.317-.744-22.461-2.167-33.391z"></path>
                      <path d="M322.783 322.784L437.019 437.02a256.636 256.636 0 0015.048-16.435l-97.802-97.802h-31.482v.001zM189.217 322.784h-.002L74.98 437.019a256.636 256.636 0 0016.435 15.048l97.802-97.804v-31.479zM189.217 189.219v-.002L74.981 74.98a256.636 256.636 0 00-15.048 16.435l97.803 97.803h31.481zM322.783 189.219L437.02 74.981a256.328 256.328 0 00-16.435-15.047l-97.802 97.803v31.482z"></path>
                    </g>
                  </svg>
                </a>

                <div
                  className="hs-dropdown-menu ti-dropdown-menu min-w-[10rem] hidden !left-[-7rem] !-mt-2"
                  aria-labelledby="dropdown-flag"
                >
                  <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                    <div className="py-2 first:pt-0 last:pb-0">
                      <div className="ti-dropdown-item !p-[0.65rem] ">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                          <div className="flex items-center rounded-full">
                            <img
                              src="/logo-full.jpeg"
                              alt="flag-img"
                              className="h-[1.1875rem] w-[1.1875rem] rounded-full"
                            />
                          </div>
                          <div>
                            <p className="!text-[0.8125rem] font-medium">
                              French
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="ti-dropdown-item !p-[0.65rem]">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                          <div className="flex items-center rounded-full">
                            <img
                              src="/logo-full.jpeg"
                              alt="flag-img"
                              className="h-[1.1875rem] w-[1.1875rem] rounded-full"
                            />
                          </div>
                          <div>
                            <p className="!text-[0.8125rem] font-medium">
                              German
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="ti-dropdown-item !p-[0.65rem]">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                          <div className="flex items-center rounded-full">
                            <img
                              src="/logo-full.jpeg"
                              alt="flag-img"
                              className="h-[1.1875rem] w-[1.1875rem] rounded-full"
                            />
                          </div>
                          <div>
                            <p className="!text-[0.8125rem] font-medium">
                              Italian
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="ti-dropdown-item !p-[0.65rem]">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                          <div className="flex items-center rounded-full">
                            <img
                              src="/logo-full.jpeg"
                              alt="flag-img"
                              className="h-[1.1875rem] w-[1.1875rem] rounded-full"
                            />
                          </div>
                          <div>
                            <p className="!text-[0.8125rem] font-medium">
                              Russian
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="ti-dropdown-item !p-[0.65rem]">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                          <div className="flex items-center rounded-full">
                            <img
                              src="/logo-full.jpeg"
                              alt="flag-img"
                              className="h-[1.1875rem] w-[1.1875rem] rounded-full"
                            />
                          </div>
                          <div>
                            <p className="!text-[0.8125rem] font-medium">
                              Spanish
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="header-element header-theme-mode hidden !items-center sm:block !py-[1rem] !px-[0.65rem]">
                <a
                  aria-label="anchor"
                  className="hs-dark-mode-active:hidden flex hs-dark-mode group flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium transition-all text-xs dark:bg-bodybg dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                  href="javascript:;"
                  data-hs-theme-click-value="dark"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="header-link-icon"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
                  </svg>
                </a>
                <a
                  aria-label="anchor"
                  className="hs-dark-mode-active:flex hidden hs-dark-mode group flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium text-defaulttextcolor  transition-all text-xs dark:bg-bodybg  dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                  href="javascript:;"
                  data-hs-theme-click-value="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="header-link-icon"
                    fill="currentColor"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
                  </svg>
                </a>
              </div>

              <div
                className="header-element py-[1rem] px-[0.65rem] notifications-dropdown header-notification hs-dropdown ti-dropdown !hidden md:!flex"
                data-hs-dropdown-placement="bottom-right"
              >
                <button
                  id="dropdown-cart"
                  type="button"
                  className="hs-dropdown-toggle relative ti-dropdown-toggle !p-0 !border-0 flex-shrink-0  !rounded-full !shadow-none align-middle text-xs"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="header-link-icon"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                  </svg>
                  <span className="animate-slow-ping absolute inline-flex -top-[0.15rem] start-[16px] h-[10px] w-[10px] !rounded-full bg-danger/50 opacity-75"></span>
                  <span className="pulse-danger"></span>
                </button>

                <div
                  className="main-header-dropdown !-mt-2 !p-0 hs-dropdown-menu ti-dropdown-menu  bg-white !w-[20rem] !border-0 border-defaultborder hidden !m-0"
                  aria-labelledby="dropdown-cart"
                >
                  <div className="menu-header-content bg-primary text-white">
                    <div className="flex items-center justify-between">
                      <h6 className="mb-0 text-[.9375rem] font-semibold text-white">
                        Messages
                      </h6>
                      <span className="badge !rounded-full bg-warning !text-[0.7rem] !font-medium text-black">
                        Mark All Read
                      </span>
                    </div>
                    <p className="dropdown-title-text subtext mb-0 text-white opacity-[0.6] pb-0 text-[0.75rem] ">
                      You have 6 unread messages
                    </p>
                  </div>
                  <div className="dropdown-divider dark:border-white/10"></div>
                  <ul className="list-none mb-0" id="header-cart-items-scroll">
                    <li className="dropdown-item">
                      <div className="flex messages">
                        <span className="avatar avatar-md me-2 online avatar-rounded flex-shrink-0">
                          <img src="/logo-full.jpeg" alt="img" />
                        </span>
                        <div>
                          <div className="flex">
                            <a href="chat.html">
                              <h6 className="mb-1 text-[0.9rem] font-medium text-defaulttextcolor">
                                Petey Cruiser
                              </h6>
                            </a>
                          </div>
                          <p className="mb-0 text-[0.75rem] desc">
                            I'm sorry but i'm not sure how to help you with
                            that......
                          </p>
                          <p className="text-[11px] fonr-normal mb-0 text-start float-start ms-2 mt-2">
                            Mar 15 3:55 PM
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="flex messages">
                        <span className="avatar avatar-md me-2 online avatar-rounded flex-shrink-0">
                          <img src="/logo-full.jpeg" alt="img" />
                        </span>
                        <div>
                          <div className="flex">
                            <a href="chat.html">
                              <h6 className="mb-1 text-[0.9rem] font-medium text-defaulttextcolor">
                                Jimmy Changa
                              </h6>
                            </a>
                          </div>
                          <p className="mb-0 text-[0.75rem] desc">
                            All set ! Now, text-[11px] fonr-normal to get to you
                            now......
                          </p>
                          <p className="text-[11px] fonr-normal mb-0 text-start float-start ms-2 mt-2">
                            Mar 06 01:12 AM
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="flex messages">
                        <span className="avatar avatar-md me-2 online avatar-rounded flex-shrink-0">
                          <img src="/logo-full.jpeg" alt="img" />
                        </span>
                        <div>
                          <div className="flex">
                            <a href="chat.html">
                              <h6 className="mb-1 text-[0.9rem] font-medium text-defaulttextcolor">
                                Graham Cracker
                              </h6>
                            </a>
                          </div>
                          <p className="mb-0 text-[0.75rem] desc">
                            Are you ready to pickup your Delivery...
                          </p>
                          <p className="text-[11px] fonr-normal mb-0 text-start float-start ms-2 mt-2">
                            Feb 25 10:35 AM
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown-item">
                      <div className="flex messages">
                        <span className="avatar avatar-md me-2 online avatar-rounded flex-shrink-0">
                          <img src="/logo-full.jpeg" alt="img" />
                        </span>
                        <div>
                          <div className="flex">
                            <a href="chat.html">
                              <h6 className="mb-1 text-[0.9rem] font-medium text-defaulttextcolor">
                                Donatella Nobatti
                              </h6>
                            </a>
                          </div>
                          <p className="mb-0 text-[0.75rem] desc">
                            Here are some products ...
                          </p>
                          <p className="text-[11px] fonr-normal mb-0 text-start float-start ms-2 mt-2">
                            Feb 12 05:12 PM
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown-item !rounded-bl-md !rounded-br-md">
                      <div className="flex messages">
                        <span className="avatar avatar-md me-2 online avatar-rounded flex-shrink-0">
                          <img src="/logo-full.jpeg" alt="img" />
                        </span>
                        <div>
                          <div className="flex">
                            <a href="chat.html">
                              <h6 className="mb-1 text-[0.9rem] font-medium text-defaulttextcolor">
                                Anne Fibbiyon
                              </h6>
                            </a>
                          </div>
                          <p className="mb-0 text-[0.75rem] desc">
                            I'm sorry but i'm not sure how...
                          </p>
                          <p className="text-[11px] fonr-normal mb-0 text-start float-start ms-2 mt-2">
                            Jan 29 03:16 PM
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="text-center !rounded-bl-md !rounded-br-md dropdown-footer">
                    <a
                      href="chat.html"
                      className="text-primary text-[.8125rem]"
                    >
                      VIEW ALL
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="header-element py-[1rem] px-[0.65rem] notifications-dropdown header-notification hs-dropdown ti-dropdown !hidden md:!flex"
                data-hs-dropdown-placement="bottom-right"
              >
                <button
                  id="dropdown-notification"
                  type="button"
                  className="hs-dropdown-toggle relative ti-dropdown-toggle !p-0 !border-0 flex-shrink-0  !rounded-full !shadow-none align-middle text-xs"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="header-link-icon"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                  </svg>
                  <span className="flex absolute h-5 w-5 -top-[0.6rem] ltr:right-0 rtl:left-0  ltr:-mr-[0.6rem] rtl:-ml-1">
                    <span className="animate-slow-ping absolute inline-flex top-[7px] -start-[1.4px] h-[10px] w-[10px] !rounded-full bg-success/50 opacity-75"></span>
                    <span className="pulse-success"></span>
                  </span>
                </button>
                <div
                  className="main-header-dropdown !-mt-2 !p-0 hs-dropdown-menu ti-dropdown-menu  bg-white !w-[20rem] !border-0 border-defaultborder hidden !m-0"
                  aria-labelledby="dropdown-notification"
                >
                  <div className="menu-header-content bg-primary text-white">
                    <div className="flex items-center justify-between">
                      <h6 className="mb-0 text-[.9375rem] font-semibold text-white">
                        Notifications
                      </h6>
                      <span className="badge !rounded-full bg-warning !text-[0.7rem] !font-medium text-black">
                        Mark All Read
                      </span>
                    </div>
                    <p className="dropdown-title-text subtext mb-0 text-white opacity-[0.6] pb-0 text-[0.75rem] ">
                      You have 6 unread Notifications
                    </p>
                  </div>
                  <div className="dropdown-divider"></div>
                  <ul
                    className="list-none mb-0"
                    id="header-notification-scroll"
                  >
                    <li className="dropdown-item px-3">
                      <div className="flex items-center">
                        <span className="avatar avatar-md me-2 avatar-rounded flex-shrink-0 bg-pinkmain">
                          <i className="la la-file-alt text-[1.25rem]"></i>
                        </span>
                        <div className="ms-3">
                          <a href="mail.html">
                            <h5 className="notification-label text-defaulttextcolor mb-1">
                              New files available
                            </h5>
                          </a>
                          <div className="notification-subtext">
                            10 hour ago
                          </div>
                        </div>
                        <div className="ms-auto">
                          <a href="mail.html">
                            <i className="las la-angle-right text-end text-muted icon rtl:rotate-180"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown-item px-3">
                      <div className="flex items-center">
                        <span className="avatar avatar-md me-2 avatar-rounded flex-shrink-0 bg-purplemain">
                          <i className="la la-gem text-[1.25rem]"></i>
                        </span>
                        <div className="ms-3">
                          <a href="mail.html">
                            <h5 className="notification-label text-defaulttextcolor mb-1">
                              Updates Available
                            </h5>
                          </a>
                          <div className="notification-subtext">2 days ago</div>
                        </div>
                        <div className="ms-auto">
                          <a href="mail.html">
                            <i className="las la-angle-right text-end text-muted icon rtl:rotate-180"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown-item px-3">
                      <div className="flex items-center">
                        <span className="avatar avatar-md me-2 avatar-rounded flex-shrink-0 bg-success">
                          <i className="la la-shopping-basket text-[1.25rem]"></i>
                        </span>
                        <div className="ms-3">
                          <a href="mail.html">
                            <h5 className="notification-label text-defaulttextcolor mb-1">
                              New Order Received
                            </h5>
                          </a>
                          <div className="notification-subtext">1 hour ago</div>
                        </div>
                        <div className="ms-auto">
                          <a href="mail.html">
                            <i className="las la-angle-right text-end text-muted icon rtl:rotate-180"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown-item px-3">
                      <div className="flex items-center">
                        <span className="avatar avatar-md me-2 avatar-rounded flex-shrink-0 bg-warning">
                          <i className="la la-envelope-open text-[1.25rem] text-fixed-white"></i>
                        </span>
                        <div className="ms-3">
                          <a href="mail.html">
                            <h5 className="notification-label text-defaulttextcolor mb-1">
                              New review received
                            </h5>
                          </a>
                          <div className="notification-subtext">1 day ago</div>
                        </div>
                        <div className="ms-auto">
                          <a href="mail.html">
                            <i className="las la-angle-right text-end text-muted icon rtl:rotate-180"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown-item px-3">
                      <div className="flex items-center">
                        <span className="avatar avatar-md me-2 avatar-rounded flex-shrink-0 bg-danger">
                          <i className="la la-user-check text-[1.25rem]"></i>
                        </span>
                        <div className="ms-3">
                          <a href="mail.html">
                            <h5 className="notification-label text-defaulttextcolor mb-1">
                              22 verified registrations
                            </h5>
                          </a>
                          <div className="notification-subtext">2 hour ago</div>
                        </div>
                        <div className="ms-auto">
                          <a href="mail.html">
                            <i className="las la-angle-right text-end text-muted icon rtl:rotate-180"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown-item px-3">
                      <div className="flex items-center !rounded-bl-md !rounded-br-md">
                        <span className="avatar avatar-md me-2 avatar-rounded flex-shrink-0 bg-primary">
                          <i className="la la-check-circle text-[1.25rem]"></i>
                        </span>
                        <div className="ms-3">
                          <a href="mail.html">
                            <h5 className="notification-label text-defaulttextcolor mb-1">
                              Project has been approved
                            </h5>
                          </a>
                          <div className="notification-subtext">4 hour ago</div>
                        </div>
                        <div className="ms-auto">
                          <a href="mail.html">
                            <i className="las la-angle-right text-end text-muted icon rtl:rotate-180"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="text-center !rounded-bl-md !rounded-br-md dropdown-footer">
                    <a href="mail.html" className="text-primary fs-13">
                      VIEW ALL
                    </a>
                  </div>
                </div>
              </div>

              <div className="header-element header-fullscreen py-[1rem] md:px-[0.65rem] px-2">
                <a
                  aria-label="anchor"
                  className="inline-flex flex-shrink-0 justify-center items-center gap-2  !rounded-full font-medium dark:hover:bg-black/20 dark:text-textmuted dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                >
                  <i className="bx bx-fullscreen full-screen-open header-link-icon"></i>
                  <i className="bx bx-exit-fullscreen full-screen-close header-link-icon hidden"></i>
                </a>
              </div>

              <div className="header-element header-sidebar !hidden md:!flex">
                <a
                  href="javascript:void(0);"
                  className="header-link hs-dropdown-toggle"
                  data-hs-overlay="#hs-overlay-chat"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="header-link-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </a>
              </div>

              <div className="header-element md:!px-[0.5rem] px-2 hs-dropdown profile-dropdown !items-center ti-dropdown [--placement:bottom-left]">
                <button
                  id="dropdown-profile"
                  type="button"
                  className="hs-dropdown-toggle ti-dropdown-toggle !gap-2 !p-0 flex-shrink-0 me-0 !rounded-full !shadow-none text-xs align-middle !border-0 !shadow-transparent "
                >
                  <img
                    className="inline-block rounded-full "
                    src="/logo-full.jpeg"
                    width="37"
                    height="37"
                    alt="Image Description"
                  />
                </button>
                <div
                  className="main-header-dropdown !-mt-2 !p-0 hs-dropdown-menu ti-dropdown-menu  bg-white  !border-0 border-defaultborder hidden !m-0"
                  aria-labelledby="dropdown-profile"
                >
                  <ul
                    className="dropdown-menu pt-0 header-profile-dropdown dropdown-menu-end main-profile-menu"
                    aria-labelledby="mainHeaderProfile"
                  >
                    <li>
                      <div className="main-header-profile bg-primary menu-header-content text-white">
                        <div className="my-auto">
                          <h6 className="mb-0 leading-none text-white">
                            Petey Cruiser
                          </h6>
                          <span className="text-[.6875rem] opacity-[0.7] leading-none">
                            Premium Member
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-defaulttextcolor flex "
                        href="profile.html"
                      >
                        <i className="bx bx-user-circle text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-defaulttextcolor flex "
                        href="profile.html"
                      >
                        <i className="bx bx-cog text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Edit Profile{' '}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-defaulttextcolor flex  border-block-end"
                        href="mail.html"
                      >
                        <i className="bx bxs-inbox text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Inbox
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-defaulttextcolor flex "
                        href="chat.html"
                      >
                        <i className="bx bx-envelope text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Messages
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-defaulttextcolor flex  border-block-end"
                        href="profile.html"
                      >
                        <i className="bx bx-slider-alt text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Account Settings
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-defaulttextcolor !rounded-bl-md !rounded-br-md flex "
                        href="sign-in-basic.html"
                      >
                        <i className="bx bx-log-out text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="header-element px-[0.48rem]">
                <button
                  aria-label="button"
                  type="button"
                  className="hs-dropdown-toggle switcher-icon inline-flex flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium  align-middle transition-all text-xs dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                  data-hs-overlay="#hs-overlay-switcher"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="header-link-icon animate-spin-slow"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"></path>
                    <path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        id="hs-overlay-chat"
        className="hs-overlay hidden ti-offcanvas ti-offcanvas-right overflow-auto"
        tabIndex={-1}
      >
        <div className="ti-offcanvas-header !py-2 rounded-none">
          <h5
            className="text-[.875rem] uppercase mb-0 text-defaulttextcolor font-semibold"
            id="sidebarLabel"
          >
            Notifications
          </h5>
          <button
            type="button"
            className="ti-btn flex-shrink-0 p-0  transition-none text-defaulttextcolor dark:text-defaulttextcolor/70 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white  dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
            data-hs-overlay="#hs-overlay-chat"
          >
            <span className="sr-only">Close modal</span>
            <i className="ri-close-fill leading-none text-lg"></i>
          </button>
        </div>
        <div className="ti-offcanvas-body rounded-none p-0">
          <ul className="nav nav-tabs  p-4" role="tablist">
            <div
              className=" rtl:space-x-reverse"
              aria-label="Tabs"
              role="tablist"
            >
              <button
                type="button"
                className="hs-tab-active:bg-primary w-full mb-2 rounded-[4px] !py-[10px] !px-[16px] text-start hs-tab-active:border-b-transparent text-defaultsize border-0 hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-white  bg-light  font-semibold  text-defaulttextcolor dark:text-defaulttextcolor/70  hover:text-gray-700 dark:bg-bodybg2 dark:border-white/10  active"
                id="chat-item"
                data-hs-tab="#chat"
                aria-controls="chat"
                role="tab"
              >
                <i className="fe fe-message-circle text-[.9375rem] me-2 inline-flex"></i>
                Chat
              </button>
              <button
                type="button"
                className="hs-tab-active:bg-primary w-full mb-2  rounded-[4px] !py-[10px] !px-[16px] text-start hs-tab-active:border-b-transparent text-defaultsize border-0 hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-white   bg-light font-semibold  text-defaulttextcolor dark:text-defaulttextcolor/70  hover:text-gray-700 dark:bg-bodybg2 dark:border-white/10  dark:hover:text-gray-300"
                id="notification-item"
                data-hs-tab="#notification"
                aria-controls="notification"
                role="tab"
              >
                <i className="fe fe-bell text-[.9375rem] me-2 inline-flex"></i>{' '}
                Notifications
              </button>
              <button
                type="button"
                className="hs-tab-active:bg-primary w-full mb-0 rounded-[4px] !py-[10px] !px-[16px] text-start hs-tab-active:border-b-transparent text-defaultsize border-0 hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-white   bg-light font-semibold  text-defaulttextcolor dark:text-defaulttextcolor/70  hover:text-gray-700 dark:bg-bodybg2 dark:border-white/10  dark:hover:text-gray-300"
                id="friends-item"
                data-hs-tab="#friends"
                aria-controls="friends"
                role="tab"
              >
                <i className="fe fe-users text-[.9375rem] me-2 inline-flex"></i>
                Friends
              </button>
            </div>
          </ul>
          <div className="tab-content !border-0 ">
            <div
              className="tab-pane !text-defaulttextcolor dark:text-defaulttextcolor/70 !border-s-0 !border-e-0 !rounded-none !p-0 show border-defaultborder dark:border-defaultborder/10 "
              id="chat"
              role="tabpanel"
              aria-labelledby="chat-item"
            >
              <div className="list flex items-center border-b border-defaultborder dark:border-defaultborder/10  p-3">
                <div className="">
                  <span className="avatar bg-primary avatar-rounded avatar-md">
                    CH
                  </span>
                </div>
                <a className="w-full ms-3" href="javascript:void(0);">
                  <p className="mb-0 flex ">
                    <b>New Websites is Created</b>
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <i className="fa-regular fa-clock text-textmuted me-1 text-[.6875rem]"></i>
                      <small className="text-textmuted ms-auto">
                        30 mins ago
                      </small>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="list flex items-center border-b border-defaultborder dark:border-defaultborder/10  p-3">
                <div className="">
                  <span className="avatar bg-danger avatar-rounded avatar-md">
                    N
                  </span>
                </div>
                <a className="w-full ms-3" href="javascript:void(0);">
                  <p className="mb-0 flex ">
                    <b>Prepare For the Next Project</b>
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <i className="fa-regular fa-clock text-textmuted me-1 text-[.6875rem]"></i>
                      <small className="text-textmuted ms-auto">
                        2 hours ago
                      </small>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="list flex items-center border-b border-defaultborder dark:border-defaultborder/10  p-3">
                <div className="">
                  <span className="avatar bg-info avatar-rounded avatar-md">
                    S
                  </span>
                </div>
                <a className="w-full ms-3" href="javascript:void(0);">
                  <p className="mb-0 flex ">
                    <b>Decide the live Discussion</b>
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <i className="fa-regular fa-clock text-textmuted me-1 text-[.6875rem]"></i>
                      <small className="text-textmuted ms-auto">
                        3 hours ago
                      </small>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="list flex items-center border-b border-defaultborder dark:border-defaultborder/10  p-3">
                <div className="">
                  <span className="avatar bg-warning avatar-rounded avatar-md">
                    K
                  </span>
                </div>
                <a className="w-full ms-3" href="javascript:void(0);">
                  <p className="mb-0 flex ">
                    <b>Meeting at 3:00 pm</b>
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <i className="fa-regular fa-clock text-textmuted me-1 text-[.6875rem]"></i>
                      <small className="text-textmuted ms-auto">
                        4 hours ago
                      </small>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="list flex items-center border-b border-defaultborder dark:border-defaultborder/10  p-3">
                <div className="">
                  <span className="avatar bg-success avatar-rounded avatar-md">
                    R
                  </span>
                </div>
                <a className="w-full ms-3" href="javascript:void(0);">
                  <p className="mb-0 flex ">
                    <b>Prepare for Presentation</b>
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <i className="fa-regular fa-clock text-textmuted me-1 text-[.6875rem]"></i>
                      <small className="text-textmuted ms-auto">
                        1 day ago
                      </small>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="list flex items-center border-b border-defaultborder dark:border-defaultborder/10  p-3">
                <div className="">
                  <span className="avatar bg-pinkmain avatar-rounded avatar-md">
                    MS
                  </span>
                </div>
                <a className="w-full ms-3" href="javascript:void(0);">
                  <p className="mb-0 flex ">
                    <b>Prepare for Presentation</b>
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <i className="fa-regular fa-clock text-textmuted me-1 text-[.6875rem]"></i>
                      <small className="text-textmuted ms-auto">
                        1 day ago
                      </small>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="list flex items-center border-b border-defaultborder dark:border-defaultborder/10  p-3">
                <div className="">
                  <span className="avatar bg-purplemain avatar-rounded avatar-md">
                    L
                  </span>
                </div>
                <a className="w-full ms-3" href="javascript:void(0);">
                  <p className="mb-0 flex ">
                    <b>Prepare for Presentation</b>
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <i className="fa-regular fa-clock text-textmuted me-1 text-[.6875rem]"></i>
                      <small className="text-textmuted ms-auto">
                        45 minutes ago
                      </small>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="list flex border-b border-defaultborder dark:border-defaultborder/10 items-center p-3">
                <div className="">
                  <span className="avatar bg-indigomain avatar-rounded avatar-md">
                    U
                  </span>
                </div>
                <a className="w-full ms-3" href="javascript:void(0);">
                  <p className="mb-0 flex ">
                    <b>Prepare for Presentation</b>
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <i className="fa-regular fa-clock text-textmuted me-1 text-[.6875rem]"></i>
                      <small className="text-textmuted ms-auto">
                        2 days ago
                      </small>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="tab-pane !text-defaulttextcolor dark:text-defaulttextcolor/70 !border-s-0 !border-e-0 !rounded-none !p-0 border-defaultborder dark:border-defaultborder/10  hidden"
              id="notification"
              role="tabpanel"
              aria-labelledby="notification-item"
            >
              <div className="ti-list-group ti-list-group-flush ">
                <div className="ti-list-group-item !border-s-0 !border-e-0 !border-t-0 flex  items-center">
                  <span className="avatar avatar-lg online avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-3">
                    <strong>Madeleine</strong> Hey! there I' am available....
                    <div className="small text-textmuted">3 hours ago</div>
                  </div>
                </div>
                <div className="ti-list-group-item !border-s-0 !border-e-0 !border-t-0 flex  items-center">
                  <span className="avatar avatar-lg online avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-3">
                    <strong>Anthony</strong> New product Launching...
                    <div className="small text-textmuted">5 hour ago</div>
                  </div>
                </div>
                <div className="ti-list-group-item !border-s-0 !border-e-0 !border-t-0 flex  items-center">
                  <span className="avatar avatar-lg avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-3">
                    <strong>Olivia</strong> New Schedule Realease......
                    <div className="small text-textmuted">45 minutes ago</div>
                  </div>
                </div>
                <div className="ti-list-group-item !border-s-0 !border-e-0 !border-t-0 flex  items-center">
                  <span className="avatar avatar-lg avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-3">
                    <strong>Madeleine</strong> Hey! there I' am available....
                    <div className="small text-textmuted">3 hours ago</div>
                  </div>
                </div>
                <div className="ti-list-group-item !border-s-0 !border-e-0 !border-t-0 flex  items-center">
                  <span className="avatar avatar-lg avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-3">
                    <strong>Anthony</strong> New product Launching...
                    <div className="small text-textmuted">5 hour ago</div>
                  </div>
                </div>
                <div className="ti-list-group-item !border-s-0 !border-e-0 !border-t-0 flex  items-center">
                  <span className="avatar avatar-lg avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-3">
                    <strong>Olivia</strong> New Schedule Realease......
                    <div className="small text-textmuted">45 minutes ago</div>
                  </div>
                </div>
                <div className="ti-list-group-item  !border-b border-defaultborder dark:border-defaultborder/10 !border-s-0 !border-e-0 !border-t-0 flex  items-center">
                  <span className="avatar avatar-lg avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-3">
                    <strong>Olivia</strong> Hey! there I' am available....
                    <div className="small text-textmuted">12 minutes ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane !text-defaulttextcolor dark:text-defaulttextcolor/70 !border-s-0 !border-e-0 !rounded-none !p-0 border-defaultborder dark:border-defaultborder/10  active hidden"
              id="friends"
              role="tabpanel"
              aria-labelledby="friends-item"
            >
              <div className="ti-list-group ti-list-group-flush ">
                <div className="ti-list-group-item flex !border-t-0 items-center">
                  <span className="avatar avatar-md online avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-2">
                    <div className="font-semibold" data-hs-overlay="#chatmodel">
                      Mozelle Belt
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="ti-btn ti-btn-sm ti-btn-light"
                      data-hs-overlay="#chatmodel"
                    >
                      <i className="fab fa-facebook-messenger"></i>
                    </a>
                  </div>
                </div>
                <div className="ti-list-group-item flex  items-center">
                  <span className="avatar avatar-md avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-2">
                    <div className="font-semibold" data-hs-overlay="#chatmodel">
                      Florinda Carasco
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="ti-btn ti-btn-sm ti-btn-light"
                      data-hs-overlay="#chatmodel"
                    >
                      <i className="fab fa-facebook-messenger"></i>
                    </a>
                  </div>
                </div>
                <div className="ti-list-group-item flex  items-center">
                  <span className="avatar avatar-md avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-2">
                    <div className="font-semibold" data-hs-overlay="#chatmodel">
                      Alina Bernier
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="ti-btn ti-btn-sm ti-btn-light"
                      data-hs-overlay="#chatmodel"
                    >
                      <i className="fab fa-facebook-messenger"></i>
                    </a>
                  </div>
                </div>
                <div className="ti-list-group-item flex  items-center">
                  <span className="avatar avatar-md online avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-2">
                    <div className="font-semibold" data-hs-overlay="#chatmodel">
                      Zula Mclaughin
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="ti-btn ti-btn-sm ti-btn-light"
                      data-hs-overlay="#chatmodel"
                    >
                      <i className="fab fa-facebook-messenger"></i>
                    </a>
                  </div>
                </div>
                <div className="ti-list-group-item flex  items-center">
                  <span className="avatar avatar-md online avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-2">
                    <div className="font-semibold" data-hs-overlay="#chatmodel">
                      Isidro Heide
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="ti-btn ti-btn-sm ti-btn-light"
                      data-hs-overlay="#chatmodel"
                    >
                      <i className="fab fa-facebook-messenger"></i>
                    </a>
                  </div>
                </div>
                <div className="ti-list-group-item flex  items-center">
                  <span className="avatar avatar-md online avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-2">
                    <div className="font-semibold" data-hs-overlay="#chatmodel">
                      Mozelle Belt
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="ti-btn ti-btn-sm ti-btn-light"
                    >
                      <i className="fab fa-facebook-messenger"></i>
                    </a>
                  </div>
                </div>
                <div className="ti-list-group-item flex  items-center">
                  <span className="avatar avatar-md online avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-2">
                    <div className="font-semibold" data-hs-overlay="#chatmodel">
                      Florinda Carasco
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="ti-btn ti-btn-sm ti-btn-light"
                      data-hs-overlay="#chatmodel"
                    >
                      <i className="fab fa-facebook-messenger"></i>
                    </a>
                  </div>
                </div>
                <div className="ti-list-group-item flex  items-center">
                  <span className="avatar avatar-md online avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-2">
                    <div className="font-semibold" data-hs-overlay="#chatmodel">
                      Alina Bernier
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="ti-btn ti-btn-sm ti-btn-light"
                    >
                      <i className="fab fa-facebook-messenger"></i>
                    </a>
                  </div>
                </div>
                <div className="ti-list-group-item flex  items-center">
                  <span className="avatar avatar-md avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-2">
                    <div className="font-semibold" data-hs-overlay="#chatmodel">
                      Zula Mclaughin
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="ti-btn ti-btn-sm ti-btn-light"
                      data-hs-overlay="#chatmodel"
                    >
                      <i className="fab fa-facebook-messenger"></i>
                    </a>
                  </div>
                </div>
                <div className="ti-list-group-item flex  items-center">
                  <span className="avatar avatar-md online avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-2">
                    <div className="font-semibold" data-hs-overlay="#chatmodel">
                      Isidro Heide
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="ti-btn ti-btn-sm ti-btn-light"
                    >
                      <i className="fab fa-facebook-messenger"></i>
                    </a>
                  </div>
                </div>
                <div className="ti-list-group-item flex  items-center">
                  <span className="avatar avatar-md online avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-2">
                    <div className="font-semibold" data-hs-overlay="#chatmodel">
                      Florinda Carasco
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="ti-btn ti-btn-sm ti-btn-light"
                      data-hs-overlay="#chatmodel"
                    >
                      <i className="fab fa-facebook-messenger"></i>
                    </a>
                  </div>
                </div>
                <div className="ti-list-group-item flex  items-center">
                  <span className="avatar avatar-md online avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-2">
                    <div className="font-semibold" data-hs-overlay="#chatmodel">
                      Alina Bernier
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="ti-btn ti-btn-sm ti-btn-light"
                      data-hs-overlay="#chatmodel"
                    >
                      <i className="fab fa-facebook-messenger"></i>
                    </a>
                  </div>
                </div>
                <div className="ti-list-group-item flex  items-center">
                  <span className="avatar avatar-md online avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-2">
                    <div className="font-semibold" data-hs-overlay="#chatmodel">
                      Zula Mclaughin
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="ti-btn ti-btn-sm ti-btn-light"
                      data-hs-overlay="#chatmodel"
                    >
                      <i className="fab fa-facebook-messenger"></i>
                    </a>
                  </div>
                </div>
                <div className="ti-list-group-item flex !border-b border-defaultborder dark:border-defaultborder/10 items-center">
                  <span className="avatar avatar-md online avatar-rounded flex-shrink-0">
                    <img src="/logo-full.jpeg" alt="img" />
                  </span>
                  <div className="ms-2">
                    <div className="font-semibold" data-hs-overlay="#chatmodel">
                      Isidro Heide
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="ti-btn ti-btn-sm ti-btn-light"
                      data-hs-overlay="#chatmodel"
                    >
                      <i className="fab fa-facebook-messenger"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hs-overlay hidden ti-modal" id="chatmodel">
        <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
          <div className="ti-modal-content chat !border-0">
            <div className="box overflow-hidden !mb-0 !border-0 !shadow-none">
              <div className="action-header  flex items-center clearfix">
                <div className="float-start xs:hidden flex">
                  <div className="avatar avatar-lg rounded-circle me-3">
                    {' '}
                    <img
                      src="/logo-full.jpeg"
                      className="rounded-circle user_img"
                      alt="img"
                    />{' '}
                  </div>
                  <div className="items-center">
                    <h5 className="text-fixed-white mb-0">Daneil Scott</h5>{' '}
                    <span className="dot-label bg-success"></span>
                    <span className="me-3 text-fixed-white">online</span>
                  </div>
                </div>
                <ul className="ah-actions actions ms-auto items-center float-end">
                  <li className="call-icon">
                    {' '}
                    <a
                      href="#"
                      className="hidden md:block phone-button"
                      data-hs-overlay="#audiomodal"
                    >
                      {' '}
                      <i className="fe fe-phone"></i>{' '}
                    </a>{' '}
                  </li>
                  <li className="video-icon">
                    {' '}
                    <a
                      href="#"
                      className="hidden md:block phone-button"
                      data-hs-overlay="#videomodal"
                    >
                      {' '}
                      <i className="fe fe-video"></i>{' '}
                    </a>{' '}
                  </li>
                  <li className="hs-dropdown ti-dropdown">
                    <a href="#" data-bs-toggle="dropdown" aria-expanded="true">
                      {' '}
                      <i className="fe fe-more-vertical"></i>{' '}
                    </a>
                    <ul className="ti-dropdown-menu hs-dropdown-menu dropdown-menu-end hidden">
                      <li className="ti-dropdown-item">
                        <i className="fa fa-user-circle"></i> View profile
                      </li>
                      <li className="ti-dropdown-item">
                        <i className="fa fa-users"></i>Add friends
                      </li>
                      <li className="ti-dropdown-item">
                        <i className="fa fa-plus"></i> Add to group
                      </li>
                      <li className="ti-dropdown-item">
                        <i className="fa fa-ban"></i> Block
                      </li>
                    </ul>
                  </li>
                  <li>
                    {' '}
                    <a
                      href=""
                      className=""
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      {' '}
                      <i className="fe fe-x-circle text-fixed-white"></i>{' '}
                    </a>{' '}
                  </li>
                </ul>
              </div>
              <div className="box-body msg_card_body">
                <div className="chat-box-single-line">
                  {' '}
                  <abbr className="timestamp !text-defaulttextcolor dark:!text-defaulttextcolor/70">
                    February 1st, 2019
                  </abbr>{' '}
                </div>
                <div className="flex justify-start">
                  <div className="img_cont_msg">
                    {' '}
                    <img
                      src="/logo-full.jpeg"
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />{' '}
                  </div>
                  <div className="msg_cotainer">
                    {' '}
                    Hi, how are you Jenna Side?{' '}
                    <span className="msg_time">8:40 AM, Today</span>{' '}
                  </div>
                </div>
                <div className="flex justify-end ">
                  <div className="msg_cotainer_send">
                    {' '}
                    Hi Connor Paige i am good tnx how about you?{' '}
                    <span className="msg_time_send">8:55 AM, Today</span>{' '}
                  </div>
                  <div className="img_cont_msg">
                    {' '}
                    <img
                      src="/logo-full.jpeg"
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />{' '}
                  </div>
                </div>
                <div className="flex justify-start ">
                  <div className="img_cont_msg">
                    {' '}
                    <img
                      src="/logo-full.jpeg"
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />{' '}
                  </div>
                  <div className="msg_cotainer">
                    {' '}
                    I am good too, thank you for your chat template{' '}
                    <span className="msg_time">9:00 AM, Today</span>{' '}
                  </div>
                </div>
                <div className="flex justify-end ">
                  <div className="msg_cotainer_send">
                    {' '}
                    You welcome Connor Paige{' '}
                    <span className="msg_time_send">9:05 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    {' '}
                    <img
                      src="/logo-full.jpeg"
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />{' '}
                  </div>
                </div>
                <div className="flex justify-start ">
                  <div className="img_cont_msg">
                    {' '}
                    <img
                      src="/logo-full.jpeg"
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />{' '}
                  </div>
                  <div className="msg_cotainer">
                    {' '}
                    Yo, Can you update Views?{' '}
                    <span className="msg_time">9:07 AM, Today</span>{' '}
                  </div>
                </div>
                <div className="flex justify-end mb-4">
                  <div className="msg_cotainer_send">
                    {' '}
                    But I must explain to you how all this mistaken born and I
                    will give{' '}
                    <span className="msg_time_send">9:10 AM, Today</span>{' '}
                  </div>
                  <div className="img_cont_msg">
                    {' '}
                    <img
                      src="/logo-full.jpeg"
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />{' '}
                  </div>
                </div>
                <div className="flex justify-start ">
                  <div className="img_cont_msg">
                    {' '}
                    <img
                      src="/logo-full.jpeg"
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />{' '}
                  </div>
                  <div className="msg_cotainer">
                    {' '}
                    Yo, Can you update Views?{' '}
                    <span className="msg_time">9:07 AM, Today</span>{' '}
                  </div>
                </div>
                <div className="flex justify-end mb-4">
                  <div className="msg_cotainer_send">
                    {' '}
                    But I must explain to you how all this mistaken born and I
                    will give{' '}
                    <span className="msg_time_send">9:10 AM, Today</span>{' '}
                  </div>
                  <div className="img_cont_msg">
                    {' '}
                    <img
                      src="/logo-full.jpeg"
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />{' '}
                  </div>
                </div>
                <div className="flex justify-start ">
                  <div className="img_cont_msg">
                    {' '}
                    <img
                      src="/logo-full.jpeg"
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />{' '}
                  </div>
                  <div className="msg_cotainer">
                    {' '}
                    Yo, Can you update Views?{' '}
                    <span className="msg_time">9:07 AM, Today</span>{' '}
                  </div>
                </div>
                <div className="flex justify-end mb-4">
                  <div className="msg_cotainer_send">
                    {' '}
                    But I must explain to you how all this mistaken born and I
                    will give{' '}
                    <span className="msg_time_send">9:10 AM, Today</span>{' '}
                  </div>
                  <div className="img_cont_msg">
                    {' '}
                    <img
                      src="/logo-full.jpeg"
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />{' '}
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="img_cont_msg">
                    {' '}
                    <img
                      src="/logo-full.jpeg"
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />{' '}
                  </div>
                  <div className="msg_cotainer">
                    {' '}
                    Okay Bye, text you later..{' '}
                    <span className="msg_time">9:12 AM, Today</span>{' '}
                  </div>
                </div>
              </div>
              <div className="box-footer border-t">
                <div className="msb-reply flex">
                  <div className="input-group">
                    {' '}
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Typing...."
                    />{' '}
                    <button
                      type="button"
                      className="ti-btn ti-btn-primary-full !mb-0"
                    >
                      {' '}
                      <i
                        className="far fa-paper-plane"
                        aria-hidden="true"
                      ></i>{' '}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="videomodal" className="hs-overlay hidden ti-modal">
        <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
          <div className="ti-modal-content !bg-[#3b4863] !border-0">
            <div className="mx-auto text-center p-[3rem]">
              <button
                type="button"
                className="hs-dropdown-toggle relative -end-[226px] -top-[29px] !text-[1.5rem] !font-medium text-white"
                data-hs-overlay="#videomodal"
              >
                <span className="sr-only">Close</span>
                <i className="bi bi-x"></i>
              </button>
              <h5 className="text-white">Valex Video call</h5>
              <img
                src="/logo-full.jpeg"
                className="rounded-full !h-[90px]  mt-4 mb-3 inline-flex"
                alt="img"
              />
              <h4 className="mb-1 font-semibold text-white">Daneil Scott</h4>
              <h6 className="loading animate-loadingtext text-white">
                Calling...
              </h6>
              <div className="mt-[3rem] mb-[2rem]">
                <div className="grid grid-cols-12 gap-x-4">
                  <div className="col-span-4">
                    <a
                      className="icon icon-shape rounded-full mb-0"
                      href="javascript:void(0);"
                    >
                      <i className="fas fa-video-slash"></i>
                    </a>
                  </div>
                  <div className="col-span-4">
                    <a
                      className="icon icon-shape rounded-full text-white mb-0"
                      href="javascript:void(0);"
                      data-hs-overlay="#videomodal"
                    >
                      <i className="fas fa-phone !bg-danger !text-white"></i>
                    </a>
                  </div>
                  <div className="col-span-4">
                    <a
                      className="icon icon-shape rounded-full mb-0"
                      href="javascript:void(0);"
                    >
                      <i className="fas fa-microphone-slash"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="audiomodal" className="hs-overlay hidden ti-modal">
        <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
          <div className="ti-modal-content border-0">
            <div className="mx-auto text-center p-[3rem]">
              <button
                type="button"
                className="hs-dropdown-toggle relative -end-[226px] -top-[29px] !text-[1.5rem] !font-medium text-[#8c9097]"
                data-hs-overlay="#audiomodal"
              >
                <span className="sr-only">Close</span>
                <i className="bi bi-x"></i>
              </button>
              <h6 className="text-defaulttextcolor dark:text-defaulttextcolor/70">
                Valex Voice call
              </h6>
              <img
                src="/logo-full.jpeg"
                className="rounded-full !h-[90px] mt-6 mb-4 inline-flex"
                alt="img"
              />
              <h5 className="mb-1 font-medium text-defaulttextcolor dark:text-defaulttextcolor/70">
                Daneil Scott
              </h5>
              <h6 className="loading animate-loadingtext text-defaulttextcolor dark:text-defaulttextcolor/70">
                Calling...
              </h6>
              <div className="mt-[2rem] mb-[2rem]">
                <div className="grid grid-cols-12 gap-x-4">
                  <div className="col-span-4">
                    <a
                      className="icon icon-shape rounded-circle mb-0"
                      href="javascript:void(0);"
                    >
                      <i className="fas fa-volume-up !bg-light !text-defaulttextcolor"></i>
                    </a>
                  </div>
                  <div className="col-span-4">
                    <a
                      className="icon icon-shape rounded-circle text-white mb-0"
                      href="javascript:void(0);"
                      data-hs-overlay="#audiomodal"
                    >
                      <i className="fas fa-phone text-white !bg-success"></i>
                    </a>
                  </div>
                  <div className="col-span-4">
                    <a
                      className="icon icon-shape  rounded-circle mb-0"
                      href="javascript:void(0);"
                    >
                      <i className="fas fa-microphone-slash !bg-light !text-defaulttextcolor"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
