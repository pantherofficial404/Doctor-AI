import React from "react";
import useStyles from "./style";
import Header from "Components/Header";
import {
  Typography,
  TextField,
  InputAdornment,
  Container,
  Button,
  Grid,
  Input
} from "@material-ui/core";
//icon
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import CategoryIcon from "@material-ui/icons/Category";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HttpIcon from "@material-ui/icons/Http";
import HomeIcon from "@material-ui/icons/Home";
import CreateIcon from "@material-ui/icons/Create";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import StarIcon from "@material-ui/icons/Star";
import GroupIcon from "@material-ui/icons/Group";

const Layout = () => {
  const classes = useStyles();

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
  return (
    <div className={classes.hospitalDetails}>
      <Header title="Hospitals" />
      <div className={classes.hospitalsDetailsContent}>
        <Container className={classes.Container} maxWidth="md">
          <Grid>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <div className={classes.HospitalContent}>
                  <div className={classes.HospitalIconContent}>
                    <img
                      src="./images/hospital.png"
                      alt="hospital-icon"
                      className={classes.iconhospital}
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  align="center"
                  className={classes.title}>
                  HOSPITAL DEATIL
                </Typography>
              </Grid>
            </Grid>
            <form className={classes.HospitalForm}>
              <div className={classes.HospitalFormInput}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      className={classes.TextField}
                      fullWidth
                      placeholder="HospitalName"
                      type="text"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon className={classes.icon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className={classes.TextField}
                      fullWidth
                      multiline
                      rowsMax="4"
                      placeholder="Address"
                      type="text"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <HomeIcon className={classes.icon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className={classes.TextField}
                      fullWidth
                      multiline
                      rowsMax="4"
                      placeholder="Description"
                      type="text"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CreateIcon className={classes.icon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className={classes.doctextfield}
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
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className={classes.TextField}
                      fullWidth
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
                      className={classes.TextField}
                      fullWidth
                      placeholder="WebsiteUrl"
                      type="string"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <HttpIcon className={classes.icon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className={classes.TextField}
                      fullWidth
                      placeholder="Location"
                      type="text"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationOnIcon className={classes.icon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className={classes.TextField}
                      fullWidth
                      placeholder="Category"
                      type="text"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CategoryIcon className={classes.icon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className={classes.TextField}
                      fullWidth
                      placeholder="Doctors"
                      type="text"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <GroupIcon className={classes.icon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className={classes.TextField}
                      fullWidth
                      placeholder="MobileNo"
                      type="Number"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneAndroidIcon className={classes.icon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className={classes.TextField}
                      fullWidth
                      placeholder="EmailId"
                      type="Email"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon className={classes.icon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                </Grid>
              </div>
              <Button
                variant="contained"
                color="primary"
                className={classes.HospitalButton}
                fullWidth>
                Submit
              </Button>
            </form>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Layout;
