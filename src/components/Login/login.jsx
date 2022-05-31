import React, { useState } from 'react';  
import { useSelector, useDispatch } from 'react-redux';
import validate from './validate.js';
import { POST_USER, CLEAN_USER_RESPONSE } from '../../redux/actions';
import { Navigate } from 'react-router-dom';


const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({});
    const [charging, setCharging] = useState(false);
    const [redirect, setRedirect] = useState(false);
    let   [btnCharging, setBtnCharging] = useState(false);
    const dispatch = useDispatch()
    const userResponse = useSelector(store => store.clientReducer.userResponse)

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
            setCharging(true);
            console.log(userResponse)
            dispatch(POST_USER(user))
            console.log(user)
            setUser({
                email: '',
                password: ''
            })
        }
    }

    if(userResponse===''){
        var chargingResponse = <p>Cargando...</p>
    }else if (userResponse==='Usuario no encontrado'){
        chargingResponse = <p>Usuario no encontrado, verifique que el correo y la contraseña sean correctas</p>
        btnCharging=true
    }else if (userResponse==='Usuario encontrado'){
        setRedirect(true)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Hola! ingresa tus datos</h1>
            <label>E-mail</label>
            <input type="text" name='email' value={user.email} onChange={handleInput}/>
            <label>Contraseña</label>
            <input type="password" name='password' value={user.password} onChange={handleInput}/>
            {Boolean(Object.values(errors).length) && (<p>{Object.values(errors)[0]}</p>)}
            {charging && chargingResponse}
            {btnCharging && <button onClick={()=>{setCharging(false);setBtnCharging(false);dispatch(CLEAN_USER_RESPONSE())}}>Ok</button>}
            {redirect && <Navigate to="/"/>}
            <button type='submit'>Ingresar</button>
            <button >Crear cuenta</button>
        </form>
    )
}

export default Login