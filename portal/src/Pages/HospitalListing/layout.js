import React, { useEffect } from "react"; import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography
} from "@material-ui/core";

import { Header } from "Components";
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
      {Boolean(hospitalListing.loading) && (
        <Typography variant="body2">Loading..</Typography>
      )}
      {Boolean(hospitalListing.error) && (
        <Typography variant="body2">Something went Wrong</Typography>
      )}
      {!Boolean(hospitalListing.loading) && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hospital Name</TableCell>
              <TableCell style={{ width: "10%", fontSize: "1rem" }}>
                Mobile No
            </TableCell>
              <TableCell style={{ fontSize: "1rem" }}>City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Boolean(hospitalListing.data) && hospitalListing.data.map(element => (
              <TableRow className={classes.listContainer} >
                <TableCell>{element.hospitalName}</TableCell>
                <TableCell>{getFormattedString(element.mobileNo[0])}</TableCell>
                <TableCell>{getFormattedString(element.address)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default Layout;
