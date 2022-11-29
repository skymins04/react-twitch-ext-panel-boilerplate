import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import reduxPanelStore from "@ReduxPanel";
import PanelApp from "@Component/App/PanelApp";

import "./style/tailwind.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <ReduxProvider store={reduxPanelStore}>
    <PanelApp />
  </ReduxProvider>,
);
