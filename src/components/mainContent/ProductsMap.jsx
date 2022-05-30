import React from 'react'
import ProductCard from './ProductCard'

export default function ProductsMap({products}) {
    return (
        <>
            {
                products?.map((prod)=>{
                    return <ProductCard key={prod.productId} productName={prod.productName} productPrice={prod.productPrice} productStock={prod.productStock} productId={prod._id} images={prod.images}/>
                })
            }
        </>
    )
}
