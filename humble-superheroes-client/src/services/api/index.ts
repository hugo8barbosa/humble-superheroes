import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Superhero } from "../../types";
import { SERVER_URL } from "../../constants";

// Define the API service using Redux Toolkit Query
export const SuperheroesApi = createApi({
  reducerPath: "SuperheroesApi", // Unique key to store the API state in the Redux store
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_URL}/api/v1`, // The base URL for the API
    prepareHeaders: (headers) => {
      // Sets the default headers for all requests, ensuring that responses are in JSON format
      headers.set("Accept", "application/json");

      return headers;
    },
  }),
  tagTypes: ["superheroes"], // Specifies the tag type for caching and invalidation
  endpoints: (builder) => ({
    // Fetch all superheroes
    getAllSuperheroes: builder.query<Superhero[], void>({
      query: () => `/superheroes`, // Endpoint for getting the list of superheroes
      providesTags: [{ type: "superheroes", id: "LIST" }], // Tags this query result to be cached
    }),

    // Create a new superhero
    createSuperhero: builder.mutation<Superhero, Superhero>({
      query: (body) => ({
        url: `/superheroes`, // Endpoint for creating a new superhero
        method: "POST",
        body, // The superhero data to send in the request body
      }),
      invalidatesTags: () => [{ type: "superheroes", id: "LIST" }], // Invalidates cached "LIST" tag so the data is refetched
    }),
  }),
});

export const { useGetAllSuperheroesQuery, useCreateSuperheroMutation } =
  SuperheroesApi;
