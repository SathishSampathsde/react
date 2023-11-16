import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { applicationRoutes } from "./routes";
import AuthContextProvider from "./store/authContext";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <RouterProvider router={applicationRoutes} />
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);
