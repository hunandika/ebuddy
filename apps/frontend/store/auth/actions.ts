import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '@/config/firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import Cookies from 'js-cookie';
import { verifyApi, registerApi } from '@/apis/authApi';
import { User } from '@repo/entities/user';

export const logout = createAction('auth/logout');
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();
      Cookies.set('authToken', token, { expires: 1 });

      const { data } = await verifyApi();
      return { token, user: data.data as User };
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async (
    {
      email,
      name,
      password,
      gender,
    }: { email: string; name: string; password: string; gender: string },
    { rejectWithValue },
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const token = await userCredential.user.getIdToken();
      Cookies.set('authToken', token, { expires: 1 });

      const { data } = await registerApi({
        id: userCredential.user.uid,
        email,
        name,
        password,
        gender,
      });
      return { token, user: data.data as User };
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  },
);
