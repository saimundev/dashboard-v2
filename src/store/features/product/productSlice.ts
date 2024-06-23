import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    user: {},
  },
  reducers: {
    getData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { getData } = productSlice.actions;
export default productSlice.reducer;
