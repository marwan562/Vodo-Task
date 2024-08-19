import { createSlice } from "@reduxjs/toolkit";
import actGetMovies from "./act/actGetMovies";
import { isString, TMovie } from "../../types";
import actGetMoviesById from "./act/actGetMoviesById";

type TInitialState = {
  status: "idle" | "pending" | "success" | "failed";
  records: TMovie[];
  selectedMovie: TMovie | null;
  error: string | null;
};

const initialState: TInitialState = {
  status: "idle",
  records: [],
  selectedMovie: null, // Initialize selected movie as null
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    MoviesCleanUp: (state) => {
      state.records = [];
      state.selectedMovie = null; // Clean up selected movie
    },
  },
  extraReducers: (builder) => {
    // Get All Movies
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
      state.error = isString(action.payload) ? action.payload : "An unexpected error occurred.";
    });

    // Get Details Movie By Id
    builder.addCase(actGetMoviesById.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(actGetMoviesById.fulfilled, (state, action) => {
      state.status = "success";
      state.selectedMovie = action.payload; // Store movie details separately
    });
    builder.addCase(actGetMoviesById.rejected, (state, action) => {
      state.status = "failed";
      state.error = isString(action.payload) ? action.payload : "An unexpected error occurred.";
    });
  },
});

export { actGetMovies, actGetMoviesById };
export const { MoviesCleanUp } = moviesSlice.actions;
export default moviesSlice.reducer;
