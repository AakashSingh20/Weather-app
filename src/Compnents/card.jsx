import React from "react";

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
          <img src="" alt="" />
        </div>
        <div className="med_card">
          <div className="one">
            <h1>{temp}&deg;</h1>
          </div>
          <div className="two">
            <a href="/">{weathermood}</a>
            <a href="/">
              {name},{country}
            </a>
          </div>
          <div className="three">
            {/* <a href="/">7/18/2021,</a>
            <a href="/">7:18:21 PM</a> */}
            {new Date().toLocaleString()}
          </div>
        </div>
        <div className="low_card">
          <div className="f">
            <img src="" alt="" />
            <div className="det">
              <a href="/">{newTime}</a>
              <a href="/">Sunset</a>
            </div>
          </div>
          <div className="s">
            <img src="" alt="" />
            <div className="det">
              <a href="/">{humidity}</a>
              <a href="/">Humidity</a>
            </div>
          </div>
          <div className="t">
            <img src="" alt="" />
            <div className="det">
              <a href="/">Pressure</a>
              <a href="/">{pressure}mm</a>
            </div>
          </div>
          <div className="fo">
            <img src="" alt="" />
            <div className="det">
              <a href="/">wind</a>
              <a href="/">{speed}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
