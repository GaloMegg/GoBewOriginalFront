import React from 'react'
import ProductCard from './ProductCard'

export default function ProductsMap({ products }) {
    return (
        <>
            {
                products?.map((prod) => <ProductCard key={prod._id} {...prod} product={prod} />

                )
            }
        </>
    )
}
