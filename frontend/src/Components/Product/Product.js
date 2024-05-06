import React, { useState, useEffect, useContext } from "react";
import "./Product.css";
import { CgCloseO } from "react-icons/cg";
import { TfiTruck } from "react-icons/tfi";
import Header from "../Header/Header";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  const [local, setLocal] = useState([]);
  const [check, setCheck] = useState(false);
  const [showImg, setShowImg] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const myRef = React.createRef();
  const [probel, setProbel] = useState("");

  useEffect(() => {
    console.log(product);
    if (product) {
      var n = product.price.toString();
      return setProbel(
        n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ")
      );
    }
  }, [product]);
  useEffect(() => {
    if (showImg) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showImg]);

  useEffect(() => {
    if (check) {
      localStorage.setItem(
        "save",
        JSON.stringify([
          ...local,
          {
            id: product.id,
            image: product.pictures[0].img,
            price: product.price,
            title: product.name,
          },
        ])
      );
      setCheck(false);
    }
  }, [local]);

  const save = () => {
    if (localStorage.getItem("save") !== null) {
      setLocal(JSON.parse(localStorage.getItem("save")));
      setCheck(true);
    } else {
      setLocal([]);
      setCheck(true);
    }
  };

  if (!product) {
    return <div></div>;
  } else {
    return (
      <div>
        <Header check={check} />
        <div className="product">
          {showImg ? (
            <span ref={myRef} className="showImg">
              <CgCloseO className="close" onClick={() => setShowImg(false)} />
              <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                slidesPerView={1}
                grabCursor={true}
                modules={[Navigation, Thumbs]}
                className="showImg__list"
              >
                {product.pictures?.map((imgAll, i) => {
                  return (
                    <SwiperSlide
                      key={i}
                      className="productdisplay__img__list_item"
                    >
                      <img src={imgAll.img} alt="" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </span>
          ) : (
            <>
              <h2 className="productdisplay_title">{product.name}</h2>
              <div className="productdisplay">
                <div className="productdisplay__left">
                  <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    slidesPerView={1}
                    grabCursor={true}
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="productdisplay__img"
                  >
                    {product.pictures?.map((item, i) => {
                      return (
                        <SwiperSlide key={i}>
                          <img
                            className="productdisplay__main__img"
                            src={item.img}
                            alt=""
                            onClick={() => setShowImg(true)}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={3}
                    modules={[Navigation, Thumbs]}
                    className="productdisplay__img__list"
                  >
                    {product.pictures?.map((imgAll, i) => {
                      return (
                        <SwiperSlide
                          key={i}
                          className="productdisplay__img__list_item"
                        >
                          <img src={imgAll.img} alt="" />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
                <div className="productdisplay__center">
                  {product.vendor_code ? (
                    <div className="article">
                      Артикул: {product.vendor_code}
                    </div>
                  ) : null}
                  <div className="productdisplay__buy_main">
                    <h3 className="productdisplay_price">{probel} ₸</h3>
                    <div className="productdisplay__buy" onClick={save}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        class="bi bi-cart3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
                      </svg>
                      <p>В корзину</p>
                    </div>
                  </div>
                  <div className="characteristics_main">
                    <h3 className="characteristics_title">Характеристики</h3>
                    {product.brand ? (
                      <div className="tableRow">
                        <div className="tableRow_lef">Бренд</div>
                        <div className="tableRow_cent">
                          ............................................
                        </div>
                        <div className="tableRow_righ">
                          {product.brand.name}
                        </div>
                      </div>
                    ) : null}
                    {product.countries ? (
                      <div className="tableRow">
                        <div className="tableRow_lef">Страна</div>
                        <div className="tableRow_cent">
                          ...........................................
                        </div>
                        <div className="tableRow_righ">
                          {product.countries.name}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="productdisplay__rigth">
                  <div className="productdisplay__rigth_main">Доставка</div>
                  <div className="productdisplay__rigth_content">
                    Самовывоз, доставка по всему Казахстану
                  </div>
                </div>
              </div>
              <div className="addinational_information_main">
                <div className="addinational_information">
                  <h3 className="addinational_title">Все характеристики</h3>
                  {product.category ? (
                    <div className="addinational_tableRow">
                      <div className="addinational_tableRow_lef">Категория</div>
                      <div className="addinational_tableRow_cent">
                        ......................................................................................
                      </div>
                      <div className="addinational_tableRow_righ">
                        {product.category.name}
                      </div>
                    </div>
                  ) : null}
                  {product.colours ? (
                    <div className="addinational_tableRow">
                      <div className="addinational_tableRow_lef">Цвет</div>
                      <div className="addinational_tableRow_cent">
                        ......................................................................................
                      </div>
                      <div className="addinational_tableRow_righ">
                        {product.colours.name}
                      </div>
                    </div>
                  ) : null}
                  {product.brand ? (
                    <div className="addinational_tableRow">
                      <div className="addinational_tableRow_lef">Бренд</div>
                      <div className="addinational_tableRow_cent">
                        ......................................................................................
                      </div>
                      <div className="addinational_tableRow_righ">
                        {product.brand.name}
                      </div>
                    </div>
                  ) : null}
                  {product.covers ? (
                    <div className="addinational_tableRow">
                      <div className="addinational_tableRow_lef">Покрытие</div>
                      <div className="addinational_tableRow_cent">
                        ......................................................................................
                      </div>
                      <div className="addinational_tableRow_righ">
                        {product.covers.name}
                      </div>
                    </div>
                  ) : null}
                  {product.countries ? (
                    <div className="addinational_tableRow">
                      <div className="addinational_tableRow_lef">Страна</div>
                      <div className="addinational_tableRow_cent">
                        ......................................................................................
                      </div>
                      <div className="addinational_tableRow_righ">
                        {product.countries.name}
                      </div>
                    </div>
                  ) : null}
                  {product.types ? (
                    <div className="addinational_tableRow">
                      <div className="addinational_tableRow_lef">Тип</div>
                      <div className="addinational_tableRow_cent">
                        ......................................................................................
                      </div>
                      <div className="addinational_tableRow_righ">
                        {product.types.name}
                      </div>
                    </div>
                  ) : null}
                  {product.materials ? (
                    <div className="addinational_tableRow">
                      <div className="addinational_tableRow_lef">Материал</div>
                      <div className="addinational_tableRow_cent">
                        ......................................................................................
                      </div>
                      <div className="addinational_tableRow_righ">
                        {product.materials.name}
                      </div>
                    </div>
                  ) : null}
                  {product.additional_info ? (
                    <div className="addinational_tableRow">
                      <div className="addinational_tableRow_lef">
                        Дополнительная информация
                      </div>
                      <div className="addinational_tableRow_cent">
                        ......................................................................................
                      </div>
                      <div className="addinational_tableRow_righ">
                        {product.additional_info}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Product;
