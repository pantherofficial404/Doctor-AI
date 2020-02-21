import React from "react";
import useStyles from "./style";
import Header from "Components/Header";
import { Container } from "@material-ui/core";

const Layout = () => {
  const classes = useStyles();
  return (
    <div className={classes.hospitalDetails}>
      <Header title="Hospitals" />
      <div className={classes.hospitalsDetailsContent}>
        <Container className={classes.container} maxWidth="md">
          <form></form>
        </Container>
      </div>
    </div>
  );
};

export default Layout;
