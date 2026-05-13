import * as yup from 'yup';

const nameRegex = /^[a-zA-ZğüşöçıİĞÜŞÖÇ0-9\s'-]+$/;

export const registerValidationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name must be at most 32 characters')
    .matches(nameRegex, 'Name contains invalid characters')
    .required('Name is required'),

  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required'),

  password: yup
    .string()
    .trim()
    .min(6, 'Password must be at least 6 characters')
    .max(128, 'Password must be at most 128 characters')
    .required('Password is required'),
});

export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required'),

  password: yup
    .string()
    .trim()
    .min(6, 'Password must be at least 6 characters')
    .max(128, 'Password must be at most 128 characters')
    .required('Password is required'),
});
