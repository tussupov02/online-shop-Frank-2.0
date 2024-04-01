import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import logo from "./Assets/logo.png";
import Product from "./Components/Product/Product";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main_header">
          <div className="main_header_left">
            <Link to='/'>
            <img src={logo} alt="" />
            </Link>
            <p className="internet_shop">ИНТЕРНЕТ-МАГАЗИН</p>
          </div>
          <div className="main_header_right">
            <a href="#">О магазине </a>
            <a href="#">Доставка товаров </a>
            <a href="#">Контакты</a>
          </div>
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/product" element={<Product/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
