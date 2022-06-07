import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import axios from 'axios';
const { REACT_APP_APIURL } = process.env

export const GET_PRODUCTS = createAsyncThunk(
    'GET_PRODUCTS', async () => {
        const response = await fetch(`${REACT_APP_APIURL}product`)
        return await response.json()
    }
)
export const GET_PRODUCT_BY_ID = createAsyncThunk(
    'GET_PRODUCT_BY_ID', async (id) => {
        const response = await fetch(`${REACT_APP_APIURL}product/${id}`)
        return await response.json()
    }
)
export const SEARCH_PRODUCT = createAsyncThunk(
    'SEARCH_PRODUCT', async (productName) => {
        const response = await fetch(`${REACT_APP_APIURL}product/name/${productName}`)
        return await response.json()
    }
)
export const GET_CATEGORIES = createAsyncThunk(
    'GET_CATEGORIES', async () => {
        const response = await fetch(`${REACT_APP_APIURL}categories`)
        return await response.json()
    })
export const GET_HIGHLIGHTED = createAsyncThunk(
    'GET_HIGHLIGHTED', async () => {
        const response = await fetch(`${REACT_APP_APIURL}product/highlight`)
        return await response.json()
    })
export const GET_PRODUCTS_BYCATEGORY = createAction(
    'GET_PRODUCTS_BYCATEGORY', (products) => {
        return {
            payload: products
        }
    }
)
export const ORDER_PRODUCTS = createAction('ORDER_PRODUCTS', (productsSorted) => {
    return {
        payload: productsSorted
    }
})
export const CLEAN_UP_DETAILS = createAction('CLEAN_UP_DETAILS', () => {
    return {
        payload: {}
    }
})
export const SET_TOTAL = createAction('SET_TOTAL', (price) => {
    return {
        payload: price
    }
})
export const ADD_TO_CART = createAction('ADD_TO_CART', (product, quantity) => {
    return {
        payload: {
            product,
            quantity
        }
    }
})
export const SET_CART = createAction('SET_CART', (cart) => {
    return {
        payload: cart
    }
})
export const REMOVE_FROM_CART = createAction('REMOVE_FROM_CART', (id) => {
    return {
        payload: id
    }
})
export const ADD_ONE_CART = createAction('ADD_ONE_CART', (id) => {
    return {
        payload: id
    }
})
export const REMOVE_ONE_CART = createAction('REMOVE_ONE_CART', (id) => {
    return {
        payload: id
    }
})
export const CLEAN_CART = createAction('CLEAN_CART', () => {
    return {
        payload: []
    }
})

export const POST_USER = createAsyncThunk(
    'POST_USER', async (user) => {
        try {
            console.log(user)
            console.log(`${REACT_APP_APIURL}users/auth`)
            const response = await axios.post(`${REACT_APP_APIURL}users/auth`, user)
            if (response.data.ok) {
                localStorage.setItem('token', response.data.token)
                return {
                    ok: true,
                    userId: response.data.userId,
                    userFirstName: response.data.userFirstName,
                    tokenInitDate: new Date().getTime(),

                }
            }
            else {
                console.log("entro");
                return {
                    ok: false,
                    userId: "",
                    userFirstName: ""
                }
            }
        } catch (e) {
            // console.log(e)
            return {
                ok: false,
                userId: "",
                userFirstName: ""
            }
        }
    }
)
export const CLEAN_USER_RESPONSE = createAction('CLEAN_USER_RESPONSE', () => {
    return { payload: { ok: '' } }

})
export const CREATION_USER_LOGIN = createAsyncThunk(
    "CREATION_USER_LOGIN", async (user) => {
        try {
            const response = await axios.post(`${REACT_APP_APIURL}users/authGoogle`, user)
            console.log(response.data)
            if (response.data.ok) {
                localStorage.setItem('token', response.data.token)
                return {
                    userId: response.data.userId,
                    userFirstName: response.data.userFirstName,
                    tokenInitDate: new Date().getTime(),

                }
            }
            else {
                console.log("entro");
                return {
                    payload: {
                        token: '',
                        ok: ""
                    }
                }
            }

        } catch (error) {
            return {
                ok: false,
                msg: 'Token no válido',
                userId: '',
                userEmail: '',
                userFirstName: '',
                userLastName: '',
                userIsAdmin: false,
                userIsSuperAdmin: false,
            }
        }
    }
)
export const CREATION_USERFORM = createAsyncThunk(
    "CREATION_USERFORM", async (user) => {
        console.log(user)
        const response = await axios.post(`${REACT_APP_APIURL}users/new`, user)
        console.log(response.data)
        try {
            if (response.data.ok) {
                localStorage.setItem('token', response.data.token)
                return {
                    userId: response.data.userId,
                    userFirstName: response.data.userFirstName,
                    tokenInitDate: new Date().getTime(),

                }
            }
            else {
                console.log("entro");
                return {
                    payload: {
                        token: '',
                        ok: ""
                    }
                }
            }

        } catch (error) {
            return {
                ok: false,
                msg: 'Token no válido',
                userId: '',
                userEmail: '',
                userFirstName: '',
                userLastName: '',
                userIsAdmin: false,
                userIsSuperAdmin: false,
            }
        }
    }
)

//action qeu se dispatche cada vez que se renderiza cualquier componente
// {
//     "ok": true,
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjlhNTMwOTM5ZjdjMTgxM2Y3ZjZmODgiLCJuYW1lIjoiU29sZWRhZCIsImlhdCI6MTY1NDI4MTcxOCwiZXhwIjoxNjU0Mjg4OTE4fQ.7J-BoA2EDHMd0kU3qNWxlxZ0cI3L4BP4t6w-ReIIAh4",
//     "userId": "629a530939f7c1813f7f6f88",
//     "userFirstName": "Soledad"
// }
export const fetchConToken = (endpoint, data, method = 'GET') => {

    const url = `${REACT_APP_APIURL}${endpoint}`;
    const token = localStorage.getItem('token') || '';
    //por si regresa null que devuelva vacío
    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',

            },
            body: JSON.stringify(data)

        });
    }

}
export const CHECK_LOGIN = createAsyncThunk(
    'CHECK_LOGIN', async () => {
        try {
            const response = await fetchConToken(`users/renew`);
            const body = await response.json();
            if (body.ok) {
                localStorage.setItem('token', body.token)
                return {
                    userId: body.userId,
                    userFirstName: body.userFirstName,
                    tokenInitDate: new Date().getTime(),

                }
            }
            else {
                return {
                    payload: {
                        token: '',
                        ok: ""
                    }
                }
            }

        } catch (error) {
            return {
                ok: false,
                msg: 'Token no válido',
                userId: '',
                userEmail: '',
                userFirstName: '',
                userLastName: '',
                userIsAdmin: false,
                userIsSuperAdmin: false,
            }
        }
    }
);


export const GET_USER_CART = createAsyncThunk(
    'GET_USER_CART', async (id) => {
        try {
            const response = await fetch(`${REACT_APP_APIURL}payments/order/carrito/${id}`,
                {
                    method: 'GET',
                    headers: {
                        'x-token': localStorage.getItem('token')
                    }
                })
            const body = await response.json();
            return await body
        } catch (error) {
            console.log(error);
        }
    }
)
//*CREAR UN CARRITO DE COMPRA NI BIEN SE AGREGA UN PRODUCTO
export const CREATE_USER_CART = createAsyncThunk(
    'CREATE_USER_CART', async (data) => {
        try {
            let arr = data.cart
            let prod = data.cart.find(e => e._id === data.product._id)
            if (prod) {
                let obj = { ...prod }
                obj.quantity = prod.quantity + data.quantity
                arr = [...arr.filter(e => e._id !== data.product._id), obj]

            } else {
                let obj = { ...data.product }
                obj.quantity = data.quantity
                arr = [...data.cart, obj]
            }
            let total = arr?.reduce((a, b) => { return a + b.quantity * b.productPrice }, 0);
            const response = await fetch(`${REACT_APP_APIURL}payments/order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': data.token
                },
                body: JSON.stringify({
                    userId: data.userId,
                    orderTotal: total,
                    shippingAddressId: '',
                    cart: arr?.map(item => ({
                        _id: item._id,
                        quantity: item.quantity,
                        productPrice: item.productPrice,
                        productName: item.productName
                    })),
                })
            })
            const body = await response.json();
            return body
        }
        catch (e) {
            console.log(e);
        }
    }
)
//* ACTUALIZAR CARRITO DESDE EL PRODUCTADD, TRAE EL QUANTITY DEL PRODUCTO Y EL PRODUCTID
export const UPDATE_USER_CART = createAsyncThunk(
    'UPDATE_USER_CART', async (data) => {
        try {
            let arr = data.cart
            let prod = data.cart.find(e => e._id === data.product._id)
            if (prod) {
                let obj = { ...prod }
                obj.quantity = prod.quantity + data.quantity
                arr = [...arr.filter(e => e._id !== data.product._id), obj]
            } else {
                let obj = { ...data.product }
                obj.quantity = data.quantity
                arr = [...data.cart, obj]
            }
            let total = arr?.reduce((a, b) => { return a + b.quantity * b.productPrice }, 0);

            const response = await fetch(`${REACT_APP_APIURL}payments/order/updatecarrito`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': data.token
                },
                body: JSON.stringify({
                    userId: data.userId,
                    orderTotal: total,
                    orderId: data.orderId,
                    shippingAddressId: '',
                    cart: arr?.map(item => ({
                        _id: item._id,
                        quantity: item.quantity,
                        productPrice: item.productPrice,
                        productName: item.productName
                    })),
                })
            })
            const body = await response.json();
            return body
        }
        catch (e) {
            console.log(e);
        }
    })
//* ELIMINAR UNA UNIDAD DE UN PRODUCTO DEL CARRITO DE USUARIO
export const REMOVE_ONE_USER_CART = createAsyncThunk(
    'REMOVE_ONE_USER_CART', async (data) => {
        try {
            let arr = [...data.cart]
            if (arr.length === 1 && arr[0].quantity == 1) {
                const delResp = await fetch(`${REACT_APP_APIURL}payments/order/${data.orderId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-token': data.token
                    }
                })
                const delBody = await delResp.json();
                return delBody
            }
            let index = arr.findIndex(e => e._id === data.productId)
            if (arr[index].quantity === 1) {
                arr.splice(index, 1)
            } else {
                let obj = { ...arr[index] }
                obj.quantity = arr[index].quantity - 1
                arr[index] = obj
            }
            let total = arr?.reduce((a, b) => { return a + b.quantity * b.productPrice }, 0);
            const response = await fetch(`${REACT_APP_APIURL}payments/order/updatecarrito`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': data.token
                },
                body: JSON.stringify({
                    userId: data.userId,
                    orderTotal: arr ? total : 0,
                    orderId: data.orderId,
                    shippingAddressId: '',
                    cart: arr?.map(item => ({
                        _id: item._id,
                        quantity: item.quantity,
                        productPrice: item.productPrice,
                        productName: item.productName
                    })),
                })
            })
            const body = await response.json();
            return body
        }
        catch (e) {
            console.log(e);
        }
    })
//*AGREGAR UNA UNIDAD DE PRODUCTO AL CARRITO DE USUARIO
export const ADD_ONE_USER_CART = createAsyncThunk('ADD_ONE_USER_CART', async (data) => {
    try {
        let arr = [...data.cart]
        let index = arr.findIndex(e => e._id === data.productId)
        let obj = { ...arr[index] }
        obj.quantity = arr[index].quantity + 1
        arr[index] = obj
        let total = arr?.reduce((a, b) => { return a + b.quantity * b.productPrice }, 0);
        const response = await fetch(`${REACT_APP_APIURL}payments/order/updatecarrito`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-token': data.token
            },
            body: JSON.stringify({
                userId: data.userId,
                orderTotal: arr ? total : 0,
                orderId: data.orderId,
                shippingAddressId: '',
                cart: arr?.map(item => ({
                    _id: item._id,
                    quantity: item.quantity,
                    productPrice: item.productPrice,
                    productName: item.productName
                })),
            })
        })
        const body = await response.json();
        return body
    }
    catch (e) {
        console.log(e);
    }
})
export const DELETE_USER_CART = createAsyncThunk('DELETE_USER_CART', async (data) => {
    try {

        const response = await fetch(`${REACT_APP_APIURL}payments/order/${data.orderId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-token': data.token
            }
        })
        const res = await response.json()
        if (res.ok) {
            return {
                orderId: "",
            }
        } else {
            console.log(res)
        }
    }
    catch (e) {
        console.log(e);
    }

})
//*SACAR UN PRODUCTO COMPLETO DEL CARRITO DE USUARIO
export const DELETE_PRODUCT_USER = createAsyncThunk('DELETE_PRODUCT_USER', async (data) => {
    try {
        let arr = [...data.cart]

        if (arr.length === 1) {
            const delResp = await fetch(`${REACT_APP_APIURL}payments/order/${data.orderId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': data.token
                }
            })
            const delBody = await delResp.json();
            return delBody
        }
        let filteredArr = arr.filter(e => e._id !== data.productId)
        let total = arr?.reduce((a, b) => { return a + b.quantity * b.productPrice }, 0);
        const response = await fetch(`${REACT_APP_APIURL}payments/order/updatecarrito`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-token': data.token
            },
            body: JSON.stringify({
                userId: data.userId,
                orderTotal: filteredArr ? total : 0,
                orderId: data.orderId,
                shippingAddressId: '',
                cart: filteredArr?.map(item => ({
                    _id: item._id,
                    quantity: item.quantity,
                    productPrice: item.productPrice,
                    productName: item.productName
                })),
            })
        })
        const body = await response.json();
        return body
    }
    catch (e) {
        console.log(e);
    }
})

export const POST_USER_ADDRESS = createAsyncThunk('POST_USER_ADDRESS', async (data) => {
    try {
        let token = localStorage.getItem('token')
        const resp = await fetch(`${REACT_APP_APIURL}address`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify({
                userId: data.userId,
                addressComment: data.addressComment,
                orderId: data.orderId,
            })
        })
    }
    catch (e) {
        console.log(e);
    }
})
