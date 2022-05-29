import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GET_PRODUCT_BY_ID } from '../../redux/actions'
const { REACT_APP_CLOUDINARY_RES } = process.env

export default function ProductDetailContainer() {
    
    const {product} = useSelector((store)=> store.clientReducer)
    const {id} = useParams()
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(GET_PRODUCT_BY_ID(id))
    },[dispatch, id])
    return (
        <div>
            <h2>{product[0]?.productName}</h2>
            <p>{product[0]?.productDescription}</p>
            {
                product[0]?.images?.map((i)=>{
                        return <img src={REACT_APP_CLOUDINARY_RES + i.imageName} alt={i.imageAlt} />
                })
            }
            <p>{product[0]?.productPrice}</p>
        </div>
    )
}
