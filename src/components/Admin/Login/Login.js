import firebase from "firebase/app";
import "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import React from "react";
import firebaseConfig from "./firebase.config";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

//firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();
export const AuthProvider = (props) => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}> {props.children} </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);

export const AdminPrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/admin-login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const Auth = () => {
  const [user, setUser] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const currUser = user;
        console.log(user);
        setUser(currUser);
      }
    });
  }, []);

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then((res) => setUser(null));
  };
  //google sign In
  const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        setSuccess(true);
        window.history.back();
      })
      .catch((err) => setUser({ err: err.message }));
  };

  return {
    success,
    user,
    signOut,
    googleSignIn,
  };
};
export default Auth;
