import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import reduxConfigStore from "@ReduxConfig";
import ConfigApp from "@Component/App/ConfigApp";

import "./style/tailwind.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <ReduxProvider store={reduxConfigStore}>
    <ConfigApp />
  </ReduxProvider>,
);
