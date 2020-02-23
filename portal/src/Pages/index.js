import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from "Pages/Home";
import Login from "Pages/Login";
import Register from "Pages/Register";
import HospitalListing from "Pages/HospitalListing";
import HospitalsDetails from "Pages/HospitalDetails";
import Cab from "Pages/Cab";
import DoctorDetails from "./DoctorDetails";
import NotFoundView from "./NotFoundView";
import { AuthServices } from "Services";
import HospitalProfilePage from "./HospitalsProfile.js";

// const PrivateRoute = ({ component, ...rest }) => {
//   // const render = (props: any) => {
//   //   if (!AuthServices.isAuthenticated()) {
//   //     return (
//   //       <Redirect path="/login" />
//   //     )
//   //   }
//   //   return <Component {...props} />;
//   // };
//   // return (
//   <Route {...rest} render={render} />
//   // )
// }

class Root extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/hospital" component={HospitalListing} />
          <Route exact path="/add/hospital" component={HospitalsDetails} />
          <Route exact path="/cab" component={Cab} />
          <Route
            exact
            path="/hospitalProfile"
            component={HospitalProfilePage}
          />
          <Route exact path="/doctor" component={DoctorDetails} />
          <Route component={NotFoundView} />
        </Switch>
      </Router>
    );
  }
}
export default Root;
