import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppSpinner from "../../components/loader/Spinner";
import ActivityLayoutPage from "../../modules/admin/activity/ActivityLayoutPage";
import ActivityDashboardPage from "../../modules/admin/activity/pages/ActivityDashboardPage";
import useRefreshAuth from "../../modules/auth/hooks/useRefresh";
import LoginPage from "../../modules/auth/pages/LoginPage";
import TermsAndConditionsPage from "../../modules/common/pages/TermsAndConditionsPage";
import LandingPage from "../../modules/landing/pages/LandingPage";
import AccountLayoutPage from "../../modules/principal/account/AccountLayoutPage";
import AccountBillingPage from "../../modules/principal/account/pages/AccountBillingPage";
import AccountCollaboratorsPage from "../../modules/principal/account/pages/AccountCollaboratorsPage";
import CommercialLayoutPage from "../../modules/principal/commercial/CommercialLayoutPage";
import Commercial404Page from "../../modules/principal/commercial/pages/Commercial404Page";
import CommercialInitialPage from "../../modules/principal/commercial/pages/CommercialInitialPage";
import CommercialQuotesPage from "../../modules/principal/commercial/pages/CommercialQuotesPage";
import QuotesAdvisorsPage from "../../modules/principal/commercial/pages/QuotesAdvisorsPage";
import QuoteAreasPage from "../../modules/principal/commercial/pages/QuotesAreasPage";
import QuotesCalenderPage from "../../modules/principal/commercial/pages/QuotesCalendarPage";
import PreferencesLayoutPage from "../../modules/principal/preferences/PreferencesLayoutPage";
import PreferencesLangLocalePage from "../../modules/principal/preferences/pages/PreferencesLangLocalePage";
import PreferencesNotificationsPage from "../../modules/principal/preferences/pages/PreferencesNotificationsPage";
import PreferencesThemePage from "../../modules/principal/preferences/pages/PreferencesTheme";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import GeneralLayoutPage from "../../modules/admin/general/GeneralLayoutPage";
import AdminUsersPage from "../../modules/admin/general/pages/AdminUsersPage";
import AdminQuotesPage from "../../modules/admin/general/pages/AdminQuotesPage";
import RegisterStepsPage from "../../modules/auth/pages/RegisterStepsPage";
import WelcomePage from "../../modules/auth/pages/WelcomePage";
import DeclarationCreatePage from "../../modules/landing/pages/DeclarationCreatePage";
import DeclarationsInitialPage from "../../modules/landing/pages/DeclarationsInitialPage";

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

          <Route path="declaracion-interes" element={<PublicRoute />}>
            <Route path="" element={<DeclarationsInitialPage />} />
            <Route path="crear" element={<DeclarationCreatePage />} />

            <Route path="consultar" element={<DeclarationCreatePage />} />
          </Route>

          <Route
            path="terminos-condiciones"
            element={<TermsAndConditionsPage />}
          />

          <Route path="registro" element={<PrivateRoute />}>
            <Route path="caracterizacion" element={<RegisterStepsPage />} />
            <Route path="bienvenida" element={<WelcomePage />} />
          </Route>

          <Route path="principal" element={<PrivateRoute />}>
            {/* <Route path="" element={<PrincipalIndexPage />} /> */}
            <Route path="" element={<Navigate to="comercial" />} />

            <Route path="comercial" element={<CommercialLayoutPage />}>
              <Route path="" element={<CommercialInitialPage />} />
              <Route path="cotizaciones" element={<CommercialQuotesPage />} />
              <Route path="calendario" element={<QuotesCalenderPage />} />
              <Route path="asesores" element={<QuotesAdvisorsPage />} />
              <Route path="areas" element={<QuoteAreasPage />} />

              <Route path="*" element={<Commercial404Page />} />
            </Route>

            <Route path="cuenta" element={<AccountLayoutPage />}>
              <Route
                path="colaboradores"
                element={<AccountCollaboratorsPage />}
              />
              <Route path="facturacion" element={<AccountBillingPage />} />
            </Route>

            <Route path="preferencias" element={<PreferencesLayoutPage />}>
              <Route
                path="lenguaje-localizacion"
                element={<PreferencesLangLocalePage />}
              />
              <Route path="tema" element={<PreferencesThemePage />} />
              <Route
                path="alertas-notificaciones"
                element={<PreferencesNotificationsPage />}
              />
            </Route>
          </Route>

          <Route path="administracion" element={<PrivateRoute />}>
            <Route path="" element={<Navigate to="actividad" />} />

            <Route path="actividad" element={<ActivityLayoutPage />}>
              <Route path="" element={<ActivityDashboardPage />} />
            </Route>

            <Route path="general" element={<GeneralLayoutPage />}>
              <Route path="usuarios" element={<AdminUsersPage />} />
              <Route path="cotizaciones" element={<AdminQuotesPage />} />
            </Route>
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
