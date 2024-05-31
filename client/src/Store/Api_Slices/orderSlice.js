import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSelector } from "react-redux";
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
    userOrder: build.query({
      query: ({ userId }) => `/users/${userId}`,
      providesTags: ["order"],
    }),
    singleOrder: build.query({
      query: ({ id }) => `/${id}`,
      providesTags: ["order"],
    }),
    createOrder: build.mutation({
      query: (body) => ({
        url: `/createOrder`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["order"],
    }),
    updateOrder: build.mutation({
      query: ({ id, body }) => ({
        url: `/user/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useUserOrderQuery,
  useSingleOrderQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
} = orderApi;
