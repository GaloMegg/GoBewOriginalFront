import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_TOTAL, ADD_TO_CART } from '../../redux/actions'

const ProductAdd = ({ stock, price, product }) => {
    const dispatch = useDispatch()
    const { cart, totalCart } = useSelector(state => state.clientReducer)
    const [localCount, setLocalCount] = useState(0)
    const addQuantity = () => {
        if (localCount < stock) {
            setLocalCount(localCount + 1)
        }
    }
    const removeQuantity = () => {
        if (localCount > 0) {
            setLocalCount(localCount - 1)
        }
    }
    const addToCart = (e) => {
        e.preventDefault()
        console.log(product)
        dispatch(ADD_TO_CART(product, localCount))

        dispatch(SET_TOTAL(totalCart + (localCount * price)))
        setLocalCount(0)
    }

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