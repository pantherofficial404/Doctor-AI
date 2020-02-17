import React, { useState, useEffect } from "react";
import useStyles from "./style";
import { Header } from "Components";
import LockIcon from "@material-ui/icons/Lock";
import {
  InputAdornment,
  TextField,
  Button,
  Container,
  Link,
  Typography
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

//For Data Retriving from the redux
import { useSelector } from "react-redux";
import { SingUp } from "Store/action";

const Layout = props => {
  const classes = useStyles();

  const [state, setState] = useState({
    username: "",
    password: "",
    isOpen: false,
    message: "",
    variant: "error",
    isChecking: false
  });

  const handleSubmit = async () => {
    setState({ isChecking: true });
    const resonse = await SingUp();
  };

  return (
    <>
      <Header title="Sign Up" />
      <div>
        <Container className={classes.Container} maxWidth="md">
          <div className={classes.SingUp}>
            <div className={classes.SignUpContent}>
              <div className={classes.SignUpForm}>
                <form className={classes.SignUpForm}>
                  <div className={classes.SignUpFormInput}>
                    <Typography variant="h3" className={classes.FormTitle}>
                      Sing Up
                    </Typography>
                    <TextField
                      className={classes.TextField}
                      id="input-with-icon-AcccountCircle"
                      fullWidth
                      size="medium"
                      placeholder="Name"
                      type="text"
                      value={state.username}
                      onChange={e => setState({ username: e.target.value })}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonAddIcon style={{ color: "#222222" }} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <TextField
                      className={classes.TextField}
                      id="input-with-icon-AcccountCircle"
                      fullWidth
                      size="medium"
                      placeholder="password"
                      type="email"
                      value={state.password}
                      onChange={e => setState({ password: e.target.value })}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon style={{ color: "#222222" }} />
                          </InputAdornment>
                        )
                      }}
                    />
                    {/* <TextField
                      className={classes.TextField}
                      id="input-with-icon-Lock"
                      placeholder="Password"
                      fullWidth
                      type="password"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon
                              style={{
                                color: "#222222"
                              }}
                            />
                          </InputAdornment>
                        )
                      }}
                    /> */}
                    <div className={classes.Button}>
                      <Button
                        variant="contained"
                        onClick={handleSubmit}
                        color="primary"
                        className={classes.SignUpButton}>
                        Sing Up
                      </Button>
                    </div>
                    <div className={classes.links}>
                      <Link className={classes.link}>
                        Already Have An Account..
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
              <div className={classes.signUpImage}>
                <figure>
                  <img
                    src="./images/signup-image.png"
                    alt="signin Referecence Pages"
                  />
                </figure>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Layout;
