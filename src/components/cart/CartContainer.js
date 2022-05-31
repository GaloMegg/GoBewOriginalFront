import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_CART, SET_TOTAL } from '../../redux/actions'
import Cart from './Cart'

const CartContainer = () => {
    const { cart, totalCart } = useSelector(state => state.clientReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(SET_CART(JSON.parse(localStorage.getItem('cart'))))
        dispatch(SET_TOTAL(JSON.parse(localStorage.getItem('totalCart'))))
    }, [dispatch])

    return (
        <section>
            <h1>Cart</h1>
            <Cart cart={cart} totalCart={totalCart} />
        </section>
    )
}

export default CartContainer