import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/auth/admin",
    prepareHeaders(headers,{ getState }) {
      const token = getState().auth.User.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
    credentials: "include",
  }),

  tagTypes: ["users"],
  endpoints: (build) => ({
    viewAllusers: build.query({
      query: () => `/view-users`,
      providesTags: ["users"],
    }),
    suspendUser:build.mutation({
        query:({id})=> ({
        url:`/suspend-user/${id}`,
        method: "PATCH", 
       }),
       invalidatesTags: ["users"]
       }),
  }),
});

export const {
  useViewAllusersQuery,
useSuspendUserMutation
   
} = usersApi;
