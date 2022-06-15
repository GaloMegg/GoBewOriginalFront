import React, { useEffect, useState } from 'react'
import ReviewForm from './ReviewForm'
import { useParams } from 'react-router-dom'
const { REACT_APP_APIURL } = process.env
const ReviewsFormContainer = () => {
    const data = useParams()
    const [orderReview, setorderReview] = useState([])
    useEffect(() => {
        fetch(`${REACT_APP_APIURL}reviews/byOrder/${data.orderId}`)
            .then(res => res.json())
            .then(data => setorderReview(data.reviews))
            .catch(err => err)
    }, [])
    console.log(orderReview)
    // [
    //     {
    //         "_id": "62a8be5420ac687d8b2e3fbf",
    //         "productId": "6290d9446655f25f6df9a9fa",
    //         "userId": "629a69731d7fbe26fa74d269",
    //         "orderId": "62a8ae5e80bbd2d838b58efb",
    //         "reviewStars": 4,
    //         "reviewComment": "asdasd",
    //         "__v": 0
    //     }
    // ]
    console.log(data);
    // {
    //     "orderId": "62a8ae5e80bbd2d838b58efb",
    //     "productId": "6290d9446655f25f6df9a9fa",
    //     "userId": "629a69731d7fbe26fa74d269"
    // }
    let exist = orderReview.find(item => item.orderId == data.orderId && item.productId == data.productId && item.userId == data.userId)

    return (
        <div>
            {
                exist ? <h1>Ya has comentado este producto</h1> : <ReviewForm orderId={data.orderId} productId={data.productId} userId={data.userId} />
            }
        </div>
    )
}

export default ReviewsFormContainer