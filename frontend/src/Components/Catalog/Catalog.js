import React from "react";
import { Link } from "react-router-dom";
import "./Catalog.css";

function Catalog(props) {
  try {
    return (
      <Link
        className="catalog_main"
        to={`/category/${props.title}`}
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
  } catch (error) {
    console.error("Ошибка при отображении компонента Catalog:", error);
    return null; // Возвращаем null в случае ошибки, чтобы компонент не сломал приложение
  }
}

export default Catalog;
