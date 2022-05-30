import { eventWrapper } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_CATEGORY, CREATE_PRODUCT, GET_CATEGORIES_ADMIN } from "../../redux/actions";
import validateForm from "./validateForm";

export default function CreationForm() {

    let dispatch = useDispatch();
    const categories = useSelector((state) => state.adminReducer.categories)

    const [input, setInput] = useState({
        productName: '',
        productIsActive: true,
        productDescription: '',
        productPrice: '',
        productStock: '',
        productHighlight: false,
        productCategories: [],
        productImage: ''
    })

    const [newCateg, setNewCateg] = useState({
        categoryName: '',
        categoryActive: true,
        categorySupId: ''
    });
    const [error, setError] = useState('');

    const [img, setImg] = useState("");
    const uploadImage = (files) => {
        const formData = new FormData()
        formData.append("file", img)
        formData.append("upload_preset", "eh329sqm")
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
            setError(validateForm(newState))
            return newState;
        })
    }

    function handleSelect(event) {
        if (input.productCategories.length < 5 && input.productCategories.indexOf(event.target.value) === -1) {
            setInput({
                ...input,
                productCategories: [...input.productCategories, event.target.value]
            })
        }
    }

    function handleSelectCategory(event) {
        console.log(event.target.value)
        setNewCateg({
            ...newCateg,
            categorySupId: event.target.value
        })
    }

    function handleDeleteBtn(e) {
        let res = input.productCategories.filter(categ => categ !== e.target.name)
        setInput({
            ...input,
            productCategories: res
        })
    }

    function handleChangeCategory(event) {
        setNewCateg((prevState) => {
            const newState = {
                ...prevState,
                [event.target.name]: event.target.value
            };
            setError(validateForm(newState))
            return newState;
        })
    }

    function handleCreateCategory(event) {
        event.preventDefault()
        if (newCateg.categoryName.length === 0) {
            setError(1);
            alert('Error: Ingresa el nombre de la categoria')
        } else if (Object.keys(error).length === 0) {
            dispatch(CREATE_CATEGORY(newCateg))
            alert('Categoria creada')
        }
        setNewCateg({
            categoryNew: '',
            categoryActive: true,
            categorySupId: ''
        })
    }

    function handleImage(event) {
        if (event.target.value) {
            setImg(event.target.value)
        }
    }

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
            productCategories: [],
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
                        <ul key={categ._id}><li>{categ.categoryName}</li></ul>
                        <select onChange={(e) => handleSelect(e)}>
                            <option value="">Selecciona categoria</option>
                            {categ.childCategories?.map((child) => {
                                return <Fragment key={child._id}>
                                    <option key={child._id} value={child._id} >{child.categoryName}</option>
                                </Fragment>
                            })}
                        </select>
                    </Fragment>
                ))}
            </div>
            <div>
                <ul key={input.productCategories[0]}>
                    <li key={input.productCategories[0]}>{input.productCategories?.map(el => <span key={el}>{el} <button name={el} onClick={(e) => handleDeleteBtn(e)}>X</button></span>)}</li>
                </ul>
            </div>
            <div>
                <label>Activo: </label>
                <input type="radio" onClick={(e) => handleChange(e)} value={true} name='productIsActive' /> Si
                <input type="radio" onClick={(e) => handleChange(e)} value={false} name='productIsActive' /> No
                <span>{error.productIsActive}</span>
            </div>
            <div>
                <label>Destacado: </label>
                <input type="radio" onClick={(e) => handleChange(e)} value={true} name='productHighlight' /> Si
                <input type="radio" onClick={(e) => handleChange(e)} value={false} name='productHighlight' /> No
                <span>{error.productHighlight}</span>
            </div>
            <div>
                <button type="submit">Crear producto</button>
            </div>
        </form>
        <form onSubmit={(e) => handleCreateCategory(e)}>
            <div>
                <label> Crear categoria: </label>
                <input type="text" placeholder="Categoria..." onChange={(e) => handleChangeCategory(e)} value={newCateg.categoryName} name='categoryName' />
                <span>{error.newProductCategory || ''}</span>
            </div>
            <div>
                <label>Categoria padre: </label>
                <select onChange={(e) => handleSelectCategory(e)}>
                    {categories?.map((categ) => {
                        return <option key={categ._id} value={categ._id}>{categ.categoryName}</option>
                    })}
                </select>
            </div>
            <div>
                <label>Activo: </label>
                <input type="radio" onClick={(e) => handleChangeCategory(e)} value={true} name='categoryActive' /> Si
                <input type="radio" onClick={(e) => handleChangeCategory(e)} value={false} name='categoryActive' /> No
                <span>{error.productIsActive}</span>
            </div>
            <div>
                <button type="submit">Crear</button>
            </div>
        </form>
    </div>

}