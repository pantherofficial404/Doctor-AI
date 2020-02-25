import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Map from "./component/Map";

// import useStyles from "./style";

//SideDrawer
import clsx from "clsx";
import {
  Container,
  AppBar,
  Drawer,
  List,
  CssBaseline,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
  Paper,
  InputBase
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import {Header} from 'Components';

import { InputComponent } from "Components";

//Side Drawer
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
}));

const Home = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mapPermission, setMapPermission] = useState(null);
  const [deseaseName, setDeseaseName] = useState(null);
  const [state, setstate] = useState({
    latitude: "",
    logitude: "",
    isLoaded: false
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    (async () => {
      const permission = await navigator.permissions.query({
        name: "geolocation"
      });
      setMapPermission(permission.state);
      permission.onchange = () => {
        setMapPermission(permission.state);
      };
    })();
  }, []);

  useEffect(() => {
    if (mapPermission === "granted") {
      navigator.geolocation.getCurrentPosition(location => {
        setstate({
          latitude: location.coords.latitude,
          logitude: location.coords.longitude,
          isLoaded: true
        });
      });
    }
  }, [mapPermission]);

  const handleSearch = () => {
    // TODO : Validate search should not empty
    // TODO : Search Nearby Hospital
  };

  return (
    <div>
      <Header/>
      <div style={{padding:20}}>
        <div style={{display:'flex'}}>
          <InputBase
            placeholder="Search your desease"
            fullWidth
            style={{borderBottom:'1px solid rgba(0,0,0,0.4)'}}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon color="primary"/>
          </IconButton>
          </div>
          </div>
        {/* <div> */}
          {/* {Boolean(state.isLoaded) && ( */}
            {/* <Map
            /> */}
          {/* )} */}
          {/* {Boolean(mapPermission !== "granted" && state.isLoaded) && (
            <div>
              <p>Please enable Geolocation permission</p>
            </div>
          )} */}
        {/* </div> */}
    </div>
  );
};

export default Home;
