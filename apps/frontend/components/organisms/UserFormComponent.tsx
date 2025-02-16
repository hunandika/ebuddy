'use client';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { logout } from '@/store/auth/actions';
import { getByIdUser, editUser, createUser } from '@/store/user/actions';
import { useRouter } from 'next/navigation';
import Header from '@/components/molecules/Header';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import FormContainer from '@/components/atoms/FormContainer';

export default function UserFormComponent({ id }: { id?: string }) {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const isLoading = useSelector((state: RootState) => state.user.loading);
  const userData = useSelector((state: RootState) => state.user.user);

  const handleLogout = () => {
    dispatch(logout());
    router.replace('/');
  };

  useEffect(() => {
    if (id) {
      dispatch(getByIdUser({ id }));
    }
  }, [dispatch, id]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name: string = data.get('name')?.toString() || '';
    const email: string = data.get('email')?.toString() || '';
    const gender: string = data.get('gender')?.toString() || '';
    const isValidInput = validateInputs(name, email);

    if (!isValidInput) {
      return;
    }

    if (id) {
      dispatch(editUser({ id, name, email, gender })).then(() => {
        router.replace('/users');
      });
      return;
    }
    dispatch(createUser({ name, email, gender })).then(() => {
      router.replace('/users');
    });
  };

  const validateInputs = (name: string, email: string) => {
    let isValid = true;
    if (!name) {
      setNameError(true);
      setNameErrorMessage('Please enter a valid full name');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }
    if (!email || !/\S+@\S+\.\S+/.test(email.toString())) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    return isValid;
  };

  return (
    <>
      <Header handleLogout={handleLogout} />
      <FormContainer>
        <Typography
          component='h1'
          variant='h4'
          sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
        >
          {id ? 'Edit User' : 'Create User'}
        </Typography>
        <Box
          component='form'
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <TextField
              defaultValue={userData?.email}
              error={emailError}
              helperText={emailErrorMessage}
              id='email'
              type='email'
              name='email'
              placeholder='your@email.com'
              autoComplete='email'
              autoFocus
              required
              fullWidth
              variant='outlined'
              color={emailError ? 'error' : 'primary'}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='name'>Fullname</FormLabel>
            <TextField
              defaultValue={userData?.name}
              error={nameError}
              helperText={nameErrorMessage}
              id='name'
              type='text'
              placeholder='Fullname'
              name='name'
              autoFocus
              required
              fullWidth
              variant='outlined'
              color={nameError ? 'error' : 'primary'}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='gender'>Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby='gender'
              defaultValue={userData?.gender || 'F'}
              name='gender'
            >
              <FormControlLabel value='F' control={<Radio />} label='Female' />
              <FormControlLabel value='M' control={<Radio />} label='Male' />
            </RadioGroup>
          </FormControl>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            loading={isLoading}
            disabled={isLoading}
          >
            Simpan
          </Button>
        </Box>
      </FormContainer>
    </>
  );
}
