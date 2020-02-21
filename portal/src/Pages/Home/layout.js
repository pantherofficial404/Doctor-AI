import React, { useState, useEffect } from "react";
import useStyles from "./style";
import Header from "Components/Header";
import Map from "./component/Map";

//Side Drawer

const Home = () => {
  const [mapPermission,setMapPermission] = useState(null);
  const [ deseaseName,setDeseaseName ] = useState(null);

  const [state, setstate] = useState({
    latitude: "",
    logitude: "",
    isLoaded: false
  });

  useEffect(() => {

    (async()=>{
      const permission = await navigator.permissions.query({name:'geolocation'});
      setMapPermission(permission.state);
      permission.onchange = ()=>{
        setMapPermission(permission.state);
      }
    })();
    
  }, []);

  useEffect(()=>{
    if (mapPermission==='granted') {
      navigator.geolocation.getCurrentPosition(location => {
        setstate({
          latitude: location.coords.latitude,
          logitude: location.coords.longitude,
          isLoaded: true
        });
      });
    }
  },[ mapPermission ]);

  const handleSearch = ( )=> {

    // TODO : Validate search should not empty

    // TODO : Search Nearby Hospital


  }

  return (
    <div>
      <Header />
      <div>
          <input 
            type="text" 
            placeholder="Enter your desease name" 
            value={deseaseName} 
            onChange={(e)=>setDeseaseName(e.target.value)}/>
          <button type="submit" onSubmit={handleSearch}>Search</button>
        {Boolean(mapPermission==='granted' && state.isLoaded) && (
          <Map
            options={{
              center: { lat: state.latitude, lng: state.logitude },
              zoom: 13
            }}
          />
        )}
        {Boolean(mapPermission!=='granted' && state.isLoaded) && (
          <div>
            <p>Please enable Geolocation permission</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
