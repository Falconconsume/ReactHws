import { createSlice } from "@reduxjs/toolkit";
import thunks from "./thunks";

const initialState = {
  languages: [],
  isLoading: true,
  activeLanguage: "TypeScript",
  isError: false,
};

const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    setActiveLanguage(state, action) {
      state.activeLanguage = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.isError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchLanguages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(thunks.fetchLanguages.fulfilled, (state, action) => {
      state.languages = action.payload;
      state.isLoading = false;
    });
    builder.addCase(thunks.fetchLanguages.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const { setActiveLanguage, setIsLoading, setError } =
  languagesSlice.actions;
export default languagesSlice.reducer;
