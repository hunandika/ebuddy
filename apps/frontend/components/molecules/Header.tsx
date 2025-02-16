'use client';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

export default function Header({ handleLogout }) {
  return (
    <Stack
      direction='row'
      sx={{
        display: { xs: 'flex', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'center', md: 'center' },
        justifyContent: 'flex-end',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        padding: 2,
      }}
      spacing={2}
    >
      <Button variant='contained' color='primary' size='small' onClick={handleLogout}>
        Logout
      </Button>
    </Stack>
  );
}
