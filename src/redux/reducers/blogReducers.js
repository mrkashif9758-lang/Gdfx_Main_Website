import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const BlogReducer = createSlice({
  name: "blog",
  initialState,
  reducers: {
    GetAllBlogRequest: (state) => {
      state.loading = true;
    },
    GetAllBlogSuccess: (state, action) => {
      state.loading = false;
      state.blogs = action.payload.blogs;
    },
    GetAllBlogFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { GetAllBlogFail, GetAllBlogRequest, GetAllBlogSuccess } =
  BlogReducer.actions;

export default BlogReducer.reducer;
