import React from "react";
import "./ReadyMade.css";

function ReadyMade(props) {
  return (
    <div className="ready-made_kits_catalog">
      <div className="ready-made_content_box" id="ready-made">
        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <div className="ready-made_kits_content">
          <h5>{props.title}</h5>
          <p>{props.content}</p>
        </div>
      </div>
      <div className="ready-made_kits_price">
        <p>{props.price} ₸ </p>
        <button className="bascet">В корзину</button>
      </div>
    </div>
  );
}
export default ReadyMade;
