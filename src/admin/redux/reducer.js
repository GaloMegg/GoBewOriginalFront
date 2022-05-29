import { createReducer } from "@reduxjs/toolkit"
import { CREATE_PRODUCT, CREATE_CATEGORY } from "./actions"

const initialState = {
    value: 0,
    product: {},
    categories: []

}
export const adminReducer = createReducer(initialState, (builder) => {
    builder.addCase(CREATE_PRODUCT, (state) => {
        return {
            ...state.product
        }
    })
    // builder.addCase(CREATE_CATEGORY, (state) => {
    //     return {
    //         ...state.categories
    //     }
    // })
})