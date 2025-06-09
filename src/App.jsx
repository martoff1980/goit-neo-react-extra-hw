import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';

import { fetchContacts } from './redux/contacts/operations';
import { refreshUser } from './redux/auth/operations';
import {
  selectAuth,
  selectIsLoggedIn,
  selectIsRefreshing,
} from './redux/auth/selectors';

import { toast, Toaster } from 'react-hot-toast';

import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const ContactForm = lazy(() => import('./components/СontactForm/ContactForm'));
const App = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    if (!isRefreshing && isLoggedIn) {
      toast.success('User authorizated! ✅');
    }
  }, [isRefreshing, isLoggedIn]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(refreshUser(token));
    }
  }, [dispatch]);

  // if (isRefreshing) {
  //   return <p>Завантаження...</p>;
  // }

  return (
    <>
      <Toaster position="buttom-right"></Toaster>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={RegistrationPage}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={LoginPage} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={ContactsPage} />
            }
          />
          <Route
            path="/addcontact"
            element={
              <PrivateRoute redirectTo="/login" component={ContactForm} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
