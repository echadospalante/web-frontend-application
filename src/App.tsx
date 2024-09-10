import AppRouter from "./app/config/routers/AppRouter";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";

import store from "./app/config/redux/store/store.config";
import env from "./environment/environment";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./app/styles/responsive.scss";
import "./app/styles/styles.scss";
import "./assets/scss/theme.scss";
import "boxicons";
import ToastAlert from "./app/components/toast/ToastAlert";

const App = () => {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={env.GOOGLE_CLIENT_ID}>
        <AppRouter />
        <ToastAlert />
      </GoogleOAuthProvider>
    </Provider>
  );
};

export default App;
