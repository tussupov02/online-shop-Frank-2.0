// import React, { useState, useEffect } from "react";
// import "./Product.css";
// import { CgCloseO } from "react-icons/cg";
// import { TfiTruck } from "react-icons/tfi";
// import Header from "../Header/Header";
// import { MdArrowBackIos } from "react-icons/md";
// import { MdArrowForwardIos } from "react-icons/md";

// function Product() {
//   const product = {
//     imageMain:
//       "https://shop.grohe.kz/media/catalog/product/cache/c7966ad44d29363a660218adb5c92c46/3/9/39554000-p.jpg",
//     imageOne:
//       "https://shop.grohe.kz/media/catalog/product/cache/c7966ad44d29363a660218adb5c92c46/3/9/39554000-d.jpg",
//     imageTwo:
//       "https://shop.grohe.kz/media/catalog/product/cache/c7966ad44d29363a660218adb5c92c46/o/t/other_pictures_1_.jpg",
//     name: "Подвесной унитаз GROHE Euro Ceramic, альпин-белый (39554000)",
//     new_price: "193200",
//     mechanism: "унитаз подвесной",
//     brand: "Euro Ceramic",
//     collection: "для туалета",
//     description:
//       "	Производитель вправе изменять параметры продукции без дополнительного уведомления. Информация о технических характеристиках, комплекте поставки, стране изготовления и внешнем виде товара может отличаться от фактической и основывается на последних доступных к моменту публикации данных.",
//   };
//   const [imgMain, setImgMain] = useState("");
//   const [showImg, setShowImg] = useState(false);
//   const myRef = React.createRef();

//   const nextImg = () => {
//     if (imgMain) {
//       if (imgMain == product.imageMain) {
//         setImgMain(product.imageOne);
//       } else if (imgMain == product.imageOne) {
//         setImgMain(product.imageTwo);
//       } else if (imgMain == product.imageTwo) {
//         setImgMain(product.imageMain);
//       }
//     } else {
//       setImgMain(product.imageOne);
//     }
//   };
//   const backImg = () => {
//     if (imgMain) {
//       if (imgMain == product.imageMain) {
//         setImgMain(product.imageTwo);
//       } else if (imgMain == product.imageOne) {
//         setImgMain(product.imageMain);
//       } else if (imgMain == product.imageTwo) {
//         setImgMain(product.imageOne);
//       }
//     } else {
//       setImgMain(product.imageTwo);
//     }
//   };
//   useEffect(() => {
//     if (showImg) {
//       window.scrollTo(0, 0);
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//   }, [showImg]);
//   return (
//     <div>
//       <Header/>
//       <div className="product">
//       {showImg ? (
//         <span ref={myRef} className="showImg">
//           <CgCloseO className="close" onClick={() => setShowImg(false)} />
//           <div className="show_img_main">
//             <div className="arrowsBack">
//               <MdArrowBackIos className="back" onClick={backImg} />
//             </div>
//             <img src={imgMain ? imgMain : product.imageMain} alt="" />
//             <div className="arrowsNext">
//               <MdArrowForwardIos className="next" onClick={nextImg} />
//             </div>
//           </div>

//           <div className="show_img_box">
//             <img
//               src={product.imageMain}
//               onClick={() => setImgMain(product.imageMain)}
//               alt=""
//             />
//             {product.imageMain === product.imageOne ? (
//               <></>
//             ) : (
//               <img
//                 src={product?.imageOne}
//                 onClick={() => setImgMain(product.imageOne)}
//                 alt=""
//               />
//             )}
//             <img
//               src={product.imageTwo}
//               onClick={() => setImgMain(product.imageTwo)}
//               alt=""
//             />
//           </div>
//         </span>
//       ) : (
//         <>
//           <h2 className="productdisplay_title">{product.name}</h2>
//           <div className="productdisplay">
//             <div className="productdisplay__left">
//               <div className="productdisplay__img">
//                 <img
//                   className="productdisplay__main__img"
//                   src={imgMain ? imgMain : product.imageMain}
//                   alt=""
//                   onClick={() => setShowImg(true)}
//                 />
//               </div>
//               <div className="productdisplay__img__list">
//                 <img
//                   src={product.imageMain}
//                   onClick={() => setImgMain(product.imageMain)}
//                   alt=""
//                 />
//                 {product.imageMain === product.imageOne ? (
//                   <></>
//                 ) : (
//                   <img
//                     src={product?.imageOne}
//                     onClick={() => setImgMain(product.imageOne)}
//                     alt=""
//                   />
//                 )}
//                 <img
//                   src={product.imageTwo}
//                   onClick={() => setImgMain(product.imageTwo)}
//                   alt=""
//                 />
//               </div>
//             </div>

//             <div className="productdisplay__center">
//               <div className="productdisplay__center__box_one">
//                 <div className="productdisplay__center__articul">
//                   Артикул: 39554000
//                 </div>
//                 <div className="productdisplay__center__prices">
//                   {product.new_price} ₸
//                 </div>
//                 <button onClick={() => {}}>ДОБАВИТЬ В КОРЗИНУ</button>
//               </div>
//               <div className="productdispaly__center__description">
//                 <p>
//                   Тип товара:{" "}
//                   <span style={{ fontWeight: "300" }}>{product.mechanism}</span>
//                 </p>
//                 <p>
//                   Бренд:{" "}
//                   <span style={{ fontWeight: "300" }}>{product.brand}</span>
//                 </p>
//                 <p>
//                   Коллекция:{" "}
//                   <span style={{ fontWeight: "300" }}>
//                     {product.collection}
//                   </span>
//                 </p>
//               </div>
//             </div>
//             <div className="productdisplay__right">
//               <div className="productdisplay__right_img">
//                 <TfiTruck className="productdisplay__right_icon" />{" "}
//                 <p>Доставка</p>
//               </div>
//               <div className="productdisplay__right_content">
//                 <p>Доставка по всему Казахстану</p>
//               </div>
//             </div>
//           </div>
//           <p className="content">
//             Описание:{" "}
//             <span style={{ fontWeight: "300" }}>{product.description}</span>
//           </p>
//         </>
//       )}
//       </div>
//     </div>
//   );
// }

// export default Product;

////////////////////////////////////

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

  const [imgMain, setImgMain] = useState([]);
  const [showImg, setShowImg] = useState(false);
  const [img_All, setAll_img] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [item, setItem] = useState(0);
  const myRef = React.createRef();


  useEffect(() => {
    if (showImg) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showImg]);

  const nextImg = () => {
    if (item === img_All.length - 1) {
      setItem(0);
      setImgMain(img_All[0].img);
    } else {
      setItem(item + 1);
      setImgMain(img_All[item + 1].img);
    }
    console.log(img_All);
  };
  const backImg = () => {
    if (item === 0) {
      setItem(img_All.length);
      setImgMain(img_All[setAll_img.length].img);
    } else {
      setItem(item - 1);
      setImgMain(img_All[item - 1].img);
    }
  };
  if(!product){
    return <div>Loader...</div>
  }
  else{

    return (
      <div>
        <Header />
        <div className="product">
          {showImg ? (
            <span ref={myRef} className="showImg">
              <CgCloseO className="close" onClick={() => setShowImg(false)} />
              <div className="show_img_main">
                <div className="arrowsBack">
                  <MdArrowBackIos className="back" onClick={backImg} />
                </div>
                <img className="show_img_main_img" src={imgMain} alt="" />
                <div className="arrowsNext">
                  <MdArrowForwardIos className="next" onClick={nextImg} />
                </div>
              </div>
  
              <div className="show_img_box">
                {img_All.map((imgAll, i) => {
                  return (
                    <img
                      key={i}
                      src={imgAll.img}
                      onClick={() => setImgMain(imgAll.img)}
                      alt=""
                    />
                  );
                })}
              </div>
            </span>
          ) : (
            <>
              <h2 className="productdisplay_title">Test</h2>
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
                        <SwiperSlide>
                          <img
                            key={i}
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
                    slidesPerView={4}
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
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

}

export default Product;
