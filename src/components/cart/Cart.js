import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CLEAN_CART } from '../../redux/actions'
import CardItem from './CardItem'
import Checkout from './Checkout'
const { REACT_APP_APIURL } = process.env


const Cart = ({ totalCart, cart }) => {
    const dispatch = useDispatch()
    const [id, setId] = useState(null)
    const cleanCart = () => {
        localStorage.removeItem('cart')
        localStorage.removeItem('totalCart')
        dispatch(CLEAN_CART())
    }
    useEffect(() => {

        fetch(`${REACT_APP_APIURL}payments/pay`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(cart) // body data type must match "Content-Type" header
        }).then((order) => order.json()).then(order => setId(order.global));
    }, [cart]);

    return (
        <div>
            <h1>Carrito</h1>
            {cart.length > 0 && <button onClick={cleanCart}> Limpiar Carrito</button>}
            {totalCart}
            {cart?.map(i => <CardItem key={i._id} {...i} totalCart={totalCart} />)}
            {id && <Checkout id={id} />}
        </div >
    )
}

export default Cart

