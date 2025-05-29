import { Box, Typography, Container, Paper, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate ,Link} from 'react-router-dom';
import RegistrationForm from  './RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  const theme = useTheme();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
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
            Create an Account
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Join our contact management system to keep all your important
            contacts in one place.
          </Typography>

          <RegistrationForm />

          <Typography variant="body2" sx={{ mt: 2 }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: theme.palette.primary.main }}>
              Log in
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegistrationPage;
