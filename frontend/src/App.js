import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import logo from "./Assets/logo.png";
import Footer from "./Components/Footer/Footer";
import { BsInstagram } from "react-icons/bs";
import { HiOutlinePhone } from "react-icons/hi";

function App() {
  return (
    <div className="App">
      <div className="main_header">
        <div className="main_header_left">
          <p>
            <HiOutlinePhone id="numb"/>
            +7 (705) 880-68-68
          </p>
          <a
            className="inst"
            href="https://www.instagram.com/frank.elite?igsh=ZnFhMjU4enNreDNx"
          >
            <BsInstagram style={{ fontSize: "32px" }} id="inst"/>
            frank.elite
          </a>
          <img src={logo} alt="" />
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
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
