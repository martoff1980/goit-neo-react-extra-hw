import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute'
// import ContactForm from './components/contactForm/ContactForm';
// import SearchBox from './components/searchBox/SearchBox';
// import ContactList from './components/ContactList/ContactList';
import {logIn, fetchContacts } from './redux/contacts/operations';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

  const App = () => {
  const dispatch = useDispatch();

  // const loginData = {
  //     email: "8900876@mail.com",
  //     password: "examplepwd12345",
  //   };

  // useEffect(() => {
  //   dispatch(logIn(loginData));
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/contacts"
        element={
          <PrivateRoute component={ContactsPage} redirectTo="/login" />
        }
      />
       <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts">
              <LoginPage />
            </RestrictedRoute>
          }
        />
       <Route path='/register' element={<RegistrationPage />}/>
    </Routes>
    
      {/* <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div> */}
    </>
  );
};

export default App;
