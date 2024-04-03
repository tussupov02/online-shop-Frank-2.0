import React, { useState, useEffect } from "react";
import "./Product.css";
import { CgCloseO } from "react-icons/cg";
import { TfiTruck } from "react-icons/tfi";
import Footer from "../Footer/Footer";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

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
  const [showImg, setShowImg] = useState(false);

  const nextImg = () => {
    if (imgMain) {
      if (imgMain == product.imageMain) {
        setImgMain(product.imageOne);
      } else if (imgMain == product.imageOne) {
        setImgMain(product.imageTwo);
      } else if (imgMain == product.imageTwo) {
        setImgMain(product.imageMain);
      }
    } else {
      setImgMain(product.imageOne);
    }
  };
  const backImg = () => {
    if (imgMain) {
      if (imgMain == product.imageMain) {
        setImgMain(product.imageTwo);
      } else if (imgMain == product.imageOne) {
        setImgMain(product.imageMain);
      } else if (imgMain == product.imageTwo) {
        setImgMain(product.imageOne);
      }
    } else {
      setImgMain(product.imageTwo);
    }
  };
  return (
    <div className="product">
      {showImg ? (
        <span className="showImg">
          <CgCloseO className="close" onClick={() => setShowImg(false)} />
          <div className="show_img_main">
            <div className="arrowsBack">
              <MdArrowBackIos className="back" onClick={backImg} />
            </div>
            <img src={imgMain ? imgMain : product.imageMain} alt="" />
            <div className="arrowsNext">
              <MdArrowForwardIos className="next" onClick={nextImg} />
            </div>
          </div>

          <div className="show_img_box">
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
        </span>
      ) : (
        <>
          <h2 className="productdisplay_title">{product.name}</h2>
          <div className="productdisplay">
            <div className="productdisplay__left">
              <div className="productdisplay__img">
                <img
                  className="productdisplay__main__img"
                  src={imgMain ? imgMain : product.imageMain}
                  alt=""
                  onClick={() => setShowImg(true)}
                />
              </div>
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
            </div>

            <div className="productdisplay__center">
              <div className="productdisplay__center__box_one">
                <div className="productdisplay__center__articul">
                  Артикул: 39554000
                </div>
                <div className="productdisplay__center__prices">
                  {product.new_price} ₸
                </div>
                <button onClick={() => {}}>ДОБАВИТЬ В КОРЗИНУ</button>
              </div>
              <div className="productdispaly__center__description">
                <p>
                  Тип товара:{" "}
                  <span style={{ fontWeight: "300" }}>{product.mechanism}</span>
                </p>
                <p>
                  Бренд:{" "}
                  <span style={{ fontWeight: "300" }}>{product.brand}</span>
                </p>
                <p>
                  Коллекция:{" "}
                  <span style={{ fontWeight: "300" }}>
                    {product.collection}
                  </span>
                </p>
              </div>
            </div>
            <div className="productdisplay__right">
              <div className="productdisplay__right_img">
                <TfiTruck className="productdisplay__right_icon" />{" "}
                <p>Доставка</p>
              </div>
              <div className="productdisplay__right_content">
                <p>Доставка по всему Казахстану</p>
              </div>
            </div>
          </div>
          <p className="content">
            Описание:{" "}
            <span style={{ fontWeight: "300" }}>{product.description}</span>
          </p>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Product;
