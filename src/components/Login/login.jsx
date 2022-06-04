import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import validate from './validate.js';
import { POST_USER, CLEAN_USER_RESPONSE } from '../../redux/actions';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()
    const { userResponse } = useSelector(store => store.clientReducer)
    const Navi = useNavigate();
    const [user, setUser] = useState({
        userEmail: '',
        userPassword: ''
    })
    const [errors, setErrors] = useState({});
    const [charging, setCharging] = useState(false);
    let [btnCharging, setBtnCharging] = useState(false);
    const dispatch = useDispatch()

    const handleInput = async (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

        let objError = validate({
            ...user,
            [e.target.name]: e.target.value
        });
        setErrors(objError);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!Object.values(user).includes('') && Object.keys(errors).length === 0) {
            setCharging(true);
            dispatch(POST_USER(user))
            setUser({
                email: '',
                password: ''
            })
            navigate("/")
        }
    }

    if (userResponse.ok === '') {
        var chargingResponse = <p>Cargando...</p>
    } else if (userResponse.ok === false) {
        chargingResponse = <p>Usuario no encontrado, verifique que el correo y la contraseña sean correctas</p>
        btnCharging = true
    } else if (userResponse.ok === true) {

    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Hola! ingresa tus datos</h1>
            <label>E-mail</label>
            <input type="text" name='userEmail' value={user.userEmail} onChange={handleInput} />
            <label>Contraseña</label>
            <input type="password" name='userPassword' value={user.userPassword} onChange={handleInput} />
            {Boolean(Object.values(errors).length) && (<p>{Object.values(errors)[0]}</p>)}
            {charging && chargingResponse}
            {btnCharging && <button onClick={() => { setCharging(false); setBtnCharging(false); dispatch(CLEAN_USER_RESPONSE()) }}>Ok</button>}
            <button type='submit'>Ingresar</button>
            <Link to ="/logInForm"> <button >Crear cuenta</button> </Link>
            {/* {redirect && <Navigate to="/" />} */}
        </form>
    )
}

export default Login