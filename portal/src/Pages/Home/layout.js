import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./style";
import Header from "Components/Header";
import Map from "./component/Map";

//Side Drawer

const Home = props => {
  const classes = useStyles();
  const [state, setstate] = useState({
    latitude: "",
    logitude: "",
    isLoaded: false
  });

  useEffect(() => {
    // Getting Current Location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(location => {
        setstate({
          latitude: location.coords.latitude,
          logitude: location.coords.longitude,
          isLoaded: true
        });
      });
    }
  }, []);

  return (
    <div>
      <Header />
      <div>
        {state.isLoaded && (
          <Map
            options={{
              center: { lat: state.latitude, lng: state.logitude },
              zoom: 13
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
