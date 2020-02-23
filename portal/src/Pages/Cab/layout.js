import React, { useState } from "react";
import useStyles from "./style";
import Header from "Components/Header";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import CreateIcon from "@material-ui/icons/Create";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import StarIcon from "@material-ui/icons/Star";
import BookIcon from "@material-ui/icons/Book";

const Layout = () => {
  const classes = useStyles();

  const [state, setState] = useState("");

  //Fot Custmize Input-Type File
  const handleiconclick = () => {
    document.getElementById("hiddenInput").click();
  };
  const handlechange = () => {
    const check = document.getElementById("hiddenInput");
    const customText = document.getElementById("customText");
    if (check.value) {
      customText.innerHTML = check.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/);
    } else {
      customText.innerHTML = "No File Chosen,Yet";
    }
  };

  //Event
  const handleClick = () => {};

  return (
    <div className={classes.cabbooking}>
      <Header title="CAB" />
      <div className={classes.cabcontent}>
        <Container className={classes.container} maxWidth="md">
          <Grid>
            <Grid container spacing={3}>
              <Grid item lg={5} xs={12} sm={6}>
                <div className={classes.cabdivcontent}>
                  <div className={classes.logosection}>
                    <div className={classes.taxiicon}>
                      <img
                        src="./images/TexiLocation.JPG"
                        alt="taxi-icon"
                        className={classes.icontaxi}
                      />
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={7} xs={12} sm={6}>
                <Typography
                  variant="h6"
                  align="center"
                  className={classes.title}>
                  CAB BOOKING
                </Typography>
                <form>
                  <TextField
                    className={classes.cabtextfield}
                    placeholder="Driver name"
                    onChange={e => setState(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle className={classes.icon} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <TextField
                    className={classes.cabtextfield}
                    multiline
                    rowsMax="4"
                    placeholder="Discriptions"
                    onChange={e => setState(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CreateIcon className={classes.icon} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <TextField
                    className={classes.cabtextfield}
                    multiline
                    rowsMax="4"
                    id="Thumbnai-button"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AddAPhotoIcon
                            className={classes.thumnaiimages}
                            style={{ marginRight: "1rem" }}
                            onClick={handleiconclick}
                          />
                          <span id="customText" style={{ color: "#CBCBCB" }}>
                            <span>👈</span> Click Icon To Select File
                          </span>
                        </InputAdornment>
                      )
                    }}
                  />
                  <input
                    type="file"
                    id="hiddenInput"
                    hidden
                    onChange={handlechange}
                  />
                  <Grid>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          onChange={e => setState(e.target.value)}
                          className={classes.cabtextfield}
                          placeholder="Rating"
                          type="number"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <StarIcon className={classes.icon} />
                              </InputAdornment>
                            )
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          className={classes.cabtextfield}
                          placeholder="Cab booked"
                          onChange={e => setState(e.target.value)}
                          type="number"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <BookIcon className={classes.icon} />
                              </InputAdornment>
                            )
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    className={classes.CabbookButton}
                    fullWidth>
                    Submit
                  </Button>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};
export default Layout;
