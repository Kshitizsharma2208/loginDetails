import React from 'react';
import chatLogo from "../../../../asserts/images/icon-chat.png";
import customerLogo from "../../../../asserts/images/image-round.png";
import policydetail from "../../../../asserts/images/policydetail.png";
import Dropdown from "../../../../components/dropDown/Dropdown";
// import progressbarIcon from "../../../../asserts/images/images blub.jpg"
import "./CustomerDeatils.scss"
const CustomerDetails =  () => {
    return (
    <>
       
        <div className="detailInfo">
            <div className="leftside">
             <div className="categoryBoxes">
                  <div className="categoryBox">
                  <Dropdown />
                     {/* <select className="filter">
                       <option value="0">Filter By</option>
                       <option value="1">Quotes</option>
                       <option value="2">Transaction</option>
                      </select> */}
                    </div>
                    <div className="categoryBox">
                     <select className="date">
                       <option value="0">August 2021</option>
                       <option value="1">Banking</option>
                       <option value="2">Transaction</option>
                      </select>
                    </div>                
              </div>
             
              {/* <div className="insuranceHistory">
                  <ul className="generatedInsurance">
                      <img className='progressBarImg' src={progressbarIcon} alt="" />
                      <li className='listOfinsurance'>
                          <div className="progressBar">
                          <p className="textQuote">Lead Generated: Health Insurance </p>
                          </div>                          
                          <p className='dateOfInsurance '>06 August 2020</p>
                      </li>
                      
                      <li className='listOfinsurance'>
                         <p className="textQuote">Quote Generated: Health Insurance </p> 
                          <p className='dateOfInsurance '>14 August 2020</p>
                      </li>
                      <li className='listOfinsurance active'>
                         <p className="textQuote">Proposal Generated: Travel Insurance </p> 
                          <p className='dateOfInsurance '>15 August 2020</p>
                      </li>
                      <li className='listOfinsurance'>
                         <p className="textQuote">Proposal forwarded to RM: Travel Insurance </p> 
                          <p className='dateOfInsurance '>26 August 2020</p>
                      </li>
                      <li className='listOfinsurance'>
                         <p className="textQuote">Payment Initiated: Health Insurance </p> 
                          <p className='dateOfInsurance '>28 August 2020</p>
                      </li>
                      <li className='listOfinsurance'>
                         <p className="textQuote">Lead Status Updated: Health Insurance </p> 
                          <p className='dateOfInsurance '>31 August 2020</p>
                      </li>
                  </ul>
              </div>              */}

             <div id="timeline-container">
             <div class="inner-container">
                <ul class="timeline">
                <li class="timeline-item"> <p className="textQuote">Lead Generated: Health Insurance </p>
                <p className='dateOfInsurance '>06 August 2020</p>
                </li>
                <li class="timeline-item">
                <p className="textQuote">Quote Generated: Health Insurance </p> 
                <p className='dateOfInsurance '>14 August 2020</p>
                </li>
                <li class="timeline-item active">
                <p className="textQuote">Proposal Generated: Travel Insurance </p> 
                <p className='dateOfInsurance '>15 August 2020</p>
                </li>
                <li class="timeline-item">
                <p className="textQuote">Proposal forwarded to RM: Travel Insurance </p> 
                <p className='dateOfInsurance '>26 August 2020</p>
                </li>
                <li class="timeline-item">
                <p className="textQuote">Payment Initiated: Health Insurance </p> 
                <p className='dateOfInsurance '>28 August 2020</p>
                </li>
                <li class="timeline-item">
                <p className="textQuote">Lead Status Updated: Health Insurance </p> 
                <p className='dateOfInsurance '>31 August 2020</p>
                </li>
                </ul>
             </div>
             </div>
            </div>
            
            <div className="right">
             <div className="customerDeatils">
                <div className="customerIcon">
                    <img src={customerLogo} alt="" className="customerLogo" />
                </div>
                <div className="customerText">
                    <a className='detailCustom' href="">Customer details</a>
                </div>
             </div>
             
             <div className="customerName">
                 <p className="labelName">Customer Name</p>
                 <p className="entityValue">Sashidhar Ramayana </p>
             </div>
             <div className="customerName">
                 <p className="labelName">Customer ID</p>
                 <p className="entityValue">DB12876433</p>
             </div>
             <div className="customerName">
                 <p className="labelName">Gender</p>
                 <p className="entityValue">Female</p>
             </div>
             <div className="customerName">
                 <p className="labelName">Date of  Birth </p>
                 <p className="entityValue">23 Mar 1986</p>
             </div>
             <div className="customerName">
                 <p className="labelName">Mobile Number</p>
                 <p className="entityValue">09876534526</p>
             </div>
             <div className="customerName">
                 <p className="labelName">Email ID</p>
                 <p className="entityValue">sakshi@gmail.com</p>
             </div>
            
             <div className="policyDetails">
                 <div className="policyImg">
                   <img className='customerLogo-' src={policydetail} alt="" />
                 </div>
                 <div className="customerText">
                  <a className='detailCustom' href="">Policy details</a>
                 </div>                                 
             </div>
             <div className="policyName detailsPolicy">
                 <p className="labelName">Policy Name</p>
                 <p className="entityValue">Griha Raksha</p>
                 <p className="labelName term">Policy Term</p>
                 <p className="entityValue">10 year(s)</p>
             </div>
             <div className="policyName detailsPolicy">
                 <p className="labelName">Line of Business</p>
                 <p className="entityValue">Life Insurance</p>
                 <p className="labelName term">Base Premium</p>
                 <p className="entityValue">$6566</p>
             </div>
             <div className="policyName detailsPolicy">
                 <p className="labelName">Sum Insured</p>
                 <p className="entityValue">$50,00,000</p>
             </div>                                                              
            </div>       
        </div>
        <div class="chat-opener">
      <img className="LogoImg" src={chatLogo} alt="" />
    </div>
    </>
    )
}
export default CustomerDetails