import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import validate from './validate.js';
import { POST_USER, CLEAN_USER_RESPONSE, CHECK_LOGIN } from '../../redux/actions';
import { Link, useNavigate } from 'react-router-dom';
import LogInGoogle from './LogInGoogle.jsx';


const Login = () => {
    const navigate = useNavigate()
    const { userResponse } = useSelector(store => store.clientReducer)
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
    useEffect(() => {
        dispatch(CHECK_LOGIN())

    }, [])


    return (
        <form onSubmit={handleSubmit} className="loginForm">
            <div className="loginForm--container">
                <h1 className="loginForm__greatings">Hola! ingresa tus datos</h1>

                <input type="text" name='userEmail' value={user.userEmail} placeholder="Email" onChange={handleInput} className="loginForm__email" />
                <input type="password" name='userPassword' value={user.userPassword} placeholder="Contraseña" onChange={handleInput} className="loginForm__password" />

                {Object.values(errors).length > 0 && <p className="loginForm__errors">{Object.values(errors)[0]}</p>}
                {btnCharging && <button onClick={() => { setCharging(false); setBtnCharging(false); dispatch(CLEAN_USER_RESPONSE()) }}
                >Ok</button>}
                <div className='loginForm__login--btn-container'>
                    <button type='submit' className="loginForm__login--btn">Ingresar</button>
                    <Link to="/logInForm" className="loginForm__singup--link"> <button className="loginForm__singup--btn" >Crear cuenta</button> </Link>
                </div>
                {/* {redirect && <Navigate to="/" />} */}
                <LogInGoogle />
            </div>
        </form >
    )
}

export default Login