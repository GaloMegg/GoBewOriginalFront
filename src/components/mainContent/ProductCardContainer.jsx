import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
<<<<<<< HEAD
import { CHECK_LOGIN, GET_PRODUCTS } from '../../redux/actions';
=======
import { CHECK_LOGIN, GET_PRODUCTS, GET_USER_CART, SET_CART, SET_TOTAL } from '../../redux/actions';
>>>>>>> 04a3d84800ee1f2ad8769eb158b507c4e042f24d
import ProductsMap from './ProductsMap';

export default function ProductCardContainer() {

    const { products, isFiltered, cart, userId } = useSelector((store) => store.clientReducer)
    const dispatch = useDispatch();


    useEffect(() => {
        if (!isFiltered) {
            dispatch(GET_PRODUCTS())
        }
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

