import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/slice';
import { selectAuth } from '../../../redux/auth/selectors';
import { persistor } from '../../../redux/store';
import { Button, Box } from '@mui/material';
import { useEffect } from 'react';

import toast from 'react-hot-toast';

const UserMenu = () => {
  const dispatch = useDispatch();
  const selectUser = useSelector(selectAuth);
  const user = selectUser.email;

  const handleLogOut = () => {
    dispatch(logout());
    persistor.purge();
    // alert('You have been logged out successfully!');
    toast.success('You have been logged out successfully! ✅');
  };

  return (
    <Box
      className="user-menu"
      component={'div'}
      sx={{ fontSize: '20px', fontWeight: '500' }}
    >
      <Box component={'span'} sx={{ marginRight: '10px' }}>
        Welcome, {user}!
      </Box>
      <Button
        sx={{ color: 'black', backgroundColor: 'lightgray' }}
        onClick={() => handleLogOut()}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
