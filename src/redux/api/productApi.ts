import { tagTypes } from "../tagTypes/tagTypes";
import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProduct: build.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: [tagTypes.storeProduct],
    }),

    getSingleProductById: build.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.storeProduct],
    }),

    createAProduct: build.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.storeProduct],
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetSingleProductByIdQuery,
  useCreateAProductMutation,
} = productApi;
