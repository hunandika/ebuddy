import { User } from '@repo/entities/user';

export interface UserState {
  loading: boolean;
  data: User[] | null;
  error: string | null;
  page: number;
  pageSize: number;
  totalData: number;
  user: User | null;
}
