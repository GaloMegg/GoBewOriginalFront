import React from 'react'
import { Link } from 'react-router-dom'
const AllOrders = ({ orders }) => {
    const orderPosibleStates = {
        0: 'Carrito de compras',
        1: "Pendiente",
        2: "Pagada",
        3: "Enviada",
        4: "Rechazada",
        5: "Rechazada",
    }
    let ordered = orders.sort(function (a, b) {
        return new Date(b.orderCreationDate) - new Date(a.orderCreationDate);
    });
    return (ordered.map((order, i) => {
        let dateCreation = new Date(order.orderCreationDate)
        let dateAcept = new Date(order.orderAceptDate)
        return <>
            <Link to={`/order/${order._id}`} className='allOrders__order' key={i}>
                <h4>
                    <span>
                        Fecha:
                    </span>
                    {" " + dateCreation.toLocaleDateString("es-ES")}
                </h4>
                <p>Total: ${order?.orderTotal.toLocaleString('de-DE')}</p>
                {order?.orderAceptDate ? <p> Aceptada el dia: {dateAcept.toLocaleDateString("es-ES")}</p> : <p> Estado: {orderPosibleStates[order.orderState]}</p>}
                {order?.orderproducts?.map(p => {
                    return p.products.map(product => {
                        return <p key={product._id}>{product.productName} x{p.productCant} ${p.productPrice}</p>
                    })
                })}
            </Link>
        </>
    }))
}
export default AllOrders