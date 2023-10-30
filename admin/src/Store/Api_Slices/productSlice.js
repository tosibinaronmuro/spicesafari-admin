import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/product",
    prepareHeaders(headers, { getState }) {
      const token = getState().auth.User.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
    credentials: "include",
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
    createNewProduct: build.mutation({
      query: (body) => ({
        url: `/create`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: build.mutation({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: build.mutation({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    
  }),
});

export const {
  useViewAllProductQuery,
  useViewSingleProductQuery,
  useCreateNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = productApi;
