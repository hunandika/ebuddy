'use client';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '@/store/auth/actions';
import { RootState, AppDispatch } from '@/store/store';

import {
  Card,
  Stack,
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
  const CardContainer = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '450px',
    },
    boxShadow:
      'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
      boxShadow:
        'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
  }));

  const SigninContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      zIndex: -1,
      inset: 0,
      backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
      backgroundRepeat: 'no-repeat',
      ...theme.applyStyles('dark', {
        backgroundImage:
          'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
      }),
    },
  }));

  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: RootState) => state.auth.loading);

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
    <SigninContainer>
      <CardContainer>
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
            <RadioGroup
              row
              aria-labelledby='gender'
              defaultValue='F'
              name='gender'
            >
              <FormControlLabel value='F' control={<Radio />} label='Female' />
              <FormControlLabel value='M' control={<Radio />} label='Male' />
            </RadioGroup>
          </FormControl>
          <Button type='submit' fullWidth variant='contained' loading={isLoading} disabled={isLoading}>
            Sign up
          </Button>
          <Typography sx={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <Link href='/' variant='body2' sx={{ alignSelf: 'center' }}>
              Sign in
            </Link>
          </Typography>
        </Box>
      </CardContainer>
    </SigninContainer>
  );
}
