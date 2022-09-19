import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import * as likeActions from '../../store/like'
import './Like.css'


const LikeComponent = ({ business }) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const likeState = useSelector(state => state.likes)
    console.log(likeState)
    const { id } = business
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        dispatch(likeActions.getLikes())
    }, [dispatch])


    const handleLove = (e) => {
        e.preventDefault();

        const info = {
            like: 3,
            user_id: sessionUser.id,
            business_id: id
        }

        dispatch(likeActions.createLike(info))
        setClicked(true)
    }

    const handleOkay = (e) => {
        e.preventDefault();

        const info = {
            like: 2,
            user_id: sessionUser.id,
            business_id: id
        }

        dispatch(likeActions.createLike(info))
    }

    const handleTrash = (e) => {
        e.preventDefault();

        const info = {
            like: 1,
            user_id: sessionUser.id,
            business_id: id
        }

        dispatch(likeActions.createLike(info))
    }


    return (
        <div>
            <button
            className="love-button"
            onClick={handleLove}
            disabled={clicked}>
                    Love</button>
            <button onClick={handleOkay}>Okay</button>
            <button onClick={handleTrash}>Trash</button>


        </div>
    )
}

export default LikeComponent;
