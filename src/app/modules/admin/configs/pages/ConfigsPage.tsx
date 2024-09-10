/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";

import { ToastContainer } from "react-toastify";

import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import AccountBillingTable from "../../../../components/table/AccountBillingTable";

const ConfigsPage = () => {
  document.title = "Configuraciones | Administración";

  return (
    <Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumb title="Administración" breadcrumbItem="Configuraciones" />

          <AccountBillingTable />
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default ConfigsPage;
