// import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const { REACT_APP_APIURL } = process.env

export const CREATE_PRODUCT = createAsyncThunk(
    "CREATE_PRODUCT", async (productInfo) => {
        try {
            const res = await axios.post('product/new', productInfo);
            return res
        } catch (e) {
            console.log(e)
        }
    }
)

// export const CREATE_CATEGORY = createAsyncThunk(
//     "CREATE_CATEGORY", async (categ) => {
//         try {
//             const res = await axios.post(`${REACT_APP_APIURL}categories/new`, categ);
//             return res
//         } catch (e) {
//             console.log(e)
//         }
//     }
// )