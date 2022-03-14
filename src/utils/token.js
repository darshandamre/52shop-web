const tokenName = "token52";

const setToken = token => {
  localStorage.setItem(tokenName, token);
};

const getToken = () => {
  return localStorage.getItem(tokenName);
};

const removeToken = () => {
  return localStorage.removeItem(tokenName);
};

export { setToken, getToken, removeToken };
