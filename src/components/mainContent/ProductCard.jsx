import React from 'react'
import { Link } from 'react-router-dom'
import ProductAdd from '../cart/ProductAdd'
import WishListToggle from '../wishlist/WishListToggle';
const { REACT_APP_CLOUDINARY_RES } = process.env
export default function ProductCard({ productName, productPrice, productStock, _id, images, product }) {
    return (
        <div className='productCard'>
            <WishListToggle _id={_id} />
            <Link to={`/productDetail/${_id}`} className='productCard__link' >
                {productStock < 6 && <p className='productCard__last'>¡Ultimas {productStock} unidades!</p>}
                {images[0]?.imageName && <img src={REACT_APP_CLOUDINARY_RES + images[0]?.imageName} alt="" className='productCard__img' />}
                <h3 className='productCard__name' >{productName}</h3>
                <p className='productCard__price' >{"$" + productPrice?.toLocaleString('de-DE')}</p>
            </Link>
            <ProductAdd stock={productStock} price={productPrice} product={product} />
        </div>
    )
}

