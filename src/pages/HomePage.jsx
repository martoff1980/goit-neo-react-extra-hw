import { Button, Box, useTheme } from '@mui/material';
import { FaAddressBook } from 'react-icons/fa';

const HomePage = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        component="div"
        variant="h1"
        sx={{
          display: 'flex',
          p: 3,
          justifyContent: 'center',
          textAlign: 'center',
          backgroundColor: theme.palette.background.default,
          fontSize: '36px',
        }}
      >
        Contact manager welcome page
        <FaAddressBook
          style={{ marginTop: '5px', marginLeft: '10px' }}
          size={40}
          color="#2c3e50"
        />
      </Box>
    </>
  );
};

export default HomePage;
