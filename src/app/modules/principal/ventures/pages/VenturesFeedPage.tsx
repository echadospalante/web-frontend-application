import { Fragment, useState } from "react";

import { Card, Col, Container, Row, TabContent, TabPane } from "reactstrap";

import InfiniteScroll from "react-infinite-scroll-component";

import AlertWithReload from "../../../../shared/components/alert/AlertWithReload";
import VentureCard from "../../../../shared/components/card/VentureCard";
import AppLoading from "../../../../shared/components/loader/AppLoading";
import AppSpinner from "../../../../shared/components/loader/Spinner";
import VenturesFeedRightSidebar from "../../../../shared/components/rightbar/VenturesFeedRightSidebar";
import AdminVenturesTabs from "../../../../shared/components/tabs/VenturesFeedTabs";
import useVentures from "../hooks/useVentures";
import VenturesMap from "./VenturesMapPage";

const VenturesFeedPage = () => {
  document.title = "Feed de Emprendimientos | Echadospa'lante";

  const [activeTab, setActiveTab] = useState("1");

  const { ventures, loading, error, fetchMoreVentures } = useVentures();

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
                  <Col lg={11} md={12} sm={11} className="mx-auto">
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
                          onReload={fetchMoreVentures}
                        />
                      )}

                      <TabContent
                        activeTab={activeTab}
                        className="p-1 text-muted"
                      >
                        <Fragment>
                          {activeTab === "1" && (
                            <TabPane tabId="1">
                              <Row>
                                <Col>
                                  <InfiniteScroll
                                    dataLength={ventures.total}
                                    next={fetchMoreVentures}
                                    hasMore={
                                      ventures.items.length < ventures.total
                                    }
                                    loader={null}
                                    endMessage={
                                      <p style={{ textAlign: "center" }}>
                                        No more items to show
                                      </p>
                                    }
                                  >
                                    {ventures.items.map((venture) => (
                                      <Col lg={12} md={12} sm={12}>
                                        <VentureCard venture={venture} />
                                      </Col>
                                    ))}
                                  </InfiniteScroll>
                                </Col>
                              </Row>
                            </TabPane>
                          )}

                          <TabPane tabId="2">
                            {activeTab === "2" && (
                              <VenturesMap ventures={ventures.items} />
                            )}
                          </TabPane>
                        </Fragment>
                      </TabContent>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col lg={3} className="position-relative">
              <div className="position-fixed">
                <VenturesFeedRightSidebar ventures={ventures} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default VenturesFeedPage;
