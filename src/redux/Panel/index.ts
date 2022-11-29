import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./slice/common";

const reduxPanelStore = configureStore({
  reducer: {
    common: commonSlice.reducer,
  },
});

type TPanelRootState = ReturnType<typeof reduxPanelStore.getState>;
type TPanelDispatch = typeof reduxPanelStore.dispatch;

export default reduxPanelStore;
export const usePanelSelector: TypedUseSelectorHook<TPanelRootState> = useSelector;
export const usePanelDispatch: () => TPanelDispatch = useDispatch;
