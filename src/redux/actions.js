import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
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
        //payload tiene que existir para que el reducer funcione    
        payload: productsSorted
    }
})

