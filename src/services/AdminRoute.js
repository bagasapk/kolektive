import React from "react";
import AuthService from "./AuthenticationService";
import { Redirect, Route } from "react-router-dom";

const AdminRoute = ({ component: Component, ...rest }) => {
  var Jwt = require("jsonwebtoken");
  // Add your own authentication on the below line.
  const isLoggedIn = localStorage.getItem("token");
  var decode1 = Jwt.decode(isLoggedIn);
  console.log(decode1);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AdminRoute;
