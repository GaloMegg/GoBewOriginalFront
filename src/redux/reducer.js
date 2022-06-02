import { createReducer } from "@reduxjs/toolkit"
import { GET_CATEGORIES, GET_PRODUCTS, SEARCH_PRODUCT, ORDER_PRODUCTS, GET_PRODUCTS_BYCATEGORY, GET_HIGHLIGHTED, GET_PRODUCT_BY_ID, CLEAN_UP_DETAILS, REMOVE_ONE_CART, ADD_ONE_CART, CLEAN_CART, REMOVE_FROM_CART, SET_TOTAL, SET_CART, ADD_TO_CART, POST_USER, CLEAN_USER_RESPONSE } from "./actions"

const initialState = {
    products: [],
    productsToFilter: [],
    product: {},
    categories: [],
    cart: [],
    totalCart: 0,
    isFiltered: false,
    userResponse: { ok: '' },
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
    builder.addCase(ADD_ONE_CART, (state, action) => {
        let tempCart = [...state.cart]
        let index = tempCart.findIndex(e => e._id === action.payload)
        tempCart[index].quantity = tempCart[index].quantity + 1
        state.cart = tempCart
    })
    builder.addCase(REMOVE_ONE_CART, (state, action) => {
        let tempCart = [...state.cart]
        let index = tempCart.findIndex(e => e._id === action.payload)
        if (tempCart[index].quantity === 1) {
            tempCart.splice(index, 1)
        } else {
            tempCart[index].quantity--
        }
        state.cart = tempCart
    })
    builder.addCase(CLEAN_CART, (state, action) => {
        state.cart = action.payload
        state.totalCart = 0
    })
    builder.addCase(POST_USER.fulfilled, (state, action) => {
        state.userResponse = action.payload
    })
    builder.addCase(CLEAN_USER_RESPONSE, (state, action) => {
        state.userResponse = action.payload
    })
})