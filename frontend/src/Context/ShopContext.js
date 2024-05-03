import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [all_product, setAll_product] = useState([]);
  const [hitsProducts, setHitProducts] = useState([]);


  useEffect(() => {
    fetch('https://frank.kz/api/products')
    .then((response)=>response.json())
      .then((data) =>{ setAll_product(data.products); setHitProducts(data.hits)});
  }, []);

  const contextValue = { all_product, hitsProducts };
  return <ShopContext.Provider value={contextValue}>
            {props.children}
  </ShopContext.Provider>;
};

export default ShopContextProvider;
