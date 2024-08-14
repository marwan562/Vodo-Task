import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TMovie } from "../../types";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<TMovie[], void>({
      query: () => `/movies`,
    }),
    getMovieById:builder.query<TMovie,string | undefined>({
      query: (id) => `/movies/${id}`,
    })
  }),
});

export const { useGetMoviesQuery,useGetMovieByIdQuery } = moviesApi;
