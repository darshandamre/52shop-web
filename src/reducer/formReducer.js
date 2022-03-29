import { createTouched } from "../utils/createTouched";

export const formReducer = (state, { type, payload, validatorFn }) => {
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
      throw new Error(`invalid form action ${type}`);
  }
};
