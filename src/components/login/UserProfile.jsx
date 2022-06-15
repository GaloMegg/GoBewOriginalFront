
import react, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { CHECK_LOGIN, GET_WISHES, SEARCH_BY_ID, SEARCH_DIRECTION_BY_ID } from "../../redux/actions";


export default function UserProfile() {
    const { userId, userAllInfo } = useSelector(store => store.clientReducer);
    console.log(userAllInfo)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CHECK_LOGIN())
        if (userId) {
            dispatch(GET_WISHES(userId))

        }

    }, []);
    useEffect(() => {
        if (userId) {
            dispatch(SEARCH_BY_ID(userId))
            dispatch(SEARCH_DIRECTION_BY_ID(userId))
        }
    }, [userId]);
    return (
        <div className="profileContainer">
            {userAllInfo?.userFirstName ?
                <div className="profileContainer--profile">
                    <h3>Nombre : {userAllInfo.userFirstName} </h3>
                    <h3>Apellido : {userAllInfo.userLastName}</h3>
                    <Link to="/orders/all">Tus Ordenes</Link>
                    {userAllInfo?.direction?.addresses?.length ? userAllInfo.direction.addresses.map((element, index) =>
                        <div className="profileContainer" key={element._id}><h3> Dirección N°{index + 1}: </h3>
                            <h4>Calle: {`${element.addressStreet} ${element.addressNumber}`}</h4>
                            <h4> Provincia: {element.addressProvince ? element.addressProvince : "-"}</h4>
                            <h4>Codigo postal: {element.addressZipCode ? element.addressZipCode : "-"}</h4>
                            <h4>Departamento: {element.addressFlat ? element.addressFlat : "-"}</h4>
                            <h4>Piso: {element.addressFloor ? element.addressFloor : "-"}</h4>
                            <h4>Comentario: {element.addressComment ? element.addressComment : "-"}</h4>
                        </div>
                    ) : <div> Sin dirrección </div>}
                </div>
                : <h3>Loading...</h3>}
        </div>
    )
}