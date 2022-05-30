import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_CATEGORIES, GET_PRODUCTS, GET_PRODUCTS_BY_CATEGORY } from '../../../redux/actions'
import Categories from './Categories'
import styles from '../../styles/nav.module.css'

const CategoriesContainer = () => {
    //get categories
    const dispatch = useDispatch()
    const { categories, productsToFilter, isFiltered } = useSelector(state => state.clientReducer)
    useEffect(() => {
        if (!isFiltered) { dispatch(GET_CATEGORIES()) }

    }, [dispatch, isFiltered])
    const handleChanges = (e) => {
        if (!e.target.value) {
            dispatch(GET_PRODUCTS())
            return
        }
        let filteredProducts = productsToFilter.filter(product => product.categories[0]?.categorySupId === e.target.value || product.categories[0]?._id === e.target.value)
        dispatch(GET_PRODUCTS_BY_CATEGORY(filteredProducts))
    }
    return (
        <div >
            <select className={styles.inputCategories} onClick={handleChanges}>
                <Categories categories={categories} />
            </select>
        </div>
    )
}

export default CategoriesContainer