import React from 'react'
import ProductCard from './ProductCard'

export default function ProductsMap({products}) {
    console.log(1, products)
    return (
        <>
            {
                products?.map((prod)=>{
<<<<<<< HEAD
                    return <ProductCard key={prod.productId} productName={prod.productName} productPrice={prod.productPrice} productStock={prod.productStock} productId={prod._id} images={prod.images}/>
=======
                    return <ProductCard key={prod.productId} productName={prod.productName} productPrice={prod.productPrice} productStock={prod.productStock} productId={prod._id}/>
>>>>>>> d22241002020296cfef8da2b6ca71f533ca17697
                })
            }
        </>
    )
}
