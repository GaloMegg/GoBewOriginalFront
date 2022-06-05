<<<<<<< HEAD
import React, {useEffect, useState} from "react"
import jwt_decode from "jwt-decode"
import { Link, useNavigate } from "react-router-dom"
import {useDispatch} from "react-redux"
import { CREATION_USER_LOGIN } from "../../redux/actions"

export default function LogInGoogle(){
    const [user,setuser] = useState({})
    const dispatch = useDispatch()

    function handleCalBackResponse(response){
        console.log("Encoded JWT ID Token: "+response.credential)
=======
import React, { useEffect, useState } from "react"
import jwt_decode from "jwt-decode"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { CREATION_USER_LOGIN } from "../../redux/actions"

export default function LogInGoogle() {
    const [user, setuser] = useState({})
    const dispatch = useDispatch()

    function handleCalBackResponse(response) {
        console.log("Encoded JWT ID Token: " + response.credential)
>>>>>>> 95987f389fddb4975a2b987bb88198d63a65c19f
        const userObject = jwt_decode(response.credential)
        console.log(userObject)
        setuser(userObject);
        console.log(user)
        // if (user.email_verified === true) {
        //     alert("Has iniciado sesion con exito")
        //     landing("/");
        // }
    }
    function handleClick(e) {
<<<<<<< HEAD
    const info = {
        userEmail: user.email,
        userIsActive: user.email_verified,
        userIsGoogle: true,
        userFirstName: user.given_name,
        userLastName: user.family_name,
        userImage: user.picture,
    }
    dispatch(CREATION_USER_LOGIN(info));
    }

    useEffect(()=>{
=======
        const info = {
            userEmail: user.email,
            userIsActive: user.email_verified,
            userIsGoogle: true,
            userFirstName: user.given_name,
            userLastName: user.family_name,
            userImage: user.picture,
        }
        dispatch(CREATION_USER_LOGIN(info));
    }

    useEffect(() => {
>>>>>>> 95987f389fddb4975a2b987bb88198d63a65c19f
        /* global google */
        google.accounts.id.initialize({
            client_id: "730053348546-b9gt1dk3ja161r1ndcjrc2v8gkfoalfi.apps.googleusercontent.com",
            callback: handleCalBackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
<<<<<<< HEAD
            {theme: "outline", size: "large"}
        )
},[]);

    return(
        <div>
            <div id="signInDiv"></div>
        {user.email_verified === true  && <div>
            <h3> Has iniciado sesión con exito </h3>
            <Link to= "/"><button onClick={(e) => handleClick(e)}> Continuar</button></Link> 
=======
            { theme: "outline", size: "large" }
        )
    }, []);

    return (
        <div className="googleForm">
            <div id="signInDiv" className="googleForm--signIn"></div>
            {user.email_verified === true && <div className="googleFormSuccess__container">
                <h3 className="googleFormSuccess"> Has iniciado sesión con exito </h3>
                <Link to="/" className="googleFormSuccess--link" ><button onClick={(e) => handleClick(e)} className="googleFormSuccess--btn" >Continuar</button></Link>
>>>>>>> 95987f389fddb4975a2b987bb88198d63a65c19f
            </div>}
        </div>
    )
}