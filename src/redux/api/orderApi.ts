import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllOrder: build.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllOrderQuery } = orderApi;
