import { useCallback, useReducer } from "react";
import { formReducer } from "../reducer/formReducer";
import { createTouched } from "../utils/createTouched";

// initialInputState is an object of the state of input components
// validaor fn is a function that checks for the input values
// and returns the error in them
export const useForm = (initialInputState, validatorFn) => {
  const [formState, dispatch] = useReducer(formReducer, {
    values: initialInputState,
    errors: validatorFn(initialInputState),
    touched: createTouched(initialInputState, false),
    isSubmitting: false
  });

  const onChange = useCallback(
    e => dispatch({ type: "ON_CHANGE", payload: e.target, validatorFn }),
    [validatorFn]
  );

  const onBlur = useCallback(
    e => dispatch({ type: "ON_BLUR", payload: e.target }),
    []
  );

  const setSubmitting = useCallback(
    trueOrFalse => dispatch({ type: "SET_SUBMITTING", payload: trueOrFalse }),
    []
  );

  const setErrors = useCallback(
    errors => dispatch({ type: "SET_ERRORS", payload: errors }),
    []
  );

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
