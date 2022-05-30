import React from 'react'
import { Link } from 'react-router-dom'
const { REACT_APP_CLOUDINARY_RES } = process.env

export default function ProductCard({productName, productPrice, productStock, productId, images}) {
    return (
        <div>
            <Link to={`/productDetail/${productId}`}>
                <h2>{productName}</h2>
            </Link>
            {
                images?.map((i)=>{
                    if(i.imageIsPrimary){
                        return <img src={REACT_APP_CLOUDINARY_RES + i.imageName} alt={i.imageAlt} />
                    }
                })
            }
            <p>{"$" + productPrice}</p>
            {/* <span>{productStock}</span> */}
        </div>
    )
}

