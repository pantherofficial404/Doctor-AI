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
import HospitalAdd from "Pages/HospitalAdd";
import Cab from "Pages/Cab";
import DoctorAdd from "./DoctorAdd";
import NotFoundView from "./NotFoundView";
import HospitalDetail from 'Pages/HospitalsDetail';
import PatientDetail from 'Pages/PatientDetails';
import Notification from 'Pages/Notification'
import Order from 'Pages/Order'

import { AuthServices } from "Services";


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
          <Route exact path="/add/hospital" component={HospitalAdd} />
          <Route exact path="/cab" component={Cab} />
          <Route
            exact
            path="/hospital/:hospitalId"
            component={HospitalDetail}
          />
          <Route exact path="/add/doctor/:hospitalId" component={DoctorAdd} />
          <Route exact path="/patient" component={PatientDetail} />
          <Route exact path="/notification" component={Notification} />
          <Route exact path="/order" component={Order} />
          <Route component={NotFoundView} />

        </Switch>
      </Router>
    );
  }
}
export default Root;
