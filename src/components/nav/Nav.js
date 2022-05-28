import React from 'react'
import OrderinContainer from './ordering/OrderinContainer'
import SearchBar from './SearchBar'
import CategoriesContainer from "./categories/CategoriesContainer"
import HighLightedBtn from './HighLightedBtn'
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
            {/* HIGHLITED PRODUCTS */}
            <HighLightedBtn />
        </nav>
    )
}

export default Nav