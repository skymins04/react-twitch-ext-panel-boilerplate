import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./slice/common";

const reduxConfigStore = configureStore({
  reducer: {
    common: commonSlice.reducer,
  },
});

type TConfigRootState = ReturnType<typeof reduxConfigStore.getState>;
type TConfigDispatch = typeof reduxConfigStore.dispatch;

export default reduxConfigStore;
export const useConfigSelector: TypedUseSelectorHook<TConfigRootState> = useSelector;
export const useConfigDispatch: () => TConfigDispatch = useDispatch;
