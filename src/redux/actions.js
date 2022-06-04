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
        const response = await axios.post(`${REACT_APP_APIURL}users/auth`, user)
        localStorage.removeItem('token')
        localStorage.setItem('token', response.data.token)
        return await response.data
    }
)
export const CLEAN_USER_RESPONSE = createAction('CLEAN_USER_RESPONSE', () => {
    return { payload: { ok: '' } }

})
export const CREATION_USER_LOGIN = createAsyncThunk (
    "CREATION_USER_LOGIN", async (user) => {
        try {
        const response = await axios.post (`${REACT_APP_APIURL}users/authGoogle`, user)
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
export const CREATION_USERFORM = createAsyncThunk (
    "CREATION_USERFORM", async (user) => {
        console.log(user)
    const response = await axios.post (`${REACT_APP_APIURL}users/new`, user)
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
                'x-token': token
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
                console.log("entro");
                return {
                    payload: {
                        token: '',
                        ok: ""
                    }
                }
            }
            return body;

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
