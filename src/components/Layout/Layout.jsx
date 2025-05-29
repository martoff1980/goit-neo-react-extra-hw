import { Outlet } from 'react-router-dom';
import { Box, Container, CssBaseline } from '@mui/material';
import AppBar from '../AppBar/AppBar';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { CircularProgress } from '@mui/material';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';

const Layout = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          bgcolor: 'background.default',
        }}
      >
        <AppBar />
        
        <Container
          component="main"
          maxWidth="lg"
          sx={{
            flexGrow: 1,
            py: 4,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {isRefreshing ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <CircularProgress size={60} />
            </Box>
          ) : (
            <Outlet />
          )}
        </Container>

        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1" align="center">
              My Contact Book © {new Date().getFullYear()}
            </Typography>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Layout;