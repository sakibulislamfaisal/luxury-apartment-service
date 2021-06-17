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
import UserList from "./components/Admin/UserList/UserList";
import NotFound from "./components/NotFound/NotFound";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import UserOrder from "./components/UserOrder/UserOrder";
import ReviewByUser from "./components/ReviewByUser/ReviewByUser";
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

          <Route path="/service-booking/:id">
            <Navbar />
            <ServiceDetail></ServiceDetail>
            <Footer></Footer>
          </Route>
          <Route path="/orders">
            <Navbar />
            <UserOrder />
            <Footer></Footer>
          </Route>
          <Route path="/review">
            <Navbar />
            <ReviewByUser />
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
          <Route path="/admin-all-user">
            <Navigation></Navigation>
            <UserList></UserList>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
