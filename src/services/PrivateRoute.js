import React from "react";
import AuthService from "./AuthenticationService";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Add your own authentication on the below line.
  const isLoggedIn = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/register", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
