import React from "react";
import "./21k.scss";
//  import banner from "../../asserts/images/banner (1).png"
import card1 from "../../asserts/images/card1.png";
import card2 from "../../asserts/images/card2.png";
import card3 from "../../asserts/images/card3.png";
import card4 from "../../asserts/images/card4.png";
import card5 from "../../asserts/images/card5.png";
import pic1 from "../../asserts/images/Rectangle.png";
import heart from "../../asserts/images/heart.png";
import group1 from "../../asserts/images/Group 1.png";
import coins from "../../asserts/images/coins.png";
import books from "../../asserts/images/book.png";
import more from "../../asserts/images/more.png";
import thumbsup from "../../asserts/images/thumbs up.png";
import task from "../../asserts/images/task.png";
import complete from "../../asserts/images/complete.png";
import chain from "../../asserts/images/chain benefits.png"
import footer from "../../asserts/images/bg_footer.png"

const StaticPage = () => {
  return (
    <>
      <div className="conatiner">
        <div className="Header">
          <div className="introduction">
            <div className="contentIntro">
              <div className="heading">
                <h2 className="introHead">The World'S First Web 3.0 school</h2>
                <p className="introContent">
                  We are reimagining the education with emerging techonologies
                  like blockchain,NFTs and more to instill learning,thinking and
                  creativity in the DNA of our student Our Children has the
                  opportunity to understand how cutting-edge technology can help
                  them turn their creativity into financial empowerment.
                </p>
              </div>
              <div className="buttonIntro">
                <button className="learnmore">Learn more</button>
              </div>
            </div>
            <div className="introductiveVideo">
              {/* <img src={banner} alt="" /> */}
            </div>
          </div>
        </div>
        <div className="headerBottom">
          <div className="bottomAbove">
            <div className="leftGrades">
              <div className="leftgradePoint">
                <h4 className="point">3500+</h4>
                <p className="textgrade">Learn with 3500+ happy students</p>
              </div>
            </div>
            <div className="rightGrades">
              <div className="leftgradePoint">
                <h4 className="point red">35+</h4>
                <p className="textgrade">Students from across 35 countries</p>
              </div>
            </div>
          </div>
          <div className="bottomBottom">
            <div className="leftGrades" id="bottom_">
              <div className="leftgradePoint">
                <h4 className="point red">10+</h4>
                <p className="textgrade">
                  Handpicked teachers from top 10 cities
                </p>
              </div>
            </div>
            <div className="rightGrades" id="bottom_">
              <div className="leftgradePoint ">
                <h4 className="point">96%</h4>
                <p className="textgrade">
                  Parents believe their child has became more skilled{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="menuCard">
            <div className="menuHeading">
              <div className="headng">
                <h4 className="menutextHead">Explore21k today</h4>
              </div>
              <div className="cards">
                <div className="sectionInner">
                  <div className="card1">
                    <img src={card1} alt="" />
                  </div>
                  <div className="card2">
                    <img src={card2} alt="" />
                  </div>
                </div>
                <div className="section2">
                  <div className="card3">
                    <img src={card3} alt="" />
                  </div>
                  <div className="card4">
                    <img src={card4} alt="" />
                  </div>
                  <div className="card5">
                    <img src={card5} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="createrEconomy">
            <div className="creater">
              <div className="innerCreater">
                <div className="picture">
                  <img className="imgPic" src={pic1} alt="" />
                </div>
                <div className="pictureText">
                  <h1 className="pichead">Creator Economy</h1>
                  <p className="picText">
                    At 21k school, we encourage creativity and instill a sense
                    of entrepreneurship in children. For every artwork created
                    by students (in the form of drawings, paintings, and more),
                    21k turns it into NFTs (a digital asset that belongs to your
                    child) and sells those in the marketplaces. For every sold
                    art, a child receives 21k coins which can be redeemed in the
                    form of a scholarship.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="bottomCreater">
              <div className="steps">
                <div className="imgStep1">
                  <img src={heart} alt="" className="step1Img" />
                </div>
                <div className="step1Text">
                  <p className="textStep1">Student creates artwork</p>
                </div>
              </div>
              {/* <p className="bottomStep1">Step1</p> */}
              <div className="steps">
                <div className="imgStep1">
                  <img src={group1} alt="" className="step1Img" />
                </div>
                <div className="step1Text">
                  <p className="textStep1">Student creates artwork</p>
                </div>
              </div>
              {/* <p className="bottomStep1">Step1</p> */}
              <div className="steps">
                <div className="imgStep1">
                  <img src={coins} alt="" className="step1Img" />
                </div>
                <div className="step1Text">
                  <p className="textStep1">Student creates artwork</p>
                </div>
              </div>
              {/* <p className="bottomStep1">Step1</p> */}
              <div className="steps">
                <div className="imgStep1">
                  <img src={books} alt="" className="step1Img" />
                </div>
                <div className="step1Text">
                  <p className="textStep1">Student creates artwork</p>
                </div>
              </div>
            </div>
          </div>
          <div className="connector"></div>
          <div className="learn">
            <div className="innerCreater">
              <div className="picture">
                <img className="imgPic" src={pic1} alt="" />
              </div>
              <div className="pictureText">
                <h1 className=" earncolor">Learn to Earn</h1>
                <p className=" textColor">
                  We aim to instill a lifelong passion for learning in our
                  students. Our Learn to Earn design rewards our students on a
                  successful satisfactory completion of any task. The gamified
                  process excites attracts students to spend time learning. We
                  acknowledge students for their efforts by providing them 21K
                  coins which can be used to pay fees or can be redeemed in
                  other ways.{" "}
                </p>
              </div>
            </div>{" "}
            <div className="bottomCreater">
              <div className="steps">
                <div className="imgStep1">
                  <img src={task} alt="" className="step1Img" />
                </div>
                <div className="step1Text">
                  <p className="textStep1">Student creates artwork</p>
                </div>
              </div>
              {/* <p className="bottomStep1">Step1</p> */}
              <div className="steps">
                <div className="imgStep1">
                  <img src={complete} alt="" className="step1Img" />
                </div>
                <div className="step1Text">
                  <p className="textStep1">Student creates artwork</p>
                </div>
              </div>
              {/* <p className="bottomStep1">Step1</p> */}
              <div className="steps">
                <div className="imgStep1">
                  <img src={coins} alt="" className="step1Img" />
                </div>
                <div className="step1Text">
                  <p className="textStep1">Student creates artwork</p>
                </div>
              </div>
              {/* <p className="bottomStep1">Step1</p> */}
              <div className="steps">
                <div className="imgStep1">
                  <img src={thumbsup} alt="" className="step1Img" />
                </div>
                <div className="step1Text">
                  <p className="textStep1">Student creates artwork</p>
                </div>
              </div>
              <div className="steps">
                <div className="imgStep1">
                  <img src={more} alt="" className="step1Img" />
                </div>
                <div className="step1Text">
                  <p className="textStep1">Student creates artwork</p>
                </div>
              </div>
              <div className="steps">
                <div className="imgStep1">
                  <img src={books} alt="" className="step1Img" />
                </div>
                <div className="step1Text">
                  <p className="textStep1">Student creates artwork</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Metaverse">
            <div className="creater">
              <div className="innerCreater">
                <div className="picture">
                  <img className="imgPic" src={pic1} alt="" />
                </div>
                <div className="pictureText">
                  <h1 className="earncolor">Metaverse</h1>
                  <p className="textColor">
                    To equip our students with the latest technology
                    advancements, we aim to reimagine traditional ways of
                    teaching. We will soon be introducing personalized and
                    interactive virtual learning classes for elevated learning
                    experience. We will bring in the latest virtual reality
                    technologies to help students learn in a conducive
                    environments and understand subjects very deeply.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="blockChain">
          <div className="creater">
              <div className="innerCreater">
                <div className="picture">
                  <img className="imgPic" src={pic1} alt="" />
                </div>
                <div className="pictureText">
                  <h1 className="pichead">Blockchain</h1>
                  <p className="picText">
                  We want to integrate blockchain technology for increased recognition and visibility of our students. Our students and teachers will have a digital identity and we also aim to digitize the marksheet for global validity. Also, all the storage and video calls will migrate to blockchain for ease of use.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="childrenBenefit">
          <div className="picture bottomImg">
            <img className="imgPic " src={pic1} alt="" />
            </div>
            <div className="childernText">
                <p className="childernBenefitText">The Children Benefits</p>
            </div>
            <div className="childernProgress">
                <img src={chain} alt="" className="chain" />
            </div>
            <div className="chainComments">
                <div className="comments comment1">
                    <p className="comment">Understand that learning is rewarding</p>
                </div>
                <div className="comments">
                    <p className="comment">Understand that learning is rewarding</p>
                </div>
                <div className="comments">
                    <p className="comment">Understand that learning is rewarding</p>
                </div>
                <div className="comments">
                    <p className="comment">Understand that learning is rewarding</p>
                </div>
            </div>
          </div>
          <div className="footer">
              <div className="footerBottom">
                  <p className="bottomEnd">Reimagining Education </p>
                  <p className="End">World's First Web 3.0 School</p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StaticPage;
