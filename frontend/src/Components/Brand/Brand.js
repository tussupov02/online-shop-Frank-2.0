import React from 'react'
import './Brand.css'

function Brand(props) {
  return (
    <div className='brand_main'>
        <img src={props.imgBrand} alt="" />
    </div>
  )
}

export default Brand