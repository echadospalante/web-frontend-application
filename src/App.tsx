import AppRouter from "./app/config/routers/AppRouter";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./app/config/redux/store/store.config";
import ToastAlert from "./app/shared/components/toast/ToastAlert";
import env from "./environment/environment";

import "boxicons";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./app/styles/responsive.scss";
import "./app/styles/styles.scss";
import "./assets/scss/theme.scss";

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
