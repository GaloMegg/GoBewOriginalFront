import React from 'react'
import { useDispatch } from 'react-redux'
import { GET_PRODUCTS, SEARCH_PRODUCT } from '../../redux/actions'

const SearchBar = () => {
    const dispatch = useDispatch()
    const handleChanges = (e) => {
        if (e.target.value === "") {
            dispatch(GET_PRODUCTS())
            return
        }
        dispatch(SEARCH_PRODUCT(e.target.value))
    }
    return (
        <>
            <input type="text" onChange={handleChanges} placeholder="Encontrá lo que buscás" />
        </>
    )
}

export default SearchBar