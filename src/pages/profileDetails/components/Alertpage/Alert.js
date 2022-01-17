import React from "react";
import "./Alert.css";

const Alert = () => {
  return (
    <>
      <div className="footer">
        <div className="footerHeader2">
          <p className="notification2">Notifications</p>
          <p  className="alert">Set Alerts</p>
        </div>
        <hr />
        <div className="alertSection">
          <div className="alertMessage">
            <p className="alertText">
              Set alert as per your convenience and requirement
            </p>
          </div>
          <div className="alertList">
            <div className="checkbox">
              <input className="check" type="checkbox" name="" id="" />
            </div>
            <p className="checkboxAlert">Lead Inactivity</p>
          </div>
          <div className="alertBottom">
            <p className="alertMsg">Alert Me</p>
            <div className="dayCount">
              <input className="digit" type="text" name="" id="" />
              <select className="dropDown">
                <option value="0">days</option>
                <option value="1">months</option>
                <option value="2">years</option>
              </select>
            </div>
            <p className="Quote">
              prior to alead becming stale,due to inaction from RM
            </p>
          </div>
          <div className="alertList">
            <div className="checkbox">
              <input className="check" type="checkbox" name="" id="" />
            </div>
            <p className="checkboxAlert">Proposal Inactivity</p>
          </div>
          <div className="alertBottom">
            <p className="alertMsg">Alert Me</p>
            <div className="dayCount">
              <input className="digit" type="text" name="" id="" />
              <select className="dropDown">
                <option value="0">days</option>
                <option value="1">months</option>
                <option value="2">years</option>
              </select>
            </div>
            <p className="Quote">
              prior to proposal becoming stale,due to lack of customer interest
            </p>
          </div>
          <div className="alertList">
            <div className="checkbox">
              <input className="check" type="checkbox" name="" id="" />
            </div>
            <p className="checkboxAlert">Payment Approval</p>
          </div>
          <div className="alertBottom">
            <p className="alertMsg">Alert Me</p>
            <div className="dayCount">
              <input className="digit" type="text" name="" id="" />
              <select className="dropDown">
                <option value="0">days</option>
                <option value="1">months</option>
                <option value="2">years</option>
              </select>
            </div>
            <p className="Quote">
              after sending payment request to RM for approval
            </p>
          </div>
          <div className="alertList">
            <div className="checkbox">
              <input className="check" type="checkbox" name="" id="" />
            </div>
            <p className="checkboxAlert">Complaint Inactivity</p>
          </div>
          <div className="alertBottom">
            <p className="alertMsg">Alert Me</p>
            <div className="dayCount">
              <input className="digit" type="text" name="" id="" />
              <select className="dropDown">
                <option value="0">days</option>
                <option value="1">months</option>
                <option value="2">years</option>
              </select>
            </div>
            <p className="Quote">after raising complaint</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Alert;
