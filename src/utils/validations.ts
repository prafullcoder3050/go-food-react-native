import * as yup from 'yup';
import regex from './regex';

export const loginSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      regex.validPassword,
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    ),
});

export const signupSchema = yup.object({
  name: yup.string().required('Name is required').trim(),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      regex.validPassword,
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    ),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});
