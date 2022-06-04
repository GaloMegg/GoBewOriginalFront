import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CHECK_LOGIN } from '../../redux/actions'
import Filters from './Filters'
import ProductCardContainer from './ProductCardContainer'

const MainContentContainer = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(CHECK_LOGIN())
  }, [])

  return (
    <div style={{ display: "flex" }}>
      <Filters />
      <ProductCardContainer />
    </div>
  )
}

export default MainContentContainer