import React from 'react'

const OrderAddress = ({ addressStreet, addressNumber, addressFloor, addressCity, addressFlat, addressProvince, addressZipCode }) => {
    // {
    //     "userId": "629a69731d7fbe26fa74d269",
    //     "addressStreet": "av cordoba",
    //     "addressNumber": 2020202,
    //     "addressFloor": "202020",
    //     "addressFlat": "2020202",
    //     "addressCity": "Gualeguaychú",
    //     "addressZipCode": "0",
    //     "addressProvince": "Entre ríos",
    //     "addressComment": "av cordoba",
    //     "addressIsShipping": true,
    //     "addressIsBilling": true,
    //     "_id": "62a28901d383f9577471e9f5",
    //     "__v": 0
    // }
    return (
        <div >
            <p>Provincia: {addressProvince}</p>
            <p>Ciudad: {addressCity}</p>
            <p>Dirección: {addressStreet} {addressNumber}</p>
            <p>Piso: {addressFloor}</p>
            <p>Departamento: {addressFlat}</p>
            <p>Código Postal: {addressZipCode}</p>
        </div >
    )
}

export default OrderAddress