import React, { useState } from "react";
import { Weather } from "./comp/Weather";
import "./App.css";

function App() {
  const [cityName, setCityName] = useState("");
  const [checkWeather, setCheckWeather] = useState({});

  // on key press enter we will call the weather api
  // using the search func
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await Weather(cityName);
      //console.log(data);
      setCheckWeather(data);
      setCityName("");
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search.."
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyPress={search}
      />
      {checkWeather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{checkWeather.name}</span>
            <sup>{checkWeather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(checkWeather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          {/* for getting the weather img  */}
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${checkWeather.weather[0].icon}@2x.png`}
              alt={checkWeather.weather[0].description}
            />
            <p>{checkWeather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
