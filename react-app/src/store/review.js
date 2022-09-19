//types
const GET_ALL = "reviews/GET_ALL";
const GET_CURRENT = "reviews/GET_CURRENT";
const CREATE = "reviews/CREATE";
const UPDATE = "reviews/UPDATE";
const DELETE = "reviews/DELETE";

//actions
const getAll = (reviews) => ({
  type: GET_ALL,
  payload: reviews,
});

const getUsersReview = (reviews) => ({
  type: GET_CURRENT,
  payload: reviews,
});

const create = (review) => ({
  type: CREATE,
  payload: review,
});

const update = (review) => ({
  type: UPDATE,
  payload: review,
});

const deleteReview = (reviewId) => ({
  type: DELETE,
  payload: reviewId,
});

//thunks
//get all
export const getReviews = () => async (dispatch) => {
  const res = await fetch("/api/reviews/");
  if (res.ok) {
    const reviews = await res.json();
    dispatch(getAll(reviews));
  }
  return res;
};

//get reviews by user
export const UserReview = () => async (dispatch) => {
  const res = await fetch(`/api/reviews/current/`);
  if (res.ok) {
    const reviews = await res.json();
    dispatch(getUsersReview(reviews));
  }
  return res;
};

//create review
export const createReview = (review) => async (dispatch) => {
  console.log("this is review", review);

  const res = await fetch("/api/reviews/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });
  if (res.ok) {
    const review = await res.json();
    dispatch(create(review));
  }
  return res;
};

//edit review
export const editReview = (review) => async (dispatch) => {
  //   review.id = 1;
  const res = await fetch(`/api/reviews/${review.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });
  if (res.ok) {
    const review = await res.json();
    dispatch(update(review));
  }
  return res;
};

//delete review
export const deleteReviewById = (id) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(deleteReview(id));
  }
  return res;
};

//reducer
export default function reviewReducer(state = {}, action) {
  let newState = { ...state };
  switch (action.type) {
    case GET_ALL:
      action.payload.reviews.forEach((review) => {
        newState[review.id] = review;
      });
      return newState;
    case GET_CURRENT:
      action.payload.reviews.forEach((review) => {
        newState[review.id] = review;
      });
      return newState;
    case CREATE:
      newState[action.payload.id] = action.payload;
      return newState;
    case UPDATE:
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE:
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}
