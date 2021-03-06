
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { CHECK_LOGIN, GET_WISHES, SEARCH_BY_ID, SEARCH_DIRECTION_BY_ID } from "../../redux/actions";

export default function UserProfile() {
    const { userId, userAllInfo, userDirection } = useSelector(store => store.clientReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CHECK_LOGIN())
        if (userId) {
            dispatch(GET_WISHES(userId))
        }
    }, [dispatch, userId]);
    useEffect(() => {
        if (userId) {
            dispatch(SEARCH_BY_ID(userId))
            dispatch(SEARCH_DIRECTION_BY_ID(userId))
        }
    }, [userId, dispatch]);
    return (<>
        <Link to="/orders/all" className="ordersAll"> Ver todas mis Compras </Link>
        <div className="userProfile__container">
            {userAllInfo?.userFirstName ?
                <div className="userProfile__flex">
                    <div className="userProfile__profile">
                        <h3><span>Nombre : </span>{userAllInfo.userFirstName} </h3>
                        <h3><span> Apellido :</span> {userAllInfo.userLastName}</h3>
                    </div>
                    <div className="userProfile__address">
                        {userDirection?.addresses?.length ? userDirection.addresses.map((element, index) =>
                            <div key={element._id}>
                                <h3>Dirección N°{index + 1}: </h3>
                                <h4>Calle: {`${element.addressStreet} ${element.addressNumber}`}</h4>
                                <h4>Provincia: {element.addressProvince ? element.addressProvince : "-"}</h4>
                                <h4>Codigo postal: {element.addressZipCode ? element.addressZipCode : "-"}</h4>
                                <h4>Departamento: {element.addressFlat ? element.addressFlat : "-"}</h4>
                                <h4>Piso: {element.addressFloor ? element.addressFloor : "-"}</h4>
                                <h4>Comentario: {element.addressComment ? element.addressComment : "-"}</h4>
                                <Link to={`/profile/editDirec/${element._id}`}>
                                    Editar dirrección
                                </Link>
                            </div>
                        ) : <div> Sin dirrección </div>
                        }
                    </div>
                </div>
                : <h3>Loading...</h3>}
        </div>
    </>
    )
}