import React, {  } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Map from "./component/Map";
import Charts from "Pages/Charts";

import useStyles from "./style";

export default function MiniDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div style={{ padding: 20, marginTop: "3rem" }}>
          <Map />
          {/* {step === 1 && <Map />}
          {step === 2 && <Charts />} */}
        </div>
      </main>
    </div>
  );
}