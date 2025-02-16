import { createReducer } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { login, register, logout } from './actions';
import { AuthState } from './types';

const initialState: AuthState = {
  token: Cookies.get('authToken') || null,
  isAuthenticated: !!Cookies.get('authToken'),
  loading: false,
  error: null,
  user: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.loading = false;
    })
    .addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
    .addCase(register.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(register.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.loading = false;
    })
    .addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
    .addCase(logout, (state) => {
      state.token = null;
      state.isAuthenticated = false;
      Cookies.remove('authToken');
    });
});

export default authReducer;
