import React from "react";
import { Link } from "react-router-dom";
import "./ReadyMade.css";

function ReadyMade(props) {
  return (
    <div className="ready-made_kits_catalog">
      <Link to="/" style={{textDecoration:'none', color:'#112038'}}>
      <div className="ready-made_content_box" id="ready-made">
        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <div className="ready-made_kits_content">
          <h5>{props.title}</h5>
          <p>{props.content}</p>
        </div>
      </div>
      </Link>
      <div className="ready-made_kits_price">
        <p>{props.price} ₸ </p>
        <button className="bascet">В корзину</button>
      </div>
    </div>
  );
}
export default ReadyMade;
