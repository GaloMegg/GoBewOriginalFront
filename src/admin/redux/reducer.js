// import { createReducer } from "@reduxjs/toolkit"
// <<<<<<< HEAD
// import { CREATE_PRODUCT, CREATE_CATEGORY, GET_CATEGORIES_ADMIN, POST_IMAGE_ADMIN } from "./actions"
// =======
// import { CREATE_PRODUCT, CREATE_CATEGORY, GET_CATEGORIES_ADMIN } from "./actions"
// >>>>>>> 4fa82ddc4c07747e2fa0b26576830dfde8991b1c

// const initialState = {
//     value: 0,
//     product: {},
//     categories: []

// }
// export const adminReducer = createReducer(initialState, (builder) => {
//     builder.addCase(CREATE_PRODUCT.fulfilled, (state, action) => {
//         state.product = action.payload
//     })
//     builder.addCase(CREATE_CATEGORY, (state, action) => {
//         state.categories = action.payload.data
//     })
//     builder.addCase(GET_CATEGORIES_ADMIN.fulfilled, (state, action) => {
//         state.categories = action.payload
//     })
//     builder.addCase(POST_IMAGE_ADMIN.fulfilled, (state, action)=> {
//         state.product = action.payload
//     })
// })