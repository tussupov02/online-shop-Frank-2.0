import React from "react";
import "./Hero.css";
import { BsBoxSeam } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { LiaBoxesSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import ReadyMade from "../ReadyMade/ReadyMade";
import imageReady from "../../Assets/ready.jpg";
import Catalog from "../Catalog/Catalog";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import ShowImg from "../ShowImg/ShowImg";
// import imageKitchen from "kitchen.jpg"

function Hero() {
  const readyCollection = [
    {
      imageR: { imageReady },
      title: "120440",
      content:
        "Набор GROHE Euro compact: подвесной унитаз Euro compact с инста",
      price: "987654",
    },
    {
      imageR: "../../Assets/ready.jpg",
      title: "120440",
      content:
        "Набор GROHE Euro compact: подвесной унитаз Euro compact с инста",
      price: "123456",
    },
    {
      imageR: { imageReady },
      title: "120440",
      content:
        "Набор GROHE Euro compact: подвесной унитаз Euro compact с инста",
      price: "789456",
    },
    {
      imageR: { imageReady },
      title: "120440",
      content:
        "Набор GROHE Euro compact: подвесной унитаз Euro compact с инста",
      price: "987654",
    },
    {
      imageR: "../../Assets/ready.jpg",
      title: "120440",
      content:
        "Набор GROHE Euro compact: подвесной унитаз Euro compact с инста",
      price: "123456",
    },
  ];
  const catalogAll = [
    {
      imageC: "http://localhost:4000/images/product_1712040257576.jpg",
      title: "Кухня",
    },
    {
      imageC: "https://shop.grohe.kz/media/wysiwyg/bathroom.jpg",
      title: "Ванная",
    },
    {
      imageC: "https://shop.grohe.kz/media/wysiwyg/tualet.jpg",
      title: "Туалет",
    },
    {
      imageC: "https://shop.grohe.kz/media/wysiwyg/dush.jpg",
      title: "Душевая",
    },
    {
      imageC: "https://shop.grohe.kz/media/wysiwyg/nabor.jpg",
      title: "Набор",
    },
  ];
  return (
    <div>
      <div className="plus">
        <h4>
          Официальный магазин <b>FRANK</b>{" "}
        </h4>
        <div className="plus_box">
          <div className="box">
            <div className="box_icons">
              <BsBoxSeam style={{ fontSize: "60px" }} />
            </div>
            <h5>
              Бесплатная доставка по Астане до двери. Доставка по Казахстану
            </h5>
          </div>
          <div className="box">
            <div className="box_icons">
              <GrCertificate style={{ fontSize: "60px" }} />
            </div>
            <h5>Гарантия качества товара</h5>
          </div>
          <div className="box">
            <div className="box_icons">
              <TbTruckReturn style={{ fontSize: "60px" }} />
            </div>
            <h5>
              Специальные условия возврата товара
            </h5>
          </div>
          <div className="box">
            <div className="box_icons">
              <LiaBoxesSolid style={{ fontSize: "60px" }} />
            </div>
            <h5>Шировкий ассотримент сантехники</h5>
          </div>
        </div>
      </div>
      <div className="video">
        <div className="video_plus">
          <video
            className="video_content"
            autoPlay
            muted
            preload="auto"
            loop="loop"
            playsInline
            src={require("../../Assets/franc3.MOV")}
            type="video.webm"
          ></video>
        </div>
      </div>
      <div className="ready-made_kits">
        <h3>Готовые наборы</h3>
        <div className="ready-made_all">
          <div className="ready-made_kits_box">
            {readyCollection.map((item, i) => {
              return (
                <>
                  <ReadyMade
                    key={i}
                    image={require("../../Assets/ready.jpg")}
                    title={item.title}
                    content={item.content}
                    price={item.price}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="catalog">
        <h3>Каталог товаров</h3>
        <div className="catalog_all">
          <div className="catalog_box">
            {catalogAll.map((item, i) => {
              return <Catalog key={i} image={item.imageC} title={item.title} />;
            })}
          </div>
        </div>
      </div>

      <div className="map_box">
        <div className="map_content">
          <div className="map_why">
            <h3>Почему стоит покупать у нас?</h3>
            <p>
              Интернет-магазин FRANK- официальное представительство компании в
              Республике Казахстан. Оформляя покупки в нашем магазине вы
              получаете абсолютную гарантию качества товара и уверенность в его
              оригинальности. Акции и Скидки, регулярно обновляемые на страницах
              сайта, позволят вам подобрать продукцию FRANK на любой бюджет.
            </p>
          </div>
          <div className="map_contact">
            <h3>+7 (705) 880-68-68</h3>
            <p>Понедельник - Воскресенье: с 10:00 до 20:00</p>
          </div>
        </div>
        <ShowImg />
        <YMaps>
          <div className="map_title">
            <p>Наш шоурум г. Астана, проспект Аль-Фараби, 11</p>
          </div>
          <Map
            className="map"
            defaultState={{ center: [51.097449, 71.450756], zoom: 10 }}
          >
            <Placemark geometry={[51.097449, 71.450756]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
}

export default Hero;
