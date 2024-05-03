import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import HeaderCatalog from "../HeaderCatalog/HeaderCatalog";
import "./Header.css";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Header({ check }) {
  const [catalog, setCatalog] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [num, setNum] = useState(0);
  const { all_product } = useContext(ShopContext);

  const myRef = React.useRef(null);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("save")).length){
      setNum(JSON.parse(localStorage.getItem("save")).length);
    }
  }, []);

  useEffect(() => {
    setNum(JSON.parse(localStorage.getItem("save")).length);
  }, [check]);

  useEffect(() => {
    if (catalog || search) {
      myRef.current.scrollIntoView();
      if (catalog) {
        document.body.style.overflow = "hidden";
      } else document.body.style.overflow = "";
    } else document.body.style.overflow = "";
  }, [catalog, search]);

  const handleChange = (value) => {
    setCatalog(value);
  };

  const swohCatalog= ()=>{
    setCatalog(true)
    setTimeout(()=>{
      if(catalog){
        swohCatalog()
      }else{
        setCatalog(false)
      }
    },2000)
  }

  const fileterSearch = all_product.filter((product) => {
    return product.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <header ref={myRef} className="header">
      <div className="fixed_header">
        <div
          className="header_catalog"
          onClick={() => setCatalog(!catalog)}
          // onBlur={() => {if(!checkOnBlur){setCatalog(false)}}}
          tabIndex={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
          <p>Каталог товаров</p>
        </div>
        <div className="main_search">
          <div className="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
            >
              <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
            </svg>
            <input
              type="text"
              placeholder="Поиск по названию или артикулу товара"
              onClick={() => {
                setSearch(true);
                setCatalog(false);
              }}
              onBlur={() => setSearch(false)}
              tabIndex={0}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          {search && searchValue.length > 0 ? (
            <ul className="showIsSearch">
              {fileterSearch.map((el, i) => {
                return (
                  <li className="showIsSearch_item" key={i}>
                    {el.name}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
        <Link to="/basket" className="header_cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            class="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
          </svg>
          <p>Корзина</p>
          {num > 0 ? <div className="basket_num">{num}</div> : null}
        </Link>
      </div>
      {catalog ? (
        <div className="showCatalog_main">
          <div className="showCatalog_main_box">
            <HeaderCatalog onClick={handleChange} />
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
