import { ok } from "assert";
import react ,{useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { SEARCH_BY_ID, SEARCH_DIRECTION_BY_ID } from "../../redux/actions";


export default function UserProfile() {
    const {userId, userAllInfo} = useSelector(store=> store.clientReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        if (userId){
            dispatch(SEARCH_BY_ID(userId))
            dispatch(SEARCH_DIRECTION_BY_ID(userId))
        } 
    },[]);
    return(
        <div>
            <div>
                <h3>Nombre : {userAllInfo.userFirstName} </h3> 
                <h3>Apellido : {userAllInfo.userLastName}</h3>
                {userAllInfo.direction && <h3>Dirección : {userAllInfo.direction.addresses[0].addressCity} </h3>}
            </div>
        </div>
    )
}