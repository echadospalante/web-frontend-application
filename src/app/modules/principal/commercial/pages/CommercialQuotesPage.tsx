import { Fragment, useState } from "react";

import { TabContent, TabPane } from "reactstrap";

import AgileQuotesBoard from "../../../../shared/components/boards/QuotesBoard";
import Breadcrumb from "../../../../shared/components/breadcrumb/Breadcrumb";
import QuotesTable from "../../../../shared/components/table/QuotesTable";
import QuotesTabs from "../../../../shared/components/tabs/QuotesTabs";

const CommercialQuotesPage = () => {
  document.title = "Cotizaciones | Comercial";

  const [activeTab, setActiveTab] = useState("1");

  const toggleActiveTab = (tab: string) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumb
            title="Cotizaciones"
            breadcrumbItem={activeTab === "1" ? "Listado" : "Tablero"}
          />

          <Fragment>
            <QuotesTabs activeTab={activeTab} toggleCustom={toggleActiveTab} />

            <TabContent activeTab={activeTab} className="p-3 text-muted">
              <TabPane tabId="1">
                {activeTab === "1" && <QuotesTable />}
              </TabPane>

              <TabPane tabId="2">
                {activeTab === "2" && <AgileQuotesBoard />}
              </TabPane>
            </TabContent>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default CommercialQuotesPage;
