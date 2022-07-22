import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import countries from "./country.json";
import provinces from "./provinces.json";
function App() {
  const [country, setCountry]=useState("");
  const [province, setProvince] = useState("");
  const [districts, setDistricts] = useState([]);
 
  useEffect(() => {
    getDistricts();
  }, [province]);
  countries.sort((a, b) => a.name.localeCompare(b.name));
  provinces.sort((a, b) => a.name.localeCompare(b.name));

  
  function getDistricts() {
    for (let p of provinces) {
      if (p.name === province) setDistricts(p.districts);
    }
  }

  const handlecountry=(event)=>{
    console.log("uls:"+event.target.value);
    setCountry(event.target.value);
  }
  const handleprovince=(e)=>{
    console.log("aimag:"+e.target.value);
    setProvince(e.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <div className='container'>
          <select onChange={handlecountry}>
            <option>Uls</option>
            {
              countries.map(e=>{
                return(
                  <option key={e.value}>{e.name}</option>
                )
              })
            }
          </select>
        </div>
        <div className='container'>
          <select onChange={(e)=>handleprovince(e)}>
            <option>Aimag</option>
            {
              provinces.map((e) => {
                if(country==="Монгол"){
                  return(
                    <option key={e.value} value={e.name}>
                    {e.name}
                    </option>
                  )
                }
              })
            }
          </select>
        </div>
        <div className='container'>
          <select>
            {districts.map((e,i) => {
                      return(
                        <option key={i} value={e}>
                        {e}
                        </option>
                      )
                    })}
          </select>
        </div>
      </header>
    </div>
  );
}

export default App;
