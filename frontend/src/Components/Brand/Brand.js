import React from 'react'
import { Link } from 'react-router-dom'
import './Brand.css'

function Brand(props) {
  return (
    <Link to={`/category/${props.title}`} className='brand_main'>
        <img src={props.imgBrand} alt="" />
    </Link>
  )
}

export default Brand