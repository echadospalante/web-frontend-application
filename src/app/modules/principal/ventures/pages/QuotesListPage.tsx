import { Fragment } from "react";

import Breadcrumb from "../../../../shared/components/breadcrumb/Breadcrumb";
import QuotesTable from "../../../../shared/components/table/QuotesTable";

const QuotesListPage = () => {
  document.title = "Listado de Cotizaciones | echadospalante Admin";

  return (
    <Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumb title="Cotizaciones" breadcrumbItem="Listado" />

          <QuotesTable />
        </div>
      </div>
    </Fragment>
  );
};

export default QuotesListPage;
