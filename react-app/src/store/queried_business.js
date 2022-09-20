const GET_ALL = "queried_business/GET_ALL";
const CREATE = "queried_business/CREATE";
const UPDATE = "queried_business/UPDATE";
const DELETE = "queried_business/DELETE";

const getAll = (businesses) => ({
  type: GET_ALL,
  payload: businesses,
});

export const searchBusinesses = (name) => async (dispatch) => {
  const res = await fetch(`/api/businesses/search?name=${name}`);
  if (res.ok) {
    const businesses = await res.json();
    dispatch(getAll(businesses));
  }
  return res;
};

export default function queriedBusinessReducer(state = {}, action) {
  let newState = { ...state };
  switch (action.type) {
    case GET_ALL:
      newState = {};
      action.payload.businesses.forEach((business) => {
        newState[business.id] = business;
      });
      return newState;
    default:
      return state;
  }
}
