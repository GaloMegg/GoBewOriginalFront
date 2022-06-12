import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CHECK_LOGIN } from '../../redux/actions'
import OrderDetail from './OrderDetail'

const OrderDetailContainer = () => {
    const { id } = useParams()
    const { userId } = useSelector(state => state.clientReducer)
    const dispatch = useDispatch()
    const [orderData, setOrderData] = useState({})
    const [addressData, setAddressData] = useState({})
    useEffect(() => {
        dispatch(CHECK_LOGIN())
    }, [])
    useEffect(() => {
        fetch(`http://localhost:4000/payments/order/byId/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "x-token": localStorage.getItem('token')
                }
            }
        ).then(res => res.json()).then(data => { setOrderData(data) })
    }, [id])

    useEffect(() => {
        if (orderData.ok) {

            fetch(`http://localhost:4000/address/byOrder/${orderData.obj._id}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        "x-token": localStorage.getItem('token')
                    }
                }
            ).then(res => res.json()).then(data => setAddressData(data))
        }

    }, [orderData])
    return (
        <section className='orderDetails'>
            {(userId && orderData?.obj?.userId == userId) ? <OrderDetail {...orderData.obj} {...addressData.address} /> : <h1>Estas un poco perdido... Dejame que te lleve a tus ordenes</h1>}
        </section>
    )
}

export default OrderDetailContainer