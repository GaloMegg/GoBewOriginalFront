import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHECK_LOGIN, GET_USER_CART, SET_CART, SET_TOTAL } from '../../redux/actions'
import Cart from './Cart'

const CartContainer = () => {
    const { cart, totalCart, userId } = useSelector(state => state.clientReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            dispatch(CHECK_LOGIN())
            if (userId) {
                dispatch(GET_USER_CART(userId))

                // localStorage.removeItem("cart")
                return
            }
        } else {
            let cartStorage = JSON.parse(localStorage.getItem('cart'))
            let totalCartStorage = JSON.parse(localStorage.getItem('totalCart'))
            if (cartStorage && totalCartStorage) {
                SET_CART(cartStorage)
                SET_TOTAL(totalCartStorage)
            }
        }
    }, [userId, dispatch])
    return (
        <section>
            {cart.length < 1 ? <div className='cart__noItem--container'>< h1 className='cart__noItem'> No hay productos en el carrito</h1></div> :
                <Cart cart={cart} totalCart={totalCart} />
            }
        </section >
    )
}

export default CartContainer