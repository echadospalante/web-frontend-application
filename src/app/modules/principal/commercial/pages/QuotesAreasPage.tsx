/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

import { ToastContainer } from "react-toastify";

import { TabContent, TabPane } from "reactstrap";

import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import CreateQuoteAreaForm from "../../../../components/forms/CreateQuoteAreaForm";
import QuoteAreasTable from "../../../../components/table/QuoteAreasTable";
import QuoteAreasTabs from "../../../../components/tabs/QuoteAreasTabs";

const QuoteAreasPage = () => {
  document.title = "Áreas | Comercial";

  const [activeTab, setActiveTab] = useState("1");

  const toggleActiveTab = (tab: string) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumb title="Cotizaciones" breadcrumbItem="Áreas" />

          <React.Fragment>
            <QuoteAreasTabs
              activeTab={activeTab}
              toggleCustom={toggleActiveTab}
            />

            <TabContent activeTab={activeTab} className="p-3 text-muted">
              <TabPane tabId="1">
                {activeTab === "1" && <QuoteAreasTable />}
              </TabPane>

              <TabPane tabId="2">
                {activeTab === "2" && (
                  <CreateQuoteAreaForm setActiveTab={setActiveTab} />
                )}
              </TabPane>
            </TabContent>
          </React.Fragment>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default QuoteAreasPage;
