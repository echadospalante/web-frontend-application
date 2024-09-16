import { Fragment } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AppRole } from "../../modules/auth/domain/Role";
import LoginPage from "../../modules/auth/pages/LoginPage";
import RegisterStepsPage from "../../modules/auth/pages/RegisterStepsPage";
import WelcomePage from "../../modules/auth/pages/WelcomePage";
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
import PreferencesLangLocalePage from "../../modules/principal/preferences/pages/PreferencesLangLocalePage";
import PreferencesNotificationsPage from "../../modules/principal/preferences/pages/PreferencesNotificationsPage";
import PreferencesThemePage from "../../modules/principal/preferences/pages/PreferencesTheme";
import PreferencesLayoutPage from "../../modules/principal/preferences/PreferencesLayoutPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import BaseUserInfoPage from "../../modules/auth/pages/BaseUserInfoPage";
import CelebrationPage from "../../modules/auth/pages/CelebrationPage";
import SelectPreferencesPage from "../../modules/auth/pages/SelectPreferencesPage";
import AdminUsersPage from "../../modules/admin/general/pages/AdminUsersPage";
import GeneralLayoutPage from "../../modules/admin/general/GeneralLayoutPage";

const ALL_ROLES = [
  AppRole.ADMIN,
  AppRole.MODERATOR,
  AppRole.NEWS_WRITER,
  AppRole.USER,
];

const AppRouter = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<PublicRoute />}>
            <Route index element={<LandingPage />} />
          </Route>

          <Route path="autenticacion" element={<PublicRoute />}>
            <Route path="ingresa" element={<LoginPage />} />
          </Route>

          <Route
            path="registro"
            element={<PrivateRoute anyRequiredRole={[...ALL_ROLES]} />}
          >
            <Route path="" element={<Navigate to="bienvenida" />} />
            <Route path="caracterizacion" element={<RegisterStepsPage />} />
            <Route path="bienvenida" element={<WelcomePage />} />
            <Route path="informacion-base" element={<BaseUserInfoPage />} />
            <Route path="preferencias" element={<SelectPreferencesPage />} />
            <Route path="exito" element={<CelebrationPage />} />
          </Route>

          <Route
            path="principal"
            element={<PrivateRoute anyRequiredRole={[...ALL_ROLES]} />}
          >
            <Route path="" element={<Navigate to="emprendimientos" />} />

            <Route path="emprendimientos" element={<CommercialLayoutPage />}>
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

          <Route
            path="administracion"
            element={<PrivateRoute allRequiredRoles={[AppRole.ADMIN]} />}
          >
            <Route path="general" element={<GeneralLayoutPage />}>
              <Route path="usuarios" element={<AdminUsersPage />} />
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
    </Fragment>
  );
};

export default AppRouter;
