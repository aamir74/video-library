import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider } from "./hooks/context/filter-context";
import { NotificationsProvider } from "reapop";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NotificationsProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </NotificationsProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
