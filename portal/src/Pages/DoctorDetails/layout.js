import React, { useState } from "react";
import useStyles from "./style";
import Header from "Components/Header";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import StarIcon from "@material-ui/icons/Star";
import DescriptionIcon from "@material-ui/icons/Description";

const Layout = () => {
  const [state, setState] = useState({
    check: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
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
    <div className={classes.docDetails}>
      <Header title="Doctor info" />
      <div className={classes.docDetailsContent}>
        <Container className={classes.container} maxWidth="md">
          <Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <div className={classes.Docicon}>
                  <img
                    src="./images/Doctor.svg"
                    alt="taxi-icon"
                    className={classes.icondoctor}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h6"
                  align="center"
                  className={classes.title}>
                  Doctor Details
                </Typography>
                <form>
                  <TextField
                    className={classes.doctextfield}
                    placeholder="Doctor name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon className={classes.icon} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <TextField
                    className={classes.doctextfield}
                    multiline
                    rowsMax="4"
                    placeholder="Discriptions"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <DescriptionIcon className={classes.icon} />
                        </InputAdornment>
                      )
                    }}
                  />
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
                  <Grid>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          className={classes.doctextfield}
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
                        <FormControlLabel
                          className={classes.formcontrol}
                          control={
                            <Checkbox
                              checked={state.checkedB}
                              onChange={handleChange("check")}
                              value="checkedB"
                              style={{ color: "#7563FF" }}
                            />
                          }
                          label="Available"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <TextField
                    id="image"
                    select
                    name="Select Hotel Image"
                    className={classes.textField}
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    className={classes.submitButton}
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
