/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from 'react';

import { ToastContainer } from 'react-toastify';

import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';
import AdminUsersTable from '../../../../shared/components/table/AdminUsersTable';

const AdminUsersPage = () => {
  document.title = 'Gestión de Usuarios | Administración';

  return (
    <Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumb title="Administración" breadcrumbItem="Usuarios" />

          <AdminUsersTable />
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default AdminUsersPage;
