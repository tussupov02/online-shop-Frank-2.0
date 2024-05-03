import React, { useEffect, useState } from "react";

function Filter({ product }) {
    const [category, setCategory] = useState([]);

    const filter = [

    ]
    

    useEffect(()=>{
        if(product){
            product.map((el)=>{
                if(el.category.name){
                     setCategory([...category, el.category.name])
                }
            })
        }

    },[])

    useEffect(()=>{
    },[category])
  return (
    <div>
      <select>
        {product.map((el, i) => {
          return (
            <option key={i} value={el.brand}>
              {el.brand.name}
            </option>
          );
        })}
      </select>
      <select>
        {category?.map((el, i) => {
          return (
            <option key={i} value={el}>
              {el}
            </option>
          );
        })}
      </select>

    </div>
  );
}

export default Filter;
