import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "src/assets/css/styles.css";
import { Provider } from "react-redux";
import { store } from "src/redux/store";

import App from "src/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
