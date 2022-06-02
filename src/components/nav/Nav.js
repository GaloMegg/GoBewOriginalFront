import React from 'react'
import { useSelector } from 'react-redux';
// import OrderinContainer from './ordering/OrderinContainer'
import SearchBar from './SearchBar'
import CategoriesContainer from "./categories/CategoriesContainer"
import styles from '../styles/nav.module.css'
import Logo from '../../images/Logo-GoBew.png'
import Carrito from '../../images/carrito-compras.png'
import User from '../../images/user-icon.png'
import { Link } from 'react-router-dom'

const Nav = ({ showSearch, showCategories }) => {
    const userResponse = useSelector(store => store.clientReducer.userResponse)
    if (userResponse.ok === true) {
        var user = userResponse.userFirstName
    } else {
        user = 'Acceso'
    }
    return (
        <nav>
            {/* LOGO */}
            <div className={styles.navContaner}>
                <div className={styles.navWidth}>
                    <Link to="/" className={styles.navLogoContainer}>
                        <img className={styles.navLogo} src={Logo} alt='img not found' />
                    </Link>
                    {/* CATEGORIES FILTERS */}
                    <div className={styles.navCategory}>
                        {showCategories && <CategoriesContainer />}
                    </div>
                    {/* SEARCHBAR */}
                    <div className={styles.navBarContainer}>
                        {showSearch && <SearchBar />}
                    </div>
                    <Link className={styles.navIconpContainer} to="/cart">
                        <img className={styles.navIcons} src={Carrito} alt='img not found' />
                        <p className={styles.navp}>Carrito</p>
                    </Link>
                    <Link to={`/login`}>
                        <div className={styles.navIconpContainer} >
                            <img className={styles.navIcons} src={User} alt='img not found' />
                            <p className={styles.navp}>{user}</p>
                        </div>
                    </Link>
                </div>
            </div>
            {/* ORDERING */}
            {/* <OrderinContainer /> */}
            {/* HIGHLITED PRODUCTS */}
            {/* <HighLightedBtn /> */}
        </nav>
    )
}

export default Nav