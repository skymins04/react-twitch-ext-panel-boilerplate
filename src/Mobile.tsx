import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import reduxMobileStore from "@ReduxMobile";
import MobileApp from "@Component/App/MobileApp";

import "./style/tailwind.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <ReduxProvider store={reduxMobileStore}>
    <MobileApp />
  </ReduxProvider>,
);
