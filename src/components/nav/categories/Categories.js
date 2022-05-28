import React from 'react'

const Categories = ({ categories }) => {

    return (
        <>
            <option value="" defaultValue={true}>Filtra por categorias</option>
            {/* {categories?.map(category => <optgroup key={category._id} value={category._id} label={category.categoryName}> {category.childCategories.map(c => <option key={c._id} value={c._id}>{c.categoryName}</option>)}</optgroup>)} */}
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