import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import App from "./App";
import AppRoute from "./routes/AppRoute";
import { Provider } from "react-redux";
import {store} from "./store/store"

createRoot(document.getElementById("root")).render(
   <Provider store={store}>
    <Toaster  position="top-right" reverseOrder={false} />
    <AppRoute />
  </Provider>,
);
