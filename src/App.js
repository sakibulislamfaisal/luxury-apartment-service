import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
function App() {
  return <>
        <Router>
          <Navbar></Navbar>
             <Switch>
                   <Route exact path="/">

                   </Route>
             </Switch>
        </Router>
   </>;
}

export default App;
