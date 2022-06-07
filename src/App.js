import React from "react"; 
import './App.css';
import {useState} from 'react';

function App() {
// Remember you should use .env file instead to keep key private. 
const apiKey =  "f36fd0225bdc44b8851203207220306";

// Reminder to self this is for setting api query and input form value.
const [place, setPlace] = useState(''); 

// Reminder to self this is for setting specific info requested and displaying that info. 
const [displayinfo, setDisplayInfo] = useState({}); 

// Make sure submitting form doesn't cause a browser reload everytime a request is made. 
      const onSubmit = (e) => {
        e.preventDefault()
        console.log("refresh prevented")
      }
 
     const fetchData = () => {
       fetch( 
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${place}&aqi=no`
       )
       .then((res) => res.json())
       .then((data) => setDisplayInfo({
      name: "The current weather temperature in: " + data.location.name + ", " , 
      country: data.location.country + " is: ",
      localtime: "At the following date and time: " + data.location.localtime,
      temp: data.current.temp_f + " Degrees Farenheit"
       }));
    }


    return( 
<div className="mainContent">
  
  <div className="dataInput">
   <form onSubmit={onSubmit}>
    <input className="Input" type="text" 
    value={place} 
    onChange={ (e) => setPlace(e.target.value)}
    placeholder="Search a location..." 

    />
    <br/>
      <button 
      className="searchBtn" 
      type="Sumbit"
      onClick={fetchData}
      > Search </button>  
</form>
  </div>

<div className="weatherContainer">
<h2> {displayinfo.name} {displayinfo.country}</h2>
<h2> {displayinfo.temp} </h2>
<h2> {displayinfo.localtime}</h2>




</div>
  </div>

);};

    export default App; 