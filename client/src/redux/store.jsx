import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice/index.jsx'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})