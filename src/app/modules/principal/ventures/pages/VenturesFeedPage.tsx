import { Fragment, useState } from "react";

import { Card, Col, Container, Row, TabContent, TabPane } from "reactstrap";

import VentureCard from "../../../../shared/components/card/VentureCard";
import AppSpinner from "../../../../shared/components/loader/Spinner";
import VenturesFeedRightSidebar from "../../../../shared/components/rightbar/VenturesFeedRightSidebar";
import AdminVenturesTabs from "../../../../shared/components/tabs/VenturesFeedTabs";
import useVentures from "../hooks/useVentures";
import VenturesMapPage from "./VenturesMapPage";
import AlertWithReload from "../../../../shared/components/alert/AlertWithReload";

const VenturesFeedPage = () => {
  document.title = "Feed de Emprendimientos | Echadospa'lante";

  const [activeTab, setActiveTab] = useState("1");

  const { ventures, loading, error, fetchVentures } = useVentures();

  const toggleActiveTab = (tab: string) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <Fragment>
      <div className="page-content">
        <Container fluid>
          {/* <Breadcrumb title="Emprendimientos" breadcrumbItem="Publicaciones" /> */}

          <Row>
            <Col lg={9} md={12} sm={12}>
              <Card>
                <Row>
                  <Col lg={11} md={12} className="mx-auto">
                    <div>
                      <Row className="align-items-center py-3">
                        <Col xs={4}>
                          <div>
                            <h5 className="mb-0">Lista de emprendimientos</h5>
                          </div>
                        </Col>

                        <Col xs={8}>
                          <div className="float-end">
                            <AdminVenturesTabs
                              activeTab={activeTab}
                              toggleCustom={toggleActiveTab}
                            />
                          </div>
                        </Col>
                      </Row>

                      {error && (
                        <AlertWithReload
                          message="Ha habido un error al consultar los emprendimientos, por favor intente nuevamente."
                          onReload={fetchVentures}
                        />
                      )}

                      <TabContent
                        activeTab={activeTab}
                        className="p-1 text-muted"
                      >
                        {loading ? (
                          <div style={{ marginTop: "50px" }}>
                            <AppSpinner />
                          </div>
                        ) : (
                          <Fragment>
                            {activeTab === "1" && (
                              <TabPane tabId="1">
                                <Row>
                                  {[...ventures, ...ventures].map((venture) => (
                                    <Col lg={12} md={12} sm={12}>
                                      <VentureCard venture={venture} />
                                    </Col>
                                  ))}
                                </Row>
                              </TabPane>
                            )}

                            <TabPane tabId="2">
                              {activeTab === "2" && <VenturesMapPage />}
                            </TabPane>
                          </Fragment>
                        )}
                      </TabContent>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col lg={3} className="position-relative">
              <div className="position-fixed">
                <VenturesFeedRightSidebar />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default VenturesFeedPage;
