import { configureStore } from '@reduxjs/toolkit'
import { newsSlice } from './slices/news/newsSlice'

export const store = configureStore({
  reducer: {
    news: newsSlice.reducer
  },
})