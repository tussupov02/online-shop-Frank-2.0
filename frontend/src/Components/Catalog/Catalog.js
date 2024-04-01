import React from 'react'
import './Catalog.css'

function Catalog(props) {
  return (
        <div className="catalog_main" style={{backgroundImage:`url(${props.image})`}}>
            <div className="catalog_content">
              <h5>{props.title}</h5>
            </div>
        </div>
      );
}

export default Catalog