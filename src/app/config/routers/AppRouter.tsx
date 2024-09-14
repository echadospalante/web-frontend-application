import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppSpinner from "../../components/loader/Spinner";
import useRefreshAuth from "../../modules/auth/hooks/useRefresh";
import LoginPage from "../../modules/auth/pages/LoginPage";
import RegisterStepsPage from "../../modules/auth/pages/RegisterStepsPage";
import WelcomePage from "../../modules/auth/pages/WelcomePage";
import LandingPage from "../../modules/landing/pages/LandingPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const { authLoading } = useRefreshAuth();

  if (authLoading) {
    return <AppSpinner />;
  }

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<PublicRoute />}>
            <Route index element={<LandingPage />} />
          </Route>

          <Route path="autenticacion" element={<PublicRoute />}>
            <Route path="ingresa" element={<LoginPage />} />
          </Route>

          <Route path="registro" element={<PrivateRoute />}>
            <Route path="caracterizacion" element={<RegisterStepsPage />} />
            <Route path="bienvenida" element={<WelcomePage />} />
          </Route>

          <Route path="/*" element={<Navigate to="" />} />
        </Routes>
      </BrowserRouter>

      {/* Global snackbar alarm */}
      {/* {alert && alert.active && <ToastAlert />} */}

      {/* Global loading */}
      {/* {loading.active && (
        <AppLoading message={loading.message} iconPath={loading.iconPath} />
      )} */}
    </React.Fragment>
  );
};

export default AppRouter;
