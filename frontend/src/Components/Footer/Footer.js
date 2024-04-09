import React from "react";
import FooterCatalog from "../FooterCatalog/FooterCatalog";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_left">
        <img src="./img/logo.png" alt="" />
        <a href="tel:+77058806868" className="footer_left_phone">
          +7 (705) 880-68-68
        </a>
        <a
          className="footer_left_inst"
          href="https://www.instagram.com/frank.elite?igsh=ZnFhMjU4enNreDNx"
        >
          <BsInstagram style={{ fontSize: "36px" }} id="inst" />
          frank.elite
        </a>
      </div>
      <div className="footer_center">
        <FooterCatalog />
      </div>
    </footer>
  );
}

export default Footer;
