import React, { useEffect, useRef } from "react";
import Config from "Config";
import axios from "axios";
import { handleError } from "Store/helper";
import GoogleMapReact from 'google-map-react';


const google = window.google;

var features = [
];

const Map = props => {
  const mapRef = useRef(null);

  useEffect(() => {
    // (async () => {
    //   try{
    //   const map = new google.maps.Map(mapRef.current, props.options);
    //   const { lat, lng } = props.options.center;
    //   const latLng = `${lat},${lng}`;
    //   let url = `${Config.MAP_URL}&latlng=${encodeURIComponent(latLng)}`;
    //   const response = await axios.get(url);
    //   const infoWindow = new google.maps.InfoWindow();
    //   infoWindow.setPosition(props.options.center);
    //   infoWindow.setContent(
    //     (response.data.results[0] || {}).formatted_address || "Unknown"
    //   );
    //   infoWindow.open(map);
    //   for (var i = 0; i < features.length; i++) {
    //     var marker = new google.maps.Marker({
    //       position: features[i].position,
    //       map: map,
    //     });
    //   }
    // } catch(err){
    //   handleError(err);
    // }
    // })();
  }, []);

  return (
    // <div
    //   style={{ flex: 1, height: 500, width: "100%", margin: "10px auto" }}
    //   ref={mapRef}
    // />
    <div style={{ height: '100vh', width: '100%' }}>

    <GoogleMapReact
    bootstrapURLKeys={{ key: 'AIzaSyC_W2QaRiFEj4HU-F_uyAlN2oUXKcBoPZw'}}
  >
    <div
      lat={59.955413}
      lng={30.337844}
      text="My Marker"
    />
  </GoogleMapReact>
  </div>

  );
};
export default Map;
