import React from 'react'

const OrderDetail = ({ orderState, orderTotal, user, addressComment, addressStreet, addressNumber, addressCity, cart, addressProvince, addressFloor, addressZipCode, addressFlat }) => {
    // {
    //     "orderId": "62a577b22aa7efa86b08e57f",
    //     "_id": "62a36b7930174013668f5fbe",
    //     "orderState": 2,
    //     "orderTotal": 132529,
    //     "userId": "629a69731d7fbe26fa74d269",
    //     "shippingAddressId": "62a36b7930174013668f5fbe",
    //     "orderCreationDate": null,
    //     "orderAceptDate": "2022-12-06T03:00:00.000Z",
    //     "orderDeliverDate": null,
    //     "orderCancelDate": null,
    //     "orderRejectDate": null,
    //     "orderPendingDate": null,
    //     "orderDeliverPrice": null,
    //     "payment_id": "1260802830",
    //     "payment_type": "credit_card",
    //     "cart": [
    //       {
    //         "_id": "62a577b22aa7efa86b08e581",
    //         "productId": "6290d9446655f25f6df9a9fa",
    //         "productName": "Combo Samsung Galaxy A22 Awesome White + Auriculares Samsung Galaxy Buds Pro",
    //         "productStock": 14,
    //         "productCant": 1,
    //         "productPrice": 132529
    //       }
    //     ],
    //     "user": [
    //       {
    //         "_id": "629a69731d7fbe26fa74d269",
    //         "userEmail": "galomeggiolarobul@gmail.com",
    //         "userPassword": "$2a$10$yyDea25ScpQDifKJqSWDhOSAYe5h7pTLnBSis8MeDh/TzJBCZNkWq",
    //         "userIsActive": true,
    //         "userIsAdmin": true,
    //         "userIsGoogle": false,
    //         "userFirstName": "Galo",
    //         "userLastName": "Meggiolaro",
    //         "userIsSuperAdmin": true,
    //         "hash": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2FsbyIsImlhdCI6MTY1NDI4NjcwNywiZXhwIjoxNjU0MjkzOTA3fQ.zdzSGB07Op3YC796-RHqfeoBFV5Rlia0IDAHGuEKd1I",
    //         "userImage": "",
    //         "userCreationDate": "2022-06-03T20:05:07.641Z",
    //         "__v": 0
    //       }
    //     ],
    //     "addressStreet": "av cordoba",
    //     "addressNumber": 222,
    //     "addressFloor": "2",
    //     "addressFlat": "2",
    //     "addressCity": "CABA",
    //     "addressZipCode": "1111",
    //     "addressProvince": "buenos airess",
    //     "addressComment": "av cordoba",
    //     "addressIsShipping": true,
    //     "addressIsBilling": true,
    //     "__v": 0
    //   }
    const orderPosibleStates = {
        0: "Carrito",
        2: "Aceptada",
        3: "Enviada",
        4: "Recibida",
        5: "Rechazada",
        6: "Cancelada",
        7: "Pendiente de aprobación",
    }

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
                        <p>Descripción: {addressComment}.</p>
                    </div>}
            </div>

            <div>
                <h2>Detalle de compra</h2>
                <p>Total: {orderTotal}</p>
                {cart && <p>Carrito: {cart.map(item => `${item.productName} - ${item.productCant}`)}</p>}
                <p>Estado: {orderPosibleStates[orderState]}</p>
            </div>

        </>
    )
}

export default OrderDetail