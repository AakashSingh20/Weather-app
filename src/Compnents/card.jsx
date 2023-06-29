import React from "react";
import hazeimg from "./img/fog.png";
import sunsetimg from "./img/fog.png";
import humidityimg from "./img/humidity.png";
import pressureimg from "./img/pressure.png";
import windimg from "./img/wind.png";

export default function card({ tempInfo }) {
  const {
    temp,
    pressure,
    humidity,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  const time = sunset;
  const date = new Date(time * 1000);
  const newTime = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <div className="card">
        <div className="up_card">
          <img src={hazeimg} alt="" />
        </div>
        <div className="med_card">
          <div className="one">
            <h1>{temp}&deg;</h1>
          </div>
          <div className="two">
            <a>{weathermood}</a>
            <a>
              {name},{country}
            </a>
          </div>
          <div className="three">
            <a> {new Date().toLocaleString()}</a>
      
          </div>
        </div>
        <div className="low_card">
          <div className="f">
            <img src={sunsetimg} alt="" />
            <div className="det">
              <a >{newTime}</a>
              <a >Sunset</a>
            </div>
          </div>
          <div className="s">
            <img src={humidityimg} alt="" />
            <div className="det">
              <a >{humidity}</a>
              <a >Humidity</a>
            </div>
          </div>
          <div className="t">
            <img src={pressureimg} alt="" />
            <div className="det">
              <a >{pressure} mm</a>
              <a >Pressure</a>
            </div>
          </div>
          <div className="fo">
            <img src={windimg} alt="" />
            <div className="det">
              <a >{speed}</a>
              <a >Wind</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
