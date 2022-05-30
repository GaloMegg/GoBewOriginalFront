import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GET_PRODUCT_BY_ID, CLEAN_UP_DETAILS } from '../../redux/actions'
import styles from '../styles/productDetail.module.css'
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
        <div className={styles.detailContainer}>
            <h2 className={styles.titleContainer}>{product[0]?.productName}</h2>
            {
                product[0]?.images?.map((i) => {
                    return <img src={REACT_APP_CLOUDINARY_RES + i.imageName} alt={i.imageAlt} />
                })
            }
            <p className={styles.descriptionContainer}>{product[0]?.productDescription}</p>
            <p className={styles.priceContainer}>${product[0]?.productPrice}</p>
        </div>
    )
}
