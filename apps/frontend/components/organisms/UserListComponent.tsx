'use client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { logout } from '@/store/auth/actions';
import { getUser, deleteUser } from '@/store/user/actions';
import { useRouter } from 'next/navigation';
import Table from '@/components/molecules/Table';
import Header from '@/components/molecules/Header';
import { Button } from '@mui/material';
import ActionContainer from '@/components/atoms/ActionContainer';

export default function DashboardComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const loading = useSelector((state: RootState) => state.user.loading);
  const userRows = useSelector((state: RootState) => state.user.data);
  const page = useSelector((state: RootState) => state.user.page);
  const pageSize = useSelector((state: RootState) => state.user.pageSize);
  const totalData = useSelector((state: RootState) => state.user.totalData);

  const handleLogout = () => {
    dispatch(logout());
    router.replace('/');
  };

  const handleLoadData = (pagination) => {
    const page = pagination.page || 0;
    dispatch(getUser({ limit: pageSize, page }));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteUser({ id }));
  };

  const handleCreate = () => {
    router.push('/users/create');
  }

  return (
    <>
      <Header handleLogout={handleLogout} />
      <ActionContainer>
        <Button variant='contained' size='small' onClick={handleLoadData}>
          Load Data
        </Button>
        <Button variant='contained' size='small' onClick={handleCreate}>
          Create
        </Button>
      </ActionContainer>
      <Table
        rows={userRows}
        pagination={{
          page,
          pageSize,
          totalData,
        }}
        loading={loading}
        handleLoadData={handleLoadData}
        handleDelete={handleDelete}
      />
    </>
  );
}
