import React, { useEffect, useState } from "react";
import "./ProductsItem.css";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";

function ProductsItem(props) {
  const [local, setLocal] = useState([]);
  const [check, setCheck] = useState(false);
  const [probel, setProbel] = useState("");
  const handleChange = (event) => {
    props.onChange(event); // callback-функция
  };

  useEffect(() => {
    // console.log(props);
    var n = props.price.toString();
    return setProbel(n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " "));
  }, []);

  useEffect(() => {
    handleChange(local);
    if (check) {
      localStorage.setItem("save", JSON.stringify([...local, props]));
      setCheck(false);
    }
  }, [local]);

  const save = () => {
    if (localStorage.getItem("save") !== null) {
      setLocal(JSON.parse(localStorage.getItem("save")));
      setCheck(true);
    } else {
      setLocal([]);
      setCheck(true);
    }
  };
  return (
    <div className="products_items">
      <Link className="products_item_box" to={`/product/${props.id}`}>
        <div className="products_items_img">
          <img src={props.image} alt="" />
        </div>
        <div className="products_item_title">
          <h3>{props.title}</h3>
          <p>
            <b>Артикул:</b> {props.article}
          </p>
        </div>
      </Link>

      <div className="products_item_price">
        <h3>{probel} ₸</h3>
        <div onClick={save}>
          <SlBasket style={{ fontSize: "24px", color: "#112038" }} />
        </div>
      </div>
    </div>
  );
}

export default ProductsItem;
