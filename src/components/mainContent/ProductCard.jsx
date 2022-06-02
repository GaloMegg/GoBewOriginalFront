import React from 'react'
import { Link } from 'react-router-dom'
import ProductAdd from '../cart/ProductAdd'
import styles from '../styles/ProductCard.module.css'
const { REACT_APP_CLOUDINARY_RES } = process.env

export default function ProductCard({ productName, productPrice, productStock, _id, images, product }) {
    return (

        <div className={styles.cardCotainer}>
            <Link to={`/productDetail/${_id}`} className={styles.link}>
                <div className={styles.productCard}>
                    {/* {images?.map((i) => {
                        return <img className={styles.img} src={REACT_APP_CLOUDINARY_RES + i.imageName} alt={i.imageAlt} key={i.imageName} />
                    })
                    } */}
                    <img src={REACT_APP_CLOUDINARY_RES + images[0]?.imageName} alt="" className={styles.img} />
                    <h3>{productName}</h3>
                    <p>$ {productPrice.toLocaleString({ style: 'currency', currency: 'INR', minimumFractionDigits: 2 })}</p>
                </div>
            </Link>
            <ProductAdd stock={productStock} price={productPrice} product={product} />
        </div>
    )
}

