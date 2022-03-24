const tokenName = "token52";

const setToken = token => localStorage.setItem(tokenName, token);

const getToken = () => localStorage.getItem(tokenName);

const removeToken = () => localStorage.removeItem(tokenName);

export { setToken, getToken, removeToken };
