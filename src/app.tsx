import React, { FC } from "react";
import { usePanelDispatch, usePanelSelector } from "@ReduxPanel";
import { panelCommonAction } from "@ReduxPanel/slice/common";
import "@Style/app.css";

const App: FC = () => {
  const dispatch = usePanelDispatch();
  const { test } = usePanelSelector(({ common }) => ({ test: common.test }));
  const { setTest } = panelCommonAction;

  return (
    <>
      <div className="text-red-500 font-bold">hello world</div>
      <button className="btn btn-blue" onClick={() => dispatch(setTest(test + 1))}>
        +1
      </button>
      <span className="ml-5">{test}</span>
    </>
  );
};

export default App;
