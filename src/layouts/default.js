import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import chatLogo from '../asserts/images/icon-chat.png'
const DefaultLayout = (props) => {
  return (
    <div className="container">
      <Header />
      <div className="headerPrimary">
        <Sidebar />
        {props.children}
        <div class="chat-opener">
          <img className="LogoImg" src={chatLogo} alt="" />
        </div>
      </div>
    </div>
  );
};
export default DefaultLayout;
