import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./slice/common";

const reduxLiveConfigStore = configureStore({
  reducer: {
    common: commonSlice.reducer,
  },
});

type TLiveConfigRootState = ReturnType<typeof reduxLiveConfigStore.getState>;
type TLiveConfigDispatch = typeof reduxLiveConfigStore.dispatch;

export default reduxLiveConfigStore;
export const useLiveConfigSelector: TypedUseSelectorHook<TLiveConfigRootState> = useSelector;
export const useLiveConfigDispatch: () => TLiveConfigDispatch = useDispatch;
