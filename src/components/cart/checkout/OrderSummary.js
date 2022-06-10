import React from 'react'

const OrderSummary = ({ cart }) => {
    return (
        <div className=''>
            <p>
                Total: ${cart?.reduce((acc, item) => acc + item.productPrice * item.productCant, 0)}
            </p>
            {cart?.map(item => { return <p>{item.productName} x{item.productCant} ${item.productPrice.toLocaleString('de-DE')}</p> })}
        </div>
    )
}

export default OrderSummary