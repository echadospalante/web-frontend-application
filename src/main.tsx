import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App.tsx';
import './index.css';
import './assets/css/style.css';

import 'preline';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="267250279964-43tlub6j6cltdlf9eucv8pmt33ea71ec.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
);
