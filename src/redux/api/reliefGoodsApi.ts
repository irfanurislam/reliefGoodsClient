import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reliefGoodsApi = createApi({
  reducerPath: "reliefGoodsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getReliefGoods: builder.query<unknown, void>({
      query: () => "/relief-goods",
    }),
    addReliefGood: builder.mutation<void, any>({
      query: (newGood) => ({
        url: "/relief-goods",
        method: "POST",
        body: newGood,
      }),
    }),
  }),
});

export const { useGetReliefGoodsQuery, useAddReliefGoodMutation } =
  reliefGoodsApi;
