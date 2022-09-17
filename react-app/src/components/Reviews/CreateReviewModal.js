import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import './Reviews.css'
import * as reviewActions from '../../store/review'


const CreateReview = () => {
    // do more stuff here

    const handleSubmit = (e) => {
        e.preventDefault();
        // do more stuff here
    }


    return (
        <form onSubmit={handleSubmit} className='review-form'>
            <label>
                <input type='number'>
                </input>
            </label>
            <label className='review-body'>
                <textarea></textarea>
            </label>
            <button type='submit'>Submit Review</button>
        </form>
    )
}

export default CreateReview;
