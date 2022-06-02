import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_CART, SET_TOTAL } from '../../redux/actions'
import Cart from './Cart'

const CartContainer = () => {
    const { cart, totalCart } = useSelector(state => state.clientReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        if (cart.length < 1) {
            let cartStorage = JSON.parse(localStorage.getItem('cart'))
            cartStorage && dispatch(SET_CART(cartStorage))
            let totalCartStorage = JSON.parse(localStorage.getItem('totalCart'))
            totalCartStorage > 0 && dispatch(SET_TOTAL(totalCartStorage))
        }
    }, [dispatch])
    return (
        <section>

            {cart.length < 1 ? < h1 > No hay productos en el carrito</h1> :
                <Cart cart={cart} totalCart={totalCart} />
            }
        </section >
    )
}

export default CartContainer