import React from 'react'
import ProductCard from './ProductCard'

export default function ProductsMap({ products }) {
    return (
        <>
            {
                products?.map((prod) => {
                    return <ProductCard key={prod.productId} {...prod} product={prod} />
                })
            }
        </>
    )
}
