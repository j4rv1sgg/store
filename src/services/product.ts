import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({          // <Pokemon, string>
      query: () => `products/`,
    }),
  }),
})

export const { useGetAllProductsQuery } = storeApi