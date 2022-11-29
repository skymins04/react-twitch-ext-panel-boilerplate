import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import reduxVideoOverlayStore from "@ReduxVideoOverlay";
import VideoOverlayApp from "@Component/App/VideoOverlayApp";

import "./style/tailwind.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <ReduxProvider store={reduxVideoOverlayStore}>
    <VideoOverlayApp />
  </ReduxProvider>,
);
