import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GET_PRODUCT_BY_ID, CLEAN_UP_DETAILS } from '../../redux/actions'
import ProductAdd from '../cart/ProductAdd'
const { REACT_APP_CLOUDINARY_RES } = process.env


export default function ProductDetailContainer() {

    const { product } = useSelector((store) => store.clientReducer)
    const { id } = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GET_PRODUCT_BY_ID(id))
        return () => {
            dispatch(CLEAN_UP_DETAILS())
        }
    }, [dispatch, id])
    return (
        <div className="">
            <img src={REACT_APP_CLOUDINARY_RES + product[0]?.images[0].imageName} alt={product[0]?.imageAlt} className="" />
            <div className="">
                <h2 className="">{product[0]?.productName}</h2>
                <p className="">{product[0]?.productDescription}</p>
                <p className="">${product[0]?.productPrice}</p>
                <ProductAdd />
            </div>
        </div>
    )
}
