export const toErrorMap = errors => {
  const errorMap = {};

  errors.forEach(({ field, message, path }) => {
    errorMap[field || path] = message;
  });

  return errorMap;
};
