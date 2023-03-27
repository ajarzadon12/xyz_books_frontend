import { combineReducers } from "redux";
import BooksReducer from "./booksSlice";

const rootReducer = combineReducers({
  books: BooksReducer,
});

export default rootReducer;
