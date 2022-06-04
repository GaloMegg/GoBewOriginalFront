import React from 'react'
import { useSelector } from 'react-redux';
// import OrderinContainer from './ordering/OrderinContainer'
import SearchBar from './SearchBar'
import CategoriesContainer from "./categories/CategoriesContainer"
import Logo from '../../images/Logo-GoBew.png'
import Carrito from '../../images/carrito-compras.png'
import User from '../../images/user-icon.png'
import { Link } from 'react-router-dom'

const Nav = ({ showSearch, showCategories }) => {
    const { userResponse, cart } = useSelector(store => store.clientReducer)
    if (userResponse.ok === true) {
        var user = userResponse.userFirstName
    } else {
        user = 'Acceso'
    }
    return (
        <nav className='nav'>
            {/* //! LOGO */}
            <div className='nav__logo'>
                <Link to="/" className='nav__logo--link'>
                    <img className='nav__logo--img' src={Logo} alt='img not found' />
                </Link>
            </div>
            {/* //! FILTERS */}
            {/* <div className='nav__filters'> */}
                {/* CATEGORIES FILTERS */}
                {/* {showCategories && <CategoriesContainer />} */}
                {/* SEARCHBAR */}
                {/* {showSearch && <SearchBar />} */}
            {/* </div> */}
            <div className='nav__loginCart'>
                {/* //! CART */}
                <Link className='nav__loginCart--cart' to="/cart">
                    <img className='nav__loginCart--cart-img' src={Carrito} alt='img not found' />
                    <div className='nav__loginCart--cart-circle'>
                        <p className='nav__loginCart--cart-text'>{cart.reduce((a, b) => { return a + b.quantity }, 0)}</p>
                    </div>
                </Link>
                {/* //! LOGIN */}
                <Link className='nav__loginCart--login' to={`/login`} >
                    <img className='nav__loginCart--login-img' src={User} alt='img not found' />
                    <p className='nav__loginCart--login-text'>{user}</p>
                </Link>
            </div>
            {/* ORDERING */}
            {/* <OrderinContainer /> */}
            {/* HIGHLITED PRODUCTS */}
            {/* <HighLightedBtn /> */}
        </nav>
    )
}

export default Nav
