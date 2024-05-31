import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const registerApi = createApi({
  reducerPath: "registerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://spice-safari-backend.onrender.com/api/v1`,
    prepareHeaders(headers ) {
    
      // const token = getState().auth.User.token;
      // if (token) {
      //   headers.set('authorization', `Bearer ${token}`);
      // }
      return headers;
     
    },
    credentials: "include",
  }),

  tagTypes: ["authentication"],
  endpoints: (builder) => ({
    Register: builder.mutation({
      query: (body) => ({
        url: `/auth/admin/register`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["authentication"],
    }),
    Login: builder.mutation({
      query: (body) => ({
        url: `/auth/admin/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["authentication"],
    }),
    // Logout:builder.query({
    //   query: () => `/auth/admin/logout`,
    //   providesTags: ["authentication"],
    // }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = registerApi;
