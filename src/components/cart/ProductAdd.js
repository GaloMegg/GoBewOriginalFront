import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_TOTAL, ADD_TO_CART } from '../../redux/actions'
import { toast, success } from 'react-toastify';
const ProductAdd = ({ stock, price, product }) => {
    const dispatch = useDispatch()
    const { cart, totalCart, userResponse } = useSelector(state => state.clientReducer)
    const [localCount, setLocalCount] = useState(1)
    const addQuantity = () => {
        if (localCount < stock) {
            setLocalCount(localCount + 1)
        }
    }
    const removeQuantity = () => {
        if (localCount > 1) {
            setLocalCount(localCount - 1)
        }
    }
    const addToCart = (e) => {
        e.preventDefault()
        console.log(product)
        dispatch(ADD_TO_CART(product, localCount))
        dispatch(SET_TOTAL(totalCart + (localCount * price)))
        setLocalCount(1)
        toast.success(
            `${product.productName} agregado al carrito`,
        )
    }
    useEffect(() => {
        if (userResponse.ok) {
            //dispatch de actualizacion de carrito
        }
        else {
            localStorage.setItem('cart', JSON.stringify(cart))
            localStorage.setItem('totalCart', JSON.stringify(totalCart))
        }
    }, [cart, totalCart])

    return (
        <form onSubmit={addToCart}>
            <div>
                <button type="button" onClick={addQuantity}> + </button>
                <span>{localCount}</span>
                <button type="button" onClick={removeQuantity}> - </button>
            </div>
            <button type="submit">Agregar</button>
        </form>
    )
}

export default ProductAdd