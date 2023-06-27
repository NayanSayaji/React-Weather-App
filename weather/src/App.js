
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

function App() {

  const apiKey = "eb85acebf8fbcca5bc3652703b6c52f3"
  const [data, setData] = useState({})
  const [inputCity , setInputCity] = useState({})

  const getWeatherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    
    axios.get(apiURL).then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) =>{
    // console.log("value", e.target.value)
    // setInputCity("Dhule")
    setInputCity(e.target.value)
  }

  const handleSearch = () =>{
    getWeatherDetails(inputCity)
  }


  useEffect(() => {
    getWeatherDetails("Dhule")
    
  }, [])


  return (
    <div className="col-md-12">
      <div className="weatherBG">
        <h1 className="heading">Weather APP</h1>


        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className=" form-control" value ={inputCity} onChange={handleChangeInput} />
          
          <button className="btn btn-primary" type="button" onClick={handleSearch} > Search</button>
        </div>

        <div className="col-md-12 text-center mt-5">

          <div className="shadow rounded weatherResultBox">

            <img src="https://www.kindpng.com/picc/m/185-1854690_stormy-weather-icon-icon-hd-png-download.png" className="weatherIcon" alt="" />

            <h5 className="weatherCity">{data?.name}</h5>
            <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>


          </div>
        </div>
      </div>
    </div>
  );
}


export default App;

