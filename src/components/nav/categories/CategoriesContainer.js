import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_CATEGORIES, GET_PRODUCTS, GET_PRODUCTS_BYCATEGORY } from '../../../redux/actions'
import Categories from './Categories'
const CategoriesContainer = ({ handleReset }) => {
    const dispatch = useDispatch()
    const { categories, productsToFilter, isFiltered } = useSelector(state => state.clientReducer)
    useEffect(() => {
        if (!isFiltered) { dispatch(GET_CATEGORIES()) }
    }, [dispatch, isFiltered])
    const handleChanges = (e) => {
        if (!e.target.id) {
            dispatch(GET_PRODUCTS())
            handleReset()
            return
        }
        let filteredProducts = productsToFilter.filter(product => product.categories[0]?.categorySupId === e.target.id || product?.productCategories?.includes(e.target.id))
        dispatch(GET_PRODUCTS_BYCATEGORY(filteredProducts))
        handleReset()
    }
    return (
        <>
            <div className='categories' >
                <Categories categories={categories} handleChanges={handleChanges} />
            </div>
        </>
    )
}

export default CategoriesContainer