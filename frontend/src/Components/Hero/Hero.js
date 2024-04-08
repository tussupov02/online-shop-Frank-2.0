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
import Header from "../Header/Header";
import Brand from "../Brand/Brand";
import { HiOutlinePhone } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import Products from "../Products/Products";

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
      imageC: "./img/bath.jpg",
      title: "Ванны",
    },
    {
      imageC: "./img/toilet.jpg",
      title: "Унитазы и биде",
    },
    {
      imageC: "./img/shower.jpg",
      title: "Душевые кабины",
    },
    {
      imageC: "./img/IMG_7799.PNG",
      title: "Инсталляции",
    },
    {
      imageC: "./img/kitchen.jpg",
      title: "Мойка для кухни",
    },
    {
      imageC: "./img/IMG_7797.PNG",
      title: "Мебель для ванных комнат",
    },
    {
      imageC: "./img/IMG_7800.PNG",
      title: "Раковины",
    },
  ];
  const brandAll = [
    {
      id: 1,
      brandImg: "./img/blanco.PNG",
    },
    {
      id: 2,
      brandImg: "./img/franke.JPG",
    },
    {
      id: 3,
      brandImg: "./img/esko.JPG",
    },
    {
      id: 4,
      brandImg: "./img/grohe.PNG",
    },
    {
      id: 5,
      brandImg: "./img/infatti.PNG",
    },
    {
      id: 6,
      brandImg: "./img/lemark.JPG",
    },
    {
      id: 7,
      brandImg: "./img/paffoni.JPG",
    },
    {
      id: 8,
      brandImg: "./img/hansgrohe.PNG",
    },
    {
      id: 9,
      brandImg: "./img/abber.jpg",
    },
  ];
  return (
    <div>
      <Header />
      <div className="brands">
        <h3>
          {" "}
          Официальный салон сантехники <b>FRANK</b>{" "}
        </h3>
        <h4>Бренды</h4>
        <div className="brand_all">
          <div className="brand_box">
            {brandAll.map((item, i) => {
              return <Brand imgBrand={item.brandImg} key={i} />;
            })}
          </div>
        </div>
      </div>
      <div className="plus">
        <div className="plus_box">
          <div className="box">
            <div className="box_icons">
              <BsBoxSeam style={{ fontSize: "60px" }} />
            </div>
            <h5>
              Бесплатная доставка по Астане до подъезда. Доставка по Казахстану
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
            <h5>Возврат товара</h5>
          </div>
          <div className="box">
            <div className="box_icons">
              <LiaBoxesSolid style={{ fontSize: "60px" }} />
            </div>
            <h5>Широкий ассотримент сантехники и мебели для ванной комнаты </h5>
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
        <h3>ХИТЫ ПРОДАЖ</h3>
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
      <div className="number_absolut_main">
        <div className="number_absolut">
          <a href="tel:+77058806868">
            <HiOutlinePhone
              style={{ fontSize: "32px" }}
              className="number_absolut_img"
            />
          </a>
        </div>
      </div>
      <div className="inst_absolut_main">
        <a href="https://www.instagram.com/frank.elite?igsh=ZnFhMjU4enNreDNx">
          <img className="inst_absolut_img" src="./img/inst.webp" alt="" />
        </a>
      </div>
      <div className="map_box">
        <div className="map_content">
          <div className="map_why">
            <p>
              Оформляя покупки в нашем магазине вы получаете абсолютную гарантию
              качества товара и уверенность в его оригинальности. Акции и
              Скидки, регулярно обновляемые на страницах сайта, позволят вам
              подобрать сантехнику на любой бюджет.
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
      <Products/>
    </div>
  );
}

export default Hero;
