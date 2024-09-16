/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";

import { ToastContainer } from "react-toastify";

import Breadcrumb from "../../../../shared/components/breadcrumb/Breadcrumb";
import AccountBillingTable from "../../../../shared/components/table/AccountBillingTable";

const ReportsPage = () => {
  document.title = "Reportes | Administración";

  return (
    <Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumb title="Administración" breadcrumbItem="Reportes" />

          <AccountBillingTable />
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default ReportsPage;
