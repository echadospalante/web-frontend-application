import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from "reactstrap";
import SimpleBar from "simplebar-react";

import { useTranslation } from "react-i18next";

const NotificationDropdown = () => {
  const { t } = useTranslation();
  const [menu, setMenu] = useState(false);

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="dropdown d-inline-block"
        tag="li"
      >
        <DropdownToggle
          className="btn header-item noti-icon position-relative"
          tag="button"
          id="page-header-notifications-dropdown"
        >
          <i className="bx bx-bell bx-tada" />
          <span className="badge bg-danger rounded-pill">3</span>
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu dropdown-menu-lg p-0 dropdown-menu-end">
          <div className="p-3">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0"> {t("Notifications")} </h6>
              </Col>
              <div className="col-auto">
                <a href="#!" className="small">
                  {" "}
                  View All
                </a>
              </div>
            </Row>
          </div>

          <SimpleBar style={{ height: "230px" }}>
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-primary rounded-circle font-size-16">
                    <i className="bx bx-cart" />
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">Notificación de Prueba</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                      Descripción de Notificación de Prueba
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" /> Hace 15 minutos{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-success rounded-circle font-size-16">
                    <i className="bx bx-badge-check" />
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">Notificación de Prueba</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                      Descripción de Notificación de Prueba
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" />
                      Hace 5 minutos
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-success rounded-circle font-size-16">
                    <i className="bx bx-badge-check" />
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">Notificación de Prueba</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                      Descripción de Notificación de Prueba
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" /> Hace 15 minutos
                    </p>
                  </div>
                </div>
              </div>
            </Link>{" "}
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-primary rounded-circle font-size-16">
                    <i className="bx bx-cart" />
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">Notificación de Prueba</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                      Descripción de Notificación de Prueba
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" /> Hace 15 minutos{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <img
                  src="/epl.png"
                  className="me-3 rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">Notificación de Prueba</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                      Descripción de Notificación de Prueba
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" />
                      Hace 5 minutos
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-success rounded-circle font-size-16">
                    <i className="bx bx-badge-check" />
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">Notificación de Prueba</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                      Descripción de Notificación de Prueba
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" /> Hace 15 minutos
                    </p>
                  </div>
                </div>
              </div>
            </Link>{" "}
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-primary rounded-circle font-size-16">
                    <i className="bx bx-cart" />
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">Notificación de Prueba</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                      Descripción de Notificación de Prueba
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" /> Hace 15 minutos{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <img
                  src="/epl.png"
                  className="me-3 rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">Notificación de Prueba</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                      Descripción de Notificación de Prueba
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" />
                      Hace 5 minutos
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-success rounded-circle font-size-16">
                    <i className="bx bx-badge-check" />
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">Notificación de Prueba</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                      Descripción de Notificación de Prueba
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" /> Hace 15 minutos
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-success rounded-circle font-size-16">
                    <i className="bx bx-badge-check" />
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">Notificación de Prueba</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                      {t("As a skeptical Cambridge friend of mine occidental") +
                        "."}
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" />
                      Hace 5 minutos
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </SimpleBar>
          <div className="p-2 border-top d-grid">
            <Link
              className="btn btn-sm btn-link font-size-14 btn-block text-center"
              to="#"
            >
              <i className="mdi mdi-arrow-right-circle me-1"></i> Ver todas
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default NotificationDropdown;
