import React from "react";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import HorizontalLayout from "../../../shared/components/layout/HorizontalLayout";
import VerticalLayout from "../../../shared/components/layout/VerticalLayout";
import { selectLayout } from "../../../config/redux/reducers/shared/layout.reducer";
import { LayoutType } from "../../common/domain/layout.interfaces";

const MetricsLayoutPage = () => {
  const { layoutType } = useSelector(selectLayout);

  document.title = "Métricas | Principal";

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

export default MetricsLayoutPage;
