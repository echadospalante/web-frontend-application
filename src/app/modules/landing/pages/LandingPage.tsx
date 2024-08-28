const LandingPage = () => {
  return (
    <body className="landing-body">
      {/* <div
        id="hs-overlay-switcher"
        className="hs-overlay hidden ti-offcanvas ti-offcanvas-right"
        tabIndex={-1}
      >
        <div className="ti-offcanvas-header">
          <h5 className="ti-offcanvas-title">Switcher</h5>
          <button
            type="button"
            className="ti-btn flex-shrink-0 p-0 transition-none text-defaulttextcolor dark:text-defaulttextcolor/70 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white  dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
            data-hs-overlay="#hs-overlay-switcher"
          >
            <span className="sr-only">Close modal</span>
            <i className="ri-close-circle-line leading-none text-lg"></i>
          </button>
        </div>
        <div className="ti-offcanvas-body" id="switcher-body">
          <div>
            <div>
              <p className="switcher-style-head">Theme Color Mode:</p>
              <div className="grid grid-cols-3 gap-x-6 switcher-style">
                <div className="flex">
                  <input
                    type="radio"
                    name="theme-style"
                    className="ti-form-radio"
                    id="switcher-light-theme"
                    checked
                  />
                  <label
                    htmlFor="switcher-light-theme"
                    className="text-xs text-defaulttextcolor dark:text-defaulttextcolor/70 font-semibold ltr:ml-2 rtl:mr-2 "
                  >
                    Light
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    name="theme-style"
                    className="ti-form-radio"
                    id="switcher-dark-theme"
                  />
                  <label
                    htmlFor="switcher-dark-theme"
                    className="text-xs text-defaulttextcolor dark:text-defaulttextcolor/70 font-semibold ltr:ml-2 rtl:mr-2 "
                  >
                    Dark
                  </label>
                </div>
              </div>
            </div>
            <div>
              <p className="switcher-style-head">Directions:</p>
              <div className="grid grid-cols-3 gap-x-6 switcher-style">
                <div className="flex">
                  <input
                    type="radio"
                    name="direction"
                    className="ti-form-radio"
                    id="switcher-ltr"
                    checked
                  />
                  <label
                    htmlFor="switcher-ltr"
                    className="text-xs font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70 ltr:ml-2 rtl:mr-2 "
                  >
                    LTR
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    name="direction"
                    className="ti-form-radio"
                    id="switcher-rtl"
                  />
                  <label
                    htmlFor="switcher-rtl"
                    className="text-xs font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70 ltr:ml-2 rtl:mr-2 "
                  >
                    RTL
                  </label>
                </div>
              </div>
            </div>
            <div className="theme-colors">
              <p className="switcher-style-head">Theme Primary:</p>
              <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                <div className="ti-form-radio switch-select">
                  <input
                    className="ti-form-radio color-input color-primary-1"
                    type="radio"
                    name="theme-primary"
                    id="switcher-primary"
                    checked
                  />
                </div>
                <div className="ti-form-radio switch-select">
                  <input
                    className="ti-form-radio color-input color-primary-2"
                    type="radio"
                    name="theme-primary"
                    id="switcher-primary1"
                  />
                </div>
                <div className="ti-form-radio switch-select">
                  <input
                    className="ti-form-radio color-input color-primary-3"
                    type="radio"
                    name="theme-primary"
                    id="switcher-primary2"
                  />
                </div>
                <div className="ti-form-radio switch-select">
                  <input
                    className="ti-form-radio color-input color-primary-4"
                    type="radio"
                    name="theme-primary"
                    id="switcher-primary3"
                  />
                </div>
                <div className="ti-form-radio switch-select">
                  <input
                    className="ti-form-radio color-input color-primary-5"
                    type="radio"
                    name="theme-primary"
                    id="switcher-primary4"
                  />
                </div>
                <div className="ti-form-radio switch-select ltr:pl-0 rtl:pr-0 mt-1 color-primary-light">
                  <div className="theme-container-primary"></div>
                  <div className="pickr-container-primary"></div>
                </div>
              </div>
            </div>
            <div>
              <p className="switcher-style-head">Reset:</p>
              <div className="flex justify-center">
                <a
                  id="reset-all"
                  className="ti-btn ti-btn-danger-full mt-4"
                  href="javascript:void(0);"
                >
                  Reset
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="landing-page-wrapper relative">
        <div className="main-content !p-0 landing-main dark:text-defaulttextcolor/70">
          <div className="landing-banner" id="home">
            <section className="section !pt-[6rem]">
              <div className="container main-banner-container !pt-3 sm:!pt-[6rem]">
                <div className="grid grid-cols-12 gap-x-6">
                  <div className="xxl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-1"></div>
                  <div className="xxl:col-span-8 xl:col-span-8 lg:col-span-8 md:col-span-8 col-span-10">
                    <div className="py-4 pb-lg-0 text-center">
                      <div className="mb-3">
                        <h5 className="font-semibold text-fixed-white op-9">
                          Manage Your Business
                        </h5>
                      </div>
                      <p className="landing-banner-heading mb-3 cursor-default">
                        Build Your Dream Project with Valex !
                      </p>
                      <div className="fs-16 mb-5 text-fixed-white op-7">
                        {' '}
                        Valex - Now you can use this admin template to design
                        stunning dashboards that will wow your target viewers or
                        users to no end. To create a good and well-structured
                        dashboard, you need to start from scratch with HTML,
                        SCSS, CSS, and JS and with lots of coding, but by using
                        this Valex-Admin template.
                      </div>
                      <a
                        href="index.html"
                        className="m-1 ti-btn ti-btn-primary-full"
                      >
                        Discover More
                        <i className="fe fe-eye ms-2 align-middle"></i>
                      </a>
                      <a
                        href="index.html"
                        className="m-1 ti-btn ti-btn-info-full"
                      >
                        Get Started
                        <i className="fe fe-arrow-right rtl:rotate-180 ms-2 rtl:ms-0 align-middle"></i>
                      </a>
                    </div>
                  </div>
                  <div className="xxl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-1"></div>
                </div>
              </div>
            </section>
          </div>

          <section
            className="section text-defaulttextcolor dark:text-defaulttextcolor/70  section-bg "
            id="features"
          >
            <div className="container text-center position-relative">
              <p className="text-[0.75rem] font-semibold text-success mb-1">
                <span className="landing-section-heading">Features</span>
              </p>
              <div className="landing-title"></div>
              <h3 className="font-semibold mb-2">Valex Main Features</h3>
              <div className="row justify-content-center">
                <div className="col-xl-7">
                  <p className="text-textmuted fs-15 mb-5 font-normal">
                    We are proud to have top class clients and customers,which
                    motivates us to work more on projects.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-x-6 justify-center">
                <div className="xl:col-span-12 col-span-12">
                  <div className="grid grid-cols-12 gap-x-6 justify-evenly">
                    <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 mb-4">
                      <div
                        className="card rounded-sm bg-white dark:bg-bodybg features main-features main-features-4 p-6 active"
                        data-wow-delay="0.1s"
                      >
                        <div className="bg-img mb-2">
                          <svg
                            width="50"
                            className="inline-flex"
                            height="50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 128 128"
                          >
                            <circle
                              cx="64"
                              cy="64"
                              r="64"
                              fill="#42A3DB"
                            ></circle>
                            <path
                              fill="#347CBE"
                              d="M85.5 26.6 66.1 61 33.3 98.6 62.6 128H64c33.7 0 61.3-26 63.8-59.1L85.5 26.6z"
                            ></path>
                            <path
                              fill="#CD2F30"
                              d="M73.1 57.7h-16c3.6 18.7 11.1 36.6 22.1 52.5.3-5 1-9.8 1.8-14.5 4.6 1.3 9.2 2.3 13.7 3-9.7-12.2-17-26.1-21.6-41z"
                            ></path>
                            <path
                              fill="#F04D45"
                              d="M54.9 57.7c-4.6 15-11.9 28.9-21.6 40.9 4.5-.7 9.1-1.7 13.7-3 .9 4.7 1.5 9.5 1.8 14.5 11-15.9 18.4-33.8 22.1-52.5h-16z"
                            ></path>
                            <path
                              fill="#FFF"
                              d="M93.5 52c1.8-1.8 1.8-4.7 0-6.5-1.3-1.3-1.7-3.3-1-5 1-2.4-.1-5-2.5-6-1.7-.7-2.8-2.4-2.8-4.3 0-2.5-2.1-4.6-4.6-4.6-1.9 0-3.5-1.1-4.3-2.8-1-2.4-3.7-3.5-6-2.5-1.7.7-3.7.3-5-1-1.8-1.8-4.7-1.8-6.5 0-1.3 1.3-3.3 1.7-5 1-2.4-1-5 .1-6 2.5-.7 1.7-2.4 2.8-4.3 2.8-2.5 0-4.6 2.1-4.6 4.6 0 1.9-1.1 3.5-2.8 4.3-2.4 1-3.5 3.7-2.5 6 .7 1.7.3 3.7-1 5-1.8 1.8-1.8 4.7 0 6.5 1.3 1.3 1.7 3.3 1 5-1 2.4.1 5 2.5 6 1.7.7 2.8 2.4 2.8 4.3 0 2.5 2.1 4.6 4.6 4.6 1.9 0 3.5 1.1 4.3 2.8 1 2.4 3.7 3.5 6 2.5 1.7-.7 3.7-.3 5 1 1.8 1.8 4.7 1.8 6.5 0 1.3-1.3 3.3-1.7 5-1 2.4 1 5-.1 6-2.5.7-1.7 2.4-2.8 4.3-2.8 2.5 0 4.6-2.1 4.6-4.6 0-1.9 1.1-3.5 2.8-4.3 2.4-1 3.5-3.7 2.5-6-.7-1.7-.3-3.7 1-5z"
                            ></path>
                            <path
                              fill="#FFCD0A"
                              d="M64 70.8c-12.2 0-22.1-9.9-22.1-22.1 0-12.2 9.9-22.1 22.1-22.1 12.2 0 22.1 9.9 22.1 22.1 0 12.2-9.9 22.1-22.1 22.1z"
                            ></path>
                            <path
                              fill="#FFF"
                              d="M59.9 61c-.6 0-1.1-.2-1.5-.7l-8.3-9.2c-.7-.8-.7-2.1.1-2.8.8-.7 2.1-.7 2.8.1l6.7 7.5 15.1-18.8c.7-.9 2-1 2.8-.3.9.7 1 2 .3 2.8L61.4 60.2c-.3.5-.9.8-1.5.8z"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-bold">
                            Quality &amp; Clean Code
                          </h5>
                          <p className="mb-0">
                            The Valex admin code is maintained very cleanly and
                            well-structured with proper comments.{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 mb-4">
                      <div className="card rounded-sm bg-white dark:bg-bodybg features main-features main-features-2 wow p-6">
                        <div className="bg-img mb-2">
                          <svg
                            width="50"
                            className="inline-flex"
                            height="50"
                            xmlns="http://www.w3.org/2000/svg"
                            enable-background="new 0 0 128 128"
                            viewBox="0 0 128 128"
                          >
                            <circle
                              cx="64"
                              cy="64"
                              r="63.5"
                              fill="#54C0EB"
                            ></circle>
                            <path
                              fill="#84DBFF"
                              d="M19.2,109c11.5,11.4,27.3,18.5,44.8,18.5c17.5,0,33.3-7.1,44.8-18.5H19.2z"
                            ></path>
                            <rect
                              width="19.6"
                              height="10.4"
                              x="54.2"
                              y="92.7"
                              fill="#FFF"
                            ></rect>
                            <rect
                              width="19.6"
                              height="2.3"
                              x="54.2"
                              y="92.7"
                              fill="#E6E9EE"
                            ></rect>
                            <path
                              fill="#E6E9EE"
                              d="M82.2,109H45.8l0,0c0-3.3,2.7-6,6-6h24.4C79.5,103.1,82.2,105.7,82.2,109L82.2,109z"
                            ></path>
                            <path
                              fill="#324A5E"
                              d="M103,92.7H25c-2.4,0-4.4-2-4.4-4.4V34.7c0-2.4,2-4.4,4.4-4.4h78c2.4,0,4.4,2,4.4,4.4v53.7   C107.4,90.7,105.4,92.7,103,92.7z"
                            ></path>
                            <path
                              fill="#FFF"
                              d="M20.6,84v4.4c0,2.4,1.9,4.3,4.3,4.3H103c2.4,0,4.3-1.9,4.3-4.3V84H20.6z"
                            ></path>
                            <rect
                              width="80.3"
                              height="46.9"
                              x="23.9"
                              y="33.4"
                              fill="#FFF"
                            ></rect>
                            <circle
                              cx="100.3"
                              cy="88.3"
                              r="2"
                              fill="#FF7058"
                            ></circle>
                            <circle
                              cx="94.7"
                              cy="88.3"
                              r="2"
                              fill="#4CDBC4"
                            ></circle>
                            <circle
                              cx="89.1"
                              cy="88.3"
                              r="2"
                              fill="#54C0EB"
                            ></circle>
                            <rect
                              width="9.7"
                              height="27.7"
                              x="32.3"
                              y="46.7"
                              fill="#ACB3BA"
                            ></rect>
                            <rect
                              width="9.7"
                              height="15.8"
                              x="45.7"
                              y="58.7"
                              fill="#4CDBC4"
                            ></rect>
                            <rect
                              width="9.7"
                              height="23.1"
                              x="59.1"
                              y="51.3"
                              fill="#FFD05B"
                            ></rect>
                            <rect
                              width="9.7"
                              height="35.7"
                              x="72.6"
                              y="38.7"
                              fill="#84DBFF"
                            ></rect>
                            <rect
                              width="9.7"
                              height="8.1"
                              x="86"
                              y="66.3"
                              fill="#FF7058"
                            ></rect>
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-bold">Multiple Demos</h5>
                          <p className="mb-0">
                            {' '}
                            We included multiple demos, preview video, and
                            screen shots to give a quick overview of our Valex
                            admin template.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 mb-4">
                      <div className="card rounded-sm bg-white dark:bg-bodybg features main-features main-features-3 wow p-6">
                        <div className="bg-img mb-2">
                          <svg
                            width="50"
                            className="inline-flex"
                            height="50"
                            xmlns="http://www.w3.org/2000/svg"
                            enable-background="new 0 0 128 128"
                            viewBox="0 0 128 128"
                          >
                            <circle
                              cx="64"
                              cy="64"
                              r="63.5"
                              fill="#54C0EB"
                            ></circle>
                            <path
                              fill="#FFF"
                              d="M42.2,96H23.6c-1.6,0-2.8-1.3-2.8-2.8V34.8c0-1.6,1.3-2.8,2.8-2.8h18.6c1.6,0,2.8,1.3,2.8,2.8v58.3   C45.1,94.7,43.8,96,42.2,96z"
                            ></path>
                            <rect
                              width="18.7"
                              height="36.8"
                              x="23.6"
                              y="35.8"
                              fill="#4CDBC4"
                            ></rect>
                            <circle
                              cx="32.9"
                              cy="83.9"
                              r="7.2"
                              fill="#E6E9EE"
                            ></circle>
                            <circle
                              cx="32.9"
                              cy="83.9"
                              r="5"
                              fill="#324A5E"
                            ></circle>
                            <path
                              fill="#FFF"
                              d="M68.8,96H50.2c-1.6,0-2.8-1.3-2.8-2.8V34.8c0-1.6,1.3-2.8,2.8-2.8h18.6c1.6,0,2.8,1.3,2.8,2.8v58.3   C71.6,94.7,70.4,96,68.8,96z"
                            ></path>
                            <rect
                              width="18.7"
                              height="36.8"
                              x="50.1"
                              y="35.8"
                              fill="#FF7058"
                            ></rect>
                            <circle
                              cx="59.5"
                              cy="83.9"
                              r="7.2"
                              fill="#E6E9EE"
                            ></circle>
                            <circle
                              cx="59.5"
                              cy="83.9"
                              r="5"
                              fill="#324A5E"
                            ></circle>
                            <path
                              fill="#FFF"
                              d="M109,92.7l-18,4.6c-1.5,0.4-3.1-0.5-3.5-2.1L73.2,38.7c-0.4-1.5,0.5-3.1,2.1-3.5l18-4.6   c1.5-0.4,3.1,0.5,3.5,2.1l14.3,56.5C111.5,90.8,110.6,92.4,109,92.7z"
                            ></path>
                            <rect
                              width="18.7"
                              height="36.8"
                              x="80.4"
                              y="36.1"
                              fill="#FFD05B"
                              transform="rotate(-14.193 89.778 54.551)"
                            ></rect>
                            <circle
                              cx="97"
                              cy="83.2"
                              r="7.2"
                              fill="#E6E9EE"
                            ></circle>
                            <circle
                              cx="97"
                              cy="83.2"
                              r="5"
                              fill="#324A5E"
                            ></circle>
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-bold">Widgets</h5>
                          <p className="mb-0">
                            {' '}
                            30+ widgets are included in this template. Please
                            check out the best option that suits you.{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 mb-4">
                      <div className="card rounded-sm bg-white dark:bg-bodybg features main-features main-features-4 wow fadeInUp reveal revealleft p-6">
                        <div className="bg-img mb-2">
                          <svg
                            width="50"
                            className="inline-flex"
                            height="50"
                            xmlns="http://www.w3.org/2000/svg"
                            enable-background="new 0 0 128 128"
                            viewBox="0 0 128 128"
                          >
                            <circle
                              cx="64"
                              cy="64"
                              r="63.5"
                              fill="#FFD05B"
                            ></circle>
                            <path
                              fill="#FFF"
                              d="M30,103.8l0-79.7c0-1.8,1.5-3.3,3.3-3.3h50.1l0,11.4c0,1.8,1.5,3.3,3.3,3.3H98l0,68.3   c0,1.8-1.5,3.3-3.3,3.3H33.3C31.5,107.1,30,105.6,30,103.8z"
                            ></path>
                            <path
                              fill="#E6E9EE"
                              d="M83.3,20.9h11.4c1.8,0,3.3,1.5,3.3,3.3l0,11.4H86.6c-1.8,0-3.3-1.5-3.3-3.3L83.3,20.9z"
                            ></path>
                            <path
                              fill="#CED5E0"
                              d="M83.3,20.9h11.4c1.8,0,3.3,1.5,3.3,3.3l0,11.4L83.3,20.9z"
                            ></path>
                            <rect
                              width="54.6"
                              height="2.4"
                              x="36.7"
                              y="50.7"
                              fill="#E6E9EE"
                            ></rect>
                            <rect
                              width="54.6"
                              height="2.4"
                              x="36.7"
                              y="58.2"
                              fill="#E6E9EE"
                            ></rect>
                            <rect
                              width="54.6"
                              height="2.4"
                              x="36.7"
                              y="65.8"
                              fill="#E6E9EE"
                            ></rect>
                            <rect
                              width="54.6"
                              height="2.4"
                              x="36.7"
                              y="73.4"
                              fill="#E6E9EE"
                            ></rect>
                            <rect
                              width="23.5"
                              height="2.4"
                              x="67.8"
                              y="80.9"
                              fill="#84DBFF"
                            ></rect>
                            <rect
                              width="23.5"
                              height="2.4"
                              x="67.8"
                              y="88.5"
                              fill="#84DBFF"
                            ></rect>
                            <rect
                              width="54.6"
                              height="2.4"
                              x="36.7"
                              y="43.1"
                              fill="#E6E9EE"
                            ></rect>
                            <rect
                              width="29.6"
                              height="2.4"
                              x="36.7"
                              y="35.6"
                              fill="#84DBFF"
                            ></rect>
                            <path
                              fill="#FF7058"
                              d="M41.1,83.3c-4.4,4.4-4.4,11.5,0,15.9s11.5,4.4,15.9,0c4.4-4.4,4.4-11.5,0-15.9   C52.6,78.9,45.5,78.9,41.1,83.3z M41.9,84.1c3.4-3.4,8.7-3.8,12.6-1.3l-1.6,1.6c-3-1.7-6.9-1.3-9.5,1.2c-2.6,2.6-3,6.5-1.2,9.5   l-1.6,1.6C38.1,92.8,38.5,87.5,41.9,84.1z M43.1,94.3c-1.3-2.5-0.9-5.7,1.2-7.7c2.1-2.1,5.2-2.5,7.7-1.2L43.1,94.3z M54.9,88.2   c1.3,2.5,0.9,5.7-1.2,7.7c-2.1,2.1-5.2,2.5-7.7,1.2L54.9,88.2z M56.1,98.3c-3.4,3.4-8.7,3.8-12.6,1.3l1.6-1.6   c3,1.7,6.9,1.3,9.5-1.2c2.6-2.6,3-6.5,1.2-9.5l1.6-1.6C60,89.6,59.5,94.9,56.1,98.3z"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-bold">Validation Forms</h5>
                          <p className="mb-0">
                            {' '}
                            Different types of “Form Validation” are implemented
                            in this Valex admin template and used strict
                            validation rules.{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section landing-Features text-defaulttextcolor dark:text-defaulttextcolor/70 "
            id="features"
          >
            <div className="container text-center">
              <p className="text-[0.75rem] font-semibold text-success mb-1">
                <span className="landing-section-heading">Features</span>
              </p>
              <h3 className="font-semibold mb-2 !text-white">
                Features Used in Valex
              </h3>
              <div>
                <div className="xl:col-span-7 col-span-12">
                  <p className="text-white opacity-[0.8] text-[0.9375rem] mb-4 font-normal">
                    Some of the reviews our clients gave which brings motivation
                    to work for future projects.
                  </p>
                </div>
              </div>
              <div className="text-start">
                <div className="justify-center">
                  <div className="">
                    <div className="feature-logos sm:mt-[3rem] flex-wrap">
                      <div className="sm:ms-[3rem] ms-2 text-center">
                        <img
                          src="/logo-full.jpeg"
                          alt="image"
                          className="featur-icon w-[200px]"
                        />
                        <h5 className="mt-3 text-white text-[1.25rem] ">
                          Tailwind
                        </h5>
                      </div>
                      <div className="sm:ms-[3rem] ms-2 text-center">
                        <img
                          src="/logo-full.jpeg"
                          alt="image"
                          className="featur-icon w-[200px]"
                        />
                        <h5 className="mt-3 text-white text-[1.25rem] ">
                          HTML5
                        </h5>
                      </div>
                      <div className="sm:ms-[3rem] ms-2 text-center">
                        <img
                          src="/logo-full.jpeg"
                          alt="image"
                          className="featur-icon w-[200px]"
                        />
                        <h5 className="mt-3 text-white text-[1.25rem] ">
                          Sass
                        </h5>
                      </div>
                      <div className="sm:ms-[3rem] ms-2 text-center">
                        <img
                          src="/logo-full.jpeg"
                          alt="image"
                          className="featur-icon w-[200px]"
                        />
                        <h5 className="ms-3 text-white text-[1.25rem] ">
                          Gulp
                        </h5>
                      </div>
                      <div className="sm:ms-[3rem] ms-2 text-center">
                        <img
                          src="/logo-full.jpeg"
                          alt="image"
                          className="featur-icon w-[200px]"
                        />
                        <h5 className="ms-3 text-white text-[1.25rem] ">NPM</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination mt-4"></div>
              </div>
            </div>
          </section>

          <section
            className="section bg-white dark:bg-bodybg text-defaulttextcolor dark:text-defaulttextcolor/70 "
            id="about"
          >
            <div className="container text-center">
              <p className="text-[0.75rem] font-semibold text-success mb-1">
                <span className="landing-section-heading">Our Mission</span>
              </p>
              <div className="landing-title"></div>
              <h3 className="font-semibold mb-2">
                {' '}
                Our mission is to make work meaningful.{' '}
              </h3>
              <p className="text-textmuted fs-15 mb-3 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut est
                dui, rutrum in nulla eu,
              </p>
              <div className="grid grid-cols-12 justify-center items-center mx-0">
                <div className="xxl:col-span-5 xl:col-span-5 lg:col-span-5 col-span-12 text-center">
                  <img
                    src="/logo-full.jpeg"
                    alt=""
                    className="img-fluid inline-flex"
                  />
                </div>
                <div className="xxl:col-span-7 xl:col-span-7 lg:col-span-7 col-span-12 pt-5 pb-0 px-lg-2 px-5 text-start">
                  <h4 className="text-lg-start font-medium mb-4">
                    We are a creative agency with a passion for design.{' '}
                  </h4>
                  <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-12">
                      <div className="flex mb-2">
                        <span>
                          <i className="bx bxs-badge-check text-primary text-[1.125rem]"></i>
                        </span>
                        <div className="ms-2">
                          <h6 className="font-medium mb-0">
                            Quality & Clean Code{' '}
                          </h6>
                          <p className=" text-textmuted mb-3">
                            {' '}
                            The Valex admin code is maintained very cleanly and
                            well-structured with proper comments.{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-12">
                      <div className="flex mb-2">
                        <span>
                          <i className="bx bxs-badge-check text-primary text-[1.125rem]"></i>
                        </span>
                        <div className="ms-2">
                          <h6 className="font-medium mb-0">Well Documented</h6>
                          <p className=" text-textmuted mb-3">
                            {' '}
                            The documentation provides clear-cut material for
                            the Valex admin template. The documentation is
                            explained or instructed in such a way that every
                            user can understand.{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-12">
                      <div className="flex mb-2">
                        <span>
                          <i className="bx bxs-badge-check text-primary text-[1.125rem]"></i>
                        </span>
                        <div className="ms-2">
                          <h6 className="font-medium mb-0">
                            Switch Easily From One Color to Another Color style
                          </h6>
                          <p className=" text-textmuted">
                            lorem ipsum, dolor sit var ameto condesetrat aiatel
                            varen or damsenlel verman code Lorem ipsum, dolor
                            sit amet consectetur{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section  dark:!bg-black/10 section-bg text-defaulttextcolor dark:text-defaulttextcolor/70"
            id="statistics"
          >
            <div className="container text-center position-relative">
              <p className="text-[0.75rem] font-semibold text-success mb-1">
                <span className="landing-section-heading">STATISTICS</span>
              </p>
              <h3 className="font-semibold mb-2 text-defaulttextcolor dark:text-defaulttextcolor/70 ">
                More than 120+ projects completed.
              </h3>
              <div className="">
                <div className="xl:col-span-7 col-span-12">
                  <p className="text-[#8c9097] text-[0.9375rem] mb-5 font-normal">
                    We are proud to have top class clients and customers,which
                    motivates us to work more on projects.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-x-6 container">
                <div className="xl:col-span-1"></div>
                <div className="xl:col-span-2 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 mb-3">
                  <div className="p-4 text-center !rounded-sm bg-white dark:bg-bodybg border dark:border-defaultborder/10">
                    <span className="mb-4 avatar avatar-lg avatar-rounded bg-primary/10 !text-primary">
                      <i className="text-[1.5rem] bx bx-spreadsheet"></i>
                    </span>
                    <h3 className="font-semibold mb-0 text-dark">120+</h3>
                    <p className="mb-1 text-[0.875rem] opacity-[0.7] text-[#8c9097] ">
                      Projects
                    </p>
                  </div>
                </div>
                <div className="xl:col-span-2 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 mb-3">
                  <div className="p-4 text-center !rounded-sm !bg-white dark:!bg-bodybg border dark:border-defaultborder/10">
                    <span className="mb-4 avatar avatar-lg avatar-rounded bg-primary/10 !text-primary">
                      <i className="text-[1.5rem] bx bx-user-plus"></i>
                    </span>
                    <h3 className="font-semibold mb-0 text-dark">20K+</h3>
                    <p className="mb-1 text-[0.875rem] opacity-[0.7] text-[#8c9097] ">
                      Clients
                    </p>
                  </div>
                </div>
                <div className="xl:col-span-2 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 mb-3">
                  <div className="p-4 text-center !rounded-sm !bg-white dark:!bg-bodybg border dark:border-defaultborder/10">
                    <span className="mb-4 avatar avatar-lg avatar-rounded bg-primary/10 !text-primary">
                      <i className="text-[1.5rem] bx bx-money"></i>
                    </span>
                    <h3 className="font-semibold mb-0 text-dark">$45.8M</h3>
                    <p className="mb-1 text-[0.875rem] opacity-[0.7] text-[#8c9097] ">
                      Income Earned
                    </p>
                  </div>
                </div>
                <div className="xl:col-span-2 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 mb-3">
                  <div className="p-4 text-center !rounded-sm !bg-white dark:!bg-bodybg  border dark:border-defaultborder/10">
                    <span className="mb-4 avatar avatar-lg avatar-rounded bg-primary/10 !text-primary">
                      <i className="text-[1.5rem] bx bx-user-circle"></i>
                    </span>
                    <h3 className="font-semibold mb-0 text-dark">854</h3>
                    <p className="mb-1 text-[0.875rem] opacity-[0.7] text-[#8c9097] ">
                      Employees
                    </p>
                  </div>
                </div>
                <div className="xl:col-span-2 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 mb-3">
                  <div className="p-4 text-center !rounded-sm bg-white dark:!bg-bodybg  border dark:border-defaultborder/10">
                    <span className="mb-4 avatar avatar-lg avatar-rounded bg-primary/10 !text-primary">
                      <i className="text-[1.5rem] bx bx-calendar"></i>
                    </span>
                    <h3 className="font-semibold mb-0 text-dark">5+</h3>
                    <p className="mb-1 text-[0.875rem] opacity-[0.7] text-[#8c9097] ">
                      Years of Experience
                    </p>
                  </div>
                </div>
                <div className="xl:col-span-1"></div>
              </div>
            </div>
          </section>

          <section
            className="section bg-white dark:bg-bodybg text-defaulttextcolor dark:text-defaulttextcolor/70 text-[0.813rem] "
            id="pricing"
          >
            <div className="container text-center">
              <p className="text-[0.75rem] font-semibold text-success mb-1">
                <span className="landing-section-heading">PRICING</span>
              </p>
              <h3 className="font-semibold mb-2">
                valex comes with most affordable pricing range.
              </h3>
              <div className="row justify-center">
                <div className="col-xl-9">
                  <p className="text-[#8c9097] text-[0.9375rem] mb-5 font-normal">
                    Our plans are most affordable and are mainly placed by
                    focussing every category in the sector even basic plan helps
                    better.
                  </p>
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <nav
                  className="bg-primary/10 p-4 rounded-md"
                  aria-label="Tabs"
                  role="tablist"
                >
                  <a
                    className="hs-tab-active:bg-primary hs-tab-active:text-white text-primary py-2 px-4  text-sm font-medium text-center rounded-sm hover:text-primary active"
                    id="pm-item"
                    data-hs-tab="#pricing-monthly-pane"
                    aria-controls="pricing-monthly-pane"
                  >
                    Monthly
                  </a>
                  <a
                    className="hs-tab-active:bg-primary hs-tab-active:text-white text-primary py-2 px-4 text-sm font-medium text-center  rounded-sm hover:text-primary "
                    id="py-item"
                    data-hs-tab="#pricing-yearly-pane"
                    aria-controls="pricing-yearly-pane"
                  >
                    Yearly
                  </a>
                </nav>
              </div>
              <div className="box overflow-hidden !shadow-none justify-center">
                <div className="box-body !border-0 !p-0">
                  <div className="tab-content !border-0" id="myTabContent">
                    <div
                      className="tab-pane !border-0 show active !p-0 dark:!border-defaultborder/10"
                      id="pricing-monthly-pane"
                      aria-labelledby="pm-item"
                      role="tabpanel"
                      tabIndex={0}
                    >
                      <div className="grid grid-cols-12 justify-center">
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12 border-e  dark:border-e-defaultborder/10">
                          <div className="p-4">
                            <h6 className="font-semibold text-center text-[1rem]">
                              BASIC
                            </h6>
                            <div className="py-4 flex items-center justify-center">
                              <div className="pricing-svg1">
                                <i className="bi bi-tags"></i>
                              </div>
                              <div className="text-end ms-[3rem]">
                                <p className="text-[1.5625rem] font-semibold mb-0">
                                  $199
                                </p>
                                <p className="text-[#8c9097] text-[0.6875rem] font-semibold mb-0">
                                  per month
                                </p>
                              </div>
                            </div>
                            <ul className="list-unstyled text-center text-[0.75rem] px-4 pt-4 mb-0">
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Storage Capacity
                                  <span className="badge bg-light text-default ms-1">
                                    1Tb
                                  </span>
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Daily Updates
                                  <span className="badge bg-light text-default ms-1">
                                    Unlimited
                                  </span>
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Online Support
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Visitors Monitoring
                                  <span className="badge bg-light text-default ms-1">
                                    24/7
                                  </span>
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  2 Free Domains
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Money Back Guarentee
                                </span>
                              </li>
                            </ul>
                            <div className="grid">
                              <button className="ti-btn ti-btn-primary !font-[500]">
                                Get Started
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12 border-e dark:border-e-defaultborder/10-e  dark:border-defaultborder/10">
                          <div className="p-4">
                            <h6 className="font-semibold text-center text-[1rem]">
                              ADVANCED
                            </h6>
                            <div className="py-4 flex items-center justify-center">
                              <div className="pricing-svg1">
                                <i className="bi bi-hand-thumbs-up"></i>
                              </div>
                              <div className="text-end ms-[3rem]">
                                <p className="text-[1.5625rem] font-semibold mb-0">
                                  $499
                                </p>
                                <p className="text-[#8c9097] text-[0.6875rem] font-semibold mb-0">
                                  per month
                                </p>
                              </div>
                            </div>
                            <ul className="list-unstyled text-center text-[0.75rem] px-4 pt-4 mb-0">
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Storage Capacity
                                  <span className="badge bg-light text-default ms-1">
                                    5Tb
                                  </span>
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Daily Updates
                                  <span className="badge bg-light text-default ms-1">
                                    Unlimited
                                  </span>
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Online Support
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Visitors Monitoring
                                  <span className="badge bg-light text-default ms-1">
                                    24/7
                                  </span>
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  10 Free Domains
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Money Back Guarentee
                                </span>
                              </li>
                            </ul>
                            <div className="grid">
                              <button className="ti-btn ti-btn-primary !font-[500]">
                                Get Started
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12">
                          <div className="p-4 pricing-offer overflow-hidden">
                            <span className="pricing-offer-details shadow">
                              <span className="font-semibold">10%</span>{' '}
                              <span className="text-[0.625rem] op-8 ms-1">
                                Off
                              </span>
                            </span>
                            <h6 className="font-semibold text-center text-[1rem]">
                              PREMIUM
                            </h6>
                            <div className="py-4 flex items-center justify-center">
                              <div className="pricing-svg1">
                                <i className="bi bi-gem"></i>
                              </div>
                              <div className="text-end ms-[3rem]">
                                <p className="text-[1.5625rem] font-semibold mb-0 !text-primary">
                                  $1,299
                                </p>
                                <p className="text-[#8c9097] text-[0.6875rem] font-semibold mb-0">
                                  per month
                                </p>
                              </div>
                            </div>
                            <ul className="list-unstyled text-center text-[0.75rem] px-4 pt-4 mb-0">
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Storage Capacity
                                  <span className="badge bg-light text-default ms-1">
                                    10Tb
                                  </span>
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Daily Updates
                                  <span className="badge bg-light text-default ms-1">
                                    Unlimited
                                  </span>
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Online Support
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Visitors Monitoring
                                  <span className="badge bg-light text-default ms-1">
                                    24/7
                                  </span>
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  30 Free Domains
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Money Back Guarentee
                                </span>
                              </li>
                            </ul>
                            <div className="grid">
                              <button className="ti-btn bg-primary text-white !font-[500] shadow">
                                Get Started
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane !border-0 !p-0  dark:border-defaultborder/10 hidden"
                      id="pricing-yearly-pane"
                      aria-labelledby="py-item"
                      role="tabpanel"
                      tabIndex={0}
                    >
                      <div className="grid grid-cols-12">
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12 border-e dark:border-e-defaultborder/10-end  dark:border-defaultborder/10">
                          <div className="p-4">
                            <h6 className="font-semibold text-center text-[1rem]">
                              BASIC
                            </h6>
                            <div className="py-4 flex items-center justify-center">
                              <div className="pricing-svg1">
                                <i className="bi bi-tags"></i>
                              </div>
                              <div className="text-end ms-[3rem]">
                                <p className="text-[1.5625rem] font-semibold mb-0">
                                  $1,499
                                </p>
                                <p className="text-[#8c9097] text-[0.6875rem] font-semibold mb-0">
                                  per Year
                                </p>
                              </div>
                            </div>
                            <ul className="list-unstyled text-center text-[0.75rem] px-4 pt-4 mb-0">
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Storage Capacity
                                  <span className="badge bg-light text-default ms-1">
                                    1Tb
                                  </span>
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Daily Updates
                                  <span className="badge bg-light text-default ms-1">
                                    Unlimited
                                  </span>
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Online Support
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Visitors Monitoring
                                  <span className="badge bg-light text-default ms-1">
                                    24/7
                                  </span>
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  2 Free Domains
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Money Back Guarentee
                                </span>
                              </li>
                            </ul>
                            <div className="grid">
                              <button className="ti-btn ti-btn-primary !font-[500]">
                                Get Started
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12 border-e dark:border-e-defaultborder/10-end  dark:border-defaultborder/10">
                          <div className="p-4">
                            <h6 className="font-semibold text-center text-[1rem]">
                              ADVANCED
                            </h6>
                            <div className="py-4 flex items-center justify-center">
                              <div className="pricing-svg1">
                                <i className="bi bi-hand-thumbs-up"></i>
                              </div>
                              <div className="text-end ms-[3rem]">
                                <p className="text-[1.5625rem] font-semibold mb-0">
                                  $5,999
                                </p>
                                <p className="text-[#8c9097] text-[0.6875rem] font-semibold mb-0">
                                  per year
                                </p>
                              </div>
                            </div>
                            <ul className="list-unstyled text-center text-[0.75rem] px-4 pt-4 mb-0">
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Storage Capacity
                                  <span className="badge bg-light text-default ms-1">
                                    5Tb
                                  </span>
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Daily Updates
                                  <span className="badge bg-light text-default ms-1">
                                    Unlimited
                                  </span>
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Online Support
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Visitors Monitoring
                                  <span className="badge bg-light text-default ms-1">
                                    24/7
                                  </span>
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  10 Free Domains
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Money Back Guarentee
                                </span>
                              </li>
                            </ul>
                            <div className="grid">
                              <button className="ti-btn ti-btn-primary !font-[500]">
                                Get Started
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12">
                          <div className="p-4 pricing-offer overflow-hidden">
                            <span className="pricing-offer-details shadow">
                              <span className="font-semibold">10%</span>{' '}
                              <span className="text-[0.625rem] op-8 ms-1">
                                Off
                              </span>
                            </span>
                            <h6 className="font-semibold text-center text-[1rem]">
                              PREMIUM
                            </h6>
                            <div className="py-4 flex items-center justify-center">
                              <div className="pricing-svg1">
                                <i className="bi bi-gem"></i>
                              </div>
                              <div className="text-end ms-[3rem]">
                                <p className="text-[1.5625rem] font-semibold mb-0 !text-primary">
                                  $11,499
                                </p>
                                <p className="text-[#8c9097] text-[0.6875rem] font-semibold mb-0">
                                  per year
                                </p>
                              </div>
                            </div>
                            <ul className="list-unstyled text-center text-[0.75rem] px-4 pt-4 mb-0">
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Storage Capacity
                                  <span className="badge bg-light text-default ms-1">
                                    10Tb
                                  </span>
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Daily Updates
                                  <span className="badge bg-light text-default ms-1">
                                    Unlimited
                                  </span>
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Online Support
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Visitors Monitoring
                                  <span className="badge bg-light text-default ms-1">
                                    24/7
                                  </span>
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  30 Free Domains
                                </span>
                              </li>
                              <li className="mb-4">
                                <span className="text-[#8c9097]">
                                  Money Back Guarentee
                                </span>
                              </li>
                            </ul>
                            <div className="grid">
                              <button className="ti-btn bg-primary text-white !font-[500] shadow">
                                Get Started
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section landing-testimonials " id="testimonials">
            <div className="container text-center">
              <p className="fs-12 font-semibold text-success mb-1">
                <span className="landing-section-heading">TESTIMONIALS</span>
              </p>
              <div className="landing-title"></div>
              <h3 className="font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70 mb-2">
                What People Are Saying About Our Product.
              </h3>
              <p className="text-muted fs-15 mb-5 font-normal">
                Some of the reviews our clients gave which brings motivation to
                work for future projects.
              </p>
              <div className="swiper pagination-dynamic text-start">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="box testimonial-card !shadow-none">
                      <div className="box-body">
                        <div className="testimonia text-center">
                          <span className="avatar avatar-xl avatar-rounded mb-1">
                            <img src="/logo-full.jpeg" alt="" />
                          </span>
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <span className="text-warning d-block">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-half-fill"></i>
                            </span>
                          </div>
                          <p className="op-8 mb-4">
                            <i className="fa fa-quote-left fs-22 text-primary op-6 me-2"></i>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quod eos id officiis hic tenetur quae quaerat
                            ad velit ab. Lorem ipsum dolor sit amet.
                          </p>
                          <p className="mb-0 font-semibold fs-16">
                            Json Taylor
                          </p>
                          <p className="mb-0 fs-11 text-muted">Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box testimonial-card !shadow-none">
                      <div className="box-body">
                        <div className="testimonia text-center">
                          <span className="avatar avatar-xl avatar-rounded mb-1">
                            <img src="/logo-full.jpeg" alt="" />
                          </span>
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <span className="text-warning d-block">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-half-fill"></i>
                            </span>
                          </div>
                          <p className="op-8 mb-4">
                            <i className="fa fa-quote-left fs-22 text-primary op-6 me-2"></i>
                            Nulla in nunc eu justo varius bibendum ac quis
                            metus. Phasellus varius aliquam lorem quis sem
                            vitae, pellentesque.
                          </p>
                          <p className="mb-0 font-semibold fs-16">
                            Harry Linson
                          </p>
                          <p className="mb-0 fs-11 text-muted">CEO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box testimonial-card !shadow-none">
                      <div className="box-body">
                        <div className="testimonia text-center">
                          <span className="avatar avatar-xl avatar-rounded mb-1">
                            <img src="/logo-full.jpeg" alt="" />
                          </span>
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <span className="text-warning d-block">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-half-fill"></i>
                            </span>
                          </div>
                          <p className="op-8 mb-4">
                            <i className="fa fa-quote-left fs-22 text-primary op-6 me-2"></i>
                            In nec elit nec risus varius cursus vitae eget
                            augue. Vestibulum bibendum, diam nec elementum
                            imperdiet mollis in lacinia vitae.
                          </p>
                          <p className="mb-0 font-semibold fs-16">
                            Mathew Brown
                          </p>
                          <p className="mb-0 fs-11 text-muted">
                            Project Manager
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box testimonial-card !shadow-none">
                      <div className="box-body">
                        <div className="testimonia text-center">
                          <span className="avatar avatar-xl avatar-rounded mb-1">
                            <img src="/logo-full.jpeg" alt="" />
                          </span>
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <span className="text-warning d-block">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-half-fill"></i>
                            </span>
                          </div>
                          <p className="op-8 mb-4">
                            <i className="fa fa-quote-left fs-22 text-primary op-6 me-2"></i>
                            Phasellus varius aliquam lorem ut fringilla. Proin
                            lobortis ipsum in libero elementum rhoncus augue
                            enim ac quam.
                          </p>
                          <p className="mb-0 font-semibold fs-16">
                            Ronne Gally
                          </p>
                          <p className="mb-0 fs-11 text-muted">
                            Backend Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box testimonial-card !shadow-none">
                      <div className="box-body">
                        <div className="testimonia text-center">
                          <span className="avatar avatar-xl avatar-rounded mb-1">
                            <img src="/logo-full.jpeg" alt="" />
                          </span>
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <span className="text-warning d-block">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-half-fill"></i>
                            </span>
                          </div>
                          <p className="op-8 mb-4">
                            <i className="fa fa-quote-left fs-22 text-primary op-6 me-2"></i>
                            Vestibulum bibendum, diam nec elementum imperdiet,
                            nisi odio mattis metus, ac ullamcorper Cras nec
                            aliquet sem.
                          </p>
                          <p className="mb-0 font-semibold fs-16">
                            Jim Carilett
                          </p>
                          <p className="mb-0 fs-11 text-muted">UI Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box testimonial-card !shadow-none">
                      <div className="box-body">
                        <div className="testimonia text-center">
                          <span className="avatar avatar-xl avatar-rounded mb-1">
                            <img src="/logo-full.jpeg" alt="" />
                          </span>
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <span className="text-warning d-block">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-half-fill"></i>
                            </span>
                          </div>
                          <p className="op-8 mb-4">
                            <i className="fa fa-quote-left fs-22 text-primary op-6 me-2"></i>
                            Nullam dignissim velit ac libero varius facilisis.
                            Pellentesque habitant morbi tristique senectus eget
                            lorem metus.
                          </p>
                          <p className="mb-0 font-semibold fs-16">
                            Kami Johnson
                          </p>
                          <p className="mb-0 fs-11 text-muted">Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box testimonial-card !shadow-none">
                      <div className="box-body">
                        <div className="testimonia text-center">
                          <span className="avatar avatar-xl avatar-rounded mb-1">
                            <img src="/logo-full.jpeg" alt="" />
                          </span>
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <span className="text-warning d-block">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-half-fill"></i>
                            </span>
                          </div>
                          <p className="op-8 mb-4">
                            <i className="fa fa-quote-left fs-22 text-primary op-6 me-2"></i>
                            Sed dapibus risus eu nibh aliquet, et sodales libero
                            vulputate. Nullam lacinia diam sem Sed dapibus risus
                            eu nib.
                          </p>
                          <p className="mb-0 font-semibold fs-16">
                            Marina Rotior
                          </p>
                          <p className="mb-0 fs-11 text-muted">UI Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box testimonial-card !shadow-none">
                      <div className="box-body">
                        <div className="testimonia text-center">
                          <span className="avatar avatar-xl avatar-rounded mb-1">
                            <img src="/logo-full.jpeg" alt="" />
                          </span>
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <span className="text-warning d-block">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-half-fill"></i>
                            </span>
                          </div>
                          <p className="op-8 mb-4">
                            <i className="fa fa-quote-left fs-22 text-primary op-6 me-2"></i>
                            Nullam ultrices sem ut gravida ultricies.
                            Suspendisse vitae felis sit amet dolor tempor
                            lacinia Sed in lorem convallis, tempus nisi vel.
                          </p>
                          <p className="mb-0 font-semibold fs-16">Elizabeth</p>
                          <p className="mb-0 fs-11 text-muted">
                            Backend Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box testimonial-card !shadow-none">
                      <div className="box-body">
                        <div className="testimonia text-center">
                          <span className="avatar avatar-xl avatar-rounded mb-1">
                            <img src="/logo-full.jpeg" alt="" />
                          </span>
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <span className="text-warning d-block">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-half-fill"></i>
                            </span>
                          </div>
                          <p className="op-8 mb-4">
                            <i className="fa fa-quote-left fs-22 text-primary op-6 me-2"></i>
                            Curabitur auctor purus et laoreet molestie. Sed
                            eleifend scelerisque posuere. In ac vehicula turpis
                            acinia diam sem aliquam lorem.
                          </p>
                          <p className="mb-0 font-semibold fs-16">Williamson</p>
                          <p className="mb-0 fs-11 text-muted">UI Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination mt-4"></div>
              </div>
            </div>
          </section>

          <section
            className="section bg-[#f9fafb] section-bg text-defaulttextcolor dark:text-defaulttextcolor/70 text-[0.813rem]"
            id="faq"
          >
            <div className="container text-center">
              <p className="text-[0.75rem] font-semibold text-success mb-1">
                <span className="landing-section-heading">F.A.Q</span>
              </p>
              <h3 className="font-semibold mb-2">
                Frequently asked questions ?
              </h3>
              <div className="row justify-center">
                <div className="">
                  <p className="text-[#8c9097] text-[0.9375rem] mb-5 font-normal">
                    We have shared some of the most frequently asked questions
                    to help you out.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                  <div
                    className="accordion accordion-customicon1 accordion-primary accordions-items-seperate"
                    id="accordionFAQ1"
                  >
                    <div className="hs-accordion-group">
                      <div
                        className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border dark:border-defaultborder/10-white/10"
                        id="faq-one"
                      >
                        {' '}
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                          aria-controls="faq-collapse-one"
                        >
                          {' '}
                          Where can I subscribe to your newsletter?
                          <svg
                            className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                            <path
                              d="M8 15.36L8 2.35999"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                          <svg
                            className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                        </button>
                        <div
                          id="faq-collapse-one"
                          className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                          aria-labelledby="faq-one"
                          style={{ height: '0px' }}
                        >
                          <div className="p-5 text-start">
                            <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
                              <strong>
                                This is the first item's accordion body.
                              </strong>{' '}
                              It is shown by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border-defaultborder/10-white/10"
                        id="faq-two"
                      >
                        {' '}
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                          aria-controls="faq-collapse-two"
                        >
                          {' '}
                          Where can in edit my address?{' '}
                          <svg
                            className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                            <path
                              d="M8 15.36L8 2.35999"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                          <svg
                            className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                        </button>
                        <div
                          id="faq-collapse-two"
                          className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
                          aria-labelledby="faq-two"
                          style={{ height: '0px' }}
                        >
                          <div className="p-5  text-start">
                            <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
                              <strong>
                                This is the first item's accordion body.
                              </strong>{' '}
                              It is shown by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border-defaultborder/10-white/10"
                        id="faq-twenty"
                      >
                        {' '}
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                          aria-controls="faq-collapse-three"
                        >
                          {' '}
                          What are your opening hours?{' '}
                          <svg
                            className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                            <path
                              d="M8 15.36L8 2.35999"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                          <svg
                            className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                        </button>
                        <div
                          id="faq-collapse-three"
                          className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
                          aria-labelledby="faq-twenty"
                          style={{ height: '0px' }}
                        >
                          <div className="p-5 text-start">
                            <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
                              <strong>
                                This is the first item's accordion body.
                              </strong>{' '}
                              It is shown by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border-defaultborder/10-white/10"
                        id="faq-thirty"
                      >
                        {' '}
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                          aria-controls="faq-collapse-four"
                        >
                          {' '}
                          Do I have the right to return an item?
                          <svg
                            className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                            <path
                              d="M8 15.36L8 2.35999"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                          <svg
                            className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                        </button>
                        <div
                          id="faq-collapse-four"
                          className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
                          aria-labelledby="faq-thiery"
                          style={{ height: '0px' }}
                        >
                          <div className="p-5 text-start">
                            <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
                              <strong>
                                This is the first item's accordion body.
                              </strong>{' '}
                              It is shown by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border-defaultborder/10-white/10"
                        id="faq-three"
                      >
                        {' '}
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                          aria-controls="faq-collapse-five"
                        >
                          {' '}
                          General Terms &amp; Conditions (GTC){' '}
                          <svg
                            className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                            <path
                              d="M8 15.36L8 2.35999"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                          <svg
                            className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                        </button>
                        <div
                          id="faq-collapse-five"
                          className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
                          aria-labelledby="faq-three"
                          style={{ height: '0px' }}
                        >
                          <div className="p-5 text-start">
                            <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
                              <strong>
                                This is the first item's accordion body.
                              </strong>{' '}
                              It is shown by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border-defaultborder/10-white/10"
                        id="faq-four"
                      >
                        {' '}
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                          aria-controls="faq-collapse-six"
                        >
                          {' '}
                          Do I need to create an account to make an order?{' '}
                          <svg
                            className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                            <path
                              d="M8 15.36L8 2.35999"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                          <svg
                            className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                        </button>
                        <div
                          id="faq-collapse-six"
                          className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
                          aria-labelledby="faq-four"
                          style={{ height: '0px' }}
                        >
                          <div className="p-5 text-start">
                            <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
                              <strong>
                                This is the first item's accordion body.
                              </strong>{' '}
                              It is shown by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                  <div
                    className="accordion accordion-customicon1 accordion-primary accordions-items-seperate"
                    id="accordionFAQ2"
                  >
                    <div className="hs-accordion-group">
                      <div
                        className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border dark:border-defaultborder/10-white/10"
                        id="faq-five"
                      >
                        {' '}
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                          aria-controls="faq-collapse-seven"
                        >
                          {' '}
                          General Terms &amp; Conditions (GTC)
                          <svg
                            className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                            <path
                              d="M8 15.36L8 2.35999"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                          <svg
                            className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                        </button>
                        <div
                          id="faq-collapse-seven"
                          className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
                          aria-labelledby="faq-five"
                        >
                          <div className="p-5 text-start">
                            <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
                              <strong>
                                This is the first item's accordion body.
                              </strong>{' '}
                              It is shown by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border dark:border-defaultborder/10-white/10"
                        id="faq-six"
                      >
                        {' '}
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                          aria-controls="faq-collapse-eight"
                        >
                          {' '}
                          Do I need to create an account to make an order?{' '}
                          <svg
                            className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                            <path
                              d="M8 15.36L8 2.35999"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                          <svg
                            className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                        </button>
                        <div
                          id="faq-collapse-eight"
                          className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
                          aria-labelledby="faq-six"
                        >
                          <div className="p-5 text-start">
                            <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
                              <strong>
                                This is the first item's accordion body.
                              </strong>{' '}
                              It is shown by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border dark:border-defaultborder/10-white/10"
                        id="faq-seven"
                      >
                        {' '}
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                          aria-controls="faq-collapse-nine"
                        >
                          {' '}
                          Where can I subscribe to your newsletter?
                          <svg
                            className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                            <path
                              d="M8 15.36L8 2.35999"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                          <svg
                            className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                        </button>
                        <div
                          id="faq-collapse-nine"
                          className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
                          aria-labelledby="faq-seven"
                        >
                          <div className="p-5 text-start">
                            <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
                              <strong>
                                This is the first item's accordion body.
                              </strong>{' '}
                              It is shown by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border dark:border-defaultborder/10-white/10"
                        id="faq-eight"
                      >
                        {' '}
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                          aria-controls="faq-collapse-ten"
                        >
                          {' '}
                          Where can in edit my address?{' '}
                          <svg
                            className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                            <path
                              d="M8 15.36L8 2.35999"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                          <svg
                            className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                        </button>
                        <div
                          id="faq-collapse-ten"
                          className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
                          aria-labelledby="faq-eight"
                        >
                          <div className="p-5 text-start">
                            <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
                              <strong>
                                This is the first item's accordion body.
                              </strong>{' '}
                              It is shown by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border dark:border-defaultborder/10-white/10"
                        id="faq-nine"
                      >
                        {' '}
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                          aria-controls="faq-collapse-eleven"
                        >
                          {' '}
                          What are your opening hours?{' '}
                          <svg
                            className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                            <path
                              d="M8 15.36L8 2.35999"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                          <svg
                            className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                        </button>
                        <div
                          id="faq-collapse-eleven"
                          className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
                          aria-labelledby="faq-nine"
                        >
                          <div className="p-5 text-start">
                            <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
                              <strong>
                                This is the first item's accordion body.
                              </strong>{' '}
                              It is shown by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="hs-accordion bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] rounded-sm dark:border dark:border-defaultborder/10-white/10"
                        id="faq-ten"
                      >
                        {' '}
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10-b hs-accordion-active:bg-primary/10   dark:border-defaultborder/10 dark:hs-accordion-active:border dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                          aria-controls="faq-collapse-twelve"
                        >
                          {' '}
                          Do I have the right to return an item?
                          <svg
                            className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary block w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                            <path
                              d="M8 15.36L8 2.35999"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                          <svg
                            className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:!text-primary hidden w-3 h-3 text-gray-600 group-hover:text-defaulttextcolor dark:text-defaulttextcolor/70 "
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 8.85999L14.5 8.85998"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>
                          </svg>{' '}
                        </button>
                        <div
                          id="faq-collapse-twelve"
                          className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
                          aria-labelledby="faq-ten"
                        >
                          <div className="p-5 text-start">
                            <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
                              <strong>
                                This is the first item's accordion body.
                              </strong>{' '}
                              It is shown by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section text-defaulttextcolor dark:text-defaulttextcolor/70 text-[0.813rem]"
            id="contact"
          >
            <div className="container text-center">
              <p className="text-[0.75rem] font-semibold text-success mb-1">
                <span className="landing-section-heading">CONTACT US</span>
              </p>
              <div className="landing-title"></div>
              <h3 className="font-semibold mb-2">
                Have any questions ? We would love to hear from you.
              </h3>
              <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-9 col-span-12">
                  <p className="text-textmuted fs-15 mb-5 font-normal">
                    You can contact us anytime regarding any queries or
                    deals,dont hesitate to clear your doubts before trying our
                    product.
                  </p>
                </div>
              </div>
              <div className="text-start grid grid-cols-12 gap-x-6 justify-between">
                <div className="lg:col-span-4 col-span-12">
                  <div className="card bg-white dark:bg-bodybg !shadow-none rounded-sm">
                    <div className="box-body px-[3rem] py-[1.5rem]">
                      <div className="flex mb-3 mt-3">
                        <div className="contact-icon contact-icon-1  border !border-primary bg-primary/10 m-0">
                          <i className="fe fe-map-pin !text-primary text-[1.0625rem]"></i>
                        </div>
                        <div className="ms-3 text-start">
                          <h6 className="mb-1 font-medium">Main Branch</h6>
                          <p className="mb-4">San Francisco, CA </p>
                        </div>
                      </div>
                      <div className="flex mb-3">
                        <div className="contact-icon contact-icon-2 border !border-danger bg-danger/10">
                          <i className="fe fe-mail !text-danger text-[1.0625rem]"></i>
                        </div>
                        <div className="ms-3 text-start">
                          <h6 className="mb-1 font-medium">Email</h6>
                          <p className="mb-4">georgeme@abc.com</p>
                        </div>
                      </div>
                      <div className="flex mb-3">
                        <div className="contact-icon contact-icon-3 border !border-success bg-success/10">
                          <i className="fe fe-headphones !text-success text-[1.0625rem]"></i>
                        </div>
                        <div className="ms-3 text-start">
                          <h6 className="mb-1 font-medium">Contact</h6>
                          <p className="mb-4">+125 254 3562 </p>
                        </div>
                      </div>
                      <div className="flex mb-2">
                        <div className="contact-icon contact-icon-4 border !border-warning bg-warning/10">
                          <i className="fe fe-airplay !text-warning text-[1.0625rem]"></i>
                        </div>
                        <div className="ms-3 text-start">
                          <h6 className="mb-1 font-medium">Working Hours</h6>
                          <p className="mb-0">Mon - Fri: 9am - 6pm</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8 col-span-12">
                  <div className="card bg-white dark:bg-bodybg !shadow-none rounded-sm">
                    <div className="box-body px-[3rem] py-[2.4rem]">
                      <div className="grid grid-cols-12 gap-x-6 mt-1 mb-3">
                        <div className="xl:col-span-6 col-span-12">
                          <div className="form-group ">
                            <label htmlFor="cusName" className="form-label">
                              Name
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="cusName"
                              placeholder="Enter your name"
                            />
                          </div>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                          <div className="form-group">
                            <label htmlFor="cusEmail" className="form-label">
                              Email
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="cusEmail"
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="cusMessage" className="form-label">
                          Message <span className="text-danger">*</span>
                        </label>
                        <textarea
                          rows={4}
                          className="form-control"
                          id="cusMessage"
                          placeholder="Type your message here..."
                        ></textarea>
                      </div>
                      <div className="form-group mb-2 pt-1">
                        <button className="ti-btn ti-btn-primary-full">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section landing-footer  text-white text-[0.813rem] opacity-[0.87]">
            <div className="container">
              <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-4 lg:col-span-4 col-span-12">
                  <div className="px-6">
                    <p className="font-semibold mb-4">
                      <a href="index.html">
                        <img src="/logo-full.jpeg" alt="" />
                      </a>
                    </p>
                    <p className="mb-2 opacity-[0.6] font-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit et magnam, fuga est mollitia eius, quo illum
                      illo inventore optio aut quas omnis rem. Dolores
                      accusantium aspernatur minus ea incidunt.
                    </p>
                    <p className="mb-0 opacity-[0.6] font-normal">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Autem ea esse ad
                    </p>
                  </div>
                </div>
                <div className="xl:col-span-2 lg:col-span-2 col-span-12">
                  <div className="px-6">
                    <h6 className="font-semibold text-[1rem] mb-4">PAGES</h6>
                    <ul className="list-unstyled opacity-[0.6] font-normal landing-footer-list">
                      <li>
                        <a href="javascript:void(0);" className="text-white">
                          Email
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="text-white">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="text-white">
                          Timeline
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="text-white">
                          Projects
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="text-white">
                          Contacts
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="text-white">
                          Portfolio
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="xl:col-span-2 lg:col-span-2 col-span-12">
                  <div className="px-6">
                    <h6 className="font-semibold text-[1rem] mb-2">INFO</h6>
                    <ul className="list-unstyled opacity-[0.6] font-normal landing-footer-list">
                      <li>
                        <a href="javascript:void(0);" className="text-white">
                          Our Team
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="text-white">
                          Contact US
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="text-white">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="text-white">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="text-white">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="text-white">
                          Terms & Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-4 col-span-12">
                  <div className="px-6">
                    <h6 className="font-semibold text-[1rem] mb-2">CONTACT</h6>
                    <ul className="list-unstyled font-normal landing-footer-list">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="text-white opacity-[0.6]"
                        >
                          <i className="ri-home-4-line me-1 align-middle"></i>{' '}
                          New York, NY 10012, US
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="text-white opacity-[0.6]"
                        >
                          <i className="ri-mail-line me-1 align-middle"></i>{' '}
                          info@fmail.com
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="text-white opacity-[0.6]"
                        >
                          <i className="ri-phone-line me-1 align-middle"></i>{' '}
                          +(555)-1920 1831
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="text-white opacity-[0.6]"
                        >
                          <i className="ri-printer-line me-1 align-middle"></i>{' '}
                          +(123) 1293 123
                        </a>
                      </li>
                      <li className="mt-4">
                        <p className="mb-2 font-semibold opacity-[0.8] text-[1rem]">
                          FOLLOW US ON :
                        </p>
                        <div className="mb-0">
                          <div className="btn-list">
                            <button className="ti-btn ti-btn-sm ti-btn-icon ti-btn-primary me-[0.365rem]">
                              <i className="ri-facebook-line font-bold"></i>
                            </button>
                            <button className="ti-btn ti-btn-sm ti-btn-icon ti-btn-secondary me-[0.365rem]">
                              <i className="ri-twitter-x-line"></i>
                            </button>
                            <button className="ti-btn ti-btn-sm ti-btn-icon ti-btn-warning me-[0.365rem]">
                              <i className="ri-instagram-line font-bold"></i>
                            </button>
                            <button className="ti-btn ti-btn-sm ti-btn-icon ti-btn-success me-[0.365rem]">
                              <i className="ri-github-line font-bold"></i>
                            </button>
                            <button className="ti-btn ti-btn-sm ti-btn-icon ti-btn-danger">
                              <i className="ri-youtube-line font-bold"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center landing-main-footer py-4 opacity-[0.87]">
            <span className="text-[#8c9097] text-[0.9375rem]">
              {' '}
              Copyright © <span id="year"></span>{' '}
              <a
                href="javascript:void(0);"
                className="!text-primary font-semibold"
              >
                <u>valex</u>
              </a>
              . Designed with <span className="fa fa-heart text-danger"></span>{' '}
              by{' '}
              <a
                href="javascript:void(0);"
                className="!text-primary font-semibold"
              >
                <u>Spruko</u>
              </a>{' '}
              All rights reserved
            </span>
          </div>
        </div>
      </div>
    </body>
  );
};

export default LandingPage;
