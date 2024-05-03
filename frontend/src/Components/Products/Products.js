import React,{useState} from "react";
import Header from "../Header/Header";
import ProductsItem from "../ProductsItem/ProductsItem";
import "./Products.css";

function Products() {
    const [check, setCheck] = useState(false)
    const catalog = [
        {
          id: 2,
          title: "Акриловая",
          image: "./img/vanna.webp",
          article: "401104",
          price: 461100,
        },
        {
          id: 5,
          title:
            "Акриловая ванна GRACIYA 1700*780*700 (401104) Акриловая ванна GRACIYA 1700*780*700 (401104)",
          image: "./img/vanna2.webp",
          article: "401104",
          price: 461100,
        },
        {
          id: 9,
          title: "Акриловая ванна GRACIYA 1700*780*700 (401104)",
          image: "./img/vanna.webp",
          article: "401104",
          price: 461100,
        },
        {
          id: 10,
          title: "Акриловая ванна GRACIYA 1700*780*700 (401104)",
          image: "./img/vanna2.webp",
          article: "401104",
          price: 461100,
        },
        {
          id: 12,
          title: "Акриловая ванна GRACIYA 1700*780*700 (401104)",
          image: "./img/vanna2.webp",
          article: "401104",
          price: 461100,
        },
        {
          id: 15,
          title: "Акриловая ванна GRACIYA 1700*780*700 (401104)",
          image: "./img/vanna.webp",
          article: "401104",
          price: "461100",
        },
        {
          id: 1,
          title: "Акриловая ванна GRACIYA 1700*780*700 (401104)",
          image: "./img/vanna.webp",
          article: "401104",
          price: 461100,
        },
      ];

      const handleChange = (value) => {
        setCheck(value)
      }
  return (
    <div>
      <Header check={check}/>
        <div className="products_main">
            <div className="products_filter"></div>
            <div className="products_all">
                {catalog.map((el, i)=>{
                    return <ProductsItem key={i} id={el.id} image={el.image} title={el.title} article={el.article} price={el.price} onChange={handleChange}/>
                })}
            </div>
        </div>
    </div>
  );
}

export default Products;
