import React, { useState } from "react";
import dropdownIcon from "../../asserts/images/dropdown icon.png"
import "./dropdown.scss";

const Dropdown = () => {
  const [showDropdown, toggleHandler] = useState(false);

  const clickhandler = () => {
    toggleHandler(!showDropdown);
  };

  return (
    <div className="dropDownContainer">
      <div className="selectedValue " onClick={clickhandler}>
        <span>Filter By</span>
        <span> <img className="dropdownLogo" src= {dropdownIcon} alt="" /> </span>
      </div>
     {showDropdown && (
        <div className="dropdownOption">
        <ul>
          <li className="itemsLists">Quotes</li>
          <li className="itemsLists">Proposals</li>
          <li className="itemsLists">Policies</li>
          <li className="itemsLists">Complains</li>
          <li className="itemsLists">Status</li>
          <li className="itemsLists">Payments</li>
          <li className="itemsLists Sort">Sort by</li>
          <li className="itemsLists New">Newest first</li>
          <li className="itemsLists">Oldest first</li>
        </ul>
      </div>
     )}
    </div>
  );
};
export default Dropdown;
