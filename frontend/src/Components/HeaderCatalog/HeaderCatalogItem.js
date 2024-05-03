import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function HeaderCatalogItem({ idItem }) {
  return (
    <ul>
      {idItem?.map((el, i) => {
        return (
          <Link className="link" to={`product/${el.id}`} key={i}>
            <li> {el.name}</li>
          </Link>
        );
      })}
    </ul>
  );
}

export default HeaderCatalogItem;
