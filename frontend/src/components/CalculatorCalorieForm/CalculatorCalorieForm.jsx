import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { calculateDailyCalories } from '../../redux/calculator/calculatorOperations';
import { selectCalculatorIsLoading } from '../../redux/calculator/calculatorSelectors';
import { calculatorValidationSchema } from '../../utils/validationSchema';
import css from './CalculatorCalorieForm.module.css';

const STORAGE_KEY = 'calculatorFormValues';

const defaultValues = {
  height: '',
  age: '',
  currentWeight: '',
  desiredWeight: '',
  bloodType: '',
};

const FormPersistence = () => {
  const { values } = useFormikContext();

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
  }, [values]);

  return null;
};

const getInitialValues = () => {
  const storedValues = localStorage.getItem(STORAGE_KEY);

  if (!storedValues) {
    return defaultValues;
  }

  try {
    return {
      ...defaultValues,
      ...JSON.parse(storedValues),
    };
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return defaultValues;
  }
};

const CalculatorCalorieForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectCalculatorIsLoading);
  const [initialValues] = useState(getInitialValues);

  const handleSubmit = async (values) => {
    try {
      await dispatch(
        calculateDailyCalories({
          height: Number(values.height),
          age: Number(values.age),
          currentWeight: Number(values.currentWeight),
          desiredWeight: Number(values.desiredWeight),
          bloodType: Number(values.bloodType),
        }),
      ).unwrap();

      localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    } catch {
      // Error toast is handled in the async operation.
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={calculatorValidationSchema}
      onSubmit={handleSubmit}
      validateOnBlur={true}
      validateOnChange={true}
    >
      {({ isValid, values }) => {
        const isFormFilled =
          values.height &&
          values.age &&
          values.currentWeight &&
          values.desiredWeight &&
          values.bloodType;

        return (
          <Form className={css.form}>
            <FormPersistence />

            <div className={css.fields}>
              <div className={css.col}>
                <div className={css.field}>
                  <label className={css.label}>Height *</label>
                  <Field className={css.input} name="height" type="number" />
                  <ErrorMessage
                    name="height"
                    component="p"
                    className={css.error}
                  />
                </div>

                <div className={css.field}>
                  <label className={css.label}>Age *</label>
                  <Field className={css.input} name="age" type="number" />
                  <ErrorMessage
                    name="age"
                    component="p"
                    className={css.error}
                  />
                </div>

                <div className={css.field}>
                  <label className={css.label}>Current weight *</label>
                  <Field
                    className={css.input}
                    name="currentWeight"
                    type="number"
                  />
                  <ErrorMessage
                    name="currentWeight"
                    component="p"
                    className={css.error}
                  />
                </div>
              </div>

              <div className={css.col}>
                <div className={css.field}>
                  <label className={css.label}>Desired weight *</label>
                  <Field
                    className={css.input}
                    name="desiredWeight"
                    type="number"
                  />
                  <ErrorMessage
                    name="desiredWeight"
                    component="p"
                    className={css.error}
                  />
                </div>

                <div className={css.bloodTypeGroup}>
                  <p className={css.bloodTypeLabel}>Blood type *</p>
                  <div className={css.radioGroup}>
                    {[1, 2, 3, 4].map((type) => (
                      <label key={type} className={css.radioLabel}>
                        <Field
                          className={css.radioInput}
                          type="radio"
                          name="bloodType"
                          value={String(type)}
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                  <ErrorMessage
                    name="bloodType"
                    component="p"
                    className={css.error}
                  />
                </div>
              </div>
            </div>

            <button
              className={css.button}
              type="submit"
              disabled={!isFormFilled || !isValid || isLoading}
            >
              {isLoading ? 'Calculating...' : 'Start losing weight'}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CalculatorCalorieForm;
