import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCTS } from '../../redux/actions';
import ProductsMap from './ProductsMap';
import styles from '../styles/ProductCard.module.css'

export default function ProductCardContainer() {

    const { products, isFiltered } = useSelector((store) => store.clientReducer)
    const dispatch = useDispatch();


    useEffect(() => {
        if (!isFiltered) {
            dispatch(GET_PRODUCTS())

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

