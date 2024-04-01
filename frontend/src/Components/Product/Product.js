import React, { useState } from "react";
import "./Product.css";

function Product() {
  const product = {
    imageMain:
      "https://shop.grohe.kz/media/catalog/product/cache/c7966ad44d29363a660218adb5c92c46/3/9/39554000-p.jpg",
    imageOne:
      "https://shop.grohe.kz/media/catalog/product/cache/c7966ad44d29363a660218adb5c92c46/3/9/39554000-d.jpg",
    imageTwo:
      "https://shop.grohe.kz/media/catalog/product/cache/c7966ad44d29363a660218adb5c92c46/o/t/other_pictures_1_.jpg",
    name: "Подвесной унитаз GROHE Euro Ceramic, альпин-белый (39554000)",
    new_price: "193200",
    mechanism: "унитаз подвесной",
    brand: "Euro Ceramic",
    collection: "для туалета",
    description:
      "	Производитель вправе изменять параметры продукции без дополнительного уведомления. Информация о технических характеристиках, комплекте поставки, стране изготовления и внешнем виде товара может отличаться от фактической и основывается на последних доступных к моменту публикации данных.",
  };
  const [imgMain, setImgMain] = useState("");
  return (
    <div className="Product">
      {window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })}
      <div className="productdisplay">
        <div className="productdisplay__left">
          <div className="productdisplay__img__list">
            <img
              src={product.imageMain}
              onClick={() => setImgMain(product.imageMain)}
              alt=""
            />
            {product.imageMain === product.imageOne ? (
              <></>
            ) : (
              <img
                src={product?.imageOne}
                onClick={() => setImgMain(product.imageOne)}
                alt=""
              />
            )}
            <img
              src={product.imageTwo}
              onClick={() => setImgMain(product.imageTwo)}
              alt=""
            />
          </div>
          <div className="productdisplay__img">
            <img
              className="productdisplay__main__img"
              src={imgMain ? imgMain : product.imageMain}
              alt=""
            />
          </div>
        </div>

        <div className="productdisplay__right">
          <h1>{product.name}</h1>
          <div className="productdisplay__right__prices">
            <div className="productdisplay__right__prices__new">
              {product.new_price} ₸
            </div>
          </div>
          <div className="productdispaly__right__description">
            <p>
              Тип товара:{" "}
              <span style={{ fontWeight: "400" }}>{product.mechanism}</span>
            </p>
            <p>
              Бренд: <span style={{ fontWeight: "400" }}>{product.brand}</span>
            </p>
            <p>
              Коллекция:{" "}
              <span style={{ fontWeight: "400" }}>{product.collection}</span>
            </p>
          </div>
          <button onClick={() => {}}>ДОБАВИТЬ В КОРЗИНУ</button>
        </div>
      </div>
      <p className="content">
        Описание: <span>{product.description}</span>
      </p>
    </div>
  );
}

export default Product;
