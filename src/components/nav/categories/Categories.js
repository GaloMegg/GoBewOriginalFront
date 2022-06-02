import React from 'react'

const Categories = ({ categories }) => {

    return (
        <>
            <option value="" defaultValue={true}>Categorías</option>
            {
                categories.map(category => <>
                    <option key={category._id} value={category._id}>{category.categoryName}</option>
                    {category.childCategories.map(c => <option key={c._id} value={c._id}>{c.categoryName}</option>)}
                </>
                )
            }
        </>
    )
}

export default Categories