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
import useRefreshAuth from "../../modules/auth/hooks/useRefresh";
import BaseUserInfoPage from "../../modules/auth/pages/BaseUserInfoPage";
import CelebrationPage from "../../modules/auth/pages/CelebrationPage";
import LoginPage from "../../modules/auth/pages/LoginPage";
import RegisterStepsPage from "../../modules/auth/pages/RegisterStepsPage";
import SelectPreferencesPage from "../../modules/auth/pages/SelectPreferencesPage";
import WelcomePage from "../../modules/auth/pages/WelcomePage";
import LandingPage from "../../modules/landing/pages/LandingPage";
import AccountLayoutPage from "../../modules/principal/account/AccountLayoutPage";
import AccountProfilePage from "../../modules/principal/account/pages/AccountProfilePage";
import AccountVentureCreatePage from "../../modules/principal/account/pages/AccountVentureCreatePage";
import AccountVenturesPage from "../../modules/principal/account/pages/AccountVenturesPage";
import PreferencesLangLocalePage from "../../modules/principal/preferences/pages/PreferencesLangLocalePage";
import PreferencesNotificationsPage from "../../modules/principal/preferences/pages/PreferencesNotificationsPage";
import PreferencesLayoutPage from "../../modules/principal/preferences/PreferencesLayoutPage";
import Commercial404Page from "../../modules/principal/ventures/pages/Commercial404Page";
import EventsCalendarPage from "../../modules/principal/ventures/pages/EventsCalendarPage";
import PublicationDetailPage from "../../modules/principal/ventures/pages/PublicationDetailPage";
import PublicationsFeedPage from "../../modules/principal/ventures/pages/PublicationsFeedPage";
import VentureDetailPage from "../../modules/principal/ventures/pages/VentureDetailPage";
import VenturesFeedPage from "../../modules/principal/ventures/pages/VenturesFeedPage";
import VenturesMap from "../../modules/principal/ventures/pages/VenturesMapPage";
import CommercialLayoutPage from "../../modules/principal/ventures/VenturesLayoutPage";
import AppSpinner from "../../shared/components/loader/Spinner";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

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
            <Route path="" index element={<Navigate to="feed" />} />

            <Route path="feed" element={<CommercialLayoutPage />}>
              <Route path="" element={<PublicationsFeedPage />} />
              <Route path=":slug" element={<PublicationDetailPage />} />
            </Route>

            <Route path="emprendimientos" element={<CommercialLayoutPage />}>
              <Route path="" element={<VenturesFeedPage />} />

              <Route path="mapa" element={<VenturesMap />} />
              <Route path="calendario" element={<EventsCalendarPage />} />
              <Route path=":slug" element={<VentureDetailPage />} />

              <Route path="*" element={<Commercial404Page />} />
            </Route>

            <Route path="cuenta" element={<AccountLayoutPage />}>
              <Route path="perfil" element={<AccountProfilePage />} />
              <Route path="emprendimientos" element={<AccountVenturesPage />} />
              <Route
                path="emprendimientos/nuevo"
                element={<AccountVentureCreatePage />}
              />
            </Route>

            <Route path="preferencias" element={<PreferencesLayoutPage />}>
              <Route
                path="lenguaje-localizacion"
                element={<PreferencesLangLocalePage />}
              />
              {/* <Route path="tema" element={<PreferencesThemePage />} /> */}
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
