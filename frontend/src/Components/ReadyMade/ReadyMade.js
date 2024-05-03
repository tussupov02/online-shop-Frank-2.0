import React, { useEffect, useState } from "react";
import "./ReadyMade.css";
import { Link } from "react-router-dom";

function ReadyMade(props) {

  const [probel, setProbel] = useState('')

  useEffect(()=>{
    // console.log(props);
    var n = props.price.toString();
    return setProbel(n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' '));
  },[])
  return (
    <div className="ready-made_kits_catalog">
      <Link
        className="ready-made_content_box"
        to={`/product/${props.id}`}
        style={{ color: "#112038", textDecoration: "none" }}
      >
        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <div className="ready-made_kits_content">
          <h5>{props.title}</h5>
        </div>
      </Link>
      <div className="ready-made_kits_price">
        <p>{probel} ₸ </p>
        <Link to='/basket' className="bascet">В корзину</Link>
      </div>
    </div>
  );
}
export default ReadyMade;
