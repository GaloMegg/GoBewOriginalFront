import React, {useEffect} from "react"
import jwt_decode from "jwt-decode"
export default function LogInGoogle(){

    function handleCalBackResponse(response){
        console.log("Encoded JWT ID Token: "+response.credential)
        const userObject = jwt_decode(response.credential)
        console.log(userObject)
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
        </div>
    )
}