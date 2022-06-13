
import react, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SEARCH_BY_ID, SEARCH_DIRECTION_BY_ID } from "../../redux/actions";


export default function UserProfile() {
    const { userId, userAllInfo } = useSelector(store => store.clientReducer);
    console.log(userAllInfo)
    const dispatch = useDispatch();
    useEffect(() => {
        if (userId) {
            dispatch(SEARCH_BY_ID(userId))
            dispatch(SEARCH_DIRECTION_BY_ID(userId))
        }
    }, []);
    return (
        <div>
            <div>
                <h3>Nombre : {userAllInfo.userFirstName} </h3>
                <h3>Apellido : {userAllInfo.userLastName}</h3>
                {userAllInfo.direction ? userAllInfo.direction.addresses.map((element,index) => 
                    <div key={element._id}><h3>Dirección {index + 1}: </h3>
                        <h4>Calle: {`${element.addressStreet} ${element.addressNumber}`}</h4>
                        <h4> Provincia: {element.addressProvince}</h4>
                        <h4>Codigo postal: {element.addressZipCode}</h4>
                        <h4>Departamento: {element.addressFlat}</h4>
                        <h4>Piso: {element.addressFloor}</h4>

                        <h4>Comentario: {element.addressComment}</h4>
                    </div>
                ): <div> Hola </div>}
            </div>
        </div>
    )
}