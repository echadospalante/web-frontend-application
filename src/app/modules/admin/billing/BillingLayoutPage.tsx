import React from "react";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";

import HorizontalLayout from "../../../components/layout/HorizontalLayout";
import VerticalLayout from "../../../components/layout/VerticalLayout";
import { selectLayout } from "../../../config/redux/reducers/layout.reducer";
import { LayoutType } from "../../common/domain/layout.interfaces";

const BillingLayoutPage = () => {
  const { layoutType } = useSelector(selectLayout);

  document.title = "Facturación | Principal";

  return (
    <React.Fragment>
      <React.Fragment>
        {layoutType === LayoutType.HORIZONTAL ? (
          <HorizontalLayout>
            <Outlet />
          </HorizontalLayout>
        ) : (
          <VerticalLayout>
            <Outlet />
          </VerticalLayout>
        )}
      </React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* <Breadcrumb title={t("Dashboards")} breadcrumbItem={t("Dashboard")} /> */}
        </Container>
      </div>
    </React.Fragment>
  );
};

export const Dashboard404Page = () => {
  return <h1>404 Not found</h1>;
};

export default BillingLayoutPage;
