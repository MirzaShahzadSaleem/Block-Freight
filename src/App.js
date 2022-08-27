import React from "react";
import Sidebar from "./components/topbar/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./components/pages/home/Home";
import Trip from "./components/pages/trip/Trip";
import Driver from "./components/pages/driver/Driver";
import ViewDriverRecord from "./components/pages/viewDriverRecord/ViewDriverRecord";
import ViewDriver from "./components/pages/viewDriver/ViewDriver";
import AssignTrip from "./components/pages/AssignTrip/AssignTrip";
import ViewTripRecord from "./components/pages/viewTripRecord/ViewTripRecord";
import ViewAllTrip from "./components/pages/viewAllTrip/ViewAllTrip";
import EndTrip from "./components/pages/endTrip/EndTrip";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router> 
      <Topbar /> 
    
      <div className="container"> 
        <Sidebar/>
      
        <Switch>
           
          <Route exact path="/">
           <Home/>
          </Route>

          <Route path="/driver">
           <Driver/>
          </Route>

          <Route path="/Trip">
           <Trip/>
          </Route>

          <Route path="/DriverRecord">
           <ViewDriverRecord/>
          </Route>

          <Route path="/ViewDriver">
           <ViewDriver/>
          </Route>

          <Route path="/AssignTrip">
           <AssignTrip/>
          </Route>

          <Route path="/ViewTripRecord">
           <ViewTripRecord/>
          </Route>

          <Route path="/ViewAllTrip">
           <ViewAllTrip/>
          </Route>

          <Route path="/EndTrip">
           <EndTrip/>
          </Route>
        </Switch>
         
        </div>
      
    </Router>
  );
}

export default App;



