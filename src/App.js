import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Project from "./components/Projects/Project";
import Navigation from "./components/Admin/Navigation/Navigation";
import AddService from "./components/Admin/AddService/AddService";
import ManageService from "./components/Admin/ManageService/ManageService";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";

//authentication with jwt expire or not

function App() {
  // if (localStorage.jwtToken) {
  //   setAuthenticationToken(localStorage.jwtToken);
  //   jwtToken.verify(localStorage.jwtToken, "secret", function (err, decode) {
  //     console.log("Decode", decode);
  //     if (err) {
  //       store.dispatch(userLogout());
  //     } else {
  //       console.log(decode);
  //       store.dispatch(setCurrentUser(decode));
  //     }
  //   });
  // }

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar></Navbar>
            <Banner></Banner>
            <Project></Project>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
          </Route>

          <Route path="/sign-up">
            <Navbar></Navbar>
            <SignUp />
            <Footer></Footer>
          </Route>

          <Route path="/login">
            <Navbar></Navbar>
            <Login />
            <Footer></Footer>
          </Route>

          <Route path="/admin">
            <Navigation></Navigation>
          </Route>
          <Route path="/admin-add-service">
            <Navigation></Navigation>
            <AddService></AddService>
          </Route>
          <Route path="/admin-manage-service">
            <Navigation></Navigation>
            <ManageService></ManageService>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
