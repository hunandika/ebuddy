import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/reducer';
import userReducer from './user/reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
