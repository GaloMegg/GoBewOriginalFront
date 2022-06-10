import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MPButton from './MPButton';
import OrderAddress from './OrderAddress';
import OrderSummary from './OrderSummary';
const { REACT_APP_APIURL } = process.env

// ! test CARD = {
// !   num: 5031 7557 3453 0604   ,
// !    cvv: 123,
// !    vencimiento: 11 / 25,
// ! }
// ! Martinez Mirtha
// ! 23011111114



export default function Checkout({ }) {
    const { cart, userId, orderId, totalCart, addressId } = useSelector(state => state.clientReducer)
    const [id, setId] = useState("")
    const [orderInfo, setOrderInfo] = useState({})
    const [addressInfo, setAddressInfo] = useState({})
    //! Payment Id Generator
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
    // {
    //     "ok": true,
    //     "orderId": "62a2513b762c20bf4ae3320c",
    //     "address": {
    //         "_id": "62a25f46762c20bf4ae33229",
    //         "userId": "629a69731d7fbe26fa74d269",
    //         "addressStreet": "123",
    //         "addressNumber": 123,
    //         "addressFloor": "123",
    //         "addressFlat": "123",
    //         "addressCity": "Gualeguaychú",
    //         "addressZipCode": "123",
    //         "addressProvince": "Entre ríos",
    //         "addressComment": "123",
    //         "addressIsShipping": true,
    //         "addressIsBilling": true,
    //         "__v": 0
    //     }
    // }


    //!Address Info
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
            }).catch(err => console.log(err))
        }
        return () => {
            setAddressInfo({})
        }
    }, [addressId])

    // {
    //     "ok": true,
    //     "obj": {
    //         "orderId": "62a2513b762c20bf4ae3320c",
    //         "_id": "62a2513b762c20bf4ae3320c",
    //         "orderState": 0,
    //         "orderTotal": 132529,
    //         "userId": "629a69731d7fbe26fa74d269",
    //         "shippingAddressId": null,
    //         "cart": [
    //             {
    //                 "_id": "62a2513c762c20bf4ae3320e",
    //                 "productId": "6290d9446655f25f6df9a9fa",
    //                 "productName": "Combo Samsung Galaxy A22 Awesome White + Auriculares Samsung Galaxy Buds Pro",
    //                 "productStock": 20,
    //                 "productCant": 1,
    //                 "productPrice": 132529
    //             }
    //         ],
    //         "user": [
    //             {
    //                 "_id": "629a69731d7fbe26fa74d269",
    //                 "userEmail": "galomeggiolarobul@gmail.com",
    //                 "userPassword": "$2a$10$yyDea25ScpQDifKJqSWDhOSAYe5h7pTLnBSis8MeDh/TzJBCZNkWq",
    //                 "userIsActive": true,
    //                 "userIsAdmin": true,
    //                 "userIsGoogle": false,
    //                 "userFirstName": "Galo",
    //                 "userLastName": "Meggiolaro",
    //                 "userIsSuperAdmin": true,
    //                 "hash": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2FsbyIsImlhdCI6MTY1NDI4NjcwNywiZXhwIjoxNjU0MjkzOTA3fQ.zdzSGB07Op3YC796-RHqfeoBFV5Rlia0IDAHGuEKd1I",
    //                 "userImage": "",
    //                 "userCreationDate": "2022-06-03T20:05:07.641Z",
    //                 "__v": 0
    //             }
    //         ]
    //     }
    // }
    //!Order Info
    useEffect(() => {
        if (userId) {
            fetch(`${REACT_APP_APIURL}payments/order/byId/${orderId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': localStorage.getItem('token')
                }
            }).then((order) => order.json()).then(order => {
                setOrderInfo(order)
            }).catch(err => console.log(err))
        }
        return () => {
            setOrderInfo({})
        }
    }, [])


    return <div className='checkoutContainer' >
        {id ? <>
            <div>
                <OrderSummary {...orderInfo.obj} />
                {Object.keys(addressId).length == 0 ? <OrderAddress {...addressInfo.address} /> : <OrderAddress {...addressId} />}
            </div>
            <MPButton id={id} />
        </>
            : <p className='checkoutContainer__loading'> Cargando...</p>
        }
    </div>
}

