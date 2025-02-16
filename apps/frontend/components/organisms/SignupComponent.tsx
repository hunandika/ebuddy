'use client';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { register } from '@/store/auth/actions';
import SignContainer from '@/components/atoms/SignContainer';
import { RootState, AppDispatch } from '@/store/store';
import {
  Typography,
  Box,
  FormControl,
  FormLabel,
  TextField,
  Button,
  Link,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

export default function SignupComponent() {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: RootState) => state.auth.loading);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/users');
    }
  }, [isAuthenticated, router]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    const name: string = data.get('name')?.toString() || '';
    const email: string = data.get('email')?.toString() || '';
    const password: string = data.get('password')?.toString() || '';
    const gender: string = data.get('gender')?.toString() || '';
    const isValidInput = validateInputs(name, email, password);

    if (!isValidInput) {
      event.preventDefault();
      return;
    }
    dispatch(register({ name, email, password, gender }));
  };

  const validateInputs = (name: string, email: string, password: string) => {
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
    if (!password || password.toString().length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }
    return isValid;
  };

  return (
    <SignContainer>
      <Typography
        component='h1'
        variant='h4'
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        Sign up
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
          <FormLabel htmlFor='password'>Password</FormLabel>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name='password'
            placeholder='••••••'
            type='password'
            id='password'
            autoComplete='current-password'
            autoFocus
            required
            fullWidth
            variant='outlined'
            color={passwordError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='gender'>Gender</FormLabel>
          <RadioGroup row aria-labelledby='gender' defaultValue='F' name='gender'>
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
          Sign up
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          Already have an account?{' '}
          <Link href='/' variant='body2' sx={{ alignSelf: 'center' }}>
            Sign in
          </Link>
        </Typography>
      </Box>
    </SignContainer>
  );
}
