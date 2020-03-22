import React, { useState } from "react";
import useStyles from "./style";
import Header from "Components/Header";
import {
  Container,
  Typography,
  Button
} from "@material-ui/core";
import Config from "Config";
import EmailIcon from "@material-ui/icons/Email";
import { handleError } from "Store/helper";
import { useHistory } from "react-router-dom";
import { Snackbar, InputComponent } from "Components";
import ForgotpasswordIcon from "./Assets/forgot.svg";
import { NetworkServices } from "Services";
import { openGlobalMessageBox } from "Helper";

const Layout = () => {
  const classes = useStyles();
  const history = useHistory();
  const [success, setSuccess] = useState(false);
  const [username, setUsername] = useState();
  const [state, setState] = useState({
    isOpen: false,
    variant: "error",
    message: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!username) {
      return openGlobalMessageBox({
        title:'Doctor AI',
        message:'Please enter valid email',
        type:'error',
      });
    }
    try {
      await NetworkServices.post(`${Config.SERVER_URL}/forgotPassword`, {
        username
      });
      openGlobalMessageBox({
        title:'Doctor AI',
        message:'Forgot Password token sent to your registered email id',
        type:'success',
      });
    } catch (error) {
      handleError();
    } finally {
      setUsername("");
    }
  };

  return (
    <div>
      {success ? (
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <h5 style={{ fontSize: "1.5rem", fontFamily: "Poppins" }}>
            An Email with Reset intruction Send In Your email Address,Kindly
            Check Your Email..
          </h5>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/login")}
          >
            GO BACK TO LOGIN
          </Button>
        </div>
      ) : (
        <div className={classes.cabbooking}>
          <Snackbar
            errorMessage={state.message}
            isOpen={state.isOpen}
            variant={state.variant}
            handleClose={() => setState({ isOpen: false })}
          />
          <Header title="Forgot password" />
          <div className={classes.cabcontent}>
            <Container className={classes.container} maxWidth="sm">
              <div style={{ textAlign: "center" }}>
                <img
                  src={ForgotpasswordIcon}
                  alt="forgotpasswordicon"
                  className={classes.forgotpasswordIcon}
                />
              </div>
              <form>
                <Typography
                  variant="h6"
                  align="center"
                  className={classes.title}
                  style={{ marginBottom: "2rem" }}
                >
                  Verifying Email Please Enter Your Email
                </Typography>
                <InputComponent
                  placeholder="Email id"
                  onChange={e => setUsername(e.target.value)}
                  fullWidth
                  size="medium"
                  type="email"
                  Icon={EmailIcon}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  style={{ marginTop: 20 }}
                  disabled={!username}
                  fullWidth
                >
                  Send Email
                </Button>
              </form>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
};
export default Layout;
