import React, { useEffect, useState } from "react";
import TelegramSendMess from "../TelegramBot/TelegramSendMess";
import { MdClear } from "react-icons/md";
import "./Basket.css";

function Basket() {
  const catalog = [
    {
      id: 2,
      title: "Акриловая",
      image: "./img/vanna.webp",
      article: "401104",
      price: "461 100 ₸",
    },
    {
      id: 5,
      title:
        "Акриловая ванна GRACIYA 1700*780*700 (401104) Акриловая ванна GRACIYA 1700*780*700 (401104)",
      image: "./img/vanna2.webp",
      article: "401104",
      price: "461 100 ₸",
    },
    {
      id: 9,
      title: "Акриловая ванна GRACIYA 1700*780*700 (401104)",
      image: "./img/vanna.webp",
      article: "401104",
      price: "461 100 ₸",
    },
    {
      id: 10,
      title: "Акриловая ванна GRACIYA 1700*780*700 (401104)",
      image: "./img/vanna2.webp",
      article: "401104",
      price: "461 100 ₸",
    },
    {
      id: 12,
      title: "Акриловая ванна GRACIYA 1700*780*700 (401104)",
      image: "./img/vanna2.webp",
      article: "401104",
      price: "461 100 ₸",
    },
    {
      id: 15,
      title: "Акриловая ванна GRACIYA 1700*780*700 (401104)",
      image: "./img/vanna.webp",
      article: "401104",
      price: "461 100 ₸",
    },
    {
      id: 1,
      title: "Акриловая ванна GRACIYA 1700*780*700 (401104)",
      image: "./img/vanna.webp",
      article: "401104",
      price: "461 100 ₸",
    },
  ];
  const [local, setLocal] = useState([]);
  const [sum, setSum] = useState(0);
  useEffect(() => {
    // localStorage.setItem("save", JSON.stringify(catalog));

    setLocal(JSON.parse(localStorage.getItem("save")) || []);
  }, []);
  const delet = (id) => {
    const newCatalog = local.filter((el) => el.id !== id);
    localStorage.setItem("save", JSON.stringify(newCatalog));
    setLocal(newCatalog);
    setSum(0)
  };
  useEffect(()=>{
    if(local.length>0){
      for(let elem of local){
        setSum((prev)=>prev+elem.price)
      }
    }else{
      setSum(0)
    }
  },[local])
  return (
    <div className="basket">
      <h3>Корзина</h3>
      <div className="basket_main">
        <div className="basket_top">
          <div className="basket_top_catalog_main">
            {local
              ? local.map((el, i) => {
                  return (
                    <div className="basket_top_catalog">
                      <div className="basket_top_catalog_img">
                        <img src={el.image} alt="" />
                      </div>
                      <div className="basket_top_catalog_title">
                        <p>{el.title}</p>
                      </div>
                      <div className="basket_top_catalog_price">
                        <p>{el.price} ₸</p>
                      </div>
                      <MdClear className="del_basket" onClick={()=>delet(el.id)}/>
                    </div>
                  );
                })
              : ""}
          </div>
          <div className="basket_top_total">
            Общий итог суммы:
            <div className="basket_top_price_line" />
            {sum} ₸
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
