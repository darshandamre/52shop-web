import { createContext, useContext, useEffect, useReducer } from "react";
import { API } from "../utils/constants";
import { getToken } from "../utils/token";

const UserContext = createContext();

const initialState = {
  user: { id: "", name: "", email: "" },
  wishlist: [],
  cart: []
};

const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_USER_INFO":
      const { wishlist, cart, ...user } = payload.user;
      return { user, wishlist, cart };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${API}/user/get-info`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      });
      const { data } = await response.json();
      if (data) {
        dispatch({ type: "SET_USER_INFO", payload: data });
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
