import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:4000/api/v1/order`,
  }),

  tagTypes: ["order"],
  endpoints: (build) => ({
    userOrder: build.query({
      query: ({ userId }) => `/users/${userId}`,
      providesTags: ["order"],
    }),
    singleOrder: build.query({
      query: ({ id }) => `/${id}`,
      providesTags: ["order"],
    }),
  }),
});

export const { useUserOrderQuery, useSingleOrderQuery } = orderApi;
