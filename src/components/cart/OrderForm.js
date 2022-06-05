import React from 'react'

const OrderForm = ({ handleChangesDirection, OnsubmitHandler }) => {


    return (
        <form action="" onSubmit={OnsubmitHandler}>
            <textarea name="" id="" cols="30" rows="10" onBlur={handleChangesDirection}></textarea>
            <button type="submit"> Agregar Direccion</button>
        </form>
    )
}

export default OrderForm


//id de order satado 1 y shipping addres