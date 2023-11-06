import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/cart",
  }),

  tagTypes: ["cart"],
  endpoints: (build) => ({
    viewCart: build.query({
      query: ({ userId }) => `/view?userId=${userId}`,
      providesTags: ["cart"],
    }),

    addToCart: build.mutation({
      query({ body, productId }) {
        return {
          url: `/create/${productId}`,
          method: "POST",
          body,
        };
      },

      invalidatesTags: ["cart"],
    }),

    increaseCart: build.mutation({
      query({ userId, productId, ...body }) {
        return {
          url: `/increase/${userId}/${productId}`,
          method: "PATCH",
          body,
        };
      },

      invalidatesTags: ["cart"],
    }),

    decreaseCart: build.mutation({
      query({ userId, productId, ...body }) {
        return {
          url: `/decrease/${userId}/${productId}`,
          method: "PATCH",
          body,
        };
      },

      invalidatesTags: ["cart"],
    }),

    removeItemCart: build.mutation({
      query({ userId, productId }) {
        return {
          url: `/delete/${userId}/${productId}`,
          method: "DELETE",
          body,
        };
      },

      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useViewCartQuery,
  useAddToCartMutation,
  useIncreaseCartMutation,
  useDecreaseCartMutation,
  useRemoveItemCartMutation,
} = cartApi;
