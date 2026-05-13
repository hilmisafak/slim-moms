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

export const calculatorValidationSchema = yup.object({
  height: yup
    .number()
    .typeError('Height must be a number')
    .required('Height is required')
    .min(100, 'Height must be at least 100 cm')
    .max(250, 'Height must be at most 250 cm'),

  age: yup
    .number()
    .typeError('Age must be a number')
    .required('Age is required')
    .min(1, 'Age must be at least 1')
    .max(120, 'Age must be at most 120'),

  currentWeight: yup
    .number()
    .typeError('Current weight must be a number')
    .required('Current weight is required')
    .min(20, 'Current weight must be at least 20 kg')
    .max(500, 'Current weight must be at most 500 kg'),

  desiredWeight: yup
    .number()
    .typeError('Desired weight must be a number')
    .required('Desired weight is required')
    .min(20, 'Desired weight must be at least 20 kg')
    .max(500, 'Desired weight must be at most 500 kg'),

  bloodType: yup.string().required('Blood type is required'),
});
