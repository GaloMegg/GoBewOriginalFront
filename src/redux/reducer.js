import { createReducer } from "@reduxjs/toolkit"
import { ADD_VALUES, GET_CATEGORIES, GET_PRODUCTS, SEARCH_PRODUCT, ORDER_PRODUCTS, GET_PRODUCTS_BY_CATEGORY, GET_HIGHLIGHTED, GET_PRODUCT_BY_ID } from "./actions"

const initialState = {
    value: 0,
    products: [],
    productsToFilter: [],
    product: {},
    categories: []
}
export const clientReducer = createReducer(initialState, (builder) => {
    builder.addCase(ADD_VALUES, (state, action) => {
        state.value = + action.payload
    })

    builder.addCase(GET_PRODUCT_BY_ID.fulfilled, (state, action) => {
        state.product = action.payload.productList
    })

    builder.addCase(GET_PRODUCTS.fulfilled, (state, action) => {
        state.products = action.payload.productList
        state.productsToFilter = action.payload.productList

    })
    builder.addCase(SEARCH_PRODUCT.fulfilled, (state, action) => {
        state.products = action.payload
    })
    builder.addCase(GET_CATEGORIES.fulfilled, (state, action) => {
        console.log(action.payload);
        state.categories = action.payload
    })

    builder.addCase(GET_HIGHLIGHTED.fulfilled, (state, action) => {
        console.log(action.payload);
        state.products = action.payload.productList
    })
    builder.addCase(GET_PRODUCTS_BY_CATEGORY, (state, action) => {
        state.products = action.payload
    })
    builder.addCase(ORDER_PRODUCTS, (state, action) => {
        state.products = action.payload
    })
})