import React from "react";
import PropTypes from "prop-types";
import { useAppContext } from "../Context";
import { Navigate, Outlet } from "react-router-dom";

const Required = (props) => {
  const {
    state: { user, isLogin },
  } = useAppContext();
  
  if (!isLogin) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

Required.propTypes = {};

export default Required;
