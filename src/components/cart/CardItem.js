import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_FROM_CART, SET_TOTAL } from '../../redux/actions'
const { REACT_APP_CLOUDINARY_RES } = process.env

// {
//   "_id": "6290d9446655f25f6df9a9fa",
//   "productName": "Combo Samsung Galaxy A22 Awesome White + Auriculares Samsung Galaxy Buds Pro",
//   "productIsActive": true,
//   "productDescription": "- Pantalla: Super AMOLED 6,4 pulgadas - Resolución: HD+ (720 x 1600 píxeles) - Procesador: Octa-Core (2 GHz) - Ram: 4 GB - Almacenamiento: 128 GB + micro SD hasta 1TB - Camara trasera: 48 MP + 8 MP + 2 MP + 2 MP - Camara frontal: 13 MP - Bateria: 5000 mAh Smartwatch: Conectividad - Bluetooth Version - Bluetooth v5.0 - Perfiles Bluetooth - A2DP,AVRCP,HFP Información General - Especificación compatible con smartphones",
//   "productPrice": 132529,
//   "productStock": 25,
//   "productIsHighLight": true,
//   "productCategories": [
//       "6290d7546655f25f6df9a9e6"
//   ],
//   "productCreationDate": "2022-05-27T13:59:32.137Z",
//   "__v": 0,
//   "images": [
//       {
//           "_id": "6294084b13ff330a5c192fc7",
//           "productId": "6290d9446655f25f6df9a9fa",
//           "imageName": "/v1653868526/hyg5vaev2zd82gqskqly.jpg",
//           "imageAlt": "Combo Samsung Galaxy A22",
//           "imageOrder": 1,
//           "imageIsPrimary": true,
//           "__v": 0
//       }
//   ],
//   "categories": [
//       {
//           "_id": "6290d7546655f25f6df9a9e6",
//           "categoryName": "Celulares librerados",
//           "categoryIsActive": true,
//           "categorySupId": "62900e09d360e43f8072bb7a",
//           "__v": 0
//       }
//   ],
//   "quantity": 2
// }


const CardItem = ({ _id, images, quantity, productPrice, productName, totalCart }) => {
  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.clientReducer)
  const [img, setImg] = useState(0)
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('totalCart', JSON.stringify(totalCart))
  }, [cart, totalCart])

  const CarouselImagesPrev = (e) => {
    if (img > 0) {
      setImg(img - 1)
    }
  }
  const CarouselImagesNext = (e) => {
    if (img < images.length - 1) {
      setImg(img + 1)
    }
  }
  const addOneToCart = () => {

  }
  const removeOneOfCart = () => {

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
