import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { Col, FormGroup, Row } from "reactstrap";
import SimpleBar from "simplebar-react";

import {
  changeLayout,
  changeLayoutMode,
  changeLayoutWidth,
  changePreloader,
  changeSidebarTheme,
  changeSidebarThemeImage,
  changeSidebarType,
  changeTopBarTheme,
  selectLayout,
  toggleRightSidebar,
} from "../../../config/redux/reducers/shared/layout.reducer";
import { useAppDispatch } from "../../../config/redux/store/store.config";
import {
  LayoutModeType,
  LayoutType,
  LayoutWidthType,
  LeftBarThemeImageType,
  LeftSideBarThemeType,
  LeftSidebarType,
  TopBarThemeType,
} from "../../../modules/common/domain/layout.interfaces";

import "./rightbar.scss";

const RightSidebar = () => {
  const dispatch = useAppDispatch();

  const {
    layoutType,
    layoutModeType,
    layoutWidth,
    leftSideBarTheme,
    leftSideBarThemeImage,
    leftSideBarType,
    topBarTheme,
    isPreloader,
  } = useSelector(selectLayout);

  return (
    <Fragment>
      <div className="right-bar" id="right-bar">
        <SimpleBar style={{ height: "900px", zIndex: 999999 }}>
          <div data-simplebar className="h-100">
            <div className="rightbar-title px-3 py-4">
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(toggleRightSidebar());
                }}
                className="right-bar-toggle float-end"
              >
                <i className="mdi mdi-close noti-icon" />
              </Link>
              <h5 className="m-0">Settings</h5>
            </div>

            <hr className="my-0" />

            <div className="p-4">
              <div className="radio-toolbar">
                <span className="mb-2 d-block">Layouts</span>
                <input
                  type="radio"
                  id="radioVertical"
                  name="radioFruit"
                  value={LayoutType.VERTICAL}
                  checked={layoutType === LayoutType.VERTICAL}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(changeLayout());
                    }
                  }}
                />
                <label className="me-1" htmlFor="radioVertical">
                  Vertical
                </label>
                <input
                  type="radio"
                  id="radioHorizontal"
                  name="radioFruit"
                  value={LayoutType.HORIZONTAL}
                  checked={layoutType === LayoutType.HORIZONTAL}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(changeLayout());
                    }
                  }}
                />
                <label htmlFor="radioHorizontal">Horizontal</label>
              </div>

              <hr className="mt-1" />
              <div className="radio-toolbar">
                <span className="mb-2 d-block">Layouts Mode</span>
                <input
                  type="radio"
                  id="radioLight"
                  name="radioLight"
                  value={LayoutModeType.LIGHT}
                  checked={layoutModeType === LayoutModeType.LIGHT}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(
                        changeLayoutMode(e.target.value as LayoutModeType)
                      );
                    }
                  }}
                />
                <label className="me-1" htmlFor="radioLight">
                  Light
                </label>
                <input
                  type="radio"
                  id="radioDark"
                  name="radioDark"
                  value={LayoutModeType.DARK}
                  checked={layoutModeType === LayoutModeType.DARK}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(
                        changeLayoutMode(e.target.value as LayoutModeType)
                      );
                    }
                  }}
                />
                <label htmlFor="radioDark">Dark</label>
              </div>

              <hr className="mt-1" />
              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                  Layout Width
                </span>
                <input
                  type="radio"
                  id="radioFluid"
                  name="radioWidth"
                  value={LayoutWidthType.FLUID}
                  checked={layoutWidth === LayoutWidthType.FLUID}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(
                        changeLayoutWidth(e.target.value as LayoutWidthType)
                      );
                    }
                  }}
                />
                <label className="me-1" htmlFor="radioFluid">
                  Fluid
                </label>
                <input
                  type="radio"
                  id="radioBoxed"
                  name="radioWidth"
                  value={LayoutWidthType.BOXED}
                  checked={layoutWidth === LayoutWidthType.BOXED}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(
                        changeLayoutWidth(e.target.value as LayoutWidthType)
                      );
                    }
                  }}
                />
                <label htmlFor="radioBoxed" className="me-1">
                  Boxed
                </label>
                <input
                  type="radio"
                  id="radioscrollable"
                  name="radioscrollable"
                  value={LayoutWidthType.SCROLLABLE}
                  checked={layoutWidth === LayoutWidthType.SCROLLABLE}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(
                        changeLayoutWidth(e.target.value as LayoutWidthType)
                      );
                    }
                  }}
                />
                <label htmlFor="radioscrollable">Scrollable</label>
              </div>
              <hr className="mt-1" />

              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                  Topbar Theme
                </span>
                <input
                  type="radio"
                  id="radioThemeLight"
                  name="radioTheme"
                  value={TopBarThemeType.LIGHT}
                  checked={topBarTheme === TopBarThemeType.LIGHT}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(
                        changeTopBarTheme(e.target.value as TopBarThemeType)
                      );
                    }
                  }}
                />
                <label className="me-1" htmlFor="radioThemeLight">
                  Light
                </label>
                <input
                  type="radio"
                  id="radioThemeDark"
                  name="radioTheme"
                  value={TopBarThemeType.DARK}
                  checked={topBarTheme === TopBarThemeType.DARK}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(
                        changeTopBarTheme(e.target.value as TopBarThemeType)
                      );
                    }
                  }}
                />
                <label className="me-1" htmlFor="radioThemeDark">
                  Dark
                </label>
                {layoutType === "vertical" ? null : (
                  <>
                    <input
                      type="radio"
                      id="radioThemeColored"
                      name="radioTheme"
                      value={TopBarThemeType.COLORED}
                      checked={topBarTheme === TopBarThemeType.COLORED}
                      onChange={(e) => {
                        if (e.target.checked) {
                          dispatch(
                            changeTopBarTheme(e.target.value as TopBarThemeType)
                          );
                        }
                      }}
                    />
                    <label className="me-1" htmlFor="radioThemeColored">
                      Colored
                    </label>{" "}
                  </>
                )}
              </div>

              {layoutType === "vertical" ? (
                <React.Fragment>
                  <hr className="mt-1" />
                  <div className="radio-toolbar">
                    <span className="mb-2 d-block" id="radio-title">
                      Left Sidebar Type{" "}
                    </span>
                    <input
                      type="radio"
                      id="sidebarDefault"
                      name="sidebarType"
                      value={LeftSidebarType.DEFAULT}
                      checked={leftSideBarType === LeftSidebarType.DEFAULT}
                      onChange={(e) => {
                        if (e.target.checked) {
                          dispatch(
                            changeSidebarType(e.target.value as LeftSidebarType)
                          );
                        }
                      }}
                    />
                    <label className="me-1" htmlFor="sidebarDefault">
                      Default
                    </label>
                    <input
                      type="radio"
                      id="sidebarCompact"
                      name="sidebarType"
                      value={LeftSidebarType.COMPACT}
                      checked={leftSideBarType === LeftSidebarType.COMPACT}
                      onChange={(e) => {
                        if (e.target.checked) {
                          dispatch(
                            changeSidebarType(e.target.value as LeftSidebarType)
                          );
                        }
                      }}
                    />
                    <label className="me-1" htmlFor="sidebarCompact">
                      Compact
                    </label>
                    <input
                      type="radio"
                      id="sidebarIcon"
                      name="sidebarType"
                      value={LeftSidebarType.ICON}
                      checked={leftSideBarType === LeftSidebarType.ICON}
                      onChange={(e) => {
                        if (e.target.checked) {
                          dispatch(
                            changeSidebarType(e.target.value as LeftSidebarType)
                          );
                        }
                      }}
                    />
                    <label className="me-1" htmlFor="sidebarIcon">
                      Icon
                    </label>
                  </div>

                  <hr className="mt-1" />

                  <div className="radio-toolbar coloropt-radio">
                    <span className="mb-2 d-block" id="radio-title">
                      Left Sidebar Color Options
                    </span>
                    <Row>
                      <Col>
                        <input
                          type="radio"
                          id="leftsidebarThemelight"
                          name="leftsidebarTheme"
                          value={LeftSideBarThemeType.LIGHT}
                          checked={
                            leftSideBarTheme === LeftSideBarThemeType.LIGHT
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              dispatch(
                                changeSidebarTheme(
                                  e.target.value as LeftSideBarThemeType
                                )
                              );
                            }
                          }}
                        />
                        <label
                          htmlFor="leftsidebarThemelight"
                          className={
                            layoutModeType === "dark"
                              ? "bg-dark rounded-circle wh-30 me-1"
                              : "bg-light rounded-circle wh-30 me-1"
                          }
                        ></label>

                        <input
                          type="radio"
                          id="leftsidebarThemedark"
                          name="leftsidebarTheme"
                          value={LeftSideBarThemeType.DARK}
                          checked={
                            leftSideBarTheme === LeftSideBarThemeType.DARK
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              dispatch(
                                changeSidebarTheme(
                                  e.target.value as LeftSideBarThemeType
                                )
                              );
                            }
                          }}
                        />
                        <label
                          htmlFor="leftsidebarThemedark"
                          className={
                            layoutModeType === "light"
                              ? "bg-dark rounded-circle wh-30 me-1"
                              : "bg-light rounded-circle wh-30 me-1"
                          }
                        ></label>

                        <input
                          type="radio"
                          id="leftsidebarThemecolored"
                          name="leftsidebarTheme"
                          value={LeftSideBarThemeType.COLORED}
                          checked={
                            leftSideBarTheme === LeftSideBarThemeType.COLORED
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              dispatch(
                                changeSidebarTheme(
                                  e.target.value as LeftSideBarThemeType
                                )
                              );
                            }
                          }}
                        />
                        <label
                          htmlFor="leftsidebarThemecolored"
                          className="bg-colored rounded-circle wh-30 me-1"
                        ></label>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <input
                          type="radio"
                          id="leftsidebarThemewinter"
                          name="leftsidebarTheme"
                          value={LeftSideBarThemeType.WINTER}
                          checked={
                            leftSideBarTheme === LeftSideBarThemeType.WINTER
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              dispatch(
                                changeSidebarTheme(
                                  e.target.value as LeftSideBarThemeType
                                )
                              );
                            }
                          }}
                        />
                        <label
                          htmlFor="leftsidebarThemewinter"
                          className="gradient-winter rounded-circle wh-30 me-1"
                        ></label>

                        <input
                          type="radio"
                          id="leftsidebarThemeladylip"
                          name="leftsidebarTheme"
                          value={LeftSideBarThemeType.LADYLIP}
                          checked={
                            leftSideBarTheme === LeftSideBarThemeType.LADYLIP
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              dispatch(
                                changeSidebarTheme(
                                  e.target.value as LeftSideBarThemeType
                                )
                              );
                            }
                          }}
                        />
                        <label
                          htmlFor="leftsidebarThemeladylip"
                          className="gradient-lady-lip rounded-circle wh-30 me-1"
                        ></label>

                        <input
                          type="radio"
                          id="leftsidebarThemeplumplate"
                          name="leftsidebarTheme"
                          value={LeftSideBarThemeType.PLUMPLATE}
                          checked={
                            leftSideBarTheme === LeftSideBarThemeType.PLUMPLATE
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              dispatch(
                                changeSidebarTheme(
                                  e.target.value as LeftSideBarThemeType
                                )
                              );
                            }
                          }}
                        />
                        <label
                          htmlFor="leftsidebarThemeplumplate"
                          className="gradient-plum-plate rounded-circle wh-30 me-1"
                        ></label>

                        <input
                          type="radio"
                          id="leftsidebarThemestrongbliss"
                          name="leftsidebarTheme"
                          value={LeftSideBarThemeType.STRONGBLISS}
                          checked={
                            leftSideBarTheme ===
                            LeftSideBarThemeType.STRONGBLISS
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              dispatch(
                                changeSidebarTheme(
                                  e.target.value as LeftSideBarThemeType
                                )
                              );
                            }
                          }}
                        />
                        <label
                          htmlFor="leftsidebarThemestrongbliss"
                          className="gradient-strong-bliss rounded-circle wh-30 me-1"
                        ></label>
                        <input
                          type="radio"
                          id="leftsidebarThemesgreatwhale"
                          name="leftsidebarTheme"
                          value={LeftSideBarThemeType.GREATWHALE}
                          checked={
                            leftSideBarTheme === LeftSideBarThemeType.GREATWHALE
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              dispatch(
                                changeSidebarTheme(
                                  e.target.value as LeftSideBarThemeType
                                )
                              );
                            }
                          }}
                        />
                        <label
                          htmlFor="leftsidebarThemesgreatwhale"
                          className="gradient-strong-great-whale rounded-circle wh-30 me-1"
                        ></label>
                      </Col>
                    </Row>
                  </div>
                  <div className="radio-toolbar imgopt-radio">
                    <span className="mb-2 d-block" id="radio-bgimg">
                      Left Sidebar Bg Image
                    </span>
                    <div className="d-flex gap-2 flex-wrap">
                      <input
                        type="radio"
                        id="leftsidebarThemebgimg1"
                        name="leftsidebarThemeImage"
                        value={LeftBarThemeImageType.IMG1}
                        checked={
                          leftSideBarThemeImage === LeftBarThemeImageType.IMG1
                        }
                        onChange={(e) => {
                          if (e.target.checked) {
                            dispatch(
                              changeSidebarThemeImage(
                                e.target.value as LeftBarThemeImageType
                              )
                            );
                          }
                        }}
                      />

                      <label htmlFor="leftsidebarThemebgimg1">
                        <img
                          alt="sidebar bg image"
                          width="90"
                          className="themesideimage rounded"
                          src="/images/sidebar/img1.jpg"
                        />
                      </label>
                      {"   "}

                      <input
                        type="radio"
                        id="leftsidebarThemebgimg2"
                        name="leftsidebarThemeImage"
                        value={LeftBarThemeImageType.IMG2}
                        checked={
                          leftSideBarThemeImage === LeftBarThemeImageType.IMG2
                        }
                        onChange={(e) => {
                          if (e.target.checked) {
                            dispatch(
                              changeSidebarThemeImage(
                                e.target.value as LeftBarThemeImageType
                              )
                            );
                          }
                        }}
                      />

                      <label htmlFor="leftsidebarThemebgimg2">
                        <img
                          alt="sidebar bg image"
                          width="90"
                          className="themesideimage rounded"
                          src="/images/sidebar/img2.jpg"
                        />
                      </label>
                      {"   "}

                      <input
                        type="radio"
                        id="leftsidebarThemebgimg3"
                        name="leftsidebarThemeImage"
                        value={LeftBarThemeImageType.IMG3}
                        checked={
                          leftSideBarThemeImage === LeftBarThemeImageType.IMG3
                        }
                        onChange={(e) => {
                          if (e.target.checked) {
                            dispatch(
                              changeSidebarThemeImage(
                                e.target.value as LeftBarThemeImageType
                              )
                            );
                          }
                        }}
                      />

                      <label htmlFor="leftsidebarThemebgimg3">
                        <img
                          alt="sidebar bg image"
                          width="90"
                          className="themesideimage rounded"
                          src="/images/sidebar/img3.jpg"
                        />
                      </label>
                      <input
                        type="radio"
                        id="leftsidebarThemebgimg4"
                        name="leftsidebarThemeImage"
                        value={LeftBarThemeImageType.IMG4}
                        checked={
                          leftSideBarThemeImage === LeftBarThemeImageType.IMG4
                        }
                        onChange={(e) => {
                          if (e.target.checked) {
                            dispatch(
                              changeSidebarThemeImage(
                                e.target.value as LeftBarThemeImageType
                              )
                            );
                          }
                        }}
                      />
                      <label htmlFor="leftsidebarThemebgimg4">
                        <img
                          alt="sidebar bg image"
                          width="90"
                          className="themesideimage rounded"
                          src="/images/sidebar/img4.jpg"
                        />
                      </label>
                      {"   "}

                      <input
                        type="radio"
                        id="leftsidebarThemenone"
                        name="leftsidebarThemeImage"
                        value={LeftBarThemeImageType.NONE}
                        checked={
                          leftSideBarThemeImage === LeftBarThemeImageType.NONE
                        }
                        onChange={(e) => {
                          if (e.target.checked) {
                            dispatch(
                              changeSidebarThemeImage(
                                e.target.value as LeftBarThemeImageType
                              )
                            );
                          }
                        }}
                      />
                      <label htmlFor="leftsidebarThemenone">
                        <div style={{ width: "40px", height: "80px" }}>
                          <div className="bg-light border px-2 h-100 shadow-none">
                            <div className="verticalcontent">None</div>
                          </div>
                        </div>
                      </label>
                      {"   "}
                    </div>
                  </div>
                  <hr className="mt-1" />
                </React.Fragment>
              ) : null}

              <FormGroup>
                <span className="mb-2 d-block" id="radio-title">
                  Preloader
                </span>

                <div className="form-check form-switch">
                  <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="checkbox_1"
                    checked={isPreloader}
                    onChange={() => {
                      dispatch(changePreloader());
                    }}
                  />

                  <label className="form-check-label" htmlFor="checkbox_1">
                    Preloader
                  </label>
                </div>
              </FormGroup>

              <h6 className="text-center">Choose Layouts</h6>

              <div className="mb-2">
                <Link
                  to="//Echadospa'lante-v-light.react.themesbrand.com"
                  target="_blank"
                >
                  <img
                    src="/images/layouts/layout-1.jpg"
                    className="img-fluid img-thumbnail"
                    alt=""
                  />
                </Link>
              </div>

              <div className="mb-2">
                <Link
                  to="//Echadospa'lante-v-dark.react.themesbrand.com"
                  target="_blank"
                >
                  <img
                    src="/images/layouts/layout-2.jpg"
                    className="img-fluid img-thumbnail"
                    alt=""
                  />
                </Link>
              </div>

              <div className="mb-2">
                <Link
                  to="//Echadospa'lante-v-rtl.react.themesbrand.com"
                  target="_blank"
                >
                  <img
                    src="/images/layouts/layout-3.jpg"
                    className="img-fluid img-thumbnail"
                    alt=""
                  />
                </Link>
              </div>

              <Link
                to="//1.envato.market/Echadospa'lantereact"
                className="btn btn-primary btn-block mt-3"
                target="_blank"
              >
                <i className="mdi mdi-cart ms-1" /> Purchase Now
              </Link>
            </div>
          </div>
        </SimpleBar>
      </div>
      <div className="rightbar-overlay"></div>
    </Fragment>
  );
};

export default RightSidebar;
