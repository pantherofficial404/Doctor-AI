import React, { useEffect, useRef } from "react";
import Config from 'Config';
import axios from 'axios';

const Map = (props) => {
  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      const google = window.google;
      const map = new google.maps.Map(
        mapRef.current,
        props.options,
      )
      const { lat, lng } = props.options.center;
      const latLng = `${lat},${lng}`;
      let url = `${Config.MAP_URL}&latlng=${encodeURIComponent(latLng)}`;
      const response = await axios.get(url);
      const infoWindow = new google.maps.InfoWindow();
      infoWindow.setPosition(props.options.center);
      infoWindow.setContent((response.data.results[0] || {}).formatted_address || 'Unknown');
      infoWindow.open(map);
    })()
  }, []);

  return (
    <div
      style={{ flex: 1, height: 300,width:500,margin:'10px auto' }}
      ref={mapRef}
    />
  )
}
export default Map;
