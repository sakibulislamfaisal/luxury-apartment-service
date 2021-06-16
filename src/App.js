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
function App() {
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
