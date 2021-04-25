import { configureStore } from '@reduxjs/toolkit'
import exerciseReducer from './exercise-menu';

export const store = configureStore({
  reducer: {
    exerciseMenu: exerciseReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch