import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import validate from './validate.js';
import { POST_USER, CLEAN_USER_RESPONSE, CHECK_LOGIN } from '../../redux/actions';
import { Link, useNavigate } from 'react-router-dom';
import LogInGoogle from './LogInGoogle.jsx';


const Login = () => {
    const navigate = useNavigate()
    const { userResponse, cart } = useSelector(store => store.clientReducer)
    const [user, setUser] = useState({
        userEmail: '',
        userPassword: ''
    })
    const [errors, setErrors] = useState({});
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
            dispatch(POST_USER(user))
            setUser({
                userEmail: '',
                userPassword: ''
            })

        }

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
                <div>
                    {userResponse.ok === false && <p> Usuario o contraseña invalido</p>}
                    {userResponse.ok === true && <div >
                        <h3 > Has iniciado sesión con exito </h3>
                        <Link to="/" ><button> Continuar</button></Link>
                    </div>}
                </div>
                <div className='loginForm__login--btn-container'>
                    <button type='submit' className="loginForm__login--btn">Ingresar</button>
                    <Link to="/logInForm" className="loginForm__singup--link"> <button className="loginForm__singup--btn" >Crear cuenta</button> </Link>
                </div>
                <LogInGoogle />
            </div>
        </form >
    )
}

export default Login