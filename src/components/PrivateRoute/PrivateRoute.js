import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

// sessionStorage.getItem("token")
const PrivateRoute = ({ children, ...rest }) => {
  const email = useSelector((state) => state.user.loggedInUserInfo.email);
  console.log("private route email: " + email);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
