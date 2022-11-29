import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import reduxVideoComponentStore from "@ReduxVideoComponent";
import VideoComponentApp from "@Component/App/VideoComponentApp";

import "./style/tailwind.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <ReduxProvider store={reduxVideoComponentStore}>
    <VideoComponentApp />
  </ReduxProvider>,
);
