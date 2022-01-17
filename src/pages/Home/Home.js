import React from 'react'
import "./Home.scss"
import Header from "../../components/header/Header"
import Sidebar from '../../components/sidebar/Sidebar'
import circleTick from "../../asserts/images/icon-circle-tick.png"
import dollorok from "../../asserts/images/icon-doller-ok.png"
import dollarup from "../../asserts/images/icon-doller-ok.png"
import graph1 from "../../asserts/images/graph1.png"
import graph2 from "../../asserts/images/graph2.png"
import doc from "../../asserts/images/icon-doc.png"
import down from "../../asserts/images/icon-down.png"
import hands from "../../asserts/images/icon-hands.png"

const Home = () =>{

  return (
    <>
    <Header/>
      <div className="body-container">
      <Sidebar/>
        <div className="landing">
         <h1 className="pageTitle">Welcome back <b>Rakesh</b></h1>
         <div className="progressContainer">
          <div className="headingLeft">
            <h4 className="headingTop">Target Progress</h4>
            <span className="progress-badge" id="color">2 more to go!</span>
            <div className="viewDeatilsContainer">
              <img className='doc' src={doc} alt=""/>
              <span> <b>View Details </b> </span>
            </div>
          </div>
          <div className="progressWrapper">
            <div className="leadInfo">
              <p className='leads'>3 leads</p>
              <p className='generated'>Generated till now</p>
            </div>
            <div className="arrow-down"></div>
            <div className="progress"></div>

            <div className="bottomLeadsWrapper">
              <div className="">
                <p className='leadsTwo'>↓ 2 leads</p>
                <p className='generated'>Leads from last week</p>
              </div>
              <div className='leadsBox'>
                <p className='leadsThree'>↑ 3 leads</p>
                <p className='generated'>Target for this week</p>
              </div>
            </div>
          </div>

          <div className="celebrationSection sectionContainer">
            <div className="appreciate-text">
              <img src={hands} alt="" />
              <p> <b>Manoj </b>  is leading with <b> 7 lead generation </b></p>
            </div>
            <div className="avg-text">
              <img src={hands} alt="" />
              <p>Average lead generation this week is <b>  4 lead </b></p>
            </div>
          </div>
        </div> 
          <div className="section-container">
            <div className="leftContainer">
              <div className="card1">
                <div className="headingLeft">
                  <h4 className="headingTop"> <p className='pt'>Work in Progress </p></h4>
                  <span className="badge" id="color">3</span>
                </div>
                <div className="card">
                  <div className="cardHeader">
                    <div className="img">
                      <img className="innerImg" src={circleTick} alt=""/>
                      </div>
                    <div className="cardHeaderContent">
                      <p className="quotePoint">Quotes:22875640</p>
                      <p className="bottomQuote">last edited two days ago</p>
                    </div>
                  </div>
                  <div className="cardFooter">
                    <div className="leftBottom">
                      <p className="Label">Customer</p>
                      <h4 className="value">Sunil Kulkuli</h4>
                    </div>
                    <div className="rightButton">
                      <p className="Label">Insures Sum</p>
                      <p className="value">$--</p>
                     </div>
                  </div>                  
                 </div>
                <div className="card">
                <div className="cardHeader">
                  <div className="img">
                    <img className="innerImg" src={doc} alt=""/>
                    </div>
                  <div className="cardHeaderContent">
                    <p className="quotePoint">Quotes:22875640</p>
                    <p className="bottomQuote">last edited two days ago</p>
                  </div>
                </div>
                <div className="cardFooter">
                  <div className="leftBottom">
                    <p className="Label">Customer</p>
                    <h4 className="value">Sunil Kulkuli</h4>
                  </div>
                  <div className="rightButton">
                   <p className="Label">Insures Sum</p>
                   <p className="value">$--</p>
                  </div>
                </div>
            <div className="card">
              <div className="cardHeader">
                <div className="img">
                  <img className="innerImg" src={dollorok} alt=""/>
                  </div>
                <div className="cardHeaderContent">
                  <p className="quotePoint">Quotes:22875640</p>
                  <p className="bottomQuote">last edited two days ago</p>
                </div>
              </div>
              <div className="cardFooter footer">
                <div className="data-row">
                  <div className="leftBottom">
                    <p className="Label">Customer</p>
                    <h4 className="value">Sunil Kulkuli</h4>
                  </div>
                  <div className="rightButton">
                  <p className="Label">Insures Sum</p>
                  <p className="value">$--</p>
                 </div>
              </div>
              <div className="containerFooter">
                <div className="leftBottom bottom" id="boxA">
                  <p className="Label">Policy type</p>
                  <p className="value">Home Insurance</p>
                </div>
                <div className="rightBottom" id="boxB">
                  <p className="Label">Insurance </p>
                  <p className="value"><b className="lic">LIC of India </b></p>
                </div>
              </div>
            </div>
          </div>
        </div>  
              </div>       
            </div>
            <div className="middleContainer">
             <div className="card2">
              <div className="headingLeft">
              <h4 className="headingTop"> <p className='pt'>Pending request </p> </h4>
              <span className="badge">1</span>
            </div>
          <div className="card">
            <div className="cardHeader">
              <div className="img">
                <img className="innerImg" src={dollarup} alt="" />
              </div>
              <div className="cardHeaderContent">
                <p className="quotePoint">Quotes:22875640</p>
                <p className="bottomQuote">last edited two days ago</p>
              </div>
            </div>
            <div className="cardFooter footer">
              <div className="data-row">
                <div className="leftBottom">
                  <p className="Label">Customer</p>
                  <h4 className="value">Sunil Kulkuli</h4>
                </div>
                <div className="rightButton">
                <p className="Label">Insures Sum</p>
                <p className="value">$--</p>
               </div>
            </div>
            <div className="containerFooter">
              <div className="leftBottom" id="boxA">
                <p className="Label">Policy type</p>
                <p className="value">Home Insurance</p>
              </div>
              <div className="rightBottom" id="boxB">
                <p className="Label">Insurance </p>
                <p className="value"><b className="lic">LIC of India </b> </p> 
                </div>
            </div>
          </div>
        </div>
       </div>
        <div className="card">
        <div className="cardHeader">
          <div className="img">
            <img className="innerImg" src= {dollarup} alt=""/>
            </div>
          <div className="cardHeaderContent">
            <p className="quotePoint">Quotes:22875640</p>
            <p className="bottomQuote">last edited two days ago</p>
          </div>
        </div>
        <div className="cardFooter footer">
          <div className="data-row">
            <div className="leftBottom ">
              <p className="Label">Customer</p>
              <h4 className="value">Sunil Kulkuli</h4>
            </div>
            <div className="rightBottom">
              <p className="Label">Insures Sum</p>
              <p className="value"><b>$-- </b></p>
              </div>
          </div>
        </div>
        <div className="containerFooter">
          <div className="leftBottom boxs" id="boxA">
            <p className="Label">Policy type</p>
            <p className="value">Home Insurance</p>
          </div>
          <div className="rightBottom" id="boxB">
            <p className="Label">Insurance </p>
            <p className="value"><b className="lic">LIC of India </b> </p> 
            <div/>
        </div>
       </div>   
            <div className="card">
              <div className="cardHeader">
                <div className="img">
                  <img className="innerImg" src= {dollarup} alt=""/>
                </div>
                <div className="cardHeaderContent">
                  <p className="quotePoint">Quotes:22875640</p>
                  <p className="bottomQuote">last edited two days ago</p>
                </div>
              </div>
              <div className="cardFooter footer">
                <div className="data-row">
                  <div className="leftBottom">
                    <p className="Label">Customer</p>
                    <h4 className="value">Sunil Kulkuli</h4>
                  </div>
                  <div className="rightBottom">
                    <p className="Label">Insures Sum</p>
                    <p className="value"><b>$-- </b></p>
                  </div>
                </div>
                <div className="containerFooter">
                  <div className="leftBottom " id="boxA">
                    <p className="Label">Policy type</p>
                    <p className="value">Home Insurance</p>
                  </div>
                  <div className="rightBottom" id="boxB">
                    <p className="Label">Insurance </p>
                    <p className="value"><b className="lic">LIC of India </b></p> 
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
            <div className="rightContainer">
          <div className="card-3">
            <div className="headingLeft searchContainer">
              <h4 className="headingTop">Search Customer</h4>
              <p className="p-point">Search customer by there register mobile number or cif number</p>

              <div className="login-deatils">
                <div className="checkbox">
                  <input className="checkbox1" type="checkbox" name="Checkin" id=""/>
                </div>
                <div className="customer-id">
                  <input className="search" type="text" name="submit" placeholder="Customer Id"/>
                  <img className="img-search" src="../images/info-grey.png" alt=""/>
                </div>
              </div>
              <div className="password-container">
                <div className="checkbox">
                  <input className="checkbox1" type="checkbox" name="Checkin" id=""/>
                </div>
                <div className="customer-id">
                  <input className="search" type="text" name="submit" placeholder="Enter Phone Number"/>
                  <img className="img-search" src="../images/info-grey.png" alt=""/>
                </div>
              </div>
              <div className="login-btn">
                <button className="search-btn">login</button>
              </div>
            </div>
          </div>
            </div>
          </div>
          <div className="btns-">
           <div className="btns-1"><button className="btns-1">View all</button> </div>
           <div className="btns-1"><button className="btns-1">View all</button> </div>
          </div>
          <div className="bigFooter">
       <div className="footerContainer">
         <div className="footerleft"><h4>Leaderboard</h4>
         </div>
         <div className="footerRight">
           <div className="footerdate"><p>August2021</p>
           </div>
           <div ><img className="calendar"  src={down} alt=""/>
           </div>
         </div>
       </div>
       <div className="footer-small-container">
          <div className="footer-small-left">
            <div className="message msg1">
             <p> You are in the <b>top 20% </b> in lead generation </p> 
           </div>
           <div className="bar-grap">
             <img className="img-graph_" src={graph1} alt=""/>
           </div>
         </div>      
         <div className="footer-small-right">
           <div className="message">
             <p>You are Top 2 based on lead genearation</p>
           </div>
           <div className="bar-grap">
             <img className="img-graph_" src={graph2} alt=""/>
           </div>
         </div>
       </div>
          </div>
       </div>
      </div>
    
      </> 
  );   
}
export default Home;