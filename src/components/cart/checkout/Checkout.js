import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CHECK_LOGIN } from '../../../redux/actions';
import MPButton from './MPButton';
import OrderAddress from './OrderAddress';
import OrderSummary from './OrderSummary';
const { REACT_APP_APIURL } = process.env
export default function Checkout({ }) {
    const { cart, userId, orderId, totalCart, addressId } = useSelector(state => state.clientReducer)
    const [id, setId] = useState("")
    const dispatch = useDispatch()
    const [orderInfo, setOrderInfo] = useState({})
    const [addressInfo, setAddressInfo] = useState({})
    useEffect(() => {
        if (!userId) {
            dispatch(CHECK_LOGIN())
        }
    }, [])
    useEffect(() => {   
        if (cart && userId && orderId && totalCart) {
            fetch(`${REACT_APP_APIURL}payments/pay`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({ cart, orderId, totalCart })
            }).then((order) => order.json()).then(order => {
                setId(order.global)
            });
        }
        return () => {
            setId(null)
        }
    }, [cart]);
    useEffect(() => {
        if (orderId && Object.keys(addressId).length == 0) {
            fetch(`${REACT_APP_APIURL}address/byOrder/${orderId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': localStorage.getItem('token')
                }
            }).then((order) => order.json()).then(order => {
                setAddressInfo(order)
            }).catch(err => err)
        }
        return () => {
            setAddressInfo({})
        }
    }, [addressId, orderId])
    useEffect(() => {
        if (cart) { setOrderInfo(cart); return }
        return () => {
            setOrderInfo({})
        }
    }, [cart])
    return <div className='checkoutContainer' >
        {id ? <>
            <div className='checkout__info'>
                <OrderSummary cart={orderInfo} />
                {Object.keys(addressId).length == 0 ? <OrderAddress {...addressInfo.address} /> : <OrderAddress {...addressId} />}
            </div>
            <MPButton id={id} />
        </>
            : <p className='checkoutContainer__loading'> Cargando...</p>
        }
    </div>
}

