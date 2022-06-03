import React from 'react'
import ProductCard from './ProductCard'

export default function ProductsMap({ products }) {
    return (
        <>
            {
                products?.map((prod) => {
<<<<<<< HEAD
                    return <ProductCard key={prod.productId} productName={prod.productName} productPrice={prod.productPrice} productStock={prod.productStock} productId={prod._id} images={prod.images} />
                }) 
=======
                    return <ProductCard key={prod.productId} {...prod} product={prod} />
                })
>>>>>>> 90d6754441772ca64618752368e85b1a6b657b26
            }
        </>
    )
}
