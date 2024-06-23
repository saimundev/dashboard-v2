import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getProduct: builder.query<IProduct[], string>({
      query: () => `products`,
    }),
  }),
});

export const { useGetProductQuery } = productApi;
