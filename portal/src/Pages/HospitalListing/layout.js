import React, { useEffect } from "react";
import { Button } from "@material-ui/core";

import { Header, Listing } from "Components";
import useStyles from "./style";
import { fetchHospitalListing } from "Store/action";
import { selectHospital } from "Store/selectors";
import { useSelector } from "react-redux";
import { getFormattedString } from "Helper";

const Layout = props => {
  const classes = useStyles();
  const hospitalListing = useSelector(selectHospital);

  useEffect(() => {
    fetchHospitalListing();
  }, []);

  return (
    <div>
      <Header title="Hospitals" />
      <div className={classes.addbutton}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => props.history.push("/")}>
          BACK
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}>
          ADD HOSPITAL
        </Button>
      </div>
      <Listing
        data={hospitalListing}
        keys={{
          hospitalName: "Hospital Name",
          mobileNo: "Mobile Number",
          address: "Address"
        }}
      />
    </div>
  );
};

export default Layout;
