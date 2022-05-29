import React from 'react'
// import OrderinContainer from './ordering/OrderinContainer'
import SearchBar from './SearchBar'
import CategoriesContainer from "./categories/CategoriesContainer"
import styles from '../styles/nav.module.css'
import Logo from '../../images/Logo-GoBew.png'
import Carrito from '../../images/carrito-compras.png'
import User from '../../images/user-icon.png'

// import HighLightedBtn from './HighLightedBtn' //las organizaciones se hacen después de que el cliente halla elegido una categoría o buscado 

const Nav = () => {
    return (
        <nav>
            {/* LOGO */}
            <div className={styles.navContaner}>
             <div className={styles.navWidth}>
                <div  className={styles.navLogoContainer}>
                    <img className={styles.navLogo} src={Logo} alt='img not found'/>
                </div>
                {/* CATEGORIES FILTERS */}
                <div className={styles.navCategory}>
                <CategoriesContainer />
                </div>
                {/* SEARCHBAR */}
                <div className={styles.navBarContainer}>
                <SearchBar />
                </div>
                {/* ORDERING */}
                <div className={styles.navIconpContainer}>
                    <img className={styles.navIcons} src={Carrito} alt='img not found'/>
                    <p className={styles.navp}>Carrito</p>
                </div>
                <div className={styles.navIconpContainer}>
                    <img className={styles.navIcons} src={User} alt='img not found'/>
                    <p className={styles.navp}>Acceso</p>
                </div>
             </div>
            </div>
            {/* <OrderinContainer /> */}
            {/* HIGHLITED PRODUCTS */}
            {/* <HighLightedBtn /> */}
        </nav>
    )
}

export default Nav