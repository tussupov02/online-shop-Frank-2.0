import React, { useEffect, useState } from "react";
import "./ReadyMade.css";
import { Link } from "react-router-dom";

function ReadyMade(props) {
  const [local, setLocal] = useState([]);
  const [check, setCheck] = useState(false);
  const [probel, setProbel] = useState("");

  const handleChange = (event) => {
    props.onChange(event); // callback-функция
  };

  useEffect(() => {
    try {
      var n = props.price.toString();
      setProbel(n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " "));
    } catch (error) {
      console.error("Ошибка при обновлении цены:", error);
    }
  }, [props.price]);

  useEffect(() => {
    handleChange(local);
    if (check) {
      try {
        localStorage.setItem("save", JSON.stringify([...local, props]));
        setCheck(false);
      } catch (error) {
        console.error("Ошибка при сохранении в localStorage:", error);
      }
    }
  }, [local]);

  const save = () => {
    try {
      if (localStorage.getItem("save") !== null) {
        setLocal(JSON.parse(localStorage.getItem("save")));
        setCheck(true);
      } else {
        setLocal([]);
        setCheck(true);
      }
    } catch (error) {
      console.error("Ошибка при чтении из localStorage:", error);
    }
  };

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
        <div onClick={save} className="bascet">
          В корзину
        </div>
      </div>
    </div>
  );
}

export default ReadyMade;
