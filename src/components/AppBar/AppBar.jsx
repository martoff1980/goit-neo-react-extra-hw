import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav/AuthNav';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MuiAppBar className="AppBar" position="static">
      <Toolbar className="AppBar-ToolBar">
        <Navigation />
        <Typography
          variant="h6"
          component="div"
          sx={{ margin: '0 auto', flexGrow: 1 }}
        >
          Phonebook
        </Typography>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
