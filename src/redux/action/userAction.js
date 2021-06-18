import setAuthenticationToken from "./setAuthenticationToken";
import {
  SIGNUP_USER,
  LOGIN_USER,
  SET_CURRENT_USER,
  LOGOUT_USER,
} from "./userType";
import jwtDecode from "jwt-decode";
const axios = require("axios");

export const signupUser = (data, history) => {
  console.log("signup data ", data);

  return function (dispatch) {
    const OPTIONS = {
      url: "http://localhost:4200/api/user/signup/",
      data,
      method: "POST",
      headers: { "Content-type": "application/json" },
    };

    axios(OPTIONS)
      .then((res) => {
        console.log(res);
        const message = res.data.message;
        //console.log(message);
        dispatch({
          type: SIGNUP_USER,
          payload: message,
        });

        window.location.href = "/login";
      })
      .catch((err) => console.log(err));
  };
};
//login user

export const loginUser = (data) => {
  console.log("Login data", data);
  return function (dispatch) {
    var OPTIONS = {
      url: "http://localhost:4200/api/user/login",
      method: "POST",
      data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTIONS)
      .then((res) => {
        const message = res.data.message;
        const passMsg = res.data.passMsg;
        // console.log(passMsg);
        if (passMsg === "Password does not match") {
          dispatch({
            type: LOGIN_USER,
            payload: passMsg,
            isLoggedIn: false,
          });
        } else if (message === "Login is successful!") {
          const token = res.data.access_token;
          sessionStorage.setItem("jwtToken", token);
          console.log({ token });
          setAuthenticationToken(token);
          // console.log(jwtDecode(token, { body: true }));
          dispatch(setCurrentUser(jwtDecode(token)));

          dispatch({
            type: LOGIN_USER,
            payload: message,
            isLoggedIn: true,
          });
          window.location.href = "/";
        } else {
          dispatch({
            type: LOGIN_USER,
            payload: message,
            isLoggedIn: false,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

//authentication methods
export const setCurrentUser = (user) => {
  console.log("current user", { user });
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

//user logout
export const userLogout = () => {
  return function (dispatch) {
    sessionStorage.removeItem("jwtToken");
    setAuthenticationToken(false);
    dispatch(setCurrentUser({}));

    dispatch({
      type: LOGOUT_USER,
    });
    window.location.href = "/";
  };
};
