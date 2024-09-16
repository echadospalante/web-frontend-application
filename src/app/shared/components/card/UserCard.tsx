import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";

const CardUser = () => {
  const [settingsMenu, setSettingsMenu] = useState(false);
  //Setting Menu

  return (
    <Card>
      <CardBody>
        <Row>
          <Col lg={7} md={12}>
            <div className="d-flex">
              <div className="flex-shrink-0 me-3">
                <img
                  src="/images/icons/7s-logo-small.png"
                  alt=""
                  className="avatar-md rounded-circle img-thumbnail"
                />
              </div>
              <div className="flex-grow-1 align-self-center">
                <div className="text-muted">
                  <p className="mb-3">Welcome to Echadospa'lante Dashboard</p>
                  <h5 className="mb-2">
                    Henry wells
                    <Link to="/registro/bienvenida">Registro</Link>
                  </h5>
                  <p className="mb-0">UI / UX Designer</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={5} md={12} className="align-self-center">
            <div className="text-lg-center mt-4 mt-lg-0">
              <Row>
                <Col xs="4">
                  <div>
                    <p className="text-muted text-truncate mb-2">
                      Total Projects
                    </p>
                    <h5 className="mb-0">48</h5>
                  </div>
                </Col>
                <Col xs="4">
                  <div>
                    <p className="text-muted text-truncate mb-2">Projects</p>
                    <h5 className="mb-0">40</h5>
                  </div>
                </Col>
                <Col xs="4">
                  <div>
                    <p className="text-muted text-truncate mb-2">Clients</p>
                    <h5 className="mb-0">18</h5>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={12} md={12} className="">
            <div className="mt-lg-2">
              <Dropdown
                isOpen={settingsMenu}
                toggle={() => {
                  setSettingsMenu(!settingsMenu);
                }}
                className="float-end"
              >
                <DropdownToggle tag="button" className="btn btn-primary">
                  <i className="bx bxs-cog align-middle me-1" /> Setting
                </DropdownToggle>

                <DropdownMenu className="dropdown-menu-end">
                  <DropdownItem href="#">Action</DropdownItem>
                  <DropdownItem href="#">Another action</DropdownItem>
                  <DropdownItem href="#">Something else</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default CardUser;
