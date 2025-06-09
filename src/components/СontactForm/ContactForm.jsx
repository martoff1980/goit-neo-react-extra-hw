import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
  useTheme,
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Navigate, Link } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import './ContactForm.css';

const ContactForm = () => {
  const theme = useTheme();
  const initialValues = { name: '', number: '' };

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    dispatch(addContact({ name, number }));
    resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required('Required'),
    number: Yup.string().min(3).max(50).required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className="contact-form">
        <label>
          Name:
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Number:
          <Field name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button className="add-button" type="submit">
          Add Contact
        </button>
        <Link to="/contacts" style={{ color: theme.palette.primary.main }}>
          <Button
            className="back-button"
            sx={{
              mt: 2,
              mb: 2,
              width: '300px',
              color: theme.palette.primary.contrastText,
              backgroundColor: theme.palette.primary.light,
            }}
            variant="contained"
          >
            Back
          </Button>
        </Link>
      </Form>
    </Formik>
  );
};

export default ContactForm;
