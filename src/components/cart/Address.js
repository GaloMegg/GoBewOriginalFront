import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GET_USER_CART, POST_USER_ADDRESS } from '../../redux/actions'
import OrderForm from './OrderForm'

const Address = () => {
    const navigate = useNavigate()
    const { userId, orderId } = useSelector(state => state.clientReducer)
    const dispatch = useDispatch()
    const [addressComment, setAddressComment] = useState("")
    const handleChangesDirection = (e) => {
        setAddressComment(
            e.target.value
        )
    }
    const OnsubmitHandler = (e) => {
        e.preventDefault()
        if (userId) {
            dispatch(POST_USER_ADDRESS({ addressComment, orderId, userId }))
            navigate('/checkout')
        }
    }
    useEffect(() => {
        dispatch(GET_USER_CART(userId))
    }, [userId])


    return (
        <section className='orderForm__container'>
            <p>Añade tu direccion de entrega</p>
            <OrderForm handleChangesDirection={handleChangesDirection} OnsubmitHandler={OnsubmitHandler} />
        </section>
    )
}

export default Address