import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./slice/common";

const reduxVideoComponentStore = configureStore({
  reducer: {
    common: commonSlice.reducer,
  },
});

type TVideoComponentRootState = ReturnType<typeof reduxVideoComponentStore.getState>;
type TVideoComponentDispatch = typeof reduxVideoComponentStore.dispatch;

export default reduxVideoComponentStore;
export const useVideoComponentSelector: TypedUseSelectorHook<TVideoComponentRootState> = useSelector;
export const useVideoComponentDispatch: () => TVideoComponentDispatch = useDispatch;
