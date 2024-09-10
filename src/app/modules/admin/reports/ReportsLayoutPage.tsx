import React from "react";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import HorizontalLayout from "../../../components/layout/HorizontalLayout";
import VerticalLayout from "../../../components/layout/VerticalLayout";
import { selectLayout } from "../../../config/redux/reducers/layout.reducer";
import { LayoutType } from "../../common/domain/layout.interfaces";

const ReportsLayoutPage = () => {
  const { layoutType } = useSelector(selectLayout);

  document.title = "Reportes | Principal";

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
    </React.Fragment>
  );
};

export const Dashboard404Page = () => {
  return <h1>404 Not found</h1>;
};

export default ReportsLayoutPage;
