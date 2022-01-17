import React from "react";
import logo from "../../asserts/images/logo.png";
import search from "../../asserts/images/icon-search.png"
import questionIcon from "../../asserts/images/icon-question.png"
import bellIcon from "../../asserts/images/icon-bell.png";
import userIcon from "../../asserts/images/icon-user.png";
import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="left-Side">
        <div className="logoBox">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="textLogo">
          <p className="text" >bank</p>
        </div>
      </div>
      <div className="right-side">
        <div className="categoryBtn">
          <select className=" category">
            <option value="0">English</option>
            <option value="1">Banking</option>
            <option value="2">Transaction</option>
          </select>
        </div>
        <div className="navbarIcons">
          <img className="icons" src= {search} alt="" />
          <img className="icons" src= {questionIcon} alt="" />
          <img className="icons" src= {bellIcon} alt="" />
          <img className="icons" src= {userIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;