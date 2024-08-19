import { createSlice } from "@reduxjs/toolkit";
import actGetMovies from "./act/actGetMovies";
import { isString, TMovie } from "../../types";

type TInitialState = {
  status: "idle" | "pending" | "success" | "failed";
  records: TMovie[];
  error: string | null;
};

const initialState: TInitialState = {
  status: "idle",
  records: [],
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetMovies.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(actGetMovies.fulfilled, (state, action) => {
      state.status = "success";
      state.records = action.payload;
    });
    builder.addCase(actGetMovies.rejected, (state, action) => {
      state.status = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      } else {
        state.error = "An unexpected error occurred.";
      }
    });
  },
});

export { actGetMovies };
export default moviesSlice.reducer;