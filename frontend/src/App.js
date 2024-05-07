import "./App.css";
import Header from "./Components/Header/Header";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <div className="main_header">
          <div className="main_header_left">
            <a href="https://wa.me/77058663634" className="main_header_numb">
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
            <Link className="logo_home" to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="main_header_right">
            <a className="main_header_right_a" href="#">
              О магазине{" "}
            </a>
            <a className="main_header_right_a" href="#">
              Доставка товаров{" "}
            </a>
            <a className="main_header_right_a" href="#">
              Контакты
            </a>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="category" element={<Category/>}>
            <Route path=":categoryId" element={<Category/>}/>
          </Route>
          <Route path="/basket" element={<Basket />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
