import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({productName, productPrice, productStock, productId}) {
    return (
        
        <div>
            <Link to={`/productDetail/${productId}`}>
                <h2>{productName}</h2>
            </Link>
            <img src="https://via.placeholder.com/150" alt="product-img" />
            <p>{productPrice}</p>
            <span>{productStock}</span>
            <p>{productId}</p>
        </div>
    )
}

