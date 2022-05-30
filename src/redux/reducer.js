import { createReducer } from "@reduxjs/toolkit"
import { GET_CATEGORIES, GET_PRODUCTS, SEARCH_PRODUCT, ORDER_PRODUCTS, GET_PRODUCTS_BYCATEGORY, GET_HIGHLIGHTED, GET_PRODUCT_BY_ID, CLEAN_UP_DETAILS } from "./actions"


const initialState = {
    products: [],
    productsToFilter: [],
    product: {},
    categories: [],
    isFiltered: false,
}
export const clientReducer = createReducer(initialState, (builder) => {
    builder.addCase(GET_PRODUCT_BY_ID.fulfilled, (state, action) => {
        state.product = action.payload.productList
    })
    builder.addCase(GET_PRODUCTS.fulfilled, (state, action) => {
        state.products = action.payload.productList
        state.productsToFilter = action.payload.productList
        state.isFiltered = false
    })
    builder.addCase(SEARCH_PRODUCT.fulfilled, (state, action) => {
        state.products = action.payload
        state.isFiltered = true
    })
    builder.addCase(GET_CATEGORIES.fulfilled, (state, action) => {
        state.categories = action.payload
    })
    builder.addCase(GET_HIGHLIGHTED.fulfilled, (state, action) => {
        state.products = action.payload.productList
    })
    builder.addCase(GET_PRODUCTS_BY_CATEGORY, (state, action) => {
        state.products = action.payload
        state.isFiltered = true
    })
    builder.addCase(ORDER_PRODUCTS, (state, action) => {
        state.products = action.payload
    })
    builder.addCase(CLEAN_UP_DETAILS, (state, action) => {
        state.product = action.payload
    })
})