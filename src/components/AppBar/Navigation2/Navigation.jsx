import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav style={styles.nav}>
      <NavLink to="/register" style={styles.link} activeStyle={styles.active}>
        Register
      </NavLink>
      <NavLink to="/login" style={styles.link} activeStyle={styles.active}>
        Login
      </NavLink>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
  active: {
    color: '#1976d2',
  },
};

export default AuthNav;
