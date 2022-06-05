import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCTS, SET_CART, SET_TOTAL } from '../../redux/actions';
import ProductsMap from './ProductsMap';

export default function ProductCardContainer() {

    const { products, isFiltered, cart, userId } = useSelector((store) => store.clientReducer)
    const dispatch = useDispatch();


    useEffect(() => {
        if (!isFiltered) {
            dispatch(GET_PRODUCTS())
        }
    }, [dispatch])

    useEffect(() => {
        dispatch(SET_CART(JSON.parse(localStorage.getItem('cart'))))
        dispatch(SET_TOTAL(JSON.parse(localStorage.getItem('totalCart'))))
    }, [dispatch])
    return (
        <section className='products' >
            {products.length > 0 ?
                <ProductsMap products={products} /> :
                <p className='products__noProducts'>
                    No hay productos asociados
                </p>
            }
        </section>
    )
}

