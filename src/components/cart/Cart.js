import React from 'react'
import CardItem from './CardItem'

const Cart = ({ totalCart, cart }) => {
    return (
        <div>
            {totalCart}
            {cart?.map(i => <CardItem key={i._id} {...i} totalCart={totalCart} />)}
        </div>
    )
}

export default Cart