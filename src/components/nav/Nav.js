import React from 'react'
import OrderinContainer from './ordering/OrderinContainer'
import SearchBar from './SearchBar'
import CategoriesContainer from "./categories/CategoriesContainer"
const Nav = () => {
    return (
        <nav>
            {/* LOGO */}
            {/* CATEGORIES FILTERS */}
            <CategoriesContainer />
            {/* SEARCHBAR */}
            <SearchBar />
            {/* ORDERING */}
            <OrderinContainer />
        </nav>
    )
}

export default Nav