import React, { useEffect, useState } from "react";
import "./ProductsItem.css";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";


function ProductsItem(props) {
    const [local, setLocal] = useState([])
    const [check, setCheck] = useState(false)
    const handleChange = (event) => {
        props.onChange(event) // callback-функция
      }

    useEffect(()=>{
        handleChange(local)
        if(check){
            localStorage.setItem("save", JSON.stringify([...local, props]));
            setCheck(false)
        }
    },[local])

    const save =()=>{
        setLocal(JSON.parse(localStorage.getItem("save")))
        setCheck(true)
    }
  return (
    <div id={props.id} className="products_items">
      <div className="products_items_img">
        <img src={props.image} alt="" />
      </div>
      <div className="products_item_title">
        <h3>{props.title}</h3>
        <p>
          <b>Артикул:</b> {props.article}
        </p>
      </div>
      <div className="products_item_price">
        <h3>{props.price} ₸</h3>
        <Link to={`/category/${props.id}`} onClick={save}>
          <SlBasket style={{ fontSize: "24px", color:'#112038' }} />
        </Link>
      </div>
    </div>
  );
}

export default ProductsItem;
