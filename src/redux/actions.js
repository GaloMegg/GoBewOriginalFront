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
        console.log(user)
        const response = await axios.post(`${REACT_APP_APIURL}users/auth`, user)
        return await response.data
    }
)
export const CLEAN_USER_RESPONSE = createAction('CLEAN_USER_RESPONSE', () => {
    return { payload: { ok: '' } }

})
export const CREATION_USER_LOGIN = createAsyncThunk (
    "CREATION_USER_LOGIN", async (user) => {
        console.log(user)
    const response = await axios.post (`${REACT_APP_APIURL}users/newGoogle`, user)
    return await response.data
    }
)
export const CREATION_USERFORM = createAsyncThunk (
    "CREATION_USERFORM", async (user) => {
        console.log(user)
    const response = await axios.post (`${REACT_APP_APIURL}users/new`, user)
    console.log(response.data)
    return await response.data
    }
)
