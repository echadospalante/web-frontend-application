/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";

import { ToastContainer } from "react-toastify";

import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import AdminQuotesTable from "../../../../components/table/AdminQuotesTable";

const AdminQuotesPage = () => {
  document.title = "Gestión de Usuarios | Administración";

  return (
    <Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumb title="Administración" breadcrumbItem="Usuarios" />

          <AdminQuotesTable />
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default AdminQuotesPage;
