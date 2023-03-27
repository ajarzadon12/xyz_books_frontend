import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from 'axios';
import { replace } from 'lodash';

const apiClient = axios.create({baseURL: 'http://localhost:3001'});
const BOOKS_SEARCH_API = '/api/v1/books/:id';

const booksAdapter = createEntityAdapter();

const initialState = booksAdapter.getInitialState({
  searchStatus: "idle",
  searchResult: {},
  error: null,
});

export const searchBook = createAsyncThunk(
  "books/search",
  async ({ isbn13 }, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(replace(BOOKS_SEARCH_API, ':id', isbn13));
      return response.data;
    } catch (err) {
      return rejectWithValue({
        ...err.response.data,
        status: err.response.status,
      });
    }
  }
);

const booksSlice = createSlice({
  name: "booksSlice",
  initialState,
  reducers: {
    booksReloaded: (state) => {
      state.searchResult = {},
      state.searchStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchBook.pending, (state) => {
      state.searchStatus = "loading";
    });

    builder.addCase(searchBook.fulfilled, (state, action) => {
      state.searchStatus = "succeeded";
      state.searchResult = action.payload;
    });

    builder.addCase(searchBook.rejected, (state, action) => {
      state.searchStatus = "failed";
    });
  },
});

export const selectors = booksAdapter.getSelectors(state => state.books);
export const getSearchStatus = (state) => state.books.searchStatus;

export default booksSlice.reducer;
