import { useState } from "react";

const createTouched = (object, bool) => {
  let result = {};

  for (const key in object) {
    result = {
      ...result,
      [key]: bool
    };
  }

  return result;
};

// initialInputState is an object of the state of input components
// validaor fn is a function that checks for the input values
// and returns the error in them
export const useForm = (initialInputState, validatorFn) => {
  const [formState, setFormState] = useState({
    values: initialInputState,
    errors: validatorFn(initialInputState),
    touched: createTouched(initialInputState, false),
    isSubmitting: false
  });

  const onChange = e =>
    setFormState(({ values: prevValues, ...prevState }) => {
      const newValues = {
        ...prevValues,
        [e.target.name]: e.target.value
      };

      return {
        ...prevState,
        values: newValues,
        errors: validatorFn(newValues)
      };
    });

  const onBlur = e =>
    setFormState(prevState => {
      const { touched: prevTouched } = prevState;

      if (prevTouched[e.target.name]) {
        return prevState;
      }

      return {
        ...prevState,
        touched: {
          ...prevTouched,
          [e.target.name]: true
        }
      };
    });

  const setSubmitting = functionOrBoolean =>
    setFormState(({ isSubmitting, touched, ...prevState }) => {
      const result =
        typeof functionOrBoolean === "function"
          ? functionOrBoolean(isSubmitting)
          : functionOrBoolean;

      return {
        ...prevState,
        isSubmitting: result,
        touched: result ? createTouched(initialInputState, true) : touched
      };
    });

  const setErrors = errors =>
    setFormState(prevState => ({
      ...prevState,
      errors
    }));

  const { values, errors, touched, isSubmitting } = formState;

  return {
    values,
    errors,
    fields: Object.entries(values).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          value,
          error: touched[key] && errors?.[key] ? errors[key] : "",
          name: key,
          onChange,
          onBlur
        }
      }),
      {}
    ),
    isSubmitting,
    setSubmitting,
    setErrors
  };
};
