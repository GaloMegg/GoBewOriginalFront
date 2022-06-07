import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHECK_LOGIN, GET_USER_CART, SET_CART, SET_TOTAL } from '../../redux/actions'
import Filters from './Filters'
import ProductCardContainer from './ProductCardContainer'

const MainContentContainer = () => {
  const dispatch = useDispatch()
  const { userId } = useSelector(state => state.clientReducer)
  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      dispatch(CHECK_LOGIN())
      if (userId) {
        dispatch(GET_USER_CART(userId))
        
      }
    } else {
      let cartStorage = JSON.parse(localStorage.getItem('cart'))
      let totalCartStorage = JSON.parse(localStorage.getItem('totalCart'))
      if (cartStorage && totalCartStorage) {
        SET_CART(cartStorage);
        SET_TOTAL(totalCartStorage);
      }
    }

  }, [userId])

  return (
    <div style={{ display: "flex" }}>
      <Filters />
      <ProductCardContainer />
    </div>
  )
}

export default MainContentContainer