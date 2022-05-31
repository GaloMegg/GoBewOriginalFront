import React from 'react'
import ProductCard from './ProductCard'

export default function ProductsMap({ products }) {
    return (
        <>
            {
<<<<<<< HEAD
                
=======
            
>>>>>>> 4fa82ddc4c07747e2fa0b26576830dfde8991b1c
                products?.map((prod) => {
                    return <ProductCard key={prod.productId} productName={prod.productName} productPrice={prod.productPrice} productStock={prod.productStock} productId={prod._id} images={prod.images} />
                }) 
                
            }
        </>
    )
}
