import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors';
import { Button, Box, useTheme } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import ContactList from '../components/ContactList/ContactList';
// import SearchBox from '../components/SearchBox/SearchBox';
import SearchBox3 from '../components/SearchBox3/SearchBox3';

const ContactsPage = () => {
  const theme = useTheme();

  const isAllowed = useSelector(selectIsLoggedIn);
  const isRefreshed = useSelector(selectIsRefreshing);

  return (
    <>
      <Box
        component="div"
        variant="h1"
        sx={{ fontSize: '26px', fontWeight: '600' }}
      >
        ContactPage
      </Box>

      {isAllowed && (
        <>
          <Box
            component="div"
            style={{
              display: 'flex',
              direction: 'column',
              alignItems: 'flex-end',
            }}
          >
            {/* <SearchBox /> */}
            <SearchBox3 />
            <Box component="div" sx={{ ml: '400px', mb: '25px' }}>
              <Link
                to="/addcontact"
                component={NavLink}
                style={{
                  textDecoration: 'none',
                }}
              >
                <Button
                  sx={{
                    color: theme.palette.primary.contrastText,
                    backgroundColor: theme.palette.primary.light,
                  }}
                >
                  Add Contacts
                </Button>
              </Link>
            </Box>
          </Box>
          <ContactList />
        </>
      )}
    </>
  );
};

export default ContactsPage;
