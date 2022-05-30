import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/ProductCard.module.css'
const { REACT_APP_CLOUDINARY_RES } = process.env

export default function ProductCard({ productName, productPrice, productStock, productId, images }) {
    return (

        <div className={styles.cardCotainer}>
            <Link to={`/productDetail/${productId}`} className={styles.link}>
                <div className={styles.productCard}>
                    {images?.map((i) => {
                        if (i.imageIsPrimary) {
                            return <img className={styles.img} src={REACT_APP_CLOUDINARY_RES + i.imageName} alt={i.imageAlt} key={i.imageName} />
                        }
                    })
                    }
                    <h3>{productName}</h3>
                    <p>$ {productPrice.toLocaleString({ style: 'currency', currency: 'INR', minimumFractionDigits: 2 })}</p>
                </div>
            <p>{"$" + productPrice}</p>
            {/* <span>{productStock}</span> */}
            </Link>
            
                <h3>{productName}</h3>
                <p>$ {productPrice.toLocaleString( {style: 'currency',currency: 'INR', minimumFractionDigits: 2})}</p>
            </div>
    )
}

