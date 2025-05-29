import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/register" >
        Register
      </NavLink>
      <NavLink to="/login">
        Login
      </NavLink>
    </nav>
  );
};

// const styles = {
//   nav: {
//     display: 'flex',
//     gap: '1rem',
//     alignItems: 'center',
//   },
//   link: {
//     textDecoration: 'none',
//     color: '#333',
//     fontWeight: 'bold',
//   },
//   active: {
//     color: '#1976d2',
//   },
// };

export default AuthNav;
