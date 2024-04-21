import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "TypeScript",
  clickedLanguage: "TypeScript",
  clickedRepository: "",
};

export const slice = createSlice({
  name: "gitDashboard",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setClickedLanguage: (state, action) => {
      state.clickedLanguage = action.payload;
    },
  },
});

export const { setLanguage, setClickedLanguage } = slice.actions;
export default slice.reducer;
