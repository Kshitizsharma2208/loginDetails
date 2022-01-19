import React from 'react';
import headerFruit from '../../components/fruitsHeader/headerFruit'
import Header from '../../components/header/Header';
import chatLogo from '../../asserts/images/icon-chat.png'
import Sidebar from '../../components/sidebar/Sidebar';

const FruitsLayout = (props) => {
  return (
     <div className="container">
      <Header />
      <div className="headerPrimary">
        <Sidebar />
        <div className="body-container">{props.children}</div>
        <div class="chat-opener">
          <img className="LogoImg" src={chatLogo} alt="" />
        </div>
      </div>
    </div>
  
  ) ;
}
export default FruitsLayout