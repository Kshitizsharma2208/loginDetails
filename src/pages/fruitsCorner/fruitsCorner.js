import React from "react";
import "./fruitsCorner.scss";
import apple from "../../asserts/images/apple.jpg";
import banana from "../../asserts/images/banana.jpg";
import cherry from "../../asserts/images/cherry.jpg";
import grosery from "../../asserts/images/grosery.jpg";
import oranges from "../../asserts/images/oranges.jpg";
import papaya from "../../asserts/images/papaya.jpg";
// import headerFruit from '../../components/fruitsHeader/headerFruit'
// import headerFruit from '../../components/fruitsHeader/headerFruit'
import FruitsLayout from "../../layouts/fruitsCornerLayout/HeaderLayout";

const FruitsCorner = () => {
  return (
    <FruitsLayout>
      <div className="container-">
        <div className="sector-">
          <div className="primaryHeading-">
            <div className="para-">
              <h1>Heading1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                neque ea iusto ratione pariatur mollitia recusandae delectus
                omnis soluta consequuntur.
              </p>
              <button type="button-">Click Me!</button>
            </div>

            <div className="secHeading">
              <img
                className="primaryImage-"
                src={apple}
                alt="fruits"
              />
            </div>

            <div className="triHead">
              <img className="primaryImage-" src={banana} alt="fruits" />
            </div>
            <div className="quaHead">
              <img className="primaryImage-" src={cherry} alt="fruits" />
            </div>
          </div>

          <div className="box-">
            <div className="box-a">
              <h1>Heading 2</h1>
              <button type="button">Click Me!</button>
            </div>

            <div className="box-b">
              <img className="secondaryImage" src={banana} alt="fruits" />
            </div>
          </div>

          <div className="subBox">
            <div className="box-c">
              <h1>Heading 3</h1>
              <a href="https://www.myGrosery.in/">HyperLink</a>
            </div>

            <div className="box-d">
              <img className="triImage" src={oranges} alt="fruits" />
            </div>
          </div>
        </div>

        <div className="feature">
          <div className="content-">
            <h3>Featured collection this week</h3>
            <hr />
          </div>
          <div className="content-2">
            <div className="point-1">
              <img className="apple1" src={apple} alt="fruits" />
            </div>
            <div className="point-2">
              <img className="cherry1" src={cherry} alt="fruits" />{" "}
            </div>
            <div className="point-3">
              <img className="banana1" src={banana} alt="fruits" />{" "}
            </div>
            <div className="point-4">
              <img className="orange1" src={oranges} alt="fruits" />{" "}
            </div>
          </div>
          <div className="content-3">
            <div className="point-1">
              <img className="apple1" src={apple} alt="fruits" />
            </div>
            <div className="point-2">
              <img className="cherry1" src={cherry} alt="fruits" />{" "}
            </div>
            <div className="point-3">
              <img className="banana1" src={banana} alt="fruits" />{" "}
            </div>
            <div className="point-4">
              <img className="orange1" src={oranges} alt="fruits" />{" "}
            </div>
          </div>
          <div className="content-4">
            <h3>Featured product type1</h3>
            <a href="https://www.myGrosery.in/">Shop link</a>
          </div>
          <div className="content-5">
            <h3>Featured product type2</h3>
            <a href="https://www.myGrosery.in/">Shop link</a>
          </div>
        </div>
        <hr />
        <footer>
          <p>
            By Kshitiz
            <br />
          </p>
          <a href="mailto:hkshitiz000@gmail.com">hkshitiz000@gmail.com</a>
        </footer>
      </div>
    </FruitsLayout>
  );
};
export default FruitsCorner;
