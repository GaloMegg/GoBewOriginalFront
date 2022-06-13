import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GET_PRODUCT_BY_ID, CLEAN_UP_DETAILS, CHECK_LOGIN } from '../../redux/actions'
import ProductDetail from './ProductDetail'
const { REACT_APP_APIURL } = process.env

export default function ProductDetailContainer() {

    const { product } = useSelector((store) => store.clientReducer)
    const { id } = useParams()
    const [reviews, setReviews] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CHECK_LOGIN())
        dispatch(GET_PRODUCT_BY_ID(id))
        return () => {
            dispatch(CLEAN_UP_DETAILS())
        }
    }, [dispatch, id])


    useEffect(() => {
        fetch(`${REACT_APP_APIURL}reviews/byProduct/${id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <ProductDetail product={product} reviews={reviews.reviews} />
    )
}
