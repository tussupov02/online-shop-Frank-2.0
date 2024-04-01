import React from "react";
import "./ShowImg.css";

function ShowImg() {
  return (
    <div class="showImg_main">
      <div class="gallery">
        <ul>
          <li>
            <img src={require("../../Assets/1.jpg")}/>
          </li>
          <li>
            <img src={require("../../Assets/2.jpg")}/>
          </li>
          <li>
            <img src={require("../../Assets/3.jpg")}/>
          </li>
          <li>
            <img src={require("../../Assets/4.jpg")}/>
          </li>
          <li>
            <img src={require("../../Assets/5.jpg")}/>
          </li>
          <li>
            <img src={require("../../Assets/6.jpg")}/>
          </li>
          <li>
            <img src={require("../../Assets/7.jpg")}/>
          </li>
          <li>
            <img src={require("../../Assets/8.jpg")}/>
          </li>
          <li>
            <img src={require("../../Assets/9.jpg")}/>
          </li>
          <li>
            <img src={require("../../Assets/10.jpg")}/>
          </li>
          <li>
            <img src={require("../../Assets/12.jpg")}/>
          </li>
          <li>
            <img src={require("../../Assets/13.jpg")}/>
          </li>
          <li>
            <img src={require("../../Assets/14.jpg")}/>
          </li>
          <li>
            <img src={require("../../Assets/15.jpg")}/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ShowImg;
