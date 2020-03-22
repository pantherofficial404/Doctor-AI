import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Config from "Config";

import Home from "Pages/Home";
import Login from "Pages/Login";
import Register from "Pages/Register";
import Forgotpassword from "Pages/ForgotPassword/index.js";
import HospitalListing from "Pages/HospitalListing";
import HospitalAdd from "Pages/HospitalAdd";
import DoctorAdd from "./DoctorAdd";
import NotFoundView from "./NotFoundView";
import HospitalDetail from "Pages/HospitalsDetail";
import PatientDetail from "Pages/PatientDetails";
import Order from "Pages/Order";
import OtpVerification from "Pages/OTP VERIFICATION";
import CategoryAddPage from "Pages/Category";
import CategoryListing from "Pages/CategoryListing";
import ExpressFirebase from "express-firebase";
import { AuthServices } from "Services";
import Resetpassword from "Pages/ResetPassword";
import UpdateHospitalDetails from "Pages/UpdateHospital";
import Charts from "Pages/Charts";

ExpressFirebase.connect(Config.FIREBASE_CONFIG);

const PrivateRoute = ({ component: Component, ...rest }) => {
  const render = (props) => {
    if (!AuthServices.isAuthenticated()) {
      return (
        <Redirect to="/login"/>
      )
    }
    if(rest.admin && !AuthServices.isAdmin()){
      // Logout User
      AuthServices.logout();
      return (
        <Redirect to="/login" />
      )
    }
    return <Component {...props} />;
  };

  return (
    <Route {...rest} render={render} />
  );
};

class Root extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgotpassword" component={Forgotpassword} />
          <Route exact path="/reset/:resetPasswordToken" component={Resetpassword} />

          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/analytics" component={Charts} admin/>

          <PrivateRoute exact path="/updatehospital/:hospitalId" component={UpdateHospitalDetails} admin />
          <PrivateRoute exact path="/hospital" component={HospitalListing} />
          <PrivateRoute exact path="/add/hospital" component={HospitalAdd} admin/>
          <PrivateRoute exact path="/hospital/:hospitalId" component={HospitalDetail} />
          <PrivateRoute exact path="/add/doctor/:hospitalId" component={DoctorAdd} admin/>
          <PrivateRoute exact path="/category" component={CategoryAddPage} admin/>
          <PrivateRoute exact path="/patient" component={PatientDetail} />
          <PrivateRoute exact path="/order" component={Order} />
          <PrivateRoute exact path="/otp" component={OtpVerification} />
          <PrivateRoute exact path="/category/list" component={CategoryListing} />

          <Route component={NotFoundView} />
        </Switch>
      </Router>
    );
  }
}
export default Root;
