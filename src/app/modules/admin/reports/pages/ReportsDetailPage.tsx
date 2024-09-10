/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, useState } from "react";

import { ToastContainer } from "react-toastify";
import { TabContent, TabPane } from "reactstrap";

import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import CreateAccountCollaboratorForm from "../../../../components/forms/CreateAccountCollaboratorForm";
import AccountCollaboratorsTable from "../../../../components/table/AccountCollaboratorsTable";
import AccountCollaboratorsTabs from "../../../../components/tabs/AccountCollaboratorsTabs";

const ReportDetailPage = () => {
  document.title = "Detalle de Reporte | Administración";

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
          <Breadcrumb title="Reporte" breadcrumbItem="Detalle" />

          <React.Fragment>
            <AccountCollaboratorsTabs
              activeTab={activeTab}
              toggleCustom={toggleActiveTab}
            />

            <TabContent activeTab={activeTab} className="p-3 text-muted">
              <TabPane tabId="1">
                {activeTab === "1" && <AccountCollaboratorsTable />}
              </TabPane>

              <TabPane tabId="2">
                {activeTab === "2" && (
                  <CreateAccountCollaboratorForm setActiveTab={setActiveTab} />
                )}
              </TabPane>
            </TabContent>
          </React.Fragment>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default ReportDetailPage;
