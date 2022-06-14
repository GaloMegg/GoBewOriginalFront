import react, {useState} from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { LOG_OUT } from "../../redux/actions";

export default function LogOut({user, User}) {
    const dispatch = useDispatch();
    const [clickUser, setClickUser] = useState(false)
    const handleClick= () => {
        setClickUser(!clickUser)
    }
    const handleLogOut = () => {
        dispatch(LOG_OUT())
    }
    return (
        <div className="nav__loginCart--login" onClick={(e)=>handleClick()}>
                    <img className='nav__loginCart--login-img' src={User} alt='img not found' />
                    <p className='nav__loginCart--login-text'>{user}</p>
                    {clickUser && <div onClick={(e)=> handleLogOut()}> Cerrar sesión </div>}
                    {clickUser && <Link to = "/profile">Perfil</Link>}
        </div>
    )
}