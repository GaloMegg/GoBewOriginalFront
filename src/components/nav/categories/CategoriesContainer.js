import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_CATEGORIES, GET_PRODUCTS, GET_PRODUCTS_BYCATEGORY } from '../../../redux/actions'
import Categories from './Categories'

const CategoriesContainer = () => {
    //get categories
    const dispatch = useDispatch()
    const { categories, productsToFilter } = useSelector(state => state.clientReducer)
    useEffect(() => {
        dispatch(GET_CATEGORIES())
<<<<<<< HEAD
    }, [])
=======
    }, [dispatch])
>>>>>>> 77ea9260bf63457738b12af5869a5a7fc5a257c8
    const handleChanges = (e) => {
        if (!e.target.value) {
            dispatch(GET_PRODUCTS())
            return
        }
        let filteredProducts = productsToFilter.filter(product => product.categories[0].categorySupId === e.target.value || product.categories[0]._id === e.target.value)
        dispatch(GET_PRODUCTS_BYCATEGORY(filteredProducts))
    }
    return (
        <select onChange={handleChanges}>
            <Categories categories={categories} />
        </select>
    )
}

export default CategoriesContainer