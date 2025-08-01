import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './jobSlice';

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});

// TypeScript types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;