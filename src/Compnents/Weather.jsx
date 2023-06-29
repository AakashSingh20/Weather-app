import React, { useEffect, useState } from "react";
import "./Weather.css";
import Card from "./card";

export default function Weather() {
  const [searchValue, setsearchValue] = useState("Mumbai");
  const [tempInfo, settempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=85c4764c7a582fee0315b6b438205080`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const { temp, pressure, humidity } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const newWeatherInfo = {
        temp,
        pressure,
        humidity,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      settempInfo(newWeatherInfo);
    } catch (error) {
      console.log("something's wrong");
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="main">
        <div className="search">
          <input
            type="search"
            value={searchValue}
            onChange={(event) => setsearchValue(event.target.value)}
          />
          <button className="search_but" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
        <Card  tempInfo={tempInfo}/>

        
      </div>
    </>
  );
}
