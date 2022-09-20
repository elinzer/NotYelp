import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import * as likeActions from '../../store/like'
import './Like.css'


const LikeComponent = ({ business }) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const likeState = useSelector(state => state.likes)
    const likes = Object.values(likeState)
    console.log(likeState)
    const { id } = business
    const [clickedLove, setClickedLove] = useState(false)
    const [clickedOkay, setClickedOkay] = useState(false)
    const [clickedTrash, setClickedTrash] = useState(false)

    useEffect(() => {
        dispatch(likeActions.getLikes())
    }, [dispatch])

    useEffect(() => {
        setClickedLove(JSON.parse(window.localStorage.getItem('clickedLove')));
      }, []);

      useEffect(() => {
        window.localStorage.setItem('clickedLove', clickedLove);
      }, [clickedLove]);

    const handleLove = (e) => {
        e.preventDefault();

        if (clickedLove) {
            setClickedLove(!clickedLove)
            let existingLike = likes.filter(like => {
                if (like.user_id === sessionUser.id && like.business_id === id) {
                    return like;
                }
            })
            let likeId = existingLike[0].id
            dispatch(likeActions.deleteLikeById(likeId))
        } else {
            const info = {
                like: 3,
                user_id: sessionUser.id,
                business_id: id
            }

            dispatch(likeActions.createLike(info))
            setClickedLove(!clickedLove)
        }

    }

    const handleOkay = (e) => {
        e.preventDefault();

        // if (clickedLove || clickedTrash) {
        //     let existingLike = likes.filter(like => {
        //         if (like.user_id === sessionUser.id && like.business_id === id) {
        //             return like;
        //         }
        //     })
        //     let likeId = existingLike[0].id
        //     dispatch(likeActions.deleteLikeById(likeId))

        const info = {
            like: 2,
            user_id: sessionUser.id,
            business_id: id
        }

        dispatch(likeActions.createLike(info))
        setClickedOkay(true)
        // }
    }

    const handleTrash = (e) => {
        e.preventDefault();

        const info = {
            like: 1,
            user_id: sessionUser.id,
            business_id: id
        }

        dispatch(likeActions.createLike(info))
        setClickedTrash(true)
    }


    return (
        <div className="like-button-container">
            <button
                style={{ backgroundColor: clickedLove ? '#90EE90' : '' }}
                className="love-button"
                onClick={(e) => { setClickedLove(!clickedLove); handleLove(e) }}
            // disabled={clickedLove}
            >
                <i class="fa-regular fa-face-grin-hearts"></i></button>
            <button
                style={{ backgroundColor: clickedOkay ? '#F1BE48' : '' }}
                onClick={handleOkay}>
                <i class="fa-regular fa-face-meh"></i></button>
            <button
                style={{ backgroundColor: clickedTrash ? '#FF7276' : '' }}
                onClick={handleTrash}>
                <i class="fa-regular fa-face-frown"></i></button>


        </div>
    )
}

export default LikeComponent;
