import { configureStore } from '@reduxjs/toolkit'
import { storeApi } from '../services/product'
import themeSlice from './slices/themeSlice'

export const store = configureStore({
  reducer: {
   [storeApi.reducerPath]: storeApi.reducer,
   theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch