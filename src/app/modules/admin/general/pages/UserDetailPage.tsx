/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, useState } from "react";

import { ToastContainer } from "react-toastify";
import { TabContent, TabPane } from "reactstrap";

import Breadcrumb from "../../../../shared/components/breadcrumb/Breadcrumb";
import CreateAccountCollaboratorForm from "../../../../shared/components/forms/CreateAccountCollaboratorForm";
import AccountCollaboratorsTable from "../../../../shared/components/table/AccountCollaboratorsTable";
import AccountCollaboratorsTabs from "../../../../shared/components/tabs/AccountCollaboratorsTabs";

const UserDetailPage = () => {
  document.title = "Detalle de usuario | Administración";

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
          <Breadcrumb title="Usuarios" breadcrumbItem="Detalle" />

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

export default UserDetailPage;
