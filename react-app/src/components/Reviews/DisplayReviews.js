import { useSelector } from 'react-redux'
import './Reviews.css'


const DisplayAllReviews = () => {

    const reviewState = useSelector(state => state.reviews)
    const reviews = Object.values(reviewState)
    console.log(reviews)

    return (
        <div className='review-container'>
            <h2>Put review cards here</h2>
            {reviews.map(review => {
                return (
                    <>
                    <div>{review.review}</div>
                    <div>{review.stars}</div>
                    </>
                )
            })}
        </div>
    )
}


export default DisplayAllReviews;
