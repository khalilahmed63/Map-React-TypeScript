import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/core";
import { StoreProvider } from "easy-peasy";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={
      {
        // colorScheme
        /** Put your mantine theme override here */
      }
    }
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MantineProvider>
);

reportWebVitals();
