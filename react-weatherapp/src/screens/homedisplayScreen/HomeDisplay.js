import React, { useState } from "react";
import "./HomeDisplay.css";

const HomeDisplay = () => {
  const [celsius, setCelsius] = useState(true);
  const handleCelsius = () => {
    setCelsius(!celsius);
  };
  const handleFahrenheit = () => {
    setCelsius(!celsius);
  };
  return (
    <div className="mainContainerHome">
      <span className="cityNameHome">Udupi, Karnataka</span>
      <div className="favContainerHome">
        <img
          src={require("../../assests/images/02_Home_Favourite/favouriteIcon.png")}
          className="AddFavIconHome"
        ></img>
        <div style={{ alignSelf: "center" }}>
          <span className="addToFavTextHome">Add to favourite</span>
        </div>
      </div>

      <div className="middleContainerHome">
        <div className="sunnydivhome">
          <img
            src={require("../../assests/images/04_Favourite/Group 3/Group 4/mostly_sunny.png")}
            className="mostly-sunny"
          ></img>
        </div>

        <div className="innerContainerHome">
          <span className="temperature">87</span>
          <div className="conversionContainer">

            {celsius ? (
              <>
                <div onClick={handleCelsius} style={{backgroundColor:'white'}}>
                  <span className="unitC">°C</span>
                </div>
                <div onClick={handleFahrenheit}>
                  <span className="unitF">°F</span>
                </div>
              </>
            ) : (
              <>
                <div onClick={handleCelsius} >
                  <span className="unitF">°C</span>
                </div>
                <div onClick={handleFahrenheit} style={{backgroundColor:'white'}}>
                  <span className="unitC">°F</span>
                </div>
              </>
            )}
            {/* <div><span>°C</span></div> */}
          </div>
        </div>
        <span className="mostly-sunnyText ">Mostly Sunny</span>
      </div>
      <div className="line-copy"/>

      <div className="bottomContainerHome">

        <div className="innerBottomHome">
          <img src={require('../../assests/images/01_Home/background/icon_temperature_info.png')} className="icon-temperature-info"></img>
          <div className="despBottom">
            <span className="content">Min-Max</span>
            <span className="contentDesp">75°-90°</span>
          </div>
        </div>

        <div className="innerBottomHome">
          <img src={require('../../assests/images/01_Home/background/icon_rain_big.png')} className="icon-temperature-info"></img>
          <div className="despBottom">
            <span className="content">Precipitation</span>
            <span className="contentDesp">0%</span>
          </div>
        </div>

        <div className="innerBottomHome">
          <img src={require('../../assests/images/01_Home/background/icon_humidity_info.png')} className="icon-temperature-info"></img>
          <div className="despBottom">
            <span className="content">Humidity</span>
            <span className="contentDesp">47%</span>
          </div>
        </div>

        <div className="innerBottomHome">
          <img src={require('../../assests/images/01_Home/background/icon_wind_info.png')} className="icon-temperature-info"></img>
          <div className="despBottom">
            <span className="content">Wind</span>
            <span className="contentDesp">4 mph</span>
          </div>
        </div>

        <div className="innerBottomHome">
          <img src={require('../../assests/images/01_Home/background/icon_visibility_info.png')} className="icon-temperature-info"></img>
          <div className="despBottom">
            <span className="content">Visibility</span>
            <span className="contentDesp">12 mph</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomeDisplay;
