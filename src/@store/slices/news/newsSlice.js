import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 0,
  news: [],
  isLoading: false
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        startLoadingNews:(state) => {
          state.isLoading = true;
        },
        setNews:(state, action) => {
          state.isLoading = false;
          state.page = action.payload.page;
          state.news = action.payload.news;
        }
    },
})

export const { startLoadingNews, setNews } = newsSlice.actions;