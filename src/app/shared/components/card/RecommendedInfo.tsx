import { useState } from 'react';

import classnames from 'classnames';
import {
  Card,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  UncontrolledDropdown,
} from 'reactstrap';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../../../node_modules/swiper/swiper.scss';

const RecommendedInfo = () => {
  const [customActiveTab, setCustomActiveTab] = useState('1');

  const toggleCustom = (tab: string) => {
    if (customActiveTab !== tab) {
      setCustomActiveTab(tab);
    }
  };

  return (
    <Card>
      <CardBody>
        <h4 className="card-title mb-2">Emprendimientos Recomendados por:</h4>

        <Nav tabs className="nav-tabs-custom nav-justified">
          <NavItem>
            <NavLink
              style={{ cursor: 'pointer' }}
              className={classnames({ active: customActiveTab === '1' })}
              onClick={() => {
                toggleCustom('1');
              }}
            >
              <span className="d-block d-sm-none">
                <i className="fas fa-home"></i>
              </span>
              <span className="d-none d-sm-block">Ubicación</span>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              style={{ cursor: 'pointer' }}
              className={classnames({ active: customActiveTab === '2' })}
              onClick={() => {
                toggleCustom('2');
              }}
            >
              <span className="d-block d-sm-none">
                <i className="far fa-user"></i>
              </span>
              <span className="d-none d-sm-block">Donaciones</span>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              style={{ cursor: 'pointer' }}
              className={classnames({ active: customActiveTab === '2' })}
              onClick={() => {
                toggleCustom('2');
              }}
            >
              <span className="d-block d-sm-none">
                <i className="far fa-user"></i>
              </span>
              <span className="d-none d-sm-block">Suscriptores</span>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={customActiveTab} className="p-3 text-muted">
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <SwiperComponent />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <SwiperComponent />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <SwiperComponent />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <SwiperComponent />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  );
};

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <div className="carousel-inner">
        <SwiperSlide>
          <div className="carousel-item active" data-bs-interval="3000">
            <div className="bg-light p-3 d-flex mb-3 rounded">
              <img src="/epl.png" alt="" className="avatar-sm rounded me-3" />
              <div className="flex-grow-1">
                <h5 className="font-size-15 mb-2">
                  <a href="candidate-overview" className="text-body">
                    Luis Pérez
                  </a>{' '}
                  <span className="badge badge-soft-info">Mantenimiento</span>
                </h5>
                <p className="mb-0 text-muted">
                  <i className="bx bx-map text-body align-middle"></i> El
                  Retiro, Antioquia
                </p>
              </div>
              <div>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn btn-soft-primary"
                    type="button"
                    id="dropdownMenuButton11"
                  >
                    <i className="bx bx-dots-vertical-rounded"></i>
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuButton11">
                    <li>
                      <DropdownItem href="candidate-overview">
                        Ver Detalles
                      </DropdownItem>
                    </li>
                    <li>
                      <DropdownItem href="#">Ver</DropdownItem>
                    </li>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carousel-item active" data-bs-interval="3000">
            <div className="bg-light p-3 d-flex mb-3 rounded">
              <img src="/epl.png" alt="" className="avatar-sm rounded me-3" />
              <div className="flex-grow-1">
                <h5 className="font-size-15 mb-2">
                  <a href="candidate-overview" className="text-body">
                    Laura Pérez
                  </a>{' '}
                  <span className="badge badge-soft-warning">Arte</span>
                </h5>
                <p className="mb-0 text-muted">
                  <i className="bx bx-map text-body align-middle"></i> Rionegro,
                  Antioquia
                </p>
              </div>
              <div>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn btn-soft-primary"
                    type="button"
                    id="dropdownMenuButton11"
                  >
                    <i className="bx bx-dots-vertical-rounded"></i>
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuButton11">
                    <li>
                      <DropdownItem href="candidate-overview">
                        Ver detalles
                      </DropdownItem>
                    </li>
                    <li>
                      <DropdownItem href="#">Ver</DropdownItem>
                    </li>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carousel-item active" data-bs-interval="3000">
            <div className="bg-light p-3 d-flex mb-3 rounded">
              <img src="/epl.png" alt="" className="avatar-sm rounded me-3" />
              <div className="flex-grow-1">
                <h5 className="font-size-15 mb-2">
                  <a href="candidate-overview" className="text-body">
                    Pepito Pérez
                  </a>{' '}
                  <span className="badge badge-soft-success">Turismo</span>
                </h5>
                <p className="mb-0 text-muted">
                  <i className="bx bx-map text-body align-middle"></i> La Ceja,
                  Antioquia
                </p>
              </div>
              <div>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn btn-soft-primary"
                    type="button"
                    id="dropdownMenuButton11"
                  >
                    <i className="bx bx-dots-vertical-rounded"></i>
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuButton11">
                    <li>
                      <DropdownItem href="candidate-overview">
                        Ver detalle
                      </DropdownItem>
                    </li>
                    <li>
                      <DropdownItem href="#">Ver</DropdownItem>
                    </li>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default RecommendedInfo;
