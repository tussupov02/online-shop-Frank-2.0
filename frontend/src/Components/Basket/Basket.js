import React, { useEffect, useState } from "react";
import TelegramSendMess from "../TelegramBot/TelegramSendMess";
import { MdClear } from "react-icons/md";
import "./Basket.css";

function Basket() {
  const [local, setLocal] = useState([]);
  const [sum, setSum] = useState(0);
  const [probel, setProbel] = useState("");

  useEffect(() => {
    document.body.style.overflow = "";
    try {
      const savedItems = JSON.parse(localStorage.getItem("save")) || [];
      setLocal(savedItems);
      updateTotalPrice(savedItems);
    } catch (error) {
      console.error("Ошибка при загрузке элементов из localStorage:", error);
    }
  }, []);

  const updateTotalPrice = (items) => {
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    setSum(totalPrice);
  };

  useEffect(() => {
    try {
      var n = sum.toString();
      setProbel(n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " "));
    } catch (error) {
      console.error("Ошибка при обновлении общей суммы:", error);
    }
  }, [sum]);

  const deleteItem = (id) => {
    try {
      const updatedItems = local.filter((item) => item.id !== id);
      localStorage.setItem("save", JSON.stringify(updatedItems));
      setLocal(updatedItems);
      updateTotalPrice(updatedItems);
    } catch (error) {
      console.error("Ошибка при удалении элемента из корзины:", error);
    }
  };

  const getUniqueItems = () => {
    const uniqueItems = [];
    try {
      local.forEach((item) => {
        const existingItemIndex = uniqueItems.findIndex(
          (uniqueItem) => uniqueItem.id === item.id
        );
        if (existingItemIndex !== -1) {
          uniqueItems[existingItemIndex].quantity += 1;
        } else {
          uniqueItems.push({ ...item, quantity: 1 });
        }
      });
    } catch (error) {
      console.error("Ошибка при получении уникальных элементов:", error);
    }
    return uniqueItems;
  };

  return (
    <div className="basket">
      <h3>Корзина</h3>
      <div className="basket_main">
        <div className="basket_top">
          <div className="basket_top_catalog_main">
            {getUniqueItems().map((item) => (
              <div key={item.id} className="basket_top_catalog">
                <div className="basket_top_catalog_img">
                  <img src={item.image} alt="" />
                </div>
                <div className="basket_top_catalog_info">
                  <div className="basket_top_catalog_title">
                    <p>{item.title}</p>
                  </div>
                </div>
                <div className="basket_top_catalog_price">
                  <p>{item.price} ₸</p>
                </div>
                <div className="basket_top_catalog_quantity">
                  <span>{item.quantity}</span>
                </div>
                <MdClear
                  className="del_basket"
                  onClick={() => deleteItem(item.id)}
                />
              </div>
            ))}
          </div>
          <div className="basket_top_total">
            Общий итог суммы:
            <div className="basket_top_price_line" />
            {probel} ₸
          </div>
        </div>
        <div className="basket_botom">
          <TelegramSendMess catalog={local} />
        </div>
      </div>
    </div>
  );
}

export default Basket;
