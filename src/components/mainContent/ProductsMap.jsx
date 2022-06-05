import React from 'react'
import ProductCard from './ProductCard'

export default function ProductsMap({ products }) {
    return (
        <>
            {
                products?.map((prod) => prod.productIsActive && <ProductCard key={prod.faqId} {...prod} product={prod} />
                )
            }
        </>
    )
}
