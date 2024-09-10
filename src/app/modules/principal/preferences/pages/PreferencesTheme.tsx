/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";

import { ToastContainer } from "react-toastify";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
  UncontrolledAlert,
} from "reactstrap";

import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import { selectLayout } from "../../../../config/redux/reducers/layout.reducer";
import {
  LayoutModeType,
  LayoutType,
  LayoutWidthType,
  LeftBarThemeImageType,
  LeftSideBarThemeType,
  LeftSidebarType,
  TopBarThemeType,
} from "../../../common/domain/layout.interfaces";

const PreferencesThemePage = () => {
  document.title = "Tema y Personalización | Preferencias";
  const {
    layoutType,
    layoutModeType,
    layoutWidth,
    topBarTheme,
    leftSideBarTheme,
    leftSideBarType,
    leftSideBarThemeImage,
  } = useSelector(selectLayout);

  return (
    <Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumb
            title="Preferencias"
            breadcrumbItem="Tema y Personalización"
          />

          <Container>
            <div data-simplebar className="h-100">
              <Card>
                <CardBody className="border-bottom">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0 card-title flex-grow-1">
                      Gestión de Tema y Personalización
                    </h5>
                    <div className="flex-shrink-0">
                      <Button
                        type="button"
                        // onClick={fetchQuoteAreas}
                        className="btn btn-light me-1"
                      >
                        <i className="mdi mdi-refresh"></i>
                      </Button>
                    </div>
                  </div>
                </CardBody>

                <CardTitle>
                  <div className="px-3 mt-2 mx-2 pt-3 fw-normal">
                    <UncontrolledAlert color="info" role="alert">
                      <i className="mdi mdi-bullseye-arrow me-2"></i>
                      <b>Tenga en cuenta:</b> Estas preferencias serán guardadas
                      y se sincronizarán automáticamente en todos los
                      dispositivos que use para acceder.
                    </UncontrolledAlert>
                  </div>
                </CardTitle>

                <CardBody>
                  <div className="p-4">
                    <div className="radio-toolbar">
                      <span className="mb-2 d-block">Tipo de Diseño</span>
                      <input
                        type="radio"
                        id="radioVertical"
                        name="radioFruit"
                        value={LayoutType.VERTICAL}
                        checked={layoutType === LayoutType.VERTICAL}
                        onChange={(e) => {
                          if (e.target.checked) {
                            // props.changeLayout(e.target.value);
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
                            // props.changeLayout(e.target.value);
                          }
                        }}
                      />
                      <label htmlFor="radioHorizontal">Horizontal</label>
                    </div>

                    <hr className="mt-1" />
                    <div className="radio-toolbar">
                      <span className="mb-2 d-block">Tema</span>
                      <input
                        type="radio"
                        id="radioLight"
                        name="radioLight"
                        value={LayoutModeType.LIGHT}
                        checked={layoutModeType === LayoutModeType.LIGHT}
                        onChange={(e) => {
                          if (e.target.checked) {
                            // props.changeLayoutMode(e.target.value);
                          }
                        }}
                      />
                      <label className="me-1" htmlFor="radioLight">
                        Claro
                      </label>
                      <input
                        type="radio"
                        id="radioDark"
                        name="radioDark"
                        value={LayoutModeType.DARK}
                        checked={layoutModeType === LayoutModeType.DARK}
                        onChange={(e) => {
                          if (e.target.checked) {
                            // props.changeLayoutMode(e.target.value);
                          }
                        }}
                      />
                      <label htmlFor="radioDark">Oscuro</label>
                    </div>

                    <hr className="mt-1" />
                    <div className="radio-toolbar">
                      <span className="mb-2 d-block" id="radio-title">
                        Ancho del Diseño
                      </span>
                      <input
                        type="radio"
                        id="radioFluid"
                        name="radioWidth"
                        value={LayoutWidthType.FLUID}
                        checked={layoutWidth === LayoutWidthType.FLUID}
                        onChange={(e) => {
                          if (e.target.checked) {
                            // props.changeLayoutWidth(e.target.value);
                          }
                        }}
                      />
                      <label className="me-1" htmlFor="radioFluid">
                        Fluído
                      </label>
                      <input
                        type="radio"
                        id="radioBoxed"
                        name="radioWidth"
                        value={LayoutWidthType.BOXED}
                        checked={layoutWidth === LayoutWidthType.BOXED}
                        onChange={(e) => {
                          if (e.target.checked) {
                            // props.changeLayoutWidth(e.target.value);
                          }
                        }}
                      />
                      <label htmlFor="radioBoxed" className="me-1">
                        Compacto
                      </label>
                    </div>
                    <hr className="mt-1" />

                    <div className="radio-toolbar">
                      <span className="mb-2 d-block" id="radio-title">
                        Tema de la Barra Superior
                      </span>
                      <input
                        type="radio"
                        id="radioThemeLight"
                        name="radioTheme"
                        value={TopBarThemeType.LIGHT}
                        checked={topBarTheme === TopBarThemeType.LIGHT}
                        onChange={(e) => {
                          if (e.target.checked) {
                            // props.changeTopbarTheme(e.target.value);
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
                            // props.changeTopbarTheme(e.target.value);
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
                                // props.changeTopbarTheme(e.target.value);
                              }
                            }}
                          />
                          <label className="me-1" htmlFor="radioThemeColored">
                            Colored
                          </label>{" "}
                        </>
                      )}
                    </div>

                    <hr className="mt-1" />
                    <div className="radio-toolbar">
                      <span className="mb-2 d-block" id="radio-title">
                        Tipo de Barra Lateral Izquierda
                      </span>
                      <input
                        type="radio"
                        id="sidebarDefault"
                        name="sidebarType"
                        value={LeftSidebarType.DEFAULT}
                        checked={leftSideBarType === LeftSidebarType.DEFAULT}
                        onChange={(e) => {
                          if (e.target.checked) {
                            // props.changeSidebarType(e.target.value);
                          }
                        }}
                      />
                      <label className="me-1" htmlFor="sidebarDefault">
                        Por Defecto
                      </label>
                      <input
                        type="radio"
                        id="sidebarCompact"
                        name="sidebarType"
                        value={LeftSidebarType.COMPACT}
                        checked={leftSideBarType === LeftSidebarType.COMPACT}
                        onChange={(e) => {
                          if (e.target.checked) {
                            // props.changeSidebarType(e.target.value);
                          }
                        }}
                      />
                      <label className="me-1" htmlFor="sidebarCompact">
                        Compacto
                      </label>
                      <input
                        type="radio"
                        id="sidebarIcon"
                        name="sidebarType"
                        value={LeftSidebarType.ICON}
                        checked={leftSideBarType === LeftSidebarType.ICON}
                        onChange={(e) => {
                          if (e.target.checked) {
                            // props.changeSidebarType(e.target.value);
                          }
                        }}
                      />
                      <label className="me-1" htmlFor="sidebarIcon">
                        Iconos
                      </label>
                    </div>

                    <hr className="mt-1" />

                    <div className="radio-toolbar coloropt-radio">
                      <span className="mb-2 d-block" id="radio-title">
                        Opciones de Color para la Barra Lateral Izquierda
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
                                // props.changeSidebarTheme(e.target.value);
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
                                // props.changeSidebarTheme(e.target.value);
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
                                // props.changeSidebarTheme(e.target.value);
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
                                // props.changeSidebarTheme(e.target.value);
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
                                // props.changeSidebarTheme(e.target.value);
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
                              leftSideBarTheme ===
                              LeftSideBarThemeType.PLUMPLATE
                            }
                            onChange={(e) => {
                              if (e.target.checked) {
                                // props.changeSidebarTheme(e.target.value);
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
                                // props.changeSidebarTheme(e.target.value);
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
                              leftSideBarTheme ===
                              LeftSideBarThemeType.GREATWHALE
                            }
                            onChange={(e) => {
                              if (e.target.checked) {
                                // props.changeSidebarTheme(e.target.value);
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
                        Fondo de Pantalla de la Barra Lateral Izquierda
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
                              //   props.changeSidebarThemeImage(e.target.value);
                            }
                          }}
                        />

                        <label htmlFor="leftsidebarThemebgimg1">
                          <img
                            height="140"
                            width="70"
                            alt="sidebar bg image"
                            className="rounded"
                            src="/images/logos/7s-logo-small.png"
                          />
                        </label>

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
                              //   props.changeSidebarThemeImage(e.target.value);
                            }
                          }}
                        />

                        <label htmlFor="leftsidebarThemebgimg2">
                          <img
                            alt="sidebar bg image"
                            height="140"
                            width="70"
                            className="rounded"
                            src="/images/logos/7s-logo-small.png"
                          />
                        </label>

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
                              //   props.changeSidebarThemeImage(e.target.value);
                            }
                          }}
                        />

                        <label htmlFor="leftsidebarThemebgimg3">
                          <img
                            alt="sidebar bg image"
                            height="140"
                            width="70"
                            className="rounded"
                            src="/images/logos/7s-logo-small.png"
                          />
                        </label>
                        {"   "}
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
                              //   props.changeSidebarThemeImage(e.target.value);
                            }
                          }}
                        />
                        <label htmlFor="leftsidebarThemebgimg4">
                          <img
                            alt="sidebar bg image"
                            height="140"
                            width="70"
                            className="rounded"
                            src="/images/logos/7s-logo-small.png"
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
                              //   props.changeSidebarThemeImage(e.target.value);
                            }
                          }}
                        />
                        <label htmlFor="leftsidebarThemenone">
                          <div className="rounded">
                            <div className="bg-light border px-4 h-100 shadow-none">
                              <div className="verticalcontent">Ninguno</div>
                            </div>
                          </div>
                        </label>
                        {"   "}
                      </div>
                    </div>
                    <hr className="mt-1" />

                    <div>
                      <Link
                        to="#"
                        className="btn btn-success btn-block mt-3"
                        target="_blank"
                      >
                        <i className="bx bx-save" /> Guardar
                      </Link>

                      <Link
                        to="#"
                        className="btn btn-info btn-block mt-3 mx-2"
                        target="_blank"
                      >
                        <i className="bx bx-reset" /> Restaurar
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Container>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default PreferencesThemePage;
