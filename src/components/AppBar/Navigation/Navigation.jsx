import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Box, useTheme } from '@mui/material';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
const Navigation = () => {
  const theme = useTheme();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Style for active NavLink
  const activeStyle = {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.dark,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  };

  return (
    <Box component="nav" sx={{ display: 'flex', gap: 1 }}>
      <Button
        component={NavLink}
        to="/"
        sx={{
          color: theme.palette.primary.contrastText,
          '&.active': activeStyle,
        }}
      >
        Home
      </Button>

      {isLoggedIn && (
        <Button
          component={NavLink}
          to="/contacts"
          sx={{
            color: theme.palette.primary.contrastText,
            '&.active': activeStyle,
          }}
        >
          Contacts
        </Button>
      )}
    </Box>
  );
};

export default Navigation;
