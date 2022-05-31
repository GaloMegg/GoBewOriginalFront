import React, { useState, useEffect } from 'react';  
// import { useSelector, useDispatch } from 'react-redux';
import validate from './validate.js';


const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({});

    const handleInput = async (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

        let objError= validate({
        ...user,
        [e.target.name]: e.target.value
        });
        setErrors(objError);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!Object.values(user).includes('') && Object.keys(errors).length===0){
            console.log(user)
            setUser({
                email: '',
                password: ''
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Hola! ingresa tus datos</h1>
            <label>E-mail</label>
            <input type="text" name='email' value={user.email} onChange={handleInput}/>
            <label>Contraseña</label>
            <input type="password" name='password' value={user.password} onChange={handleInput}/>
            {Boolean(Object.values(errors).length) && (<p>{Object.values(errors)[0]}</p>)}
            <button type='submit'>Ingresar</button>
            <button >Crear cuenta</button>
        </form>
    )
}

export default Login