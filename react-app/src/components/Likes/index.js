import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as likeActions from "../../store/like";
import "./Like.css";

const LikeComponent = ({ business }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const likeState = useSelector((state) => state.likes);
  const likes = Object.values(likeState);
  const { id } = business;
  const [clickedLove, setClickedLove] = useState(false);
  const [clickedOkay, setClickedOkay] = useState(false);
  const [clickedTrash, setClickedTrash] = useState(false);

  //helper function to select 'like'
  const likeSelected = () => {
    let existingLike = likes.filter((like) => {
      if (like.user_id === sessionUser.id && like.business_id === id) {
        return like;
      }
    });
    if (existingLike.length) {
      return existingLike[0];
    }
    return null;
  };

  useEffect(() => {
    const userLike = likeSelected();
    if (!userLike) return;
    if (userLike.like === 3) {
      setClickedLove(true);
      setClickedOkay(false);
      setClickedTrash(false);
    } else if (userLike.like === 2) {
      setClickedLove(false);
      setClickedOkay(true);
      setClickedTrash(false);
    } else if (userLike.like === 1) {
      setClickedLove(false);
      setClickedOkay(false);
      setClickedTrash(true);
    }




    useEffect(() => {
        dispatch(likeActions.getLikes())
    }, [dispatch])

    useEffect(() => {
        if (userLikes().length) {
        }
        // check to see if sessionUser has a like on a business. if they do, set clickedXYZ to true
    }, []);

    useEffect(() => {
        // not sure if we need this...?
    }, []);

    const handleLove = () => {
        if (clickedLove) {
            setClickedLove(!clickedLove)
            if (likeSelected()) {
                dispatch(likeActions.deleteLikeById(likeSelected()))
            }
        } else {
            const info = {
                like: 3,
                user_id: sessionUser.id,
                business_id: id
            }

            dispatch(likeActions.createLike(info))
            setClickedLove(!clickedLove)
        }


  }, [dispatch]);

  useEffect(() => {
    // check to see if sessionUser has a like on a business. if they do, set clickedXYZ to true
  }, []);

  useEffect(() => {
    // not sure if we need this...?
  }, []);

  const handleLove = () => {
    if (clickedLove) {
      setClickedLove(!clickedLove);
      if (likeSelected()) {
        dispatch(likeActions.deleteLikeById(likeSelected().id));
      }
    } else {
      const info = {
        like: 3,
        user_id: sessionUser.id,
        business_id: id,
      };

      dispatch(likeActions.createLike(info));
      setClickedLove(!clickedLove);

    }
  };

  const handleOkay = () => {
    if (clickedOkay) {
      setClickedOkay(!clickedOkay);
      if (likeSelected()) {
        dispatch(likeActions.deleteLikeById(likeSelected().id));
      }
    } else {
      const info = {
        like: 2,
        user_id: sessionUser.id,
        business_id: id,
      };

      dispatch(likeActions.createLike(info));
      setClickedOkay(!clickedOkay);
    }
  };

  const handleTrash = () => {
    if (clickedTrash) {
      setClickedTrash(!clickedTrash);
      if (likeSelected()) {
        dispatch(likeActions.deleteLikeById(likeSelected().id));
      }
    } else {
      const info = {
        like: 1,
        user_id: sessionUser.id,
        business_id: id,
      };

      dispatch(likeActions.createLike(info));
      setClickedTrash(!clickedTrash);
    }
  };

  return (
    <div className="like-button-container">
      <button
        style={{ backgroundColor: clickedLove ? "#90EE90" : "" }}
        className="love-button"
        onClick={() => {
          setClickedLove(!clickedLove);
          handleLove();
        }}
        disabled={clickedOkay || clickedTrash}
      >
        <i class="fa-regular fa-face-grin-hearts"></i>
      </button>
      <button
        style={{ backgroundColor: clickedOkay ? "#F1BE48" : "" }}
        onClick={() => {
          setClickedOkay(!clickedOkay);
          handleOkay();
        }}
        disabled={clickedLove || clickedTrash}
      >
        <i class="fa-regular fa-face-meh"></i>
      </button>
      <button
        style={{ backgroundColor: clickedTrash ? "#FF7276" : "" }}
        onClick={() => {
          setClickedTrash(!clickedTrash);
          handleTrash();
        }}
        disabled={clickedLove || clickedOkay}
      >
        <i class="fa-regular fa-face-frown"></i>
      </button>
    </div>
  );
};

export default LikeComponent;
