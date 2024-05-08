import React, { useEffect, useState } from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import logo from "./Assets/logo.png";
import Footer from "./Components/Footer/Footer";
import { BsInstagram } from "react-icons/bs";
import { HiOutlinePhone } from "react-icons/hi";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./Components/Products/Products";
import Product from "./Components/Product/Product";
import ScrollToTop from "./Components/ScrollToTop";
import Basket from "./Components/Basket/Basket";
import Category from "./Components/Category/Category";
import CategoryType from "./Components/Category/CategoryType";
import CategoryBrand from "./Components/Category/CategoryBrand";

function App() {
  const [isInfoVisibleShop, setIsInfoVisibleShop] = useState(false);
  const [isInfoVisibleDelivery, setIsInfoVisibleDelivery] = useState(false);
  const [isInfoVisibleContacts, setIsInfoVisibleContact] = useState(false);

  const toggleInfoVisibility = () => {
    setIsInfoVisibleShop(true);
  };
  const toggleInfoVisibilityLeave = () => {
    setIsInfoVisibleShop(false);
  };
  const toggleInfoVisibilityDelivery = () => {
    setIsInfoVisibleDelivery(true);
  };
  const toggleInfoVisibilityLeaveDelivery = () => {
    setIsInfoVisibleDelivery(false);
  };
  const toggleInfoVisibilityContact = () => {
    setIsInfoVisibleContact(true);
  };
  const toggleInfoVisibilityLeaveContact = () => {
    setIsInfoVisibleContact(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <div className="main_header">
          <div className="main_header_left">
            <a href="https://wa.me/77058806868" className="main_header_numb">
              <HiOutlinePhone id="numb" />
              +7 (705) 880-68-68
            </a>
            <a
              className="inst"
              href="https://www.instagram.com/frank.elite?igsh=ZnFhMjU4enNreDNx"
            >
              <BsInstagram style={{ fontSize: "32px" }} id="inst" />
              frank.elite
            </a>
          </div>
          <div className="main_header_center">
            <Link className="logo_home" to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="main_header_right">
            <div
              className="main_header_right_a"
              onMouseEnter={toggleInfoVisibility}
              onMouseLeave={toggleInfoVisibilityLeave}
            >
              О магазине{" "}
              <div
                className={`info_block ${isInfoVisibleShop ? "visible" : ""}`}
                onMouseEnter={toggleInfoVisibilityLeave}
                onMouseLeave={toggleInfoVisibilityLeave}
              >
                <p>
                  Здесь может быть ваша информация о магазине. Замените этот
                  текст на свою информацию.
                </p>
              </div>
            </div>
            <div
              className="main_header_right_a"
              onMouseEnter={toggleInfoVisibilityDelivery}
              onMouseLeave={toggleInfoVisibilityLeaveDelivery}
            >
              Доставка товаров{" "}
              <div
                className={`info_block_delivery ${
                  isInfoVisibleDelivery ? "visible" : ""
                }`}
                onMouseEnter={toggleInfoVisibilityLeaveDelivery}
                onMouseLeave={toggleInfoVisibilityLeaveDelivery}
              >
                <p>
                  Доставка по Казахстану.<br/> 
                  Доставка по г. Астана от 50 000 тенге, до подъезда бесплатно
                </p>
              </div>
            </div>
            <div
              className="main_header_right_a"
              onMouseEnter={toggleInfoVisibilityContact}
              onMouseLeave={toggleInfoVisibilityLeaveContact}
            >
              Контакты
              <div
                className={`info_block_contact ${
                  isInfoVisibleContacts ? "visible" : ""
                }`}
                onMouseEnter={toggleInfoVisibilityLeaveContact}
                onMouseLeave={toggleInfoVisibilityLeaveContact}
              >
                <p>
                Мы находимся по адресу г. Астана, проспект Аль-Фараби, 11<br/>
                Наш номер +7 (705) 880-68-68
                </p>
              </div>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="category" element={<Category />}>
            <Route path=":categoryId" element={<Category />} />
            <Route
              path=":categoryId/:categoryType"
              element={<CategoryType />}
            />
          </Route>
          <Route path="brands" element={<CategoryBrand />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
