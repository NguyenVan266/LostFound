import React, { createContext, useContext, useEffect, useReducer } from "react";
import { AUTH_FAILED, AUTH_SUCCESS } from "./action";
import { getProfile, loginAPI, setAuthHeader } from "./api/auth";
import Reducer from "./Reducer";

const AppContext = createContext(null);

export const initState = {
  user: null,
  isLogin: false,
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initState);
  const loadUser = async () => {
    setAuthHeader(localStorage["token"]);
    const response = await getProfile();
    if (response.success) {
      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          user: response.data,
        },
      });
    } else {
      dispatch({
        type: AUTH_FAILED,
      });
      localStorage.clear();
      setAuthHeader(null);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);
  
  const handleLogin = async (data) => {
    const response = await loginAPI(data);
    console.log(response);
    if (response.success) {
      localStorage.setItem("token", response.token);
      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          user: response.data,
        },
      });
    }
  };

  const handleLogout = () => {
    dispatch({
      type: AUTH_FAILED,
    });
    localStorage.removeItem("token");
  };

  const data = {
    state,
    dispatch,
    handleLogin,
    handleLogout,
  };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
