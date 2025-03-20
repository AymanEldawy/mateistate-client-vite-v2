import { createSlice } from "@reduxjs/toolkit";
import { SESSION_STORAGE_USER_ACCESS_TOKEN_KEY, SESSION_STORAGE_USER_KEY } from "../../data/constants";
import { loginThunk } from '../thunks/authThunks';
import { resetAll } from "../sharedActions";

const initialState = {
  user: null,
  accessToken: null,
  isLoggedIn: false,
  rememberMe: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRememberMe: (state, { payload }) => {
      state.rememberMe = payload;
    },
    setUserData: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
    },
    setAccessToken: (state, { payload }) => {
      state.accessToken = payload;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isLoggedIn = false;
      state.rememberMe = false;
      sessionStorage.removeItem(SESSION_STORAGE_USER_KEY);
      sessionStorage.removeItem(SESSION_STORAGE_USER_ACCESS_TOKEN_KEY);
    },
  },
  extraReducers: (builder) => {
    /******************* Login ************************/
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      const { account, access_token: accessToken } = payload;
      if (!state.rememberMe) {
        sessionStorage.setItem(
          SESSION_STORAGE_USER_KEY,
          JSON.stringify(account)
        );
        sessionStorage.setItem(
          SESSION_STORAGE_USER_ACCESS_TOKEN_KEY,
          accessToken
        );
      }

      state.user = account;
      state.accessToken = accessToken;
      state.isLoggedIn = true;
    });
    builder.addCase(loginThunk.rejected, () => {
      throw new Error();
    });
    /******************* Reset State To Initial Values ************************/
    builder.addCase(resetAll, () => initialState);
  },
});

export const { setRememberMe, setUserData, setAccessToken, logout } =
  authSlice.actions;

export default authSlice.reducer;
