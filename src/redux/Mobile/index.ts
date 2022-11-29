import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./slice/common";

const reduxMobileStore = configureStore({
  reducer: {
    common: commonSlice.reducer,
  },
});

type TMobileRootState = ReturnType<typeof reduxMobileStore.getState>;
type TMobileDispatch = typeof reduxMobileStore.dispatch;

export default reduxMobileStore;
export const useMobileSelector: TypedUseSelectorHook<TMobileRootState> = useSelector;
export const useMobileDispatch: () => TMobileDispatch = useDispatch;
