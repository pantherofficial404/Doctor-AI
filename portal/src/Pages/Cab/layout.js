import React from "react";
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

  const handleiconclick = () => {
    document.getElementById("click").click();
  };

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
                        // src="./images/ambulance.png"
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
                    placeholder="Click on icon to add Thambnai"
                    rowsMax="4"
                    onClick={handleiconclick}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AddAPhotoIcon className={classes.thumnaiimages} />
                        </InputAdornment>
                      )
                    }}
                  />
                  {/* <TextField
                    id="image"
                    type="file"
                    name="Select Hotel Image"
                    className={classes.textField}
                    variant="outlined"
                    fullWidth
                    // onChange={this.handleImage}
                  /> */}

                  <input type="file" id="click" style={{ display: "none" }} />
                  <Grid>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
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

// <div className={classes.cabdivcontent}>
//   <div className={classes.logosection}>
//     <div className={classes.taxiicon}>
//       <img
//         src="./images/taxi.png"
//         alt="taxi-icon"
//         className={classes.icontaxi}
//       />
//     </div>
//   </div>
//   <div className={classes.formSection}></div>
// </div>
