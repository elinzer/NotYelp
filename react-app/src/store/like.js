//types
const GET_ALL = "likes/GET_ALL";
const GET_CURRENT = "likes/GET_CURRENT";
const CREATE = "likes/CREATE";
const DELETE = "likes/DELETE";

//actions
const getAll = (likes) => ({
  type: GET_ALL,
  payload: likes,
});

const getUsersLikes = (likes) => ({
  type: GET_CURRENT,
  payload: likes,
});

const create = (like) => ({
  type: CREATE,
  payload: like,
});

const deleteLike = (likeId) => ({
  type: DELETE,
  payload: likeId,
});

//thunks

//Get all
export const getLikes = () => async (dispatch) => {
  const res = await fetch("/api/likes/");
  if (res.ok) {
    const likes = await res.json();
    dispatch(getAll(likes));
  }
  return res;
};

//get likes by user
export const UserLikes = () => async (dispatch) => {
  const res = await fetch(`/api/likes/current/`);
  if (res.ok) {
    const likes = await res.json();
    dispatch(getUsersLikes(likes));
  }
  return res;
};

//create like
export const createLike = (like) => async (dispatch) => {
  console.log("this is review", like);

  const res = await fetch("/api/likes/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(like),
  });
  if (res.ok) {
    const like = await res.json();
    dispatch(create(like));
  }
  return res;
};

//delete like
export const deleteLikeById = (id) => async (dispatch) => {
  const res = await fetch(`/api/likes/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(deleteLike(id));
  }
  return res;
};

//reducers

export default function likeReducer(state = {}, action) {
  let newState = { ...state };
  switch (action.type) {
    case GET_ALL:
      action.payload.reviews.forEach((like) => {
        newState[like.id] = like;
      });
      return newState;
    case GET_CURRENT:
      action.payload.likes.forEach((like) => {
        newState[like.id] = like;
      });
      return newState;
    case CREATE:
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE:
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}
