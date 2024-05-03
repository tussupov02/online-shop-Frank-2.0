import React, { useContext, useEffect, useState } from "react";
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
import TelegramBot from "../TelegramBot/TelegramBot";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { ShopContext } from "../../Context/ShopContext";

function Hero() {
  const { hitsProducts } = useContext(ShopContext);
  const catalogAll = [
    {
      id: 123564,
      imageC: "./img/bath.jpg",
      title: "Ванны",
    },
    {
      id: 1564,
      imageC: "./img/toilet.jpg",
      title: "Унитазы и биде",
    },
    {
      id: 453564,
      imageC: "./img/shower.jpg",
      title: "Душевые кабины",
    },
    {
      id: 14,
      imageC: "./img/IMG_7799.PNG",
      title: "Инсталляции",
    },
    {
      id: 774,
      imageC: "./img/kitchen.jpg",
      title: "Мойка для кухни",
    },
    {
      id: 1544,
      imageC: "./img/IMG_7797.PNG",
      title: "Мебель для ванных комнат",
    },
    {
      id: 19875,
      imageC: "./img/IMG_7800.PNG",
      title: "Раковины",
    },
  ];
  const brandAll = [
    {
      id: 4,
      brandImg: "./img/grohe.PNG",
    },
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
  useEffect(() => {}, []);
  return (
    <div>
      <Header />
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
      <div className="brands">
        <h3>
          {" "}
          Официальный салон сантехники <b>FRANK</b>{" "}
        </h3>
        <h4>Бренды</h4>
        <div className="brand_all">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            slidesPerView={3}
            grabCursor={true}
            modules={[FreeMode, Navigation, Thumbs]}
            breakpoints={{
              1450: {
                slidesPerView: 6,
              },
              1200: {
                slidesPerView: 5,
              },
              1000: {
                slidesPerView: 4,
              },
            }}
            className="brand_box"
          >
            {brandAll.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <Brand imgBrand={item.brandImg} id={item.id} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="plus">
        <div className="plus_box">
          <div className="box">
            <div className="box_icons">
              <BsBoxSeam style={{ fontSize: "50px" }} />
            </div>
            <h5>
              Бесплатная доставка по Астане до подъезда. Доставка по Казахстану
            </h5>
          </div>
          <div className="box">
            <div className="box_icons">
              <GrCertificate style={{ fontSize: "50px" }} />
            </div>
            <h5>Гарантия качества товара</h5>
          </div>
          <div className="box">
            <div className="box_icons">
              <TbTruckReturn style={{ fontSize: "50px" }} />
            </div>
            <h5>Возврат товара</h5>
          </div>
          <div className="box">
            <div className="box_icons">
              <LiaBoxesSolid style={{ fontSize: "50px" }} />
            </div>
            <h5>Широкий ассотримент сантехники и мебели для ванной комнаты </h5>
          </div>
        </div>
      </div>
      <div className="ready-made_kits">
        <h3>ХИТЫ ПРОДАЖ</h3>
        <div className="ready-made_all">
          <Swiper
            loop={false}
            spaceBetween={10}
            navigation={true}
            slidesPerView={1}
            grabCursor={true}
            breakpoints={{
              1420: {
                slidesPerView: 5,
              },
              1050: {
                slidesPerView: 4,
              },
              820: {
                slidesPerView: 3.5,
              },
              700:{
                slidesPerView: 3
              },
              550:{
                slidesPerView:2.5
              },
              500:{
                slidesPerView:2
              },
              380:{
                slidesPerView:1.8
              },
              360:{
                slidesPerView:1.5
              },
              340:{
                slidesPerView:1.5
              }

            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="ready-made_kits_box"
          >
            {hitsProducts.map((item, i) => {
              return (
                <SwiperSlide key={item.id}>
                  <ReadyMade
                    id={item.id}
                    image={item.pictures[0].img}
                    title={item.name}
                    price={item.price}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="catalog">
        <h3>Каталог товаров</h3>
        <div className="catalog_all">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            slidesPerView={1}
            grabCursor={true}
            breakpoints={{
              1420: {
                slidesPerView: 5,
              },
              1050: {
                slidesPerView: 4,
              },
              820: {
                slidesPerView: 3.5,
              },
              700:{
                slidesPerView: 3
              },
              550:{
                slidesPerView:2.5
              },
              500:{
                slidesPerView:2
              },
              380:{
                slidesPerView:1.8
              },
              360:{
                slidesPerView:1.5
              },
              340:{
                slidesPerView:1.5
              }

            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="catalog_box"
          >
            {catalogAll.map((item, i) => {
              return (
                <SwiperSlide key={item.id}>
                  <Catalog image={item.imageC} title={item.title} />
                </SwiperSlide>
              );
            })}
          </Swiper>
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
            <p>Наш салон сантехники г. Астана, проспект Аль-Фараби, 11</p>
          </div>
          <Map
            className="map"
            defaultState={{ center: [51.097449, 71.450756], zoom: 10 }}
          >
            <Placemark geometry={[51.097449, 71.450756]} />
          </Map>
        </YMaps>
      </div>
      <TelegramBot />
    </div>
  );
}

export default Hero;
