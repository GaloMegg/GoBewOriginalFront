import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_FROM_CART, SET_TOTAL, ADD_ONE_CART, REMOVE_ONE_CART } from '../../redux/actions'
const { REACT_APP_CLOUDINARY_RES } = process.env

const CardItem = ({ _id, images, quantity, productPrice, productName, totalCart, productStock }) => {
  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.clientReducer)
  const [img, setImg] = useState(0)
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('totalCart', JSON.stringify(totalCart))
  }, [cart, totalCart])

  const CarouselImagesPrev = () => {
    if (img > 0) {
      setImg(img - 1)
    }
  }
  const CarouselImagesNext = () => {
    if (img < images.length - 1) {
      setImg(img + 1)
    }
  }
  const addOneToCart = () => {
    if (quantity < productStock) dispatch(ADD_ONE_CART(_id))
    if (quantity < productStock) dispatch(SET_TOTAL(totalCart + productPrice))
  }
  const removeOneOfCart = () => {
    dispatch(REMOVE_ONE_CART(_id))
    if (totalCart > 0) dispatch(SET_TOTAL(totalCart - productPrice))
  }
  const removeFromCart = () => {
    localStorage.removeItem('cart')
    localStorage.removeItem('totalCart')
    dispatch(REMOVE_FROM_CART(_id))
    dispatch(SET_TOTAL(totalCart - productPrice * quantity))
  }
  return (
    <div >
      {images.length > 2 && <button onClick={CarouselImagesPrev}>{"<"}</button>}
      <img src={`${REACT_APP_CLOUDINARY_RES}${images[img].imageName}`} alt={images.imageAlt} />
      {images.length > 2 && <button onClick={CarouselImagesNext}>{">"}</button>}
      <p>{productName}</p>
      <p>{quantity}</p>
      <p>{productPrice}</p>
      <button onClick={removeOneOfCart}> - </button>
      <button onClick={addOneToCart}> + </button>
      <button onClick={removeFromCart}>Eliminar</button>
    </div>
  )
}

export default CardItem
