import React from "react";
import "./ReadyMade.css";
import { Link } from "react-router-dom";


function ReadyMade(props) {
  return (
    <div className="ready-made_kits_catalog">
      <Link className="ready-made_content_box" id="ready-made" to="/product" style={{color:'#112038', textDecoration:'none'}}>.
        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <div className="ready-made_kits_content">
          <h5>{props.title}</h5>
          <p>{props.content}</p>
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
