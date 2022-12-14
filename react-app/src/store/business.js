const GET_ALL = "businesses/GET_ALL";
const CREATE = "businesses/CREATE";
const UPDATE = "businesses/UPDATE";
const DELETE = "businesses/DELETE";
const ADD_ITEM_TO_BUSINESS = "businesses/ADD_ITEM_TO_BUSINESS";

const getAll = (businesses) => ({
  type: GET_ALL,
  payload: businesses,
});

const create = (business) => ({
  type: CREATE,
  payload: business,
});

const update = (business) => ({
  type: UPDATE,
  payload: business,
});

const deleteBusiness = (businessId) => ({
  type: DELETE,
  payload: businessId,
});

export const addItemToBusinessAction = (businessId, itemId) => ({
  type: ADD_ITEM_TO_BUSINESS,
  payload: { businessId, itemId },
});

export const getBusinesses = () => async (dispatch) => {
  const res = await fetch("/api/businesses/");
  if (res.ok) {
    const businesses = await res.json();
    dispatch(getAll(businesses));
  }
  return res;
};

export const createBusiness = (business) => async (dispatch) => {
  const res = await fetch("/api/businesses/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(business),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(create(data));
    return data;
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const getBusinessByid = (businessId) => async (dispatch) => {
  const res = await fetch(`/api/businesses/${businessId}`);
  if (res.ok) {
    const business = await res.json();
    dispatch(update(business));
  }
  return res;
};

export const findBusiness = (businessId) => async (dispatch) => {
  const res = await fetch(`/api/businesses/${businessId}`);
  if (res.ok) {
    const business = await res.json();
    dispatch(update(business));
  }
};

export const editBusiness = (data, businessId) => async (dispatch) => {
  const res = await fetch(`/api/businesses/${businessId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(update(data));
    return data;
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
  return res;
};

export const deleteBusinessById = (id) => async (dispatch) => {
  const res = await fetch(`/api/businesses/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(deleteBusiness(id));
    return data;
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
  return res;
};

export default function businessesReducer(state = {}, action) {
  let newState = { ...state };
  switch (action.type) {
    case GET_ALL:
      newState = {};
      action.payload.businesses.forEach((business) => {
        newState[business.id] = business;
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
