import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_CATEGORIES, GET_PRODUCTS } from '../../../redux/actions'
import Categories from './Categories'
import styles from '../../styles/nav.module.css'

const CategoriesContainer = () => {
    //get categories
    const dispatch = useDispatch()
    const { categories, productsToFilter } = useSelector(state => state.clientReducer)
    useEffect(() => {
        dispatch(GET_CATEGORIES())
    }, [dispatch])
    const handleChanges = (e) => {
        if (!e.target.value) {
            dispatch(GET_PRODUCTS())
            return
        }
        console.log(e.target.value)
        let filteredProducts = productsToFilter.filter(product => product.categories[0]?.categorySupId === e.target.value || product.categories[0]?._id === e.target.value)
        dispatch(GET_PRODUCTS_BYCATEGORY(filteredProducts))
    }
    return (
        <div >
            <select className={styles.inputCategories} onChange={handleChanges}>
                <Categories categories={categories} />
            </select>
        </div>
    )
}

export default CategoriesContainer