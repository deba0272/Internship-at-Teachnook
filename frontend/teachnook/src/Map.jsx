import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import './Map.css'
const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 28.7041,
  lng: 77.1025,
};

const locations = [
  { lat: 28.7041, lng: 77.1025 },
  // Add more locations as needed
];
 function Hag(){
  return(
    <div>
                <nav className=" uis navbar bg-body-tertiary">
  <div className="hum container-fluid">
    <span className=" heroo navbar-text">
     <h1>Location:New Delhi,Sector 42</h1>
    </span>
  </div>
</nav>
    </div>

  );
}
function Map() {
  return (
    <div>
    <Hag/>
    <LoadScript googleMapsApiKey="AIzaSyDKfpTK3DN9FmA8WZd6slgB0ABnW1ERvCw">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {locations.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
   </div>
  )
}
export default Map;
