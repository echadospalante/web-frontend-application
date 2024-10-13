/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useState } from "react";

import { TabContent, TabPane } from "reactstrap";
import Breadcrumb from "../../../../shared/components/breadcrumb/Breadcrumb";
import AdminVenturesTabs from "../../../../shared/components/tabs/QuotesTabs";
import AdminVenturesTable from "../../../../shared/components/table/AdminVenturesTable";
import AdminVentureCategoriesTable from "../../../../shared/components/table/AdminVentureCategoriesTable";

const AdminVenturesPage = () => {
  document.title = "Gestión de Emprendimientos | Administración";

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
            title="Emprendimientos"
            breadcrumbItem={activeTab === "1" ? "Listado" : "Tablero"}
          />

          <Fragment>
            <AdminVenturesTabs
              activeTab={activeTab}
              toggleCustom={toggleActiveTab}
            />

            <TabContent activeTab={activeTab} className="p-3 text-muted">
              <TabPane tabId="1">
                {activeTab === "1" && <AdminVenturesTable />}
              </TabPane>

              <TabPane tabId="2">
                {activeTab === "2" && <AdminVentureCategoriesTable />}
              </TabPane>
            </TabContent>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminVenturesPage;
