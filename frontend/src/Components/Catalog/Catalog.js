import React from "react";
import { Link } from "react-router-dom";
import "./Catalog.css";

function Catalog(props) {
  return (
    <Link
      className="catalog_main"
      to="/products"
      style={{
        color: "#112038",
        textDecoration: "none",
        backgroundImage: `url(${props.image})`,
      }}
    >
      <div className="catalog_content">
        <h5>{props.title}</h5>
      </div>
    </Link>
  );
}

export default Catalog;
