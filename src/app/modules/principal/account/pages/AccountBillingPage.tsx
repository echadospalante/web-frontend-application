/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";

import { ToastContainer } from "react-toastify";

import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import AccountBillingTable from "../../../../components/table/AccountBillingTable";

const AccountBillingPage = () => {
  document.title = "Facturación | Cuenta";

  return (
    <Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumb title="Cuenta" breadcrumbItem="Facturación" />

          <AccountBillingTable />
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default AccountBillingPage;
