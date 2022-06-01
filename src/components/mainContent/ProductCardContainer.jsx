import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCTS, SET_CART, SET_TOTAL } from '../../redux/actions';
import ProductsMap from './ProductsMap';
import styles from '../styles/ProductCard.module.css'

export default function ProductCardContainer() {

    const { products, isFiltered, cart } = useSelector((store) => store.clientReducer)
    const dispatch = useDispatch();


    useEffect(() => {
        if (!isFiltered) {
            dispatch(GET_PRODUCTS())
        }
    }, [dispatch])

    useEffect(() => {
        if (cart.length < 1) {
            let cartStorage = JSON.parse(localStorage.getItem('cart'))
            cartStorage && dispatch(SET_CART(cartStorage))
            let totalCartStorage = JSON.parse(localStorage.getItem('totalCart'))
            totalCartStorage && dispatch(SET_TOTAL(totalCartStorage))
        }
    }, [dispatch])
    return (
        <div className={styles.cardsCotainer}>
            {products.length > 0 ?
                <ProductsMap products={products} /> :
                <h1>
                    No hay productos de la categoria seleccionada
                </h1>



            }
        </div>
    )
}

