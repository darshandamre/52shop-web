import * as yup from "yup";
import { toErrorMap } from "./toErrorMap";

const signupValidationSchema = yup.object({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup.string().min(3).required()
});

const loginValidationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required()
});

const validator = (schema, values) => {
  try {
    schema.validateSync(values, {
      abortEarly: false
    });
  } catch (err) {
    return toErrorMap(err.inner);
  }
};

const signupValidator = values => validator(signupValidationSchema, values);

const loginValidator = values => validator(loginValidationSchema, values);

export { signupValidator, loginValidator };
