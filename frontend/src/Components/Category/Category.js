import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import Filter from "../Filter/Filter";
import Header from "../Header/Header";
import ProductsItem from "../ProductsItem/ProductsItem";
import "./Category.css";

function Category() {
  const [check, setCheck] = useState(false);
  const { all_product } = useContext(ShopContext);
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Установка начальных данных при загрузке всех продуктов
    setProducts(
      all_product.filter(
        (e) => e.brand.name === categoryId || e.category.name === categoryId
      )
    );
  }, [all_product, categoryId]);

  useEffect(() => {
    setLoading(true);
    // Обновление newProducts при изменении products
    setNewProducts(products);
    setLoading(false);
  }, [products]);

  const handleChange = (value) => {
    setCheck(value);
  };
  const productsPerPage = 40;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = newProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  if (loading) {
    return (
      <div>
        <Header check={check} />
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
            <Filter products={products} onChange={filterProducts} />
          </div>
          <div className="products_title_main">
            <h2 className="caatlog_title">Категория: {categoryId}</h2>
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

export default Category;
