import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const registerApi = createApi({
  reducerPath: "registerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:4000/api/v1`,
    prepareHeaders(headers) {
      return headers;
    },
    credentials: "include",
  }),

  tagTypes: ["authentication"],
  endpoints: (builder) => ({
    Register: builder.mutation({
      query: (body) => ({
        url: `/auth/register`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["authentication"],
    }),
    Login: builder.mutation({
      query: (body) => ({
        url: `/auth/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["authentication"],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = registerApi;
