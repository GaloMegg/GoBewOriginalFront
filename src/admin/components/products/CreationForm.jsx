import axios from "axios";
import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_PRODUCT, GET_CATEGORIES, GET_CATEGORIES_ADMIN } from "../../redux/actions";


export default function CreationForm() {

    let dispatch = useDispatch();
    const categories = useSelector((state) => state.adminReducer.categories)

    console.log(categories)
    const [input, setInput] = useState({
        productName: '',
        productIsActive: '',
        productDescription: '',
        productPrice: '',
        productStock: '',
        productHighlight: '',
        productCategory: [],
        productImage: ''
    })

    const [error, setError] = useState('');
    const [isChecked, setIsCheaked] = useState(false);

    const [img, setImg] = useState("");
    const uploadImage = (files) => {
        const formData = new FormData()
        formData.append("file", img)
        formData.append("upload_preset", "eh329sqm")
        console.log(formData)
        axios.post("https://api.cloudinary.com/v1_1/gobew10/image/upload", formData)
        .then((res) => {
            setImg(formData)
        })
    }

    function handleChange(event) {
        setInput((prevState) => {
            const newState = {
                ...prevState,
                [event.target.name]: event.target.value
            };
            setError('')
            return newState;
        })
    }

    function handleSelect(event) {
        if (input.productCategory.indexOf(event.target.value) === -1) {
            setInput({
                ...input,
                productCategory: [...input.productCategory, event.target.value]
            })
        }
    }

    function handleImage(event) {
        if(event.target.value) {
            setImg(event.target.value)
        }
    }

    // function handleCheckbox() {
    //     setIsCheaked(!isChecked)
    // }

    function handleSubmit(event) {
        event.preventDefault();
        if (input.productName.length === 0) {
            setError(1)
            alert('Error: Ingresa los datos')
        } else if (Object.keys(error).length === 0) {
            dispatch(CREATE_PRODUCT(input));
            alert('Producto creado');
        } else {
            alert('Error: Corregi los errores')
        }
        setInput({
            productName: '',
            productIsActive: '',
            productDescription: '',
            productPrice: '',
            productStock: '',
            productHighlight: '',
            productCategory: [],
            productImage: ''
        })
    }

    useEffect(() => {
        dispatch(GET_CATEGORIES_ADMIN());
    }, [dispatch])

    return <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label>Nombre: </label>
                <input type="text" placeholder="Nombre..." onChange={(e) => handleChange(e)} value={input.productName} name='productName' />
                <span>{error.productName}</span>
            </div>
            <div>
                <label>Descripcion: </label>
                <input type="text" placeholder="Descripcion..." onChange={(e) => handleChange(e)} value={input.productDescription} name='productDescription' />
                <span>{error.productDescription}</span>
            </div>
            <div>
                <label>Precio: </label>
                <input type="text" placeholder="Price..." onChange={(e) => handleChange(e)} value={input.productPrice} name='productPrice' />
                <span>{error.productPrice}</span>
            </div>
            <div>
                <label>Stock: </label>
                <input type="text" placeholder="Stock..." onChange={(e) => handleChange(e)} value={input.productStock} name='productStock' />
                <span>{error.productStock}</span>
            </div>
            <div>
                <label>Categoria: </label>
                {categories?.map((categ) => (
                    <Fragment key={categ._id}>
                        <br />
                        <span key={categ._id}>{categ.categoryName}</span>
                        <br />
                        {categ.childCategories?.map((child) => {
                            return <Fragment key={child._id}>
                                <input type="checkbox" value={child._id} onClick={(e) => handleSelect(e)} />
                                <label>{child.categoryName}&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            </Fragment>
                        })}
                    </Fragment>
                ))}
            </div>
            <div>
                <label> Crear categoria: </label>
                <input type="text" placeholder="Categoria..." onChange={(e) => handleChange(e)} value={input.productCategory} name='productCategory' />
                <span>{error.productCategory}</span>
            </div>
            <div>
                <label>Imagen: </label>
                <input type="file" placeholder="Nombre..." onChange={(e) => {
                    setImg(e.target.files[0]);
                }} />
                <button onClick={uploadImage}> Subir Imagen Prueba</button>
                <span>{error.productImage}</span>
            </div>
            <div>
                <label>Activo: </label>
                <input type="radio" onChange={(e) => handleChange(e)} value={true} name='productIsActive' /> Si
                <input type="radio" onChange={(e) => handleChange(e)} value={false} name='productIsActive' /> No
                <span>{error.productIsActive}</span>
            </div>
            <div>
                <label>Destacado: </label>
                <input type="radio" onChange={(e) => handleChange(e)} value={true} name='productHighlight' /> Si
                <input type="radio" onChange={(e) => handleChange(e)} value={false} name='productHighlight' /> No
                <span>{error.productHighlight}</span>
            </div>
            <div>
                <button type="submit">Crear producto</button>
            </div>
        </form>
    </div>

}