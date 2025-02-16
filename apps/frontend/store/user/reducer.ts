import { createReducer } from '@reduxjs/toolkit';
import { getUser, getByIdUser, createUser, editUser, deleteUser } from './actions';
import { UserState } from './types';

const initialState: UserState = {
  loading: false,
  error: null,
  data: null,
  page: 0,
  pageSize: 10,
  totalData: 0,
  user: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getUser.fulfilled, (state, action) => {
      state.data = action.payload.users;
      state.totalData = action.payload.meta.totalData;
      state.page = action.payload.meta.page - 1;
      state.pageSize = action.payload.meta.limit;
      state.loading = false;
    })
    .addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })

    .addCase(getByIdUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getByIdUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.loading = false;
    })
    .addCase(getByIdUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })

    .addCase(createUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(createUser.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    })
    .addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })

    .addCase(editUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(editUser.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    })
    .addCase(editUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })

    .addCase(deleteUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteUser.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    })
    .addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
});

export default authReducer;
