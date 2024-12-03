import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../types'

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], null>({         
      query: () => `products/`,
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    })
  }),
})

export const { useGetAllProductsQuery, useGetProductByIdQuery } = storeApi