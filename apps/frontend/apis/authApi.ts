import api from './api';

export const verifyApi = async () => {
  const response = await api.post('/auth/verify');
  return response.data;
};

export const registerApi = async ({
  id,
  email,
  name,
  password,
  gender,
}: {
  id: string;
  email: string;
  name: string;
  password: string;
  gender: string;
}) => {
  const response = await api.post('/auth/register', {
    id,
    email,
    name,
    password,
    gender,
  });
  return response.data;
};
