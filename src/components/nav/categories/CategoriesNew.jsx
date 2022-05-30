import React from 'react'
import styles from '../../styles/categories.module.css'

const CategoriesNew = ({ViewCategories}) => {

    return (
        ViewCategories &&
        <div className={styles.categoriesSupContainer}>
            <div className={styles.categories}>
            <p>Categorías</p>
            <p>primera</p>
            <p>Segunda</p>
            </div>
        </div>
    )
}

export default CategoriesNew