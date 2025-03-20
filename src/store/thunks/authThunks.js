import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginService } from "@/services/authService";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await loginService(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
