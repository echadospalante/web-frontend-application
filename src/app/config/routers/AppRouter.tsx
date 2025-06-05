import { Fragment } from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import GeneralLayoutPage from '../../modules/admin/general/GeneralLayoutPage';
import AdminEventsPage from '../../modules/admin/general/pages/AdminEventsPage';
import AdminPublicationsPage from '../../modules/admin/general/pages/AdminPublicationsPage';
import AdminUsersPage from '../../modules/admin/general/pages/AdminUsersPage';
import AdminVenturesPage from '../../modules/admin/general/pages/AdminVenturesPage';
import ApplicationMetricsPage from '../../modules/admin/metrics/pages/ApplicationMetricsPage';
import AvailabilityMetricsPage from '../../modules/admin/metrics/pages/AvailabilityMetricsPage';
import ThroughputMetricsPage from '../../modules/admin/metrics/pages/ThroughputMetricsPage';
import { AppRole } from '../../modules/auth/domain/Role';
import useRefreshAuth from '../../modules/auth/hooks/useRefresh';
import BaseUserInfoPage from '../../modules/auth/pages/BaseUserInfoPage';
import CelebrationPage from '../../modules/auth/pages/CelebrationPage';
import RegisterStepsPage from '../../modules/auth/pages/RegisterStepsPage';
import SelectPreferencesPage from '../../modules/auth/pages/SelectPreferencesPage';
import WelcomePage from '../../modules/auth/pages/WelcomePage';
import LandingPage from '../../modules/landing/pages/LandingPage';
import AccountLayoutPage from '../../modules/principal/account/AccountLayoutPage';
import AccountEventCreatePage from '../../modules/principal/account/pages/AccountEventCreatePage';
import AccountProfilePage from '../../modules/principal/account/pages/AccountProfilePage';
import AccountPublicationCreatePage from '../../modules/principal/account/pages/AccountPublicationCreatePage';
import AccountVentureCreatePage from '../../modules/principal/account/pages/AccountVentureCreatePage';
import AccountVenturesPage from '../../modules/principal/account/pages/AccountVenturesPage';
import PreferencesNotificationsPage from '../../modules/principal/preferences/pages/PreferencesNotificationsPage';
import PreferencesThemePage from '../../modules/principal/preferences/pages/PreferencesTheme';
import PreferencesLayoutPage from '../../modules/principal/preferences/PreferencesLayoutPage';
import Commercial404Page from '../../modules/principal/ventures/pages/Commercial404Page';
import GeneralPublicationsFeedPage from '../../modules/principal/ventures/pages/GeneralPublicationsFeedPage';
import QuotesCalenderPage from '../../modules/principal/ventures/pages/QuotesCalendarPage';
import VenturesLayoutPage from '../../modules/principal/ventures/VenturesLayoutPage';
import AppSpinner from '../../shared/components/loader/Spinner';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import VenturePublicationDetailPage from '../../modules/principal/ventures/pages/VenturePublicationDetailPage';
import TermsAndConditionsPage from '../../modules/common/pages/TermsAndConditionsPage';

const ALL_ROLES = [AppRole.ADMIN, AppRole.MODERATOR, AppRole.USER];

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

            <Route path="emprendimientos" element={<VenturesLayoutPage />}>
              <Route
                path="publicaciones"
                element={<GeneralPublicationsFeedPage />}
              />
              <Route
                path="publicaciones/:publicationId"
                element={<VenturePublicationDetailPage />}
              />
              <Route
                path=":ventureId/publicaciones"
                element={<GeneralPublicationsFeedPage />}
              />
              <Route path="calendario" element={<QuotesCalenderPage />} />

              <Route path="*" element={<Commercial404Page />} />
            </Route>

            <Route path="cuenta" element={<AccountLayoutPage />}>
              <Route path="perfil" element={<AccountProfilePage />} />
              <Route path="emprendimientos" element={<AccountVenturesPage />} />
              <Route
                path="emprendimientos/nuevo"
                element={<AccountVentureCreatePage />}
              />
              <Route
                path="emprendimientos/:ventureId/publicaciones/nueva"
                element={<AccountPublicationCreatePage />}
              />
              <Route
                path="emprendimientos/:ventureId/eventos/nuevo"
                element={<AccountEventCreatePage />}
              />
            </Route>

            <Route path="preferencias" element={<PreferencesLayoutPage />}>
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

          <Route
            path="/privacidad-y-tratamiento-datos"
            element={<TermsAndConditionsPage />}
          />

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
