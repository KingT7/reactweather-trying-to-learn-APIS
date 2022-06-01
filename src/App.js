import React from "react"; 
import './App.css';
import { useState } from 'react';
import axios from 'axios';


function App() {

const [data, setData] = useState({});

const[location, setLocation] = useState('');

const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid={f6d10ca5872c8117e03769b0d64a279f}`
    
const search = (e) => {
    if (e.key === 'Enter') {
        axios.get(url).then((res) => {
            console.log(res.data)
            e.preventDefault()
            
        })
    }
}

    return( 
<div className="mainContent">
  
   <form>
    <input className="Input" type="text" placeholder="Search a location..."
        onChange={ e => setLocation(e.target.value)}
        onKeyPress= {search}
        
    />
    <br/>
      <button className="searchBtn" type="Sumbit"> Sumbit </button>  
</form>

<p> {data.name}</p>






  </div>

);};

    export default App; 