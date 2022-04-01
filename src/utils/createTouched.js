export const createTouched = (object, bool) => {
  let result = {};
  for (const key in object) {
    result = {
      ...result,
      [key]: bool
    };
  }
  return result;
};
