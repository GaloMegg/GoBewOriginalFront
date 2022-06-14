import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHECK_LOGIN, GET_USER_CART, SET_CART, SET_TOTAL } from '../../redux/actions'
import Highlight from '../highlight/Highlight'
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
      let cartStorage = localStorage.getItem('cart')
      let totalCartStorage = localStorage.getItem('totalCart')
      if (cartStorage && totalCartStorage && totalCartStorage != "undefined") {
        let cartStorageParsed = JSON.parse(cartStorage)
        let totalCartStorageParsed = JSON.parse(totalCartStorage)
        dispatch(SET_CART(cartStorageParsed))
        dispatch(SET_TOTAL(totalCartStorageParsed))
      }
    }

  }, [userId])


  return (
    <div>
      <Highlight />
      <div style={{ display: "flex" }}>
        <Filters />
        <ProductCardContainer />
      </div>

    </div>

  )
}

export default MainContentContainer