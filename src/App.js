import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [countries,setCountries]=useState([]);
useEffect(()=>{
  fetch("https://restcountries.com/v3.1/all")
  .then((res)=> res.json())
  .then((data)=>{setCountries(data)})
  .catch((err)=>{
    console.error("Error fetching data", err);
  })
},[]);
const flagStyle={
  width:"80px",
  aspectRatio:"2/3",
  objectFit:"contain",  
}
const cardStyle={
  height:"200px",
 width:"200px",
 border:"1px solid grey",
 borderRadius:"10px",
 margin:"10px",
 padding:"10px",
 display:"flex",
 flexDirection:"column",
 alignItems:"center",
 justifyContent:"center",
 objectFit:"contain"


}
const containerStyle={
  display: "flex",
  flexWrap:"wrap",
  justifyContent:"center",
  alignItems:"center",
  height:"100vh"
}

return <div style={containerStyle}>{countries.map((country)=>(
  <div key={country.cca3} style={cardStyle}>
    <img src={country.flags.png} 
    alt={country.flags.alt}
    style={flagStyle} 
    />
    <h2>{country.name.common}</h2>
  </div>

))}
</div>

}

export default App;
