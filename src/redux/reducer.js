import { createReducer } from "@reduxjs/toolkit"
import { GET_CATEGORIES, REMOVE_FROM_CART, GET_PRODUCTS, SET_TOTAL, SET_CART, SEARCH_PRODUCT, ADD_TO_CART, ORDER_PRODUCTS, GET_PRODUCTS_BYCATEGORY, GET_HIGHLIGHTED, GET_PRODUCT_BY_ID, CLEAN_UP_DETAILS } from "./actions"

const initialState = {
    products: [],
    productsToFilter: [],
    product: {},
    categories: [],
    cart: [],
    totalCart: 0,
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
    builder.addCase(GET_PRODUCTS_BYCATEGORY, (state, action) => {
        state.products = action.payload
        state.isFiltered = true
    })
    builder.addCase(ORDER_PRODUCTS, (state, action) => {
        state.products = action.payload
    })
    builder.addCase(CLEAN_UP_DETAILS, (state, action) => {
        state.product = action.payload
    })
    builder.addCase(SET_TOTAL, (state, action) => {
        state.totalCart = action.payload
    })
    builder.addCase(ADD_TO_CART, (state, action) => {
        let prod = state.cart.find(e => e._id === action.payload.product._id)
        if (prod) {
            prod.quantity = prod.quantity + action.payload.quantity
        } else {
            let obj = { ...action.payload.product }
            obj.quantity = action.payload.quantity
            state.cart.push(obj)
        }
    })
    builder.addCase(SET_CART, (state, action) => {
        state.cart = action.payload
    })
    builder.addCase(REMOVE_FROM_CART, (state, action) => {
        let tempCart = [...state.cart]
        let index = tempCart.findIndex(e => e._id === action.payload)
        tempCart.splice(index, 1)
        state.cart = tempCart
    })
})