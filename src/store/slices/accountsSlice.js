import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    getAccount: (state) => {
      return state;
    },
  },
});

export default accountSlice;
