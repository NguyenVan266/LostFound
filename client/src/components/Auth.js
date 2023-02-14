import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../Context";

const Auth = () => {
  const {
    state: { user, isLogin },
  } = useAppContext();
  let body;
  if (!isLogin) {
    body = <Outlet />;
  } else {
    switch (user?.role) {
      case 1:
        body = <Navigate to="/admin" />;
        break;
      default:
        body = <Navigate to="/home" />;

  }
}
  return <>{body}</>;
};

export default Auth;
