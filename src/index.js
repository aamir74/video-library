import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider } from "./hooks/context/filter-context";
import { NotificationsProvider } from "reapop";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <NotificationsProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </NotificationsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
