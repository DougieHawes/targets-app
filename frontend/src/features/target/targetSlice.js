import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import targetService from "./targetService";

const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
  targets: [],
};

export const createTarget = createAsyncThunk(
  "targets/create",
  async (targetData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await targetService.createTarget(targetData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const readTargets = createAsyncThunk(
  "targets/readAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await targetService.readTargets(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const targetSlice = createSlice({
  name: "target",
  initialState: initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTarget.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTarget.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.targets.push(action.payload);
      })
      .addCase(createTarget.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message(action.payload);
      })
      .addCase(readTargets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(readTargets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.targets = action.payload;
      })
      .addCase(readTargets.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message(action.payload);
      });
  },
});

export const { reset } = targetSlice.actions;
export default targetSlice.reducer;
