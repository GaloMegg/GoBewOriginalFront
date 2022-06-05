import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MPButton from './MPButton';
const { REACT_APP_APIURL } = process.env

// ! test CARD = {
// !   num: 5031 7557 3453 0604   ,
// !    cvv: 123,
// !    vencimiento: 11 / 25,
// ! }
// ! Martinez Mirtha
// ! 23011111114



export default function Checkout({ }) {
    const { cart, userId, orderId, totalCart } = useSelector(state => state.clientReducer)
    const [id, setId] = useState("")
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
    }, []);
    return <div className='checkoutContainer' >{id ? <MPButton id={id} /> : <p className='checkoutContainer__loading' > Cargando...</p>}
    </div>
}

