import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Box, useTheme } from '@mui/material';

const AuthNav = () => {
  const theme = useTheme();

  // Style for active NavLink
  const activeStyle = {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.dark,
    '&:hover': {
      backgroundColor: theme.palette.info.dark,
    },
  };

  return (
    <Box component="nav" sx={{ display: 'flex', gap: 1 }}>
      <Button
        component={NavLink}
        to="/register"
        sx={{
          backgroundColor: theme.palette.info.light,
          color: theme.palette.primary.contrastText,
          '&.active': activeStyle,
        }}
      >
        Register
      </Button>

      <Button
        component={NavLink}
        to="/login"
        sx={{
          backgroundColor: theme.palette.success.light,
          color: theme.palette.primary.contrastText,
          '&.active': activeStyle,
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default AuthNav;
