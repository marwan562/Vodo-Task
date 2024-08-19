import { createAsyncThunk } from "@reduxjs/toolkit";

const actGetMoviesById = createAsyncThunk(
  "movies/actGetMoviesById",
  async (id: string | undefined, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/movies/${id}`,
        {
          method: "GET",
        }
      );

      if (!res.ok) {
        // Handle non-200 status codes
        return rejectWithValue(`Error: ${res.statusText}`);
      }

      return await res.json();
    } catch (err) {
      return rejectWithValue(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
    }
  }
);

export default actGetMoviesById;
