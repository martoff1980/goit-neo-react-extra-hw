import { Box, Typography, Container, Paper, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import LoginForm from '../LoginPage/LoginForm/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const theme = useTheme();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" replace />;
  }

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mt: 4,
          backgroundColor: theme.palette.background.paper,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome Back
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Sign in to access your contact book
          </Typography>

          <LoginForm />

          <Typography variant="body2" sx={{ mt: 2 }}>
            Don't have an account?{' '}
            <Link
              to="/register"
              style={{
                color: theme.palette.primary.main,
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Register now
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
