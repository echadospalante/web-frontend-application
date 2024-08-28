import { Fragment } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from '../../modules/auth/pages/LoginPage';
import LandingPage from '../../modules/landing/pages/LandingPage';
import NotFoundPage from '../../modules/shared/pages/NotFoundPage';
import UserTable from '../../modules/admin/pages/UserTable';

const AppRouter = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/admin/usuarios" element={<UserTable />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default AppRouter;
