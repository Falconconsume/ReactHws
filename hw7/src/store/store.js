import { configureStore } from "@reduxjs/toolkit";

import gitDashboard from "./slice";

export const store = configureStore({
  reducer: {
    gitDashboard: gitDashboard,
  },
});
