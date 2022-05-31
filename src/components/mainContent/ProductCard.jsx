import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/ProductCard.module.css'
const { REACT_APP_CLOUDINARY_RES } = process.env

export default function ProductCard({ productName, productPrice, productStock, productId, images }) {
<<<<<<< HEAD
    console.log(images[0])
=======
>>>>>>> 4fa82ddc4c07747e2fa0b26576830dfde8991b1c
    return (

        <div className={styles.cardCotainer}>
            <Link to={`/productDetail/${productId}`} className={styles.link}>
                <div className={styles.productCard}>
                    {images?.map((i) => {
<<<<<<< HEAD
                        return <img className={styles.img} src={i.imageName} alt={i.imageAlt} key={i.imageName} />
=======
                        return <img className={styles.img} src={REACT_APP_CLOUDINARY_RES + i.imageName} alt={i.imageAlt} key={i.imageName} />
>>>>>>> 4fa82ddc4c07747e2fa0b26576830dfde8991b1c
                    })
                    }
                    <h3>{productName}</h3>
                    <p>$ {productPrice.toLocaleString({ style: 'currency', currency: 'INR', minimumFractionDigits: 2 })}</p>
                </div>
            </Link>
        </div>
    )
}

