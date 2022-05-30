import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/ProductCard.module.css'

export default function ProductCard({productName, productPrice, productStock, productId}) {
    return (
        
        <div className={styles.cardCotainer}>
            <Link to={`/productDetail/${productId}`} className={styles.link}>
            <div className={styles.productCard}>
                <img className={styles.img} src="https://via.placeholder.com/150" alt="product-img" />
                <h3>{productName}</h3>
                <p>$ {productPrice.toLocaleString( {style: 'currency',currency: 'INR', minimumFractionDigits: 2})}</p>
            </div>
            </Link>
        </div>
    )
}

