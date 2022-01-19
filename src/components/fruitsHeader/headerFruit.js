import React from "react";
import alarm from "../../asserts/images/alarm.png";
import cart from "../../asserts/images/cart.png";

const headerFruit = () => {
  return (
    <>
      <div className="navbar">
        <div className="items">
          <a href="#">
            <button className="btn">Sign In</button>
          </a>
          <a href="#">
            <button className="btn">Log In</button>
          </a>
          <a href="#">
            {" "}
            <img className="alarmLogo" src={alarm} alt="image-alarm " />{" "}
          </a>
          <a href="#">
            {" "}
            <img className="cartLogo" src={cart} alt="image-cart" />{" "}
          </a>
        </div>
      </div>
      <div className="logo-">
        <h1>LOGO</h1>
        <div className="searchItem">
          <div>
            <select className="category">
              <option value="0">Category:</option>
              <option value="1">Oranges</option>
              <option value="2">Apple</option>
              <option value="3">Banana</option>
              <option value="3">Cherry</option>
            </select>
          </div>
          <div>
            <input
              className="search"
              type="text"
              placeholder="SearchBox"
              name="submit"
            />
            <button className="searchbtn" type="submit">
              Search
            </button>
          </div>
          <button className="textBtn">Advance</button>
        </div>
      </div>

      <div className="categorybar">
        <div className="categorybtn">
          <button className="textBtn">New</button>
          <button className="textBtn">Fashion</button>
          <button className="textBtn">Electronics</button>
          <button className="textBtn">Art</button>
          <button className="textBtn">Home Garden</button>
          <button className="textBtn">Other2</button>
        </div>
      </div>
    </>
  );
};
export default headerFruit;
