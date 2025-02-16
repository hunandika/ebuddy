import { User } from '@repo/entities/user';
import api from './api';

export const getApi = async (limit: number, page: number) => {
  const response = await api.get('/user', {
    params: {
      limit,
      page,
    },
  });
  return response.data;
};

export const getByIdApi = async (id: string) => {
  const response = await api.get(`/user/${id}`);
  return response.data;
};

export const postApi = async (user: User) => {
  const response = await api.post('/user', {
    ...user,
  });
  return response.data;
};

export const updateApi = async (user: User) => {
  const response = await api.put(`/user/${user.id}`, {
    ...user,
  });
  return response.data;
};

export const deleteApi = async (id: string) => {
  const response = await api.delete(`/user/${id}`);
  return response.data;
};
