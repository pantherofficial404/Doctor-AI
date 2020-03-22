import React, { useState } from "react";

import useStyles from "./style";
import {
  Button,
  Card,
  Grid,
  Container,
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import FaceIcon from "@material-ui/icons/Face";
import LineChart from "Components/Charts/LineChart";
import BarChart from "Components/Charts/Barchart";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
//THIS IS THE LINECHART DATA

const data = [
  {
    date: "16 Mar 2020",
    patient: 50
  },
  {
    date: "17 Mar 2020",
    patient: 45
  },
  {
    date: "18 Mar 2020",
    patient: 24
  },
  {
    date: "19 Mar 2020",
    patient: 65
  },
  {
    date: "20 Mar 2020",
    patient: 50
  },
  {
    date: "21 Mar 2020",
    patient: 24
  },
  {
    date: "16 Mar 2020",
    patient: 25
  }
];

//THIS IS BARCHRTDATA
const barchartData = [
  {
    name: "16 Mar 2020",
    male: 20,
    female: 24
  },
  {
    name: "17 Mar 2020",
    male: 30,
    female: 14
  },
  {
    name: "18 Mar 2020",
    male: 25,
    female: 35
  },
  {
    name: "19 Mar 2020",
    male: 27,
    female: 39
  },
  {
    name: "20 Mar 2020",
    male: 18,
    female: 48
  },
  {
    name: "21 Mar 2020",
    male: 35,
    female: 38
  },
  {
    name: "22 Mar 2020",
    male: 20,
    female: 50
  }
];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("16 Mar 2020", 17, 6.0, 24, 4.0),
  createData("17 Mar 2020", 19, 9.0, 37, 4.3),
  createData("18 Mar 2020", 20, 16.0, 24, 6.0),
  createData("19 Mar 2020", 30, 3.7, 67, 4.3),
  createData("20 Mar 2020", 35, 16.0, 49, 3.9)
];

const Layout = () => {
  const classes = useStyles();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ]);
  const [show, setShow] = useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.datePicker}>
        <Button
          variant="contained"
          className={classes.DatePickerButton}
          onClick={() => setShow(!show)}>
          Select Date
        </Button>
      </div>
      <div className={classes.dateTimePiker}>
        {show && (
          <DateRange
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        )}
      </div>
      <div className={classes.summary}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Card className={classes.Card}>
                <div className={classes.tooltipclasses}>
                  <Tooltip title="Number of User is Connected with us">
                    <InfoOutlinedIcon style={{ fontSize: "1.2em" }} />
                  </Tooltip>
                  <div style={{ textAlign: "center", padding: 0 }}>
                    <span className={classes.icondiv}>
                      <PeopleAltIcon className={classes.icon} />
                    </span>
                    <div className={classes.numbersection}>
                      <h2 className={classes.numberOfentity}>25</h2>
                      <p className={classes.tagOfCard}>Connected User </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Card className={classes.Card}>
                <div className={classes.tooltipclasses}>
                  <Tooltip title="Number of Hospital  is Connected with us">
                    <InfoOutlinedIcon style={{ fontSize: "1.2em" }} />
                  </Tooltip>
                  <div style={{ textAlign: "center", padding: 0 }}>
                    <span className={classes.icondiv}>
                      <LocalHospitalIcon className={classes.icon} />
                    </span>
                    <div className={classes.numbersection}>
                      <h2 className={classes.numberOfentity}>120</h2>
                      <p className={classes.tagOfCard}>Connected Hospitals </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Card className={classes.Card}>
                <div className={classes.tooltipclasses}>
                  <Tooltip title="Number of Doctor is Connected with us">
                    <InfoOutlinedIcon style={{ fontSize: "1.2em" }} />
                  </Tooltip>
                  <div style={{ textAlign: "center", padding: 0 }}>
                    <span className={classes.icondiv}>
                      <FaceIcon className={classes.icon} />
                    </span>
                    <div className={classes.numbersection}>
                      <h2 className={classes.numberOfentity}>14</h2>
                      <p className={classes.tagOfCard}>Connected Doctor</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>

          <div className={classes.LineChart}>
            <Card className={classes.Card}>
              <LineChart
                title="Usage:"
                data={data}
                width={1150}
                height={300}
                dataKey="date"
                dataKeyY="patient"
              />
            </Card>
          </div>

          <div className={classes.BarChart}>
            <Card className={classes.Card}>
              <BarChart
                title="Patinet Added"
                data={barchartData}
                dataKeyX="name"
                width={1150}
                height={400}
                dataKeyM="male"
                dataKeyF="female"
                fillM="#747BF3"
                fillF="#82CA9D"
              />
            </Card>
          </div>

          {/* table */}
          <div className={classes.tableSection}>
            <Card className={classes.Card}>
              <div className={classes.cardTitle}>
                <h6 style={{ fontSize: "1rem", fontFamily: "Poppins" }}>
                  OverView
                </h6>
              </div>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Day</TableCell>
                      <TableCell align="right">User</TableCell>
                      <TableCell align="right">Hospitals</TableCell>
                      <TableCell align="right">Doctors</TableCell>
                      <TableCell align="right">Patient</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Layout;
