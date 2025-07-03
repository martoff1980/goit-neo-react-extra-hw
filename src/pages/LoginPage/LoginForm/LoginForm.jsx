import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, lazy } from 'react';
import {
  authLogIn,
  refreshUser,
  register,
} from '../../../redux/auth/operations';
import { fetchContacts } from '../../../redux/contacts/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../../redux/auth/selectors';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  const initialValues = {
    email: '',
    password: '',
  };

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .required('Required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    if (isLoggedIn) {
      dispatch(refreshUser(values));
      setSubmitting(false);
      return;
    }

    dispatch(authLogIn(values));
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Field
              as={TextField}
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage name="email" component="div" />

            <Field
              as={TextField}
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage name="password" component="div" />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              fullWidth
              sx={{ mt: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
