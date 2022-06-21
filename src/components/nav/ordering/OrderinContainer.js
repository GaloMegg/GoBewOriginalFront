import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ORDER_PRODUCTS } from '../../../redux/actions'


const OrderinContainer = ({ priceActive, alphabeticalActive, setAlphabeticalActive, setPriceActive }) => {
    const { products } = useSelector(state => state.clientReducer)
    const dispatch = useDispatch()
    const [alphabeticalDirection, setAlphabeticalDirection] = useState(false)
    const [priceDirection, setPriceDirection] = useState(false)
    const handlePriceClick = () => {
        setAlphabeticalActive(false)
        setAlphabeticalDirection(true)
        setPriceActive(true)
        setPriceDirection(!priceDirection)
        let prods = [...products]
        let sortedProducts = priceDirection
            ?
            prods?.sort((a, b) => {
                if (a.productPrice < b.productPrice) return -1
                if (a.productPrice > b.productPrice) return 1
                return 0
            })
            :
            prods?.sort((a, b) => {
                if (a.productPrice > b.productPrice) return -1
                if (a.productPrice < b.productPrice) return 1
                return 0
            })
        dispatch(ORDER_PRODUCTS(sortedProducts))
    }
    const handleAlphabetClick = () => {
        setPriceActive(false)
        setPriceDirection(true)
        setAlphabeticalActive(true)
        setAlphabeticalDirection(!alphabeticalDirection)
        let prods = [...products]
        let sortedProducts = alphabeticalDirection
            ?
            prods?.sort((a, b) => {
                if (a.productName < b.productName) return -1
                if (a.productName > b.productName) return 1
                return 0
            })
            :
            prods?.sort((a, b) => {
                if (a.productName > b.productName) return -1
                if (a.productName < b.productName) return 1
                return 0
            })
        dispatch(ORDER_PRODUCTS(sortedProducts))
    }
    return (
        <div className='orderButtons'>
            <button onClick={handlePriceClick} className='orderButtons__price'>
                Precio {priceActive && <span >{priceDirection ? "ᐱ" : "ᐯ"}</span>}
            </button>
            <button onClick={handleAlphabetClick} className='orderButtons__alph'>
                A-Z{alphabeticalActive && <span>{alphabeticalDirection ? "ᐱ" : "ᐯ"}</span>}
            </button>
        </div>
    )
}

export default OrderinContainer