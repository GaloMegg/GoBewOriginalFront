import { createReducer } from "@reduxjs/toolkit"
import { CREATE_PRODUCT, CREATE_CATEGORY, GET_CATEGORIES_ADMIN, POST_IMAGE_ADMIN } from "./actions"

const initialState = {
    value: 0,
    product: {},
    categories: []

}
export const adminReducer = createReducer(initialState, (builder) => {
    builder.addCase(CREATE_PRODUCT.fulfilled, (state, action) => {
        state.product = action.payload
    })
    builder.addCase(CREATE_CATEGORY, (state, action) => {
        state.categories = action.payload.data
    })
    builder.addCase(GET_CATEGORIES_ADMIN.fulfilled, (state, action) => {
        state.categories = action.payload
    })
    builder.addCase(POST_IMAGE_ADMIN.fulfilled, (state, action)=> {
        state.product = action.payload
    })
})