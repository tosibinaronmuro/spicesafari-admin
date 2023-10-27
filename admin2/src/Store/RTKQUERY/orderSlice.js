// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const orderApi = createApi({
//   reducerPath: "orderApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `http://localhost:4000/api/v1/order`,

//     credentials: "include",
//   }),

//   tagTypes: ["order"],
//   endpoints: (build) => ({
//     viewOrder: build.query({
//       query: () => `/`,
//       providesTags: ["order"],
//     }),
//     singleOrder: build.query({
//       query: ({ id }) => `/${id}`,
//       providesTags: ["order"],
//     }),
//     updateOrder: build.mutation({
//       query: ({ id, body }) => ({
//         url: `/user/${id}`,
//         method: "PATCH",
//         body,
//       }),
//       invalidatesTags: ["order"],
//     }),
//   }),
// });

// export const {
//   useViewOrderQuery,
//   useSingleOrderQuery,
//   useUpdateOrderMutation,
// } = orderApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:4000/api/v1/order`,
  }),

  tagTypes: ["order"],
  endpoints: (build) => ({
    getOrders: build.query({
      query: () => `/`,
      providesTags: ["order"],
    }),
  }),
});

export const { useGetOrdersQuery } = orderApi;
