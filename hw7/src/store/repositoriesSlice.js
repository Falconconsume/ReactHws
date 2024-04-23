// src/store/repositoriesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import thunks from "./thunks";

const initialState = {
  repositories: [],
  isLoading: true,
  isError: false,
};

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchRepositories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(thunks.fetchRepositories.fulfilled, (state, action) => {
      state.repositories = action.payload;
      state.isLoading = false;
    });
    builder.addCase(thunks.fetchRepositories.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default repositoriesSlice.reducer;
