import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/product",
  }),

  tagTypes: ["product"],
  endpoints: (build) => ({
    viewAllProduct: build.query({
      query: ({ key }) => `/?key=${key}`,
      providesTags: ["product"],
    }),
    viewSingleProduct: build.query({
      query: ({ id }) => `/${id}`,
      providesTags: ["product"],
    }),
     
  }),
});

export const {
  useViewAllProductQuery,
  useViewSingleProductQuery,
   
} = productApi;
