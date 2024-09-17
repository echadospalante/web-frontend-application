/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";

import { ToastContainer } from "react-toastify";

import Breadcrumb from "../../../../shared/components/breadcrumb/Breadcrumb";
import { UncontrolledAlert } from "reactstrap";

const AdminVenturesPage = () => {
  document.title = "Gestión de Emprendimientos | Administración";

  return (
    <Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumb title="Administración" breadcrumbItem="Emprendimientos" />

          {/* <AdminQuotesTable /> */}
          <div className="px-3 mt-2 mx-2 pt-3 fw-normal">
            <UncontrolledAlert color="info" role="alert">
              <i className="mdi mdi-bullseye-arrow me-2"></i>
              <b>Tenga en cuenta:</b> Esta sección aún no está disponible
            </UncontrolledAlert>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default AdminVenturesPage;
