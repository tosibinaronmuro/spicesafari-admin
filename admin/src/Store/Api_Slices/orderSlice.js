import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://spice-safari-backend.onrender.com/api/v1/order`,
    prepareHeaders(headers, { getState }) {
      const token = getState().auth.User.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
    credentials: "include",
  }),

  tagTypes: ["order"],
  endpoints: (build) => ({
    allOrders: build.query({
      query: () => `/`,
      providesTags: ["order"],
    }),
    singleOrder: build.query({
      query: ({ id }) => `/${id}`,
      providesTags: ["order"],
    }),
    updateOrder: build.mutation({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useAllOrdersQuery,
  useSingleOrderQuery,
  useUpdateOrderMutation,
} = orderApi;
