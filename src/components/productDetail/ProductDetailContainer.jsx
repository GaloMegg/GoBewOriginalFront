import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GET_PRODUCT_BY_ID } from '../../redux/actions'

export default function ProductDetailContainer() {
    
    const {product} = useSelector((store)=> store.clientReducer)
    const {id} = useParams()
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(GET_PRODUCT_BY_ID(id))
    },[dispatch, id])

<<<<<<< HEAD
=======
    console.log(2,id)
    console.log(3,product)

>>>>>>> d22241002020296cfef8da2b6ca71f533ca17697
    return (
        <div>
            <h2>{product[0]?.productName}</h2>
            <p>{product[0]?.productDescription}</p>
            <p>{product[0]?.productPrice}</p>
            <p>{product[0]?.productStock}</p>
        </div>
    )
}
