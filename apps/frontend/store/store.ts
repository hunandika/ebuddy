import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/reducer';
import authReducer from './auth/reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
