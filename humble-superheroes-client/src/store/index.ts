import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { SuperheroesApi } from "../services/api";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    // Add SuperheroesApi reducer to handle API data
    [SuperheroesApi.reducerPath]: SuperheroesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // Add SuperheroesApi middleware to handle caching, invalidation, and other features
    getDefaultMiddleware().concat(SuperheroesApi.middleware),
});

// Set up listeners for cache invalidation and refetching
setupListeners(store.dispatch);

// Infer the RootState type from the store's state
export type RootState = ReturnType<typeof store.getState>;

// Inferred AppDispatch type for dispatching actions
export type AppDispatch = typeof store.dispatch;
