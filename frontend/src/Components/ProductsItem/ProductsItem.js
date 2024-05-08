import React, { useEffect, useState } from "react";
import "./ProductsItem.css";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

function ProductsItem(props) {
  const [local, setLocal] = useState([]);
  const [check, setCheck] = useState(false);
  const [probel, setProbel] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

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
      setModalVisible(true);
      // Закрываем модальное окно через 1 секунду
      setTimeout(() => {
        setModalVisible(false);
        // Сбрасываем значения инпутов
      }, 700);
    } catch (error) {
      console.error("Ошибка при чтении из localStorage:", error);
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
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <p>
              Добавленно! <FaCheck />
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsItem;
