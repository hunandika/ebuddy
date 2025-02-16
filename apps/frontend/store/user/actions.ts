import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApi, getByIdApi, updateApi, deleteApi, postApi } from '@/apis/userApi';
import { User } from '@repo/entities/user';
import { RootState } from '@/store/store';

export const getUser = createAsyncThunk(
  'user/get',
  async ({ limit, page }: { limit: number; page: number }, { rejectWithValue }) => {
    try {
      const { data, meta } = await getApi(limit, page + 1);
      return { users: data as User[], meta };
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Get data failed');
    }
  },
);

export const getByIdUser = createAsyncThunk(
  'user/getById',
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const { data } = await getByIdApi(id);
      return { user: data as User };
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Delete data failed');
    }
  },
);

export const editUser = createAsyncThunk(
  'user/edit',
  async (
    { id, name, email, gender }: { id: string; name: string; email: string; gender: string },
    { rejectWithValue },
  ) => {
    try {
      await updateApi({ id, name, email, gender } as User);
      return;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Edit data failed');
    }
  },
);

export const createUser = createAsyncThunk(
  'user/create',
  async (
    { name, email, gender }: { name: string; email: string; gender: string },
    { rejectWithValue },
  ) => {
    try {
      await postApi({ name, email, gender } as User);
      return;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Edit data failed');
    }
  },
);

export const deleteUser = createAsyncThunk(
  'user/delete',
  async ({ id }: { id: string }, { dispatch, rejectWithValue, getState }) => {
    try {
      await deleteApi(id);
      const state = getState() as RootState;
      dispatch(getUser({ limit: 10, page: state.user.page }));
      return;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Delete data failed');
    }
  },
);
