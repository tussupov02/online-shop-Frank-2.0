import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import FilterBrand from "../Filter/FilterBrand";
import Header from "../Header/Header";
import ProductsItem from "../ProductsItem/ProductsItem";
import "./Category.css";

function CategoryBrand() {
  const [check, setCheck] = useState(false);
  const { all_product } = useContext(ShopContext);
  const { categoryBrand } = useParams();
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Фильтрация продуктов при изменении categoryId и categoryType
    setProducts(
        all_product.filter((e) => {
          // Проверка, содержит ли имя продукта ключевое слово
          const nameContainsKeyword =
            e.brand?.name.toLowerCase().includes(categoryBrand.toLowerCase())
          return nameContainsKeyword;
        })
      );
  }, [all_product, categoryBrand]);


  useEffect(() => {
    // Обновление newProducts при изменении productType
    setLoading(true);
    setNewProducts(products);
    setLoading(false);
  }, [products]);

  const handleChange = (value) => {
    setCheck(value);
  };
  const productsPerPage = 16;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = newProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  if (loading) {
    return (
      <div>
        <Header />
      </div>
    );
  } else {
    const filterProducts = (value) => {
      setCurrentPage(1);
      setNewProducts(value);
    };
    return (
      <div>
        <Header check={check} />
        <div className="products_main">
          <div className="products_filter">
            <FilterBrand products={products} onChange={filterProducts} />
          </div>
          <div className="products_title_main">
            <h2 className="caatlog_title">Бренд: {categoryBrand}</h2>
            <div className="products_all">
              {currentProducts.length > 0 ? (
                <>
                  {currentProducts.map((el, i) => (
                    <ProductsItem
                      key={i}
                      id={el.id}
                      image={el.pictures[0].img}
                      title={el.name}
                      article={el.vendor_code}
                      price={el.price}
                      onChange={handleChange}
                    />
                  ))}
                </>
              ) : (
                <div className="no_products_container">
                  <h3 className="no_products">Ничего не найдено</h3>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Предыдущая
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentProducts.length < productsPerPage}
          >
            Следующая
          </button>
        </div>
      </div>
    );
  }
}

export default CategoryBrand;
