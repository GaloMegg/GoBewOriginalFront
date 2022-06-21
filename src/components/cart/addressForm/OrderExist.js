import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const { REACT_APP_APIURL } = process.env
const OrderExist = ({ userAddress }) => {
    const navigate = useNavigate()
    const { orderId } = useSelector(state => state.clientReducer)
    const [id, setId] = useState("")
    const submitHandler = (e) => {

        e.preventDefault()
        fetch(`${REACT_APP_APIURL}payments/order/updateShipping`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
                orderId,
                shippingAddressId: id
            })
        }).then(res => res.json())
            .then(data => {
                navigate('/checkout')
            })
    }
    return (
        <form className='order__exist' onChange={(e) => { setId(e.target.id); }} onSubmit={submitHandler}>
            <p className='order__exist--title'>Elige una de tus direcciones </p>
            {
                userAddress.length > 0 && userAddress?.map(e => {
                    return <label className='order__exist--mapedContainer' htmlFor={e._id} >
                        <div className='radioContainer'>
                            <input type="radio" name="direccion" id={e._id} />
                        </div>
                        <div className='direction'>
                            <p className='order__exist--mapedContainer--phone'>Provincia: {e.addressProvince}</p>
                            <p className='order__exist--mapedContainer--phone'>Ciudad: {e.addressCity}</p>
                            <p className='order__exist--mapedContainer--phone'>Código Postal: {e.addressZipCode}</p>
                            <p className='order__exist--mapedContainer--address'>Calle: {e.addressStreet}</p>
                            <p className='order__exist--mapedContainer--zip'>Numero: {e.addressNumber} </p>
                            <p className='order__exist--mapedContainer--phone'>Piso: {e.addressFloor} </p>
                            <p className='order__exist--mapedContainer--phone'>Departamento: {e.addressFlat}</p>
                            <p className='order__exist--mapedContainer--phone'>Comentarios: {e.addressComment}</p>
                        </div>
                    </label>
                }
                )
            }
            <button type='submit' disabled={id ? false : true}>USAR LA DIRECCION SELECCIONADA </button>
        </form >
    )
}

export default OrderExist