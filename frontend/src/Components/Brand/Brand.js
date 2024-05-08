import React from 'react'
import { Link } from 'react-router-dom'
import './Brand.css'

function Brand(props) {
  try {
    return (
      <Link to={`/brands/${props.title}`} className='brand_main'>
        <img src={props.imgBrand} alt="" />
      </Link>
    );
  } catch (error) {
    console.error("Ошибка при отображении компонента Brand:", error);
    return null; // Возвращаем null в случае ошибки, чтобы компонент не сломал приложение
  }
}

export default Brand
