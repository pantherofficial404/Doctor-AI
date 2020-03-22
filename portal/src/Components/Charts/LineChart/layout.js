import React from "react";

import useStyles from "./style";

import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Line
} from "recharts";

const Layout = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <h6 style={{ fontSize: "1rem", fontFamily: "Open+Sans" }}>
          {props.title}
        </h6>
      </div>
      <LineChart
        width={props.width}
        height={props.height}
        data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid />
        <XAxis dataKey={props.dataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={props.dataKeyY} stroke="#7A7AEE" />
      </LineChart>
    </div>
  );
};

export default Layout;
