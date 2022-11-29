import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICommonState {
  test: number;
}

const initialState: ICommonState = {
  test: 0,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setTest(state, action: PayloadAction<number>) {
      state.test = action.payload;
    },
  },
});
export default commonSlice;

export const configCommonAction = commonSlice.actions;
