import React from "react";

import useStyle from "./style";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Legend,
  Tooltip
} from "recharts";

const Layout = props => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <h6 style={{ fontSize: "1rem", fontFamily: "Open+Sans" }}>
          {props.title}
        </h6>
      </div>
      <BarChart width={props.width} height={props.height} data={props.data}>
        <CartesianGrid />
        <XAxis dataKey={props.dataKeyX} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={props.dataKeyM} fill={props.fillM} />
        <Bar dataKey={props.dataKeyF} fill={props.fillF} />
      </BarChart>
    </div>
  );
};

export default Layout;
