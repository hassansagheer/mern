import React, { useState, useEffect } from "react";

function App() {
  const [location, setLocation] = useState(null);

  const fetchData = () => {
        // Fetch the geolocation data from the API
        fetch("https://freeiplookupapi.com/api/v1/?ip=8.8.8.8")
        .then((response) => response.json())
        .then((data) => {
          // Set the location state with the data
          setLocation(data);
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
        });
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>IP Geolocation</h1>
      {location ? (
        // Display the location data if available
        <div>
          <p>IP: {location.ip}</p>
          <p>Country: {location.country}</p>
          <p>Region: {location.region}</p>
          <p>City: {location.city}</p>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Timezone: {location.timezone}</p>
        </div>
      ) : (
        // Display a loading message if not available
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
