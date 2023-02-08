import React from "react";
import "./HomeScreen.css";
import { Link, Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div className="container">
        <div className="header-container">
          <div>
            <img
              src={require("../../assests/images/01_Home/logo_web.png")}
              alt=""
            ></img>
          </div>
          <div className="searchinputContainer">
            <input className="searchInput" placeholder="Search city"></input>
            <div style={{ alignSelf: "center", margin: "0 auto" }}>
              <img
                src={require("../../assests/images/01_Home/Group 2/search_white.png")}
                className="search-icon"
                alt=""
              ></img>
            </div>
          </div>
        </div>

        <div className="middle-container">
          <div className="middleHeader">
            <div className="middleHeader1">
              <nav>
                <NavLink
                  to="/HomeDisplay"
                  className="navlink"
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive ? "2px solid #FFA222" : "none",
                      color: isActive ? "#FFA222" : "white",
                      fontSize: "1.3rem",
                      fontFamily: "Roboto",
                      textDecoration: "none",
                      
                      
                    };
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/Favourite"
                  className="navlink"
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive ? "2px solid #FFA222" : "none",
                      color: isActive ? "#FFA222" : "white",
                      fontSize: "1.3rem",
                      fontFamily: "Roboto",
                      textDecoration: "none",
                    };
                  }}
                >
                  Favourite
                </NavLink>
                <NavLink
                  to="/Recent"
                  className="navlink"
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive ? "2px solid #FFA222" : "none",
                      color: isActive ? "#FFA222" : "white",
                      fontSize: "1.3rem",
                      fontFamily: "Roboto",
                      textDecoration: "none",
                    };
                  }}
                >
                  Recent Search
                </NavLink>
              </nav>
            </div>
            {/* <div className="inner-container">
            <span>dgfhgjjh</span>
                 </div> */}
            <div className="dateTime">
              <p>Wed, 28 Nov 2018 11:35 AM</p>
            </div>
          </div>
        <div className="line"></div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
