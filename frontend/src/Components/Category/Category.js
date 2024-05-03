import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import Filter from "../Filter/Filter";
import Header from "../Header/Header";
import ProductsItem from "../ProductsItem/ProductsItem";

function Category() {
  const [check, setCheck] = useState(false);
  const { all_product } = useContext(ShopContext);
  const { categoryId } = useParams();
  const product = all_product.filter((e) => e.category.id === Number(categoryId));



  const handleChange = (value) => {
    setCheck(value);
  };
  if (!product) {
    return <div>Loader...</div>;
  } else {
    return (
      <div>
        <Header check={check} />
        <div className="products_main">
          <div className="products_filter">
            <Filter product={product}/>
          </div>
          <div className="products_all">
            {product?.map((el, i) => {
              return (
                <ProductsItem
                  key={i}
                  id={el.id}
                  image={el.pictures[0].img}
                  title={el.name}
                  article={el.vendor_code}
                  price={el.price}
                  onChange={handleChange}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
