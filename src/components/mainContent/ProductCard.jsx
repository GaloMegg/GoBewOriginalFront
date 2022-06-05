import React from 'react'
import { Link } from 'react-router-dom'
import ProductAdd from '../cart/ProductAdd'
// import styles from '../styles/ProductCard.module.css'
const { REACT_APP_CLOUDINARY_RES } = process.env

export default function ProductCard({ productName, productPrice, productStock, _id, images, product }) {
    return (
        <div className='productCard'>
            <Link to={`/productDetail/${_id}`} className='productCard__link' >
                {images[0]?.imageName && <img src={REACT_APP_CLOUDINARY_RES + images[0]?.imageName} alt="" className='productCard__img' />}
                <h3 className='productCard__name' >{productName}</h3>
                <p className='productCard__price' >{"$" + productPrice?.toLocaleString({ style: 'currency', currency: 'INR', minimumFractionDigits: 2 })}</p>
            </Link>
            <ProductAdd stock={productStock} price={productPrice} product={product} />
        </div>
    )
}

