import React from "react";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div>
      <div className="Resource_Request_User_Tab">
        <div className="Resource_div">
          <p className="Resource_text">Resources</p>
        </div>
        <div className="Request_div">
          <p className="Request_text">Requests</p>
        </div>
        <div className="User_div">
          <p className="User_text">Users</p>
        </div>
      </div>
      <div className="searchBar">
        <img alt="searchIcon" src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-1.png"/>
        <input type="search" placeHolder="Search" className="inputSearch"/>
      </div>
    </div>
  );
};

export default HomePage;
