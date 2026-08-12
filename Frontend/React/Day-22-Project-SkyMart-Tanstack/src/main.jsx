import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import App from "./App";
import AppRoute from "./routes/AppRoute";
import { Provider } from "react-redux";
import { store } from "./store/store";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Toaster position="top-right" reverseOrder={false} />
      <AppRoute />
    </Provider>
  </QueryClientProvider>,
);
