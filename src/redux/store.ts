import { configureStore } from "@reduxjs/toolkit";
import filterSlice, { filterState } from "./slices/filterSlice";
import { authReducer } from "./slices/auth";
import { typesReducer } from "./slices/types";
import { seasonsReducer } from "./slices/seasons";
import { yarnsReducer } from "./slices/yarns";
import { productsReducer } from "./slices/products";
export const store = configureStore({
  reducer: {
    filter: filterSlice,
    auth: authReducer,
    types:typesReducer,
    seasons:seasonsReducer,
    yarns:yarnsReducer,
    products:productsReducer
  },
  middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export interface reducer{
  filter:filterState,
} 
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
