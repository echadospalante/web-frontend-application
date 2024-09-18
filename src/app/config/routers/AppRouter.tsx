import { Fragment } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GeneralLayoutPage from "../../modules/admin/general/GeneralLayoutPage";
import AdminEventsPage from "../../modules/admin/general/pages/AdminEventsPage";
import AdminNewsPage from "../../modules/admin/general/pages/AdminNewsPage";
import AdminPublicationsPage from "../../modules/admin/general/pages/AdminPublicationsPage";
import AdminUsersPage from "../../modules/admin/general/pages/AdminUsersPage";
import AdminVenturesPage from "../../modules/admin/general/pages/AdminVenturesPage";
import ApplicationMetricsPage from "../../modules/admin/metrics/pages/ApplicationMetricsPage";
import AvailabilityMetricsPage from "../../modules/admin/metrics/pages/AvailabilityMetricsPage";
import ThroughputMetricsPage from "../../modules/admin/metrics/pages/ThroughputMetricsPage";
import { AppRole } from "../../modules/auth/domain/Role";
import BaseUserInfoPage from "../../modules/auth/pages/BaseUserInfoPage";
import CelebrationPage from "../../modules/auth/pages/CelebrationPage";
import LoginPage from "../../modules/auth/pages/LoginPage";
import RegisterStepsPage from "../../modules/auth/pages/RegisterStepsPage";
import SelectPreferencesPage from "../../modules/auth/pages/SelectPreferencesPage";
import WelcomePage from "../../modules/auth/pages/WelcomePage";
import LandingPage from "../../modules/landing/pages/LandingPage";
import AccountLayoutPage from "../../modules/principal/account/AccountLayoutPage";
import AccountBillingPage from "../../modules/principal/account/pages/AccountBillingPage";
import AccountProfilePage from "../../modules/principal/account/pages/AccountProfilePage";
import PreferencesLangLocalePage from "../../modules/principal/preferences/pages/PreferencesLangLocalePage";
import PreferencesNotificationsPage from "../../modules/principal/preferences/pages/PreferencesNotificationsPage";
import PreferencesThemePage from "../../modules/principal/preferences/pages/PreferencesTheme";
import PreferencesLayoutPage from "../../modules/principal/preferences/PreferencesLayoutPage";
import Commercial404Page from "../../modules/principal/ventures/pages/Commercial404Page";
import CommercialQuotesPage from "../../modules/principal/ventures/pages/CommercialQuotesPage";
import PublicationsFeedPage from "../../modules/principal/ventures/pages/PublicationsFeedPage";
import QuotesAdvisorsPage from "../../modules/principal/ventures/pages/QuotesAdvisorsPage";
import QuoteAreasPage from "../../modules/principal/ventures/pages/QuotesAreasPage";
import QuotesCalenderPage from "../../modules/principal/ventures/pages/QuotesCalendarPage";
import CommercialLayoutPage from "../../modules/principal/ventures/VenturesLayoutPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import useRefreshAuth from "../../modules/auth/hooks/useRefresh";
import AppSpinner from "../../shared/components/loader/Spinner";

const ALL_ROLES = [
  AppRole.ADMIN,
  AppRole.MODERATOR,
  AppRole.NEWS_WRITER,
  AppRole.USER,
];

const AppRouter = () => {
  const { authLoading } = useRefreshAuth();

  if (authLoading) {
    return <AppSpinner />;
  }
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<PublicRoute />}>
            <Route index element={<LandingPage />} />
          </Route>

          <Route path="autenticacion" element={<PublicRoute />}>
            <Route path="ingresar" element={<LoginPage />} />
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
            <Route path="" index element={<Navigate to="emprendimientos" />} />

            <Route path="emprendimientos" element={<CommercialLayoutPage />}>
              <Route path="" element={<PublicationsFeedPage />} />
              {/* <Route path="" element={<CommercialInitialPage />} /> */}
              <Route path="cotizaciones" element={<CommercialQuotesPage />} />
              <Route path="calendario" element={<QuotesCalenderPage />} />
              <Route path="asesores" element={<QuotesAdvisorsPage />} />
              <Route path="areas" element={<QuoteAreasPage />} />

              <Route path="*" element={<Commercial404Page />} />
            </Route>

            <Route path="cuenta" element={<AccountLayoutPage />}>
              <Route path="perfil" element={<AccountProfilePage />} />
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
              {/* <Route path="" element={<Navigate to="usuarios" />} /> */}
              <Route path="usuarios" element={<AdminUsersPage />} />
              <Route path="emprendimientos" element={<AdminVenturesPage />} />
              <Route path="eventos" element={<AdminEventsPage />} />
              <Route path="publicaciones" element={<AdminPublicationsPage />} />
              <Route path="noticias" element={<AdminNewsPage />} />
            </Route>

            <Route path="metricas" element={<GeneralLayoutPage />}>
              <Route path="" element={<ApplicationMetricsPage />} />
              <Route path="aplicacion" element={<ApplicationMetricsPage />} />
              <Route path="rendimiento" element={<ThroughputMetricsPage />} />
              <Route
                path="disponibilidad"
                element={<AvailabilityMetricsPage />}
              />
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
