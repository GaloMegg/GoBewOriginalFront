import React from 'react'
import CategoriesContainer from '../nav/categories/CategoriesContainer'
import SearchBar from '../nav/SearchBar'

const Filters = () => {
    return (
        <aside className='filters'>
            <SearchBar />
            <CategoriesContainer />
        </aside>
    )
}

export default Filters