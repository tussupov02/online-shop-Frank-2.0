import React from 'react'
import './ChildCatalog.css'

function ChildCatalog({data}) {
    return (
        <ul>
            {data.map(el => <li key={el.id}>{el.name}</li>)}
        </ul>
    )
}

export default ChildCatalog