import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CLEAN_CART } from '../../redux/actions'
import CardItem from './CardItem'
import Checkout from './Checkout'
import OrderForm from './OrderForm'
const { REACT_APP_APIURL } = process.env


const Cart = ({ totalCart, cart }) => {
    const { userResponse } = useSelector(state => state.clientReducer)

    const [orderData, setOrderData] = useState({
        userId: userResponse.userId,
        orderTotal: totalCart,
        shippingAddressId: "",
        cart: cart.map(item => ({
            _id: item._id,
            quantity: item.quantity,
            productPrice: item.productPrice,
            productName: item.productName
        })
        )
    })
    const dispatch = useDispatch()
    const [id, setId] = useState(null)
    const cleanCart = () => {
        if (userResponse.ok) {
            //dispatch para la orden

            dispatch(CLEAN_CART())

            return
        } else {

            localStorage.removeItem('cart')
            localStorage.removeItem('totalCart')
            dispatch(CLEAN_CART())
        }
    }
    //*STATE SETTERS
    useEffect(() => {
        setOrderData({
            ...orderData,
            orderTotal: totalCart
        })
    }, [totalCart])

    useEffect(() => {
        setOrderData({
            ...orderData,
            cart
        })
    }, [cart])
    //*ID AT BACKEND
    useEffect(() => {
        fetch(`${REACT_APP_APIURL}payments/pay`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(orderData) // body data type must match "Content-Type" header
        }).then((order) => order.json()).then(order => setId(order.global));
        return () => {
            setId(null)
        }
    }, [orderData]);

    const handleChangesDirection = (e) => {
        setOrderData(
            {
                ...orderData,
                shippingAddressId: e.target.value
            }
        )
    }
    const OnsubmitHandler = (e) => {
    }



    return (
        <section>
            <h1>Carrito</h1>
            {cart.length > 0 && <button onClick={cleanCart}> Limpiar Carrito</button>}
            {totalCart}
            {cart?.map(i => <CardItem key={i._id} {...i} totalCart={totalCart} />)}
            <div>
                <OrderForm handleChangesDirection={handleChangesDirection} OnsubmitHandler={OnsubmitHandler} />
            </div>
            {userResponse.ok !== "" && id
                ?
                orderData.shippingAddressId
                    ?
                    <Checkout id={id} />
                    :
                    <p>Complete el formulario de envio </p>
                :
                userResponse.ok === "" ? <Link to="/login">LOGIN</Link> : <h1>Loading</h1>
            }
        </section >
    )
}

export default Cart


