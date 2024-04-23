import { configureStore } from "@reduxjs/toolkit";

import languages from "./languagesSlice";
import repositories from "./repositoriesSlice";
import repository from "./repositorySlice";

export const store = configureStore({
  reducer: {
    languages: languages,
    repositories: repositories,
    repository: repository,
  },
});
