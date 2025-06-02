import { useState } from 'react';

import {
  Card,
  CardBody,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from 'reactstrap';

const CardUser2 = () => {
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
                  <p className="mb-3">
                    Bienvenido al Dashboard de EchadosPa'lante
                  </p>
                  <h5 className="mb-2">
                    {'{{Nombre_usuario}}'}
                    {/* <Link to="/registro/bienvenida">Registro</Link> */}
                  </h5>
                  <p className="mb-0">{'{{list_of_roles}}'}</p>
                </div>
              </div>
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

export default CardUser2;
