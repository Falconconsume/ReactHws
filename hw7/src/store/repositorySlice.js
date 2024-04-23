// src/store/repositorySlice.js
import { createSlice } from "@reduxjs/toolkit";
import thunks from "./thunks";

const initialState = {
  repository: {},
  isLoading: true,
  isError: false,
};

const repositorySlice = createSlice({
  name: "repository",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchRepository.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(thunks.fetchRepository.fulfilled, (state, action) => {
      state.repository = action.payload;
      state.isLoading = false;
    });
    builder.addCase(thunks.fetchRepository.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default repositorySlice.reducer;
