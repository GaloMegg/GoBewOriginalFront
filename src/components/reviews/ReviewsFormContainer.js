import React from 'react'
import ReviewForm from './ReviewForm'
import { useParams } from 'react-router-dom'
const ReviewsFormContainer = () => {
    const data = useParams()
    return (
        <div>
            <ReviewForm  {...data} />
        </div>
    )
}

export default ReviewsFormContainer