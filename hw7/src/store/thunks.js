import { createAsyncThunk } from "@reduxjs/toolkit";

const thunks = {
  fetchLanguages: createAsyncThunk("languages/fetchLanguages", async () => {
    const response = await fetch(
      "https://api.github.com/repos/microsoft/vscode/languages"
    );
    const json = await response.json();
    return Object.keys(json);
  }),
  fetchRepositories: createAsyncThunk(
    "repositories/fetchRepositories",
    async (active) => {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=stars:>1000+language:${active}&sort=stars&order=desc&type=Repositories`
      );
      const json = await response.json();
      return json.items;
    }
  ),
  fetchRepository: createAsyncThunk(
    "repository/fetchRepository",
    async (repositoryId) => {
      const response = await fetch(
        ` https://api.github.com/repositories/${repositoryId}`
      );
      const json = await response.json();
      return json;
    }
  ),
};

export default thunks;
