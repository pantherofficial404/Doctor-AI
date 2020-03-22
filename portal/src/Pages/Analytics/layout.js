import React, { useState } from "react";

import useStyles from "./style";
import {
  Button,
  Card,
  Grid,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import FaceIcon from "@material-ui/icons/Face";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import CardComponent from "./components/card.component";
import BarChartComponent from "./components/barchart.component";
import LineChartComponent from "./components/linechart.component";
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
          onClick={() => setShow(!show)}
        >
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
        <div className={classes.cardContainer}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <CardComponent
                icon={PeopleAltIcon}
                count={25}
                title="Connected User"
                tooltipText="Number of user connected with us"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <CardComponent
                icon={LocalHospitalIcon}
                count={120}
                title="Connected Hospitals"
                tooltipText="Number of hospital connected with us"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <CardComponent
                icon={FaceIcon}
                count={14}
                title="Connected Doctor"
                tooltipText="Number of doctor connected with us"
              />
            </Grid>
          </Grid>
          </div>

          <div className={classes.cardContainer}>
            <Card style={{ padding: 10, boxShadow: "none", borderRadius: 5 }}>
              <Typography
                variant="h6"
                color="textSecondary"
                style={{ margin: 20 }}
              >
                Patients over time
              </Typography>
              <LineChartComponent
                data={data}
                xAxis="date"
                yAxis={["patient"]}
                colors={["#747BF3"]}
              />
            </Card>
          </div>
          <div className={classes.cardContainer}>
            <Card style={{ padding: 10, boxShadow: "none", borderRadius: 5 }}>
              <Typography
                variant="h6"
                color="textSecondary"
                style={{ margin: 20 }}
              >
                Patients over time by gender
              </Typography>
              <BarChartComponent
                data={barchartData}
                xAxis="name"
                yAxis={["male", "female"]}
                colors={["#747BF3", "#82CA9D"]}
              />
            </Card>
          </div>

          {/* table */}
            <Card className={classes.cardContainer}>
              <Typography
                variant="h6"
                color="textSecondary"
                style={{ margin: 20 }}
              >
                Insights
              </Typography>
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
                        <TableCell component="th">
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
    </div>
  );
};

export default Layout;
