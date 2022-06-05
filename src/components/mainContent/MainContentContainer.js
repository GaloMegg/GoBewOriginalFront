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
    }
  }, [])

  useEffect(() => {
    if (userId) {
      dispatch(GET_USER_CART(userId))
    } else {
      SET_CART(JSON.parse(localStorage.getItem('cart')));
      SET_TOTAL(JSON.stringify(localStorage.getItem('totalCart')))
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