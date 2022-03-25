import { useCallback, useReducer } from "react";

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

const formReducer = (state, { type, payload, validatorFn }) => {
  switch (type) {
    case "ON_CHANGE":
      const newValues = {
        ...state.values,
        [payload.name]: payload.value
      };
      return {
        ...state,
        values: newValues,
        errors: validatorFn(newValues)
      };

    case "ON_BLUR":
      const { touched } = state;
      if (touched[payload.name]) {
        return state;
      }
      return {
        ...state,
        touched: {
          ...touched,
          [payload.name]: true
        }
      };

    case "SET_SUBMITTING":
      return {
        ...state,
        isSubmitting: payload,
        touched: payload ? createTouched(state.values, true) : state.touched
      };

    case "SET_ERRORS":
      return {
        ...state,
        errors: payload
      };

    default:
      throw new Error(`invalid action ${type}`);
  }
};

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
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
