import React from 'react'
import styles from '../styles/navDetail.module.css'
import Logo from '../../images/Logo-GoBew.png'
import Carrito from '../../images/carrito-compras.png'
import User from '../../images/user-icon.png'






export default function NavBarDetail() {
    return (
        <nav>
            <div className={styles.navContaner}>
                <div className={styles.navWidth}>
                    <div className={styles.navLogoContainer}>
                        <img className={styles.navLogo} src={Logo} alt='img not found' />
                    </div>
                    <div className={styles.navIconpContainer}>
                        <img className={styles.navIcons} src={Carrito} alt='img not found' />
                        <p className={styles.navp}>Carrito</p>
                        <img className={styles.navIcons} src={User} alt='img not found' />
                        <p className={styles.navp}>Acceso</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}
