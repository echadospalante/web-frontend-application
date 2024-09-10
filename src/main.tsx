import { Fragment } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./app/config/locales/i18n";
import * as serviceWorker from "./serviceWorker";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Fragment>
    <App />
  </Fragment>
);

serviceWorker.unregister();
