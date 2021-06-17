import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { setCurrentUser } from "./redux/action/userAction";
import jwt_decode from "jwt-decode";
//import jwt from "jsonwebtoken";
//import { userLogout } from "./redux/action/userAction";
import setAuthenticationToken from "./redux/action/setAuthenticationToken";
// //authentication with jwt expire or not
// if (localStorage.jwtToken) {
//   setAuthenticationToken(localStorage.jwtToken);
//   jwt.verify(localStorage.jwtToken, "secret", function (err, decode) {
//     console.log("Decode", decode);
//     if (err) {
//       store.dispatch(userLogout());
//     } else {
//       console.log("decode", decode);
//       store.dispatch(setCurrentUser(decode));
//     }
//   });
// }
//initial authentication with jwt
if (sessionStorage.jwtToken) {
  setAuthenticationToken(sessionStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt_decode(sessionStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
