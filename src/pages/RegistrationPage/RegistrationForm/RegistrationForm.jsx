import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from  '../../../redux/auth/operations'; 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(7, 'Must be at least 7 characters')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Field
            as={TextField}
            label="Name"
            type="text"
            name="name"
            variant="outlined"
            fullWidth
          />
          <ErrorMessage name="name" component="div" />

          <Field
            as={TextField}
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            fullWidth
          />
          <ErrorMessage name="email" component="div" />

          <Field
            as={TextField}
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            fullWidth
          />
          <ErrorMessage name="password" component="div" />

          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
