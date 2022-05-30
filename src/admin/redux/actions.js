// import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const { REACT_APP_APIURL } = process.env;

export const CREATE_PRODUCT = createAsyncThunk(
    "CREATE_PRODUCT", async (productInfo) => {
        try {
            const res = await axios.post(`${REACT_APP_APIURL}product/new`, productInfo);
            return res
        } catch (e) {
            console.log(e)
        }
    }
)

export const CREATE_CATEGORY = createAsyncThunk(
    "CREATE_CATEGORY", async (categ) => {
        try {
            const res = await axios.post(`${REACT_APP_APIURL}categories/new`, categ);
            return res
        } catch (e) {
            console.log(categ)
        }
    }
)

export const GET_CATEGORIES_ADMIN = createAsyncThunk(
    'GET_CATEGORIES_ADMIN', async () => {
        const response = await fetch(`${REACT_APP_APIURL}categories`)
        return await response.json()
    })

export const POST_IMAGE_ADMIN = createAsyncThunk(
    "POST_IMAGE_ADMIN", async (image) => {
        try{
            const res = await axios.post(`${REACT_APP_APIURL}images/new`,image);
            return res
        }catch (e){
            console.log(image)
        }
    }
)