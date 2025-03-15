import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalOptionsContextProvider } from "./Context/GlobalOptionsContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalOptionsContextProvider>
        </GlobalOptionsContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
