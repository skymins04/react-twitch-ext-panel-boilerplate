import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./slice/common";

const reduxVideoOverlayStore = configureStore({
  reducer: {
    common: commonSlice.reducer,
  },
});

type TVideoOverlayRootState = ReturnType<typeof reduxVideoOverlayStore.getState>;
type TVideoOverlayDispatch = typeof reduxVideoOverlayStore.dispatch;

export default reduxVideoOverlayStore;
export const useVideoOverlaySelector: TypedUseSelectorHook<TVideoOverlayRootState> = useSelector;
export const useVideoOverlayDispatch: () => TVideoOverlayDispatch = useDispatch;
