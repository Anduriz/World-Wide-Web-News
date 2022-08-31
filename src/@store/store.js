import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth/authSlice'
import { newsSlice } from './slices/news/newsSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    news: newsSlice.reducer
  },
})