import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ORDER_PRODUCTS } from '../../../redux/actions'


const OrderinContainer = () => {
    const { products } = useSelector(state => state.clientReducer)
    const dispatch = useDispatch()
    //!Alphabetical
    const [alphabeticalActive, setAlphabeticalActive] = useState(false)
    const [alphabeticalDirection, setAlphabeticalDirection] = useState(false)

    //!PRICE
    const [priceActive, setPriceActive] = useState(false)
    const [priceDirection, setPriceDirection] = useState(false)
    //!DIRECTION
    const handlePriceClick = () => {
        //reset prev button
        setAlphabeticalActive(false)
        setAlphabeticalDirection(true)
        //Visual states
        setPriceActive(true)
        setPriceDirection(!priceDirection)
        //logical section
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
        //reset prev button
        setPriceActive(false)
        setPriceDirection(true)
        //Visual states
        setAlphabeticalActive(true)
        setAlphabeticalDirection(!alphabeticalDirection)
        //logical section
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
        <>
            <button onClick={handlePriceClick}>
                Precio {priceActive && <span>{priceDirection ? "ᐱ" : "ᐯ"}</span>}
            </button>
            <button onClick={handleAlphabetClick}>
                A-Z{alphabeticalActive && <span>{alphabeticalDirection ? "ᐱ" : "ᐯ"}</span>}
            </button>
        </>
    )
}

export default OrderinContainer