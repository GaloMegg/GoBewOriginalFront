import React, { useEffect, useState } from "react"
import jwt_decode from "jwt-decode"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { CREATION_USER_LOGIN } from "../../redux/actions"

export default function LogInGoogle() {
    const [user, setuser] = useState({})
    const dispatch = useDispatch()

    function handleCalBackResponse(response) {
        const userObject = jwt_decode(response.credential)
        setuser(userObject);
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

    useEffect(() => {
        /* global google */
        if (window.google) {
            google.accounts.id.initialize({
                client_id: "730053348546-b9gt1dk3ja161r1ndcjrc2v8gkfoalfi.apps.googleusercontent.com",
                callback: handleCalBackResponse
            })
            google.accounts.id.renderButton(
                document.getElementById("signInDiv"),
                { theme: "outline", size: "large" }
                )
            }
            }, []);
            
    return (
        <div className="googleForm">
            <div id="signInDiv" className="googleForm--signIn"></div>
            {user.email_verified === true && <div className="googleFormSuccess__container">
                <h3 className="googleFormSuccess"> Has iniciado sesión con exito </h3>
                <Link to="/" className="googleFormSuccess--link" ><button onClick={(e) => handleClick(e)} className="googleFormSuccess--btn" >Continuar</button></Link>
            </div>}
        </div>
    )
}