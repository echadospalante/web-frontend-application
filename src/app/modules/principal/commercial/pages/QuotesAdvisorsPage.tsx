/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

import { ToastContainer } from "react-toastify";

import { TabContent, TabPane } from "reactstrap";

import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import CreateQuoteAdvisorForm from "../../../../components/forms/CreateQuoteAdvisorForm";
import QuoteAdvisorsTable from "../../../../components/table/QuoteAdvisorsTable";
import QuoteAdvisorsTabs from "../../../../components/tabs/QuoteAdvisorsTabs";

const QuoteAdvisorsPage = () => {
  document.title = "Lista de Asesores | echadospalante Admin";

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
          <Breadcrumb title="Cotizaciones" breadcrumbItem="Asesores" />

          <React.Fragment>
            <QuoteAdvisorsTabs
              activeTab={activeTab}
              toggleCustom={toggleActiveTab}
            />

            <TabContent activeTab={activeTab} className="p-3 text-muted">
              <TabPane tabId="1">
                {activeTab === "1" && <QuoteAdvisorsTable />}
              </TabPane>

              <TabPane tabId="2">
                {activeTab === "2" && (
                  <CreateQuoteAdvisorForm setActiveTab={setActiveTab} />
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

export default QuoteAdvisorsPage;
