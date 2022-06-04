import React, {useEffect, useState} from "react"
import jwt_decode from "jwt-decode"
import { Link, useNavigate } from "react-router-dom"
import {useDispatch} from "react-redux"
import { CREATION_USER_LOGIN } from "../../redux/actions"

export default function LogInGoogle(){
    const [user,setuser] = useState({})
    const [input,setinput] = useState({
        userEmail:"",
        userIsActive:"",
        userIsGoogle:"",
        userFirstName:"",
        userLastName:"",
        userImage:"",
    })
    const dispatch = useDispatch()

    function handleCalBackResponse(response){
        console.log("Encoded JWT ID Token: "+response.credential)
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
        /* global google */
        google.accounts.id.initialize({
            client_id: "730053348546-b9gt1dk3ja161r1ndcjrc2v8gkfoalfi.apps.googleusercontent.com",
            callback: handleCalBackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size: "large"}
        )
},[]);

    return(
        <div>
            <div id="signInDiv"></div>
        {user.email_verified === true  && <div>
            <h3> Has iniciado sesión con exitó </h3>
            <button onClick={(e) => handleClick(e)} Link to="/"> Continuar</button>
             </div>}
        </div>
    )
}