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
    const savedItems = JSON.parse(localStorage.getItem("save")) || [];
    setLocal(savedItems);
    updateTotalPrice(savedItems);
  }, []);

  const updateTotalPrice = (items) => {
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    setSum(totalPrice);
  };

  useEffect(()=>{
    var n = sum.toString();
    return setProbel(n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " "));
  },[sum])

  const deleteItem = (id) => {
    const updatedItems = local.filter((item) => item.id !== id);
    localStorage.setItem("save", JSON.stringify(updatedItems));
    setLocal(updatedItems);
    updateTotalPrice(updatedItems);
  };



  const getUniqueItems = () => {
    const uniqueItems = [];
    local.forEach((item) => {
      const existingItemIndex = uniqueItems.findIndex((uniqueItem) => uniqueItem.id === item.id);
      if (existingItemIndex !== -1) {
        uniqueItems[existingItemIndex].quantity += 1;
      } else {
        uniqueItems.push({ ...item, quantity: 1 });
      }
    });
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
                  <div className="basket_top_catalog_price">
                    <p>{item.price} ₸</p>
                  </div>
                  <div className="basket_top_catalog_quantity">
                    <span>Колличество: {item.quantity}</span>
                  </div>
                </div>
                <MdClear className="del_basket" onClick={() => deleteItem(item.id)} />
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
