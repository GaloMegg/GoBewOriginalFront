import React from 'react'
<<<<<<< HEAD
=======

>>>>>>> 0c42233efd8e8caa21e2dafa61c184e605800277
import { Link } from 'react-router-dom'
const OrderDetail = ({ orderState, orderTotal, user, addressComment, addressStreet, addressNumber, addressCity, orderId, cart, addressProvince, addressFloor, addressZipCode, addressFlat, reviews, userId }) => {
    const orderPosibleStates = {
        0: "Carrito",
        2: "Aceptada",
        3: "Enviada",
        4: "Recibida",
        5: "Rechazada",
        6: "Cancelada",
        7: "Pendiente de aprobación",
    }
<<<<<<< HEAD

=======
>>>>>>> 0c42233efd8e8caa21e2dafa61c184e605800277
    return (
        <>
            <div>
                <h2>Direccion de Envío y detalles</h2>
                {user && <p>Usuario: {user[0]?.userFirstName}, {user[0]?.userEmail}</p>}
                {addressStreet &&
                    <div>
                        <p>Direccion:</p>
                        <p>Calle: {addressStreet}, {addressNumber}.</p>
                        <p>Departamento: {addressFlat}, Piso: {addressFloor}.</p>
                        <p>Provincia: {addressProvince}.</p>
                        <p>Ciudad: {addressCity}, {addressZipCode}.</p>
<<<<<<< HEAD
                        <p>Descripción: {addressComment}.</p>
=======

                        <p>Descripción: {addressComment}.</p>

>>>>>>> 0c42233efd8e8caa21e2dafa61c184e605800277
                    </div>}
            </div>

            <div>
                <h2>Detalle de compra</h2>
                <p>Total: {orderTotal}</p>
<<<<<<< HEAD
                {cart && <p>Carrito: {cart.map(item => {
                    let exist = reviews.find(e => e.productId == item.productId)
                    return <div>
                        {item.productName} - {item.productCant}
                        {(orderState == 4 && !exist) && <Link to={`/review/${orderId}/${item.productId}/${userId}`} disabled={exist}>Deja tu review</Link>}
                    </div>
                })}</p>
                }
=======

                {cart && <p>Carrito: {cart.map(item => {
                    let exist = reviews.find(e => e.productId == item._id)
                    console.log(item._id);
                    return <div>
                        {item.productName} - {item.productCant}
                        {(orderState == 4 && !exist) && <Link to={`/review/${orderId}/${item._id}/${userId}`} disabled={exist}>Deja tu review</Link>}
                    </div>
                })}</p>
                }

>>>>>>> 0c42233efd8e8caa21e2dafa61c184e605800277
                <p>Estado: {orderPosibleStates[orderState]}</p>
            </div>

        </>
    )
}

export default OrderDetail