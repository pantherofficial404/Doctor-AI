import React from 'react';
import { Typography } from '@material-ui/core';

import useStyles from './style';

const Home = (props) => {
  const classes = useStyles();
  return (
    <Typography className={classes.container}>Home Page</Typography>
  )
}

export default Home;